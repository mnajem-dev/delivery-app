import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ClientModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientPayload>;
export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type ClientMinAggregateOutputType = {
    userId: string | null;
};
export type ClientMaxAggregateOutputType = {
    userId: string | null;
};
export type ClientCountAggregateOutputType = {
    userId: number;
    _all: number;
};
export type ClientMinAggregateInputType = {
    userId?: true;
};
export type ClientMaxAggregateInputType = {
    userId?: true;
};
export type ClientCountAggregateInputType = {
    userId?: true;
    _all?: true;
};
export type ClientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientCountAggregateInputType;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClient[P]> : Prisma.GetScalarType<T[P], AggregateClient[P]>;
};
export type ClientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithAggregationInput | Prisma.ClientOrderByWithAggregationInput[];
    by: Prisma.ClientScalarFieldEnum[] | Prisma.ClientScalarFieldEnum;
    having?: Prisma.ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type ClientGroupByOutputType = {
    userId: string;
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]>;
}>>;
export type ClientWhereInput = {
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    userId?: Prisma.UuidFilter<"Client"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    addresses?: Prisma.AddressListRelationFilter;
    cart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
    ratings?: Prisma.RatingListRelationFilter;
};
export type ClientOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    addresses?: Prisma.AddressOrderByRelationAggregateInput;
    cart?: Prisma.CartOrderByWithRelationInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    ratings?: Prisma.RatingOrderByRelationAggregateInput;
};
export type ClientWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    addresses?: Prisma.AddressListRelationFilter;
    cart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
    ratings?: Prisma.RatingListRelationFilter;
}, "userId">;
export type ClientOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    _count?: Prisma.ClientCountOrderByAggregateInput;
    _max?: Prisma.ClientMaxOrderByAggregateInput;
    _min?: Prisma.ClientMinOrderByAggregateInput;
};
export type ClientScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    userId?: Prisma.UuidWithAggregatesFilter<"Client"> | string;
};
export type ClientCreateInput = {
    user: Prisma.UserCreateNestedOneWithoutClientInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutClientInput;
    cart?: Prisma.CartCreateNestedOneWithoutClientInput;
    orders?: Prisma.OrderCreateNestedManyWithoutClientInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateInput = {
    userId: string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutClientInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutClientInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutClientInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientUpdateInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutClientNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutClientNestedInput;
    cart?: Prisma.CartUpdateOneWithoutClientNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutClientNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutClientNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutClientNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutClientNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateManyInput = {
    userId: string;
};
export type ClientUpdateManyMutationInput = {};
export type ClientUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClientNullableScalarRelationFilter = {
    is?: Prisma.ClientWhereInput | null;
    isNot?: Prisma.ClientWhereInput | null;
};
export type ClientCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type ClientMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type ClientMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type ClientScalarRelationFilter = {
    is?: Prisma.ClientWhereInput;
    isNot?: Prisma.ClientWhereInput;
};
export type ClientCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutUserInput, Prisma.ClientUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutUserInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutUserInput, Prisma.ClientUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutUserInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutUserInput, Prisma.ClientUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ClientUpsertWithoutUserInput;
    disconnect?: Prisma.ClientWhereInput | boolean;
    delete?: Prisma.ClientWhereInput | boolean;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutUserInput, Prisma.ClientUpdateWithoutUserInput>, Prisma.ClientUncheckedUpdateWithoutUserInput>;
};
export type ClientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutUserInput, Prisma.ClientUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ClientUpsertWithoutUserInput;
    disconnect?: Prisma.ClientWhereInput | boolean;
    delete?: Prisma.ClientWhereInput | boolean;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutUserInput, Prisma.ClientUpdateWithoutUserInput>, Prisma.ClientUncheckedUpdateWithoutUserInput>;
};
export type ClientCreateNestedOneWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAddressesInput, Prisma.ClientUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAddressesInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutAddressesInput, Prisma.ClientUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutAddressesInput;
    upsert?: Prisma.ClientUpsertWithoutAddressesInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutAddressesInput, Prisma.ClientUpdateWithoutAddressesInput>, Prisma.ClientUncheckedUpdateWithoutAddressesInput>;
};
export type ClientCreateNestedOneWithoutCartInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCartInput, Prisma.ClientUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCartInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutCartNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCartInput, Prisma.ClientUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCartInput;
    upsert?: Prisma.ClientUpsertWithoutCartInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutCartInput, Prisma.ClientUpdateWithoutCartInput>, Prisma.ClientUncheckedUpdateWithoutCartInput>;
};
export type ClientCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutOrdersInput, Prisma.ClientUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutOrdersInput, Prisma.ClientUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.ClientUpsertWithoutOrdersInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutOrdersInput, Prisma.ClientUpdateWithoutOrdersInput>, Prisma.ClientUncheckedUpdateWithoutOrdersInput>;
};
export type ClientCreateNestedOneWithoutRatingsInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutRatingsInput, Prisma.ClientUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutRatingsInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutRatingsInput, Prisma.ClientUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutRatingsInput;
    upsert?: Prisma.ClientUpsertWithoutRatingsInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutRatingsInput, Prisma.ClientUpdateWithoutRatingsInput>, Prisma.ClientUncheckedUpdateWithoutRatingsInput>;
};
export type ClientCreateWithoutUserInput = {
    addresses?: Prisma.AddressCreateNestedManyWithoutClientInput;
    cart?: Prisma.CartCreateNestedOneWithoutClientInput;
    orders?: Prisma.OrderCreateNestedManyWithoutClientInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutUserInput = {
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutClientInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutClientInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutClientInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutUserInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutUserInput, Prisma.ClientUncheckedCreateWithoutUserInput>;
};
export type ClientUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutUserInput, Prisma.ClientUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutUserInput, Prisma.ClientUncheckedCreateWithoutUserInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutUserInput, Prisma.ClientUncheckedUpdateWithoutUserInput>;
};
export type ClientUpdateWithoutUserInput = {
    addresses?: Prisma.AddressUpdateManyWithoutClientNestedInput;
    cart?: Prisma.CartUpdateOneWithoutClientNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutClientNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutUserInput = {
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutClientNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutClientNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutClientNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutAddressesInput = {
    user: Prisma.UserCreateNestedOneWithoutClientInput;
    cart?: Prisma.CartCreateNestedOneWithoutClientInput;
    orders?: Prisma.OrderCreateNestedManyWithoutClientInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutAddressesInput = {
    userId: string;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutClientInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutClientInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutAddressesInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutAddressesInput, Prisma.ClientUncheckedCreateWithoutAddressesInput>;
};
export type ClientUpsertWithoutAddressesInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutAddressesInput, Prisma.ClientUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutAddressesInput, Prisma.ClientUncheckedCreateWithoutAddressesInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutAddressesInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutAddressesInput, Prisma.ClientUncheckedUpdateWithoutAddressesInput>;
};
export type ClientUpdateWithoutAddressesInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutClientNestedInput;
    cart?: Prisma.CartUpdateOneWithoutClientNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutClientNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutAddressesInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    cart?: Prisma.CartUncheckedUpdateOneWithoutClientNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutClientNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutCartInput = {
    user: Prisma.UserCreateNestedOneWithoutClientInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutClientInput;
    orders?: Prisma.OrderCreateNestedManyWithoutClientInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutCartInput = {
    userId: string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutClientInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutClientInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutCartInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutCartInput, Prisma.ClientUncheckedCreateWithoutCartInput>;
};
export type ClientUpsertWithoutCartInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutCartInput, Prisma.ClientUncheckedUpdateWithoutCartInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutCartInput, Prisma.ClientUncheckedCreateWithoutCartInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutCartInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutCartInput, Prisma.ClientUncheckedUpdateWithoutCartInput>;
};
export type ClientUpdateWithoutCartInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutClientNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutClientNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutClientNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutCartInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutClientNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutClientNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutOrdersInput = {
    user: Prisma.UserCreateNestedOneWithoutClientInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutClientInput;
    cart?: Prisma.CartCreateNestedOneWithoutClientInput;
    ratings?: Prisma.RatingCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutOrdersInput = {
    userId: string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutClientInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutClientInput;
    ratings?: Prisma.RatingUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutOrdersInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutOrdersInput, Prisma.ClientUncheckedCreateWithoutOrdersInput>;
};
export type ClientUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutOrdersInput, Prisma.ClientUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutOrdersInput, Prisma.ClientUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutOrdersInput, Prisma.ClientUncheckedUpdateWithoutOrdersInput>;
};
export type ClientUpdateWithoutOrdersInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutClientNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutClientNestedInput;
    cart?: Prisma.CartUpdateOneWithoutClientNestedInput;
    ratings?: Prisma.RatingUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutOrdersInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutClientNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutClientNestedInput;
    ratings?: Prisma.RatingUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutRatingsInput = {
    user: Prisma.UserCreateNestedOneWithoutClientInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutClientInput;
    cart?: Prisma.CartCreateNestedOneWithoutClientInput;
    orders?: Prisma.OrderCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutRatingsInput = {
    userId: string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutClientInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutClientInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutRatingsInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutRatingsInput, Prisma.ClientUncheckedCreateWithoutRatingsInput>;
};
export type ClientUpsertWithoutRatingsInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutRatingsInput, Prisma.ClientUncheckedUpdateWithoutRatingsInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutRatingsInput, Prisma.ClientUncheckedCreateWithoutRatingsInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutRatingsInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutRatingsInput, Prisma.ClientUncheckedUpdateWithoutRatingsInput>;
};
export type ClientUpdateWithoutRatingsInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutClientNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutClientNestedInput;
    cart?: Prisma.CartUpdateOneWithoutClientNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutRatingsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutClientNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutClientNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCountOutputType = {
    addresses: number;
    orders: number;
    ratings: number;
};
export type ClientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | ClientCountOutputTypeCountAddressesArgs;
    orders?: boolean | ClientCountOutputTypeCountOrdersArgs;
    ratings?: boolean | ClientCountOutputTypeCountRatingsArgs;
};
export type ClientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCountOutputTypeSelect<ExtArgs> | null;
};
export type ClientCountOutputTypeCountAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressWhereInput;
};
export type ClientCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type ClientCountOutputTypeCountRatingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
};
export type ClientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    addresses?: boolean | Prisma.Client$addressesArgs<ExtArgs>;
    cart?: boolean | Prisma.Client$cartArgs<ExtArgs>;
    orders?: boolean | Prisma.Client$ordersArgs<ExtArgs>;
    ratings?: boolean | Prisma.Client$ratingsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectScalar = {
    userId?: boolean;
};
export type ClientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId", ExtArgs["result"]["client"]>;
export type ClientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    addresses?: boolean | Prisma.Client$addressesArgs<ExtArgs>;
    cart?: boolean | Prisma.Client$cartArgs<ExtArgs>;
    orders?: boolean | Prisma.Client$ordersArgs<ExtArgs>;
    ratings?: boolean | Prisma.Client$ratingsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ClientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ClientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Client";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        addresses: Prisma.$AddressPayload<ExtArgs>[];
        cart: Prisma.$CartPayload<ExtArgs> | null;
        orders: Prisma.$OrderPayload<ExtArgs>[];
        ratings: Prisma.$RatingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
    }, ExtArgs["result"]["client"]>;
    composites: {};
};
export type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientPayload, S>;
export type ClientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientCountAggregateInputType | true;
};
export interface ClientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Client'];
        meta: {
            name: 'Client';
        };
    };
    findUnique<T extends ClientFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientFindManyArgs>(args?: Prisma.SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientCreateArgs>(args: Prisma.SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClientDeleteArgs>(args: Prisma.SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientUpdateArgs>(args: Prisma.SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClientUpsertArgs>(args: Prisma.SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientCountArgs>(args?: Prisma.Subset<T, ClientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientCountAggregateOutputType> : number>;
    aggregate<T extends ClientAggregateArgs>(args: Prisma.Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>;
    groupBy<T extends ClientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientFieldRefs;
}
export interface Prisma__ClientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    addresses<T extends Prisma.Client$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cart<T extends Prisma.Client$cartArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$cartArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.Client$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ratings<T extends Prisma.Client$ratingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientFieldRefs {
    readonly userId: Prisma.FieldRef<"Client", 'String'>;
}
export type ClientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
};
export type ClientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClientIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    where?: Prisma.ClientWhereInput;
    limit?: number;
};
export type ClientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    where?: Prisma.ClientWhereInput;
    limit?: number;
    include?: Prisma.ClientIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
};
export type ClientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    limit?: number;
};
export type Client$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput | Prisma.AddressOrderByWithRelationInput[];
    cursor?: Prisma.AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressScalarFieldEnum | Prisma.AddressScalarFieldEnum[];
};
export type Client$cartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
};
export type Client$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Client$ratingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithRelationInput | Prisma.RatingOrderByWithRelationInput[];
    cursor?: Prisma.RatingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RatingScalarFieldEnum | Prisma.RatingScalarFieldEnum[];
};
export type ClientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
};
