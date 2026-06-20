import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type VendorModel = runtime.Types.Result.DefaultSelection<Prisma.$VendorPayload>;
export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null;
    _avg: VendorAvgAggregateOutputType | null;
    _sum: VendorSumAggregateOutputType | null;
    _min: VendorMinAggregateOutputType | null;
    _max: VendorMaxAggregateOutputType | null;
};
export type VendorAvgAggregateOutputType = {
    lat: number | null;
    lng: number | null;
    rating: number | null;
    deliveryRadius: number | null;
    commissionRate: number | null;
};
export type VendorSumAggregateOutputType = {
    lat: number | null;
    lng: number | null;
    rating: number | null;
    deliveryRadius: number | null;
    commissionRate: number | null;
};
export type VendorMinAggregateOutputType = {
    userId: string | null;
    name: string | null;
    address: string | null;
    lat: number | null;
    lng: number | null;
    isOpen: boolean | null;
    rating: number | null;
    deliveryRadius: number | null;
    commissionRate: number | null;
};
export type VendorMaxAggregateOutputType = {
    userId: string | null;
    name: string | null;
    address: string | null;
    lat: number | null;
    lng: number | null;
    isOpen: boolean | null;
    rating: number | null;
    deliveryRadius: number | null;
    commissionRate: number | null;
};
export type VendorCountAggregateOutputType = {
    userId: number;
    name: number;
    address: number;
    lat: number;
    lng: number;
    isOpen: number;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    _all: number;
};
export type VendorAvgAggregateInputType = {
    lat?: true;
    lng?: true;
    rating?: true;
    deliveryRadius?: true;
    commissionRate?: true;
};
export type VendorSumAggregateInputType = {
    lat?: true;
    lng?: true;
    rating?: true;
    deliveryRadius?: true;
    commissionRate?: true;
};
export type VendorMinAggregateInputType = {
    userId?: true;
    name?: true;
    address?: true;
    lat?: true;
    lng?: true;
    isOpen?: true;
    rating?: true;
    deliveryRadius?: true;
    commissionRate?: true;
};
export type VendorMaxAggregateInputType = {
    userId?: true;
    name?: true;
    address?: true;
    lat?: true;
    lng?: true;
    isOpen?: true;
    rating?: true;
    deliveryRadius?: true;
    commissionRate?: true;
};
export type VendorCountAggregateInputType = {
    userId?: true;
    name?: true;
    address?: true;
    lat?: true;
    lng?: true;
    isOpen?: true;
    rating?: true;
    deliveryRadius?: true;
    commissionRate?: true;
    _all?: true;
};
export type VendorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VendorCountAggregateInputType;
    _avg?: VendorAvgAggregateInputType;
    _sum?: VendorSumAggregateInputType;
    _min?: VendorMinAggregateInputType;
    _max?: VendorMaxAggregateInputType;
};
export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
    [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVendor[P]> : Prisma.GetScalarType<T[P], AggregateVendor[P]>;
};
export type VendorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithAggregationInput | Prisma.VendorOrderByWithAggregationInput[];
    by: Prisma.VendorScalarFieldEnum[] | Prisma.VendorScalarFieldEnum;
    having?: Prisma.VendorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VendorCountAggregateInputType | true;
    _avg?: VendorAvgAggregateInputType;
    _sum?: VendorSumAggregateInputType;
    _min?: VendorMinAggregateInputType;
    _max?: VendorMaxAggregateInputType;
};
export type VendorGroupByOutputType = {
    userId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    _count: VendorCountAggregateOutputType | null;
    _avg: VendorAvgAggregateOutputType | null;
    _sum: VendorSumAggregateOutputType | null;
    _min: VendorMinAggregateOutputType | null;
    _max: VendorMaxAggregateOutputType | null;
};
export type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VendorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VendorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VendorGroupByOutputType[P]>;
}>>;
export type VendorWhereInput = {
    AND?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    OR?: Prisma.VendorWhereInput[];
    NOT?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    userId?: Prisma.UuidFilter<"Vendor"> | string;
    name?: Prisma.StringFilter<"Vendor"> | string;
    address?: Prisma.StringFilter<"Vendor"> | string;
    lat?: Prisma.FloatFilter<"Vendor"> | number;
    lng?: Prisma.FloatFilter<"Vendor"> | number;
    isOpen?: Prisma.BoolFilter<"Vendor"> | boolean;
    rating?: Prisma.FloatFilter<"Vendor"> | number;
    deliveryRadius?: Prisma.FloatFilter<"Vendor"> | number;
    commissionRate?: Prisma.FloatFilter<"Vendor"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    menuItems?: Prisma.MenuItemListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    carts?: Prisma.CartListRelationFilter;
};
export type VendorOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    deliveryRadius?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    menuItems?: Prisma.MenuItemOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    carts?: Prisma.CartOrderByRelationAggregateInput;
};
export type VendorWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    OR?: Prisma.VendorWhereInput[];
    NOT?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    name?: Prisma.StringFilter<"Vendor"> | string;
    address?: Prisma.StringFilter<"Vendor"> | string;
    lat?: Prisma.FloatFilter<"Vendor"> | number;
    lng?: Prisma.FloatFilter<"Vendor"> | number;
    isOpen?: Prisma.BoolFilter<"Vendor"> | boolean;
    rating?: Prisma.FloatFilter<"Vendor"> | number;
    deliveryRadius?: Prisma.FloatFilter<"Vendor"> | number;
    commissionRate?: Prisma.FloatFilter<"Vendor"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    menuItems?: Prisma.MenuItemListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    carts?: Prisma.CartListRelationFilter;
}, "userId">;
export type VendorOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    deliveryRadius?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
    _count?: Prisma.VendorCountOrderByAggregateInput;
    _avg?: Prisma.VendorAvgOrderByAggregateInput;
    _max?: Prisma.VendorMaxOrderByAggregateInput;
    _min?: Prisma.VendorMinOrderByAggregateInput;
    _sum?: Prisma.VendorSumOrderByAggregateInput;
};
export type VendorScalarWhereWithAggregatesInput = {
    AND?: Prisma.VendorScalarWhereWithAggregatesInput | Prisma.VendorScalarWhereWithAggregatesInput[];
    OR?: Prisma.VendorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VendorScalarWhereWithAggregatesInput | Prisma.VendorScalarWhereWithAggregatesInput[];
    userId?: Prisma.UuidWithAggregatesFilter<"Vendor"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Vendor"> | string;
    address?: Prisma.StringWithAggregatesFilter<"Vendor"> | string;
    lat?: Prisma.FloatWithAggregatesFilter<"Vendor"> | number;
    lng?: Prisma.FloatWithAggregatesFilter<"Vendor"> | number;
    isOpen?: Prisma.BoolWithAggregatesFilter<"Vendor"> | boolean;
    rating?: Prisma.FloatWithAggregatesFilter<"Vendor"> | number;
    deliveryRadius?: Prisma.FloatWithAggregatesFilter<"Vendor"> | number;
    commissionRate?: Prisma.FloatWithAggregatesFilter<"Vendor"> | number;
};
export type VendorCreateInput = {
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    user: Prisma.UserCreateNestedOneWithoutVendorInput;
    menuItems?: Prisma.MenuItemCreateNestedManyWithoutVendorInput;
    orders?: Prisma.OrderCreateNestedManyWithoutVendorInput;
    carts?: Prisma.CartCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateInput = {
    userId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    menuItems?: Prisma.MenuItemUncheckedCreateNestedManyWithoutVendorInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutVendorInput;
    carts?: Prisma.CartUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutVendorNestedInput;
    menuItems?: Prisma.MenuItemUpdateManyWithoutVendorNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutVendorNestedInput;
    carts?: Prisma.CartUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    menuItems?: Prisma.MenuItemUncheckedUpdateManyWithoutVendorNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutVendorNestedInput;
    carts?: Prisma.CartUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateManyInput = {
    userId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
};
export type VendorUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type VendorUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type VendorNullableScalarRelationFilter = {
    is?: Prisma.VendorWhereInput | null;
    isNot?: Prisma.VendorWhereInput | null;
};
export type VendorCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    deliveryRadius?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
};
export type VendorAvgOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    deliveryRadius?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
};
export type VendorMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    deliveryRadius?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
};
export type VendorMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    deliveryRadius?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
};
export type VendorSumOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    deliveryRadius?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
};
export type VendorScalarRelationFilter = {
    is?: Prisma.VendorWhereInput;
    isNot?: Prisma.VendorWhereInput;
};
export type VendorCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutUserInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutUserInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.VendorUpsertWithoutUserInput;
    disconnect?: Prisma.VendorWhereInput | boolean;
    delete?: Prisma.VendorWhereInput | boolean;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutUserInput, Prisma.VendorUpdateWithoutUserInput>, Prisma.VendorUncheckedUpdateWithoutUserInput>;
};
export type VendorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.VendorUpsertWithoutUserInput;
    disconnect?: Prisma.VendorWhereInput | boolean;
    delete?: Prisma.VendorWhereInput | boolean;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutUserInput, Prisma.VendorUpdateWithoutUserInput>, Prisma.VendorUncheckedUpdateWithoutUserInput>;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type VendorCreateNestedOneWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutCartsInput, Prisma.VendorUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutCartsInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneRequiredWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutCartsInput, Prisma.VendorUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutCartsInput;
    upsert?: Prisma.VendorUpsertWithoutCartsInput;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutCartsInput, Prisma.VendorUpdateWithoutCartsInput>, Prisma.VendorUncheckedUpdateWithoutCartsInput>;
};
export type VendorCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutOrdersInput, Prisma.VendorUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutOrdersInput, Prisma.VendorUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.VendorUpsertWithoutOrdersInput;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutOrdersInput, Prisma.VendorUpdateWithoutOrdersInput>, Prisma.VendorUncheckedUpdateWithoutOrdersInput>;
};
export type VendorCreateNestedOneWithoutMenuItemsInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutMenuItemsInput, Prisma.VendorUncheckedCreateWithoutMenuItemsInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutMenuItemsInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutMenuItemsInput, Prisma.VendorUncheckedCreateWithoutMenuItemsInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutMenuItemsInput;
    upsert?: Prisma.VendorUpsertWithoutMenuItemsInput;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutMenuItemsInput, Prisma.VendorUpdateWithoutMenuItemsInput>, Prisma.VendorUncheckedUpdateWithoutMenuItemsInput>;
};
export type VendorCreateWithoutUserInput = {
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    menuItems?: Prisma.MenuItemCreateNestedManyWithoutVendorInput;
    orders?: Prisma.OrderCreateNestedManyWithoutVendorInput;
    carts?: Prisma.CartCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutUserInput = {
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    menuItems?: Prisma.MenuItemUncheckedCreateNestedManyWithoutVendorInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutVendorInput;
    carts?: Prisma.CartUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutUserInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
};
export type VendorUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutUserInput, Prisma.VendorUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutUserInput, Prisma.VendorUncheckedUpdateWithoutUserInput>;
};
export type VendorUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    menuItems?: Prisma.MenuItemUpdateManyWithoutVendorNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutVendorNestedInput;
    carts?: Prisma.CartUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    menuItems?: Prisma.MenuItemUncheckedUpdateManyWithoutVendorNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutVendorNestedInput;
    carts?: Prisma.CartUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateWithoutCartsInput = {
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    user: Prisma.UserCreateNestedOneWithoutVendorInput;
    menuItems?: Prisma.MenuItemCreateNestedManyWithoutVendorInput;
    orders?: Prisma.OrderCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutCartsInput = {
    userId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    menuItems?: Prisma.MenuItemUncheckedCreateNestedManyWithoutVendorInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutCartsInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutCartsInput, Prisma.VendorUncheckedCreateWithoutCartsInput>;
};
export type VendorUpsertWithoutCartsInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutCartsInput, Prisma.VendorUncheckedUpdateWithoutCartsInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutCartsInput, Prisma.VendorUncheckedCreateWithoutCartsInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutCartsInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutCartsInput, Prisma.VendorUncheckedUpdateWithoutCartsInput>;
};
export type VendorUpdateWithoutCartsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutVendorNestedInput;
    menuItems?: Prisma.MenuItemUpdateManyWithoutVendorNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutCartsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    menuItems?: Prisma.MenuItemUncheckedUpdateManyWithoutVendorNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateWithoutOrdersInput = {
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    user: Prisma.UserCreateNestedOneWithoutVendorInput;
    menuItems?: Prisma.MenuItemCreateNestedManyWithoutVendorInput;
    carts?: Prisma.CartCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutOrdersInput = {
    userId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    menuItems?: Prisma.MenuItemUncheckedCreateNestedManyWithoutVendorInput;
    carts?: Prisma.CartUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutOrdersInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutOrdersInput, Prisma.VendorUncheckedCreateWithoutOrdersInput>;
};
export type VendorUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutOrdersInput, Prisma.VendorUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutOrdersInput, Prisma.VendorUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutOrdersInput, Prisma.VendorUncheckedUpdateWithoutOrdersInput>;
};
export type VendorUpdateWithoutOrdersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutVendorNestedInput;
    menuItems?: Prisma.MenuItemUpdateManyWithoutVendorNestedInput;
    carts?: Prisma.CartUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutOrdersInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    menuItems?: Prisma.MenuItemUncheckedUpdateManyWithoutVendorNestedInput;
    carts?: Prisma.CartUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateWithoutMenuItemsInput = {
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    user: Prisma.UserCreateNestedOneWithoutVendorInput;
    orders?: Prisma.OrderCreateNestedManyWithoutVendorInput;
    carts?: Prisma.CartCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutMenuItemsInput = {
    userId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    isOpen: boolean;
    rating: number;
    deliveryRadius: number;
    commissionRate: number;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutVendorInput;
    carts?: Prisma.CartUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutMenuItemsInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutMenuItemsInput, Prisma.VendorUncheckedCreateWithoutMenuItemsInput>;
};
export type VendorUpsertWithoutMenuItemsInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutMenuItemsInput, Prisma.VendorUncheckedUpdateWithoutMenuItemsInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutMenuItemsInput, Prisma.VendorUncheckedCreateWithoutMenuItemsInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutMenuItemsInput, Prisma.VendorUncheckedUpdateWithoutMenuItemsInput>;
};
export type VendorUpdateWithoutMenuItemsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutVendorNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutVendorNestedInput;
    carts?: Prisma.CartUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutMenuItemsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    deliveryRadius?: Prisma.FloatFieldUpdateOperationsInput | number;
    commissionRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutVendorNestedInput;
    carts?: Prisma.CartUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCountOutputType = {
    menuItems: number;
    orders: number;
    carts: number;
};
export type VendorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menuItems?: boolean | VendorCountOutputTypeCountMenuItemsArgs;
    orders?: boolean | VendorCountOutputTypeCountOrdersArgs;
    carts?: boolean | VendorCountOutputTypeCountCartsArgs;
};
export type VendorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorCountOutputTypeSelect<ExtArgs> | null;
};
export type VendorCountOutputTypeCountMenuItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemWhereInput;
};
export type VendorCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type VendorCountOutputTypeCountCartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartWhereInput;
};
export type VendorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    name?: boolean;
    address?: boolean;
    lat?: boolean;
    lng?: boolean;
    isOpen?: boolean;
    rating?: boolean;
    deliveryRadius?: boolean;
    commissionRate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    menuItems?: boolean | Prisma.Vendor$menuItemsArgs<ExtArgs>;
    orders?: boolean | Prisma.Vendor$ordersArgs<ExtArgs>;
    carts?: boolean | Prisma.Vendor$cartsArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    name?: boolean;
    address?: boolean;
    lat?: boolean;
    lng?: boolean;
    isOpen?: boolean;
    rating?: boolean;
    deliveryRadius?: boolean;
    commissionRate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    name?: boolean;
    address?: boolean;
    lat?: boolean;
    lng?: boolean;
    isOpen?: boolean;
    rating?: boolean;
    deliveryRadius?: boolean;
    commissionRate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectScalar = {
    userId?: boolean;
    name?: boolean;
    address?: boolean;
    lat?: boolean;
    lng?: boolean;
    isOpen?: boolean;
    rating?: boolean;
    deliveryRadius?: boolean;
    commissionRate?: boolean;
};
export type VendorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "name" | "address" | "lat" | "lng" | "isOpen" | "rating" | "deliveryRadius" | "commissionRate", ExtArgs["result"]["vendor"]>;
export type VendorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    menuItems?: boolean | Prisma.Vendor$menuItemsArgs<ExtArgs>;
    orders?: boolean | Prisma.Vendor$ordersArgs<ExtArgs>;
    carts?: boolean | Prisma.Vendor$cartsArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VendorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VendorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $VendorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vendor";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        menuItems: Prisma.$MenuItemPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
        carts: Prisma.$CartPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        name: string;
        address: string;
        lat: number;
        lng: number;
        isOpen: boolean;
        rating: number;
        deliveryRadius: number;
        commissionRate: number;
    }, ExtArgs["result"]["vendor"]>;
    composites: {};
};
export type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VendorPayload, S>;
export type VendorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VendorCountAggregateInputType | true;
};
export interface VendorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vendor'];
        meta: {
            name: 'Vendor';
        };
    };
    findUnique<T extends VendorFindUniqueArgs>(args: Prisma.SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VendorFindFirstArgs>(args?: Prisma.SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VendorFindManyArgs>(args?: Prisma.SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VendorCreateArgs>(args: Prisma.SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VendorCreateManyArgs>(args?: Prisma.SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VendorDeleteArgs>(args: Prisma.SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VendorUpdateArgs>(args: Prisma.SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VendorDeleteManyArgs>(args?: Prisma.SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VendorUpdateManyArgs>(args: Prisma.SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VendorUpsertArgs>(args: Prisma.SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VendorCountArgs>(args?: Prisma.Subset<T, VendorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VendorCountAggregateOutputType> : number>;
    aggregate<T extends VendorAggregateArgs>(args: Prisma.Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>;
    groupBy<T extends VendorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VendorGroupByArgs['orderBy'];
    } : {
        orderBy?: VendorGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VendorFieldRefs;
}
export interface Prisma__VendorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    menuItems<T extends Prisma.Vendor$menuItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vendor$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.Vendor$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vendor$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    carts<T extends Prisma.Vendor$cartsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vendor$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VendorFieldRefs {
    readonly userId: Prisma.FieldRef<"Vendor", 'String'>;
    readonly name: Prisma.FieldRef<"Vendor", 'String'>;
    readonly address: Prisma.FieldRef<"Vendor", 'String'>;
    readonly lat: Prisma.FieldRef<"Vendor", 'Float'>;
    readonly lng: Prisma.FieldRef<"Vendor", 'Float'>;
    readonly isOpen: Prisma.FieldRef<"Vendor", 'Boolean'>;
    readonly rating: Prisma.FieldRef<"Vendor", 'Float'>;
    readonly deliveryRadius: Prisma.FieldRef<"Vendor", 'Float'>;
    readonly commissionRate: Prisma.FieldRef<"Vendor", 'Float'>;
}
export type VendorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorCreateInput, Prisma.VendorUncheckedCreateInput>;
};
export type VendorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VendorCreateManyInput | Prisma.VendorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VendorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    data: Prisma.VendorCreateManyInput | Prisma.VendorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VendorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VendorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorUpdateInput, Prisma.VendorUncheckedUpdateInput>;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VendorUpdateManyMutationInput, Prisma.VendorUncheckedUpdateManyInput>;
    where?: Prisma.VendorWhereInput;
    limit?: number;
};
export type VendorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorUpdateManyMutationInput, Prisma.VendorUncheckedUpdateManyInput>;
    where?: Prisma.VendorWhereInput;
    limit?: number;
    include?: Prisma.VendorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VendorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateInput, Prisma.VendorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VendorUpdateInput, Prisma.VendorUncheckedUpdateInput>;
};
export type VendorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    limit?: number;
};
export type Vendor$menuItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where?: Prisma.MenuItemWhereInput;
    orderBy?: Prisma.MenuItemOrderByWithRelationInput | Prisma.MenuItemOrderByWithRelationInput[];
    cursor?: Prisma.MenuItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MenuItemScalarFieldEnum | Prisma.MenuItemScalarFieldEnum[];
};
export type Vendor$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type Vendor$cartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
    orderBy?: Prisma.CartOrderByWithRelationInput | Prisma.CartOrderByWithRelationInput[];
    cursor?: Prisma.CartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartScalarFieldEnum | Prisma.CartScalarFieldEnum[];
};
export type VendorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
};
