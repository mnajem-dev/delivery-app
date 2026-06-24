import { PrismaService } from '../../database/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(clientId: string, dto: CreateAddressDto): Promise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }>;
    findAll(clientId: string): import("../../database/generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }[]>;
    findOne(clientId: string, id: string): Promise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }>;
    update(clientId: string, id: string, dto: UpdateAddressDto): Promise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }>;
    setDefault(clientId: string, id: string): Promise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }>;
    remove(clientId: string, id: string): Promise<void>;
    private assertOwnership;
}
