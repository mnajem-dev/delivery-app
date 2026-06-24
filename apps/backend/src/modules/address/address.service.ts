import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(clientId: string, dto: CreateAddressDto) {
    const isFirstAddress = (await this.prisma.address.count({ where: { clientId } })) === 0;
    const makeDefault = dto.isDefault ?? isFirstAddress;

    return this.prisma.$transaction(async (tx) => {
      if (makeDefault) {
        await tx.address.updateMany({
          where: { clientId },
          data: { isDefault: false },
        });
      }

      return tx.address.create({
        data: {
          clientId,
          label: dto.label,
          fullAddress: dto.fullAddress,
          lat: dto.lat,
          lng: dto.lng,
          isDefault: makeDefault,
        },
      });
    });
  }

  findAll(clientId: string) {
    return this.prisma.address.findMany({
      where: { clientId },
      orderBy: [{ isDefault: 'desc' }, { id: 'asc' }],
    });
  }

  async findOne(clientId: string, id: string) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    this.assertOwnership(address, clientId);
    return address;
  }

  async update(clientId: string, id: string, dto: UpdateAddressDto) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    this.assertOwnership(address, clientId);

    return this.prisma.address.update({
      where: { id },
      data: dto,
    });
  }

  async setDefault(clientId: string, id: string) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    this.assertOwnership(address, clientId);

    return this.prisma.$transaction(async (tx) => {
      await tx.address.updateMany({
        where: { clientId },
        data: { isDefault: false },
      });
      return tx.address.update({
        where: { id },
        data: { isDefault: true },
      });
    });
  }

  async remove(clientId: string, id: string) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    this.assertOwnership(address, clientId);

    await this.prisma.address.delete({ where: { id } });
  }

  private assertOwnership(
    address: { clientId: string } | null,
    clientId: string,
  ): asserts address is { clientId: string } {
    if (!address) throw new NotFoundException('Address not found');
    if (address.clientId !== clientId) throw new ForbiddenException('Access denied');
  }
}
