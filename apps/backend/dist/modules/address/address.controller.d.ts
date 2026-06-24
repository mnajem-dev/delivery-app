import { AuthenticatedUser } from '../identity/interfaces/jwt-payload.interface';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(user: AuthenticatedUser, dto: CreateAddressDto): Promise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }>;
    findAll(user: AuthenticatedUser): import("../../database/generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }[]>;
    findOne(user: AuthenticatedUser, id: string): Promise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }>;
    update(user: AuthenticatedUser, id: string, dto: UpdateAddressDto): Promise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }>;
    setDefault(user: AuthenticatedUser, id: string): Promise<{
        id: string;
        lat: number;
        lng: number;
        clientId: string;
        label: string;
        fullAddress: string;
        isDefault: boolean;
    }>;
    remove(user: AuthenticatedUser, id: string): Promise<void>;
}
