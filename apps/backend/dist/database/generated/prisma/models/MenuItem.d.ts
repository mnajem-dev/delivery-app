import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MenuItemModel = runtime.Types.Result.DefaultSelection<Prisma.$MenuItemPayload>;
export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null;
    _avg: MenuItemAvgAggregateOutputType | null;
    _sum: MenuItemSumAggregateOutputType | null;
    _min: MenuItemMinAggregateOutputType | null;
    _max: MenuItemMaxAggregateOutputType | null;
};
export type MenuItemAvgAggregateOutputType = {
    priceMinor: number | null;
};
export type MenuItemSumAggregateOutputType = {
    priceMinor: number | null;
};
export type MenuItemMinAggregateOutputType = {
    id: string | null;
    vendorId: string | null;
    name: string | null;
    priceMinor: number | null;
    priceCurrency: string | null;
    category: string | null;
    imageUrl: string | null;
    isAvailable: boolean | null;
};
export type MenuItemMaxAggregateOutputType = {
    id: string | null;
    vendorId: string | null;
    name: string | null;
    priceMinor: number | null;
    priceCurrency: string | null;
    category: string | null;
    imageUrl: string | null;
    isAvailable: boolean | null;
};
export type MenuItemCountAggregateOutputType = {
    id: number;
    vendorId: number;
    name: number;
    priceMinor: number;
    priceCurrency: number;
    category: number;
    imageUrl: number;
    isAvailable: number;
    options: number;
    _all: number;
};
export type MenuItemAvgAggregateInputType = {
    priceMinor?: true;
};
export type MenuItemSumAggregateInputType = {
    priceMinor?: true;
};
export type MenuItemMinAggregateInputType = {
    id?: true;
    vendorId?: true;
    name?: true;
    priceMinor?: true;
    priceCurrency?: true;
    category?: true;
    imageUrl?: true;
    isAvailable?: true;
};
export type MenuItemMaxAggregateInputType = {
    id?: true;
    vendorId?: true;
    name?: true;
    priceMinor?: true;
    priceCurrency?: true;
    category?: true;
    imageUrl?: true;
    isAvailable?: true;
};
export type MenuItemCountAggregateInputType = {
    id?: true;
    vendorId?: true;
    name?: true;
    priceMinor?: true;
    priceCurrency?: true;
    category?: true;
    imageUrl?: true;
    isAvailable?: true;
    options?: true;
    _all?: true;
};
export type MenuItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemWhereInput;
    orderBy?: Prisma.MenuItemOrderByWithRelationInput | Prisma.MenuItemOrderByWithRelationInput[];
    cursor?: Prisma.MenuItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MenuItemCountAggregateInputType;
    _avg?: MenuItemAvgAggregateInputType;
    _sum?: MenuItemSumAggregateInputType;
    _min?: MenuItemMinAggregateInputType;
    _max?: MenuItemMaxAggregateInputType;
};
export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
    [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenuItem[P]> : Prisma.GetScalarType<T[P], AggregateMenuItem[P]>;
};
export type MenuItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemWhereInput;
    orderBy?: Prisma.MenuItemOrderByWithAggregationInput | Prisma.MenuItemOrderByWithAggregationInput[];
    by: Prisma.MenuItemScalarFieldEnum[] | Prisma.MenuItemScalarFieldEnum;
    having?: Prisma.MenuItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenuItemCountAggregateInputType | true;
    _avg?: MenuItemAvgAggregateInputType;
    _sum?: MenuItemSumAggregateInputType;
    _min?: MenuItemMinAggregateInputType;
    _max?: MenuItemMaxAggregateInputType;
};
export type MenuItemGroupByOutputType = {
    id: string;
    vendorId: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl: string | null;
    isAvailable: boolean;
    options: runtime.JsonValue;
    _count: MenuItemCountAggregateOutputType | null;
    _avg: MenuItemAvgAggregateOutputType | null;
    _sum: MenuItemSumAggregateOutputType | null;
    _min: MenuItemMinAggregateOutputType | null;
    _max: MenuItemMaxAggregateOutputType | null;
};
export type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MenuItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MenuItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MenuItemGroupByOutputType[P]>;
}>>;
export type MenuItemWhereInput = {
    AND?: Prisma.MenuItemWhereInput | Prisma.MenuItemWhereInput[];
    OR?: Prisma.MenuItemWhereInput[];
    NOT?: Prisma.MenuItemWhereInput | Prisma.MenuItemWhereInput[];
    id?: Prisma.UuidFilter<"MenuItem"> | string;
    vendorId?: Prisma.UuidFilter<"MenuItem"> | string;
    name?: Prisma.StringFilter<"MenuItem"> | string;
    priceMinor?: Prisma.IntFilter<"MenuItem"> | number;
    priceCurrency?: Prisma.StringFilter<"MenuItem"> | string;
    category?: Prisma.StringFilter<"MenuItem"> | string;
    imageUrl?: Prisma.StringNullableFilter<"MenuItem"> | string | null;
    isAvailable?: Prisma.BoolFilter<"MenuItem"> | boolean;
    options?: Prisma.JsonFilter<"MenuItem">;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
    cartItems?: Prisma.CartItemListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
};
export type MenuItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    priceMinor?: Prisma.SortOrder;
    priceCurrency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    vendor?: Prisma.VendorOrderByWithRelationInput;
    cartItems?: Prisma.CartItemOrderByRelationAggregateInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MenuItemWhereInput | Prisma.MenuItemWhereInput[];
    OR?: Prisma.MenuItemWhereInput[];
    NOT?: Prisma.MenuItemWhereInput | Prisma.MenuItemWhereInput[];
    vendorId?: Prisma.UuidFilter<"MenuItem"> | string;
    name?: Prisma.StringFilter<"MenuItem"> | string;
    priceMinor?: Prisma.IntFilter<"MenuItem"> | number;
    priceCurrency?: Prisma.StringFilter<"MenuItem"> | string;
    category?: Prisma.StringFilter<"MenuItem"> | string;
    imageUrl?: Prisma.StringNullableFilter<"MenuItem"> | string | null;
    isAvailable?: Prisma.BoolFilter<"MenuItem"> | boolean;
    options?: Prisma.JsonFilter<"MenuItem">;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
    cartItems?: Prisma.CartItemListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
}, "id">;
export type MenuItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    priceMinor?: Prisma.SortOrder;
    priceCurrency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    _count?: Prisma.MenuItemCountOrderByAggregateInput;
    _avg?: Prisma.MenuItemAvgOrderByAggregateInput;
    _max?: Prisma.MenuItemMaxOrderByAggregateInput;
    _min?: Prisma.MenuItemMinOrderByAggregateInput;
    _sum?: Prisma.MenuItemSumOrderByAggregateInput;
};
export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.MenuItemScalarWhereWithAggregatesInput | Prisma.MenuItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.MenuItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MenuItemScalarWhereWithAggregatesInput | Prisma.MenuItemScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MenuItem"> | string;
    vendorId?: Prisma.UuidWithAggregatesFilter<"MenuItem"> | string;
    name?: Prisma.StringWithAggregatesFilter<"MenuItem"> | string;
    priceMinor?: Prisma.IntWithAggregatesFilter<"MenuItem"> | number;
    priceCurrency?: Prisma.StringWithAggregatesFilter<"MenuItem"> | string;
    category?: Prisma.StringWithAggregatesFilter<"MenuItem"> | string;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"MenuItem"> | string | null;
    isAvailable?: Prisma.BoolWithAggregatesFilter<"MenuItem"> | boolean;
    options?: Prisma.JsonWithAggregatesFilter<"MenuItem">;
};
export type MenuItemCreateInput = {
    id?: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    vendor: Prisma.VendorCreateNestedOneWithoutMenuItemsInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutMenuItemInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUncheckedCreateInput = {
    id?: string;
    vendorId: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutMenuItemInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutMenuItemsNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutMenuItemNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutMenuItemNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemCreateManyInput = {
    id?: string;
    vendorId: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type MenuItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type MenuItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type MenuItemListRelationFilter = {
    every?: Prisma.MenuItemWhereInput;
    some?: Prisma.MenuItemWhereInput;
    none?: Prisma.MenuItemWhereInput;
};
export type MenuItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MenuItemScalarRelationFilter = {
    is?: Prisma.MenuItemWhereInput;
    isNot?: Prisma.MenuItemWhereInput;
};
export type MenuItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    priceMinor?: Prisma.SortOrder;
    priceCurrency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
};
export type MenuItemAvgOrderByAggregateInput = {
    priceMinor?: Prisma.SortOrder;
};
export type MenuItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    priceMinor?: Prisma.SortOrder;
    priceCurrency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
};
export type MenuItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    priceMinor?: Prisma.SortOrder;
    priceCurrency?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
};
export type MenuItemSumOrderByAggregateInput = {
    priceMinor?: Prisma.SortOrder;
};
export type MenuItemCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutVendorInput, Prisma.MenuItemUncheckedCreateWithoutVendorInput> | Prisma.MenuItemCreateWithoutVendorInput[] | Prisma.MenuItemUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutVendorInput | Prisma.MenuItemCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.MenuItemCreateManyVendorInputEnvelope;
    connect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
};
export type MenuItemUncheckedCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutVendorInput, Prisma.MenuItemUncheckedCreateWithoutVendorInput> | Prisma.MenuItemCreateWithoutVendorInput[] | Prisma.MenuItemUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutVendorInput | Prisma.MenuItemCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.MenuItemCreateManyVendorInputEnvelope;
    connect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
};
export type MenuItemUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutVendorInput, Prisma.MenuItemUncheckedCreateWithoutVendorInput> | Prisma.MenuItemCreateWithoutVendorInput[] | Prisma.MenuItemUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutVendorInput | Prisma.MenuItemCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.MenuItemUpsertWithWhereUniqueWithoutVendorInput | Prisma.MenuItemUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.MenuItemCreateManyVendorInputEnvelope;
    set?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    disconnect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    delete?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    connect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    update?: Prisma.MenuItemUpdateWithWhereUniqueWithoutVendorInput | Prisma.MenuItemUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.MenuItemUpdateManyWithWhereWithoutVendorInput | Prisma.MenuItemUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.MenuItemScalarWhereInput | Prisma.MenuItemScalarWhereInput[];
};
export type MenuItemUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutVendorInput, Prisma.MenuItemUncheckedCreateWithoutVendorInput> | Prisma.MenuItemCreateWithoutVendorInput[] | Prisma.MenuItemUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutVendorInput | Prisma.MenuItemCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.MenuItemUpsertWithWhereUniqueWithoutVendorInput | Prisma.MenuItemUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.MenuItemCreateManyVendorInputEnvelope;
    set?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    disconnect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    delete?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    connect?: Prisma.MenuItemWhereUniqueInput | Prisma.MenuItemWhereUniqueInput[];
    update?: Prisma.MenuItemUpdateWithWhereUniqueWithoutVendorInput | Prisma.MenuItemUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.MenuItemUpdateManyWithWhereWithoutVendorInput | Prisma.MenuItemUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.MenuItemScalarWhereInput | Prisma.MenuItemScalarWhereInput[];
};
export type MenuItemCreateNestedOneWithoutCartItemsInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutCartItemsInput, Prisma.MenuItemUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutCartItemsInput;
    connect?: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutCartItemsInput, Prisma.MenuItemUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutCartItemsInput;
    upsert?: Prisma.MenuItemUpsertWithoutCartItemsInput;
    connect?: Prisma.MenuItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuItemUpdateToOneWithWhereWithoutCartItemsInput, Prisma.MenuItemUpdateWithoutCartItemsInput>, Prisma.MenuItemUncheckedUpdateWithoutCartItemsInput>;
};
export type MenuItemCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutOrderItemsInput, Prisma.MenuItemUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MenuItemCreateWithoutOrderItemsInput, Prisma.MenuItemUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.MenuItemCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.MenuItemUpsertWithoutOrderItemsInput;
    connect?: Prisma.MenuItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MenuItemUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.MenuItemUpdateWithoutOrderItemsInput>, Prisma.MenuItemUncheckedUpdateWithoutOrderItemsInput>;
};
export type MenuItemCreateWithoutVendorInput = {
    id?: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutMenuItemInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUncheckedCreateWithoutVendorInput = {
    id?: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutMenuItemInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemCreateOrConnectWithoutVendorInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutVendorInput, Prisma.MenuItemUncheckedCreateWithoutVendorInput>;
};
export type MenuItemCreateManyVendorInputEnvelope = {
    data: Prisma.MenuItemCreateManyVendorInput | Prisma.MenuItemCreateManyVendorInput[];
    skipDuplicates?: boolean;
};
export type MenuItemUpsertWithWhereUniqueWithoutVendorInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.MenuItemUpdateWithoutVendorInput, Prisma.MenuItemUncheckedUpdateWithoutVendorInput>;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutVendorInput, Prisma.MenuItemUncheckedCreateWithoutVendorInput>;
};
export type MenuItemUpdateWithWhereUniqueWithoutVendorInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.MenuItemUpdateWithoutVendorInput, Prisma.MenuItemUncheckedUpdateWithoutVendorInput>;
};
export type MenuItemUpdateManyWithWhereWithoutVendorInput = {
    where: Prisma.MenuItemScalarWhereInput;
    data: Prisma.XOR<Prisma.MenuItemUpdateManyMutationInput, Prisma.MenuItemUncheckedUpdateManyWithoutVendorInput>;
};
export type MenuItemScalarWhereInput = {
    AND?: Prisma.MenuItemScalarWhereInput | Prisma.MenuItemScalarWhereInput[];
    OR?: Prisma.MenuItemScalarWhereInput[];
    NOT?: Prisma.MenuItemScalarWhereInput | Prisma.MenuItemScalarWhereInput[];
    id?: Prisma.UuidFilter<"MenuItem"> | string;
    vendorId?: Prisma.UuidFilter<"MenuItem"> | string;
    name?: Prisma.StringFilter<"MenuItem"> | string;
    priceMinor?: Prisma.IntFilter<"MenuItem"> | number;
    priceCurrency?: Prisma.StringFilter<"MenuItem"> | string;
    category?: Prisma.StringFilter<"MenuItem"> | string;
    imageUrl?: Prisma.StringNullableFilter<"MenuItem"> | string | null;
    isAvailable?: Prisma.BoolFilter<"MenuItem"> | boolean;
    options?: Prisma.JsonFilter<"MenuItem">;
};
export type MenuItemCreateWithoutCartItemsInput = {
    id?: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    vendor: Prisma.VendorCreateNestedOneWithoutMenuItemsInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUncheckedCreateWithoutCartItemsInput = {
    id?: string;
    vendorId: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemCreateOrConnectWithoutCartItemsInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutCartItemsInput, Prisma.MenuItemUncheckedCreateWithoutCartItemsInput>;
};
export type MenuItemUpsertWithoutCartItemsInput = {
    update: Prisma.XOR<Prisma.MenuItemUpdateWithoutCartItemsInput, Prisma.MenuItemUncheckedUpdateWithoutCartItemsInput>;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutCartItemsInput, Prisma.MenuItemUncheckedCreateWithoutCartItemsInput>;
    where?: Prisma.MenuItemWhereInput;
};
export type MenuItemUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: Prisma.MenuItemWhereInput;
    data: Prisma.XOR<Prisma.MenuItemUpdateWithoutCartItemsInput, Prisma.MenuItemUncheckedUpdateWithoutCartItemsInput>;
};
export type MenuItemUpdateWithoutCartItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutMenuItemsNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateWithoutCartItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemCreateWithoutOrderItemsInput = {
    id?: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    vendor: Prisma.VendorCreateNestedOneWithoutMenuItemsInput;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    vendorId: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutMenuItemInput;
};
export type MenuItemCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.MenuItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutOrderItemsInput, Prisma.MenuItemUncheckedCreateWithoutOrderItemsInput>;
};
export type MenuItemUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.MenuItemUpdateWithoutOrderItemsInput, Prisma.MenuItemUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.MenuItemCreateWithoutOrderItemsInput, Prisma.MenuItemUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.MenuItemWhereInput;
};
export type MenuItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.MenuItemWhereInput;
    data: Prisma.XOR<Prisma.MenuItemUpdateWithoutOrderItemsInput, Prisma.MenuItemUncheckedUpdateWithoutOrderItemsInput>;
};
export type MenuItemUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutMenuItemsNestedInput;
    cartItems?: Prisma.CartItemUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemCreateManyVendorInput = {
    id?: string;
    name: string;
    priceMinor: number;
    priceCurrency: string;
    category: string;
    imageUrl?: string | null;
    isAvailable: boolean;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type MenuItemUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cartItems?: Prisma.CartItemUpdateManyWithoutMenuItemNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutMenuItemNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput;
};
export type MenuItemUncheckedUpdateManyWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    priceMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type MenuItemCountOutputType = {
    cartItems: number;
    orderItems: number;
};
export type MenuItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cartItems?: boolean | MenuItemCountOutputTypeCountCartItemsArgs;
    orderItems?: boolean | MenuItemCountOutputTypeCountOrderItemsArgs;
};
export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemCountOutputTypeSelect<ExtArgs> | null;
};
export type MenuItemCountOutputTypeCountCartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
};
export type MenuItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type MenuItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorId?: boolean;
    name?: boolean;
    priceMinor?: boolean;
    priceCurrency?: boolean;
    category?: boolean;
    imageUrl?: boolean;
    isAvailable?: boolean;
    options?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    cartItems?: boolean | Prisma.MenuItem$cartItemsArgs<ExtArgs>;
    orderItems?: boolean | Prisma.MenuItem$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItem"]>;
export type MenuItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorId?: boolean;
    name?: boolean;
    priceMinor?: boolean;
    priceCurrency?: boolean;
    category?: boolean;
    imageUrl?: boolean;
    isAvailable?: boolean;
    options?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItem"]>;
export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorId?: boolean;
    name?: boolean;
    priceMinor?: boolean;
    priceCurrency?: boolean;
    category?: boolean;
    imageUrl?: boolean;
    isAvailable?: boolean;
    options?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menuItem"]>;
export type MenuItemSelectScalar = {
    id?: boolean;
    vendorId?: boolean;
    name?: boolean;
    priceMinor?: boolean;
    priceCurrency?: boolean;
    category?: boolean;
    imageUrl?: boolean;
    isAvailable?: boolean;
    options?: boolean;
};
export type MenuItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "vendorId" | "name" | "priceMinor" | "priceCurrency" | "category" | "imageUrl" | "isAvailable" | "options", ExtArgs["result"]["menuItem"]>;
export type MenuItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    cartItems?: boolean | Prisma.MenuItem$cartItemsArgs<ExtArgs>;
    orderItems?: boolean | Prisma.MenuItem$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.MenuItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
};
export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
};
export type $MenuItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MenuItem";
    objects: {
        vendor: Prisma.$VendorPayload<ExtArgs>;
        cartItems: Prisma.$CartItemPayload<ExtArgs>[];
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        vendorId: string;
        name: string;
        priceMinor: number;
        priceCurrency: string;
        category: string;
        imageUrl: string | null;
        isAvailable: boolean;
        options: runtime.JsonValue;
    }, ExtArgs["result"]["menuItem"]>;
    composites: {};
};
export type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MenuItemPayload, S>;
export type MenuItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MenuItemCountAggregateInputType | true;
};
export interface MenuItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'];
        meta: {
            name: 'MenuItem';
        };
    };
    findUnique<T extends MenuItemFindUniqueArgs>(args: Prisma.SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MenuItemFindFirstArgs>(args?: Prisma.SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MenuItemFindManyArgs>(args?: Prisma.SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MenuItemCreateArgs>(args: Prisma.SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MenuItemCreateManyArgs>(args?: Prisma.SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MenuItemDeleteArgs>(args: Prisma.SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MenuItemUpdateArgs>(args: Prisma.SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MenuItemUpdateManyArgs>(args: Prisma.SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MenuItemUpsertArgs>(args: Prisma.SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma.Prisma__MenuItemClient<runtime.Types.Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MenuItemCountArgs>(args?: Prisma.Subset<T, MenuItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MenuItemCountAggregateOutputType> : number>;
    aggregate<T extends MenuItemAggregateArgs>(args: Prisma.Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>;
    groupBy<T extends MenuItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MenuItemGroupByArgs['orderBy'];
    } : {
        orderBy?: MenuItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MenuItemFieldRefs;
}
export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vendor<T extends Prisma.VendorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cartItems<T extends Prisma.MenuItem$cartItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuItem$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.MenuItem$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MenuItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MenuItemFieldRefs {
    readonly id: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly vendorId: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly name: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly priceMinor: Prisma.FieldRef<"MenuItem", 'Int'>;
    readonly priceCurrency: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly category: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"MenuItem", 'String'>;
    readonly isAvailable: Prisma.FieldRef<"MenuItem", 'Boolean'>;
    readonly options: Prisma.FieldRef<"MenuItem", 'Json'>;
}
export type MenuItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenuItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenuItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MenuItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuItemCreateInput, Prisma.MenuItemUncheckedCreateInput>;
};
export type MenuItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MenuItemCreateManyInput | Prisma.MenuItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MenuItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    data: Prisma.MenuItemCreateManyInput | Prisma.MenuItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MenuItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MenuItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuItemUpdateInput, Prisma.MenuItemUncheckedUpdateInput>;
    where: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MenuItemUpdateManyMutationInput, Prisma.MenuItemUncheckedUpdateManyInput>;
    where?: Prisma.MenuItemWhereInput;
    limit?: number;
};
export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MenuItemUpdateManyMutationInput, Prisma.MenuItemUncheckedUpdateManyInput>;
    where?: Prisma.MenuItemWhereInput;
    limit?: number;
    include?: Prisma.MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MenuItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where: Prisma.MenuItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.MenuItemCreateInput, Prisma.MenuItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MenuItemUpdateInput, Prisma.MenuItemUncheckedUpdateInput>;
};
export type MenuItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
    where: Prisma.MenuItemWhereUniqueInput;
};
export type MenuItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MenuItemWhereInput;
    limit?: number;
};
export type MenuItem$cartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where?: Prisma.CartItemWhereInput;
    orderBy?: Prisma.CartItemOrderByWithRelationInput | Prisma.CartItemOrderByWithRelationInput[];
    cursor?: Prisma.CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartItemScalarFieldEnum | Prisma.CartItemScalarFieldEnum[];
};
export type MenuItem$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type MenuItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MenuItemSelect<ExtArgs> | null;
    omit?: Prisma.MenuItemOmit<ExtArgs> | null;
    include?: Prisma.MenuItemInclude<ExtArgs> | null;
};
