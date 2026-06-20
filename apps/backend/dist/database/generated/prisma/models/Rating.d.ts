import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type RatingModel = runtime.Types.Result.DefaultSelection<Prisma.$RatingPayload>;
export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null;
    _avg: RatingAvgAggregateOutputType | null;
    _sum: RatingSumAggregateOutputType | null;
    _min: RatingMinAggregateOutputType | null;
    _max: RatingMaxAggregateOutputType | null;
};
export type RatingAvgAggregateOutputType = {
    foodRating: number | null;
    driverRating: number | null;
};
export type RatingSumAggregateOutputType = {
    foodRating: number | null;
    driverRating: number | null;
};
export type RatingMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    clientId: string | null;
    foodRating: number | null;
    driverRating: number | null;
    comment: string | null;
    createdAt: Date | null;
};
export type RatingMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    clientId: string | null;
    foodRating: number | null;
    driverRating: number | null;
    comment: string | null;
    createdAt: Date | null;
};
export type RatingCountAggregateOutputType = {
    id: number;
    orderId: number;
    clientId: number;
    foodRating: number;
    driverRating: number;
    comment: number;
    createdAt: number;
    _all: number;
};
export type RatingAvgAggregateInputType = {
    foodRating?: true;
    driverRating?: true;
};
export type RatingSumAggregateInputType = {
    foodRating?: true;
    driverRating?: true;
};
export type RatingMinAggregateInputType = {
    id?: true;
    orderId?: true;
    clientId?: true;
    foodRating?: true;
    driverRating?: true;
    comment?: true;
    createdAt?: true;
};
export type RatingMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    clientId?: true;
    foodRating?: true;
    driverRating?: true;
    comment?: true;
    createdAt?: true;
};
export type RatingCountAggregateInputType = {
    id?: true;
    orderId?: true;
    clientId?: true;
    foodRating?: true;
    driverRating?: true;
    comment?: true;
    createdAt?: true;
    _all?: true;
};
export type RatingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithRelationInput | Prisma.RatingOrderByWithRelationInput[];
    cursor?: Prisma.RatingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RatingCountAggregateInputType;
    _avg?: RatingAvgAggregateInputType;
    _sum?: RatingSumAggregateInputType;
    _min?: RatingMinAggregateInputType;
    _max?: RatingMaxAggregateInputType;
};
export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
    [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRating[P]> : Prisma.GetScalarType<T[P], AggregateRating[P]>;
};
export type RatingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    orderBy?: Prisma.RatingOrderByWithAggregationInput | Prisma.RatingOrderByWithAggregationInput[];
    by: Prisma.RatingScalarFieldEnum[] | Prisma.RatingScalarFieldEnum;
    having?: Prisma.RatingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RatingCountAggregateInputType | true;
    _avg?: RatingAvgAggregateInputType;
    _sum?: RatingSumAggregateInputType;
    _min?: RatingMinAggregateInputType;
    _max?: RatingMaxAggregateInputType;
};
export type RatingGroupByOutputType = {
    id: string;
    orderId: string;
    clientId: string;
    foodRating: number;
    driverRating: number;
    comment: string | null;
    createdAt: Date;
    _count: RatingCountAggregateOutputType | null;
    _avg: RatingAvgAggregateOutputType | null;
    _sum: RatingSumAggregateOutputType | null;
    _min: RatingMinAggregateOutputType | null;
    _max: RatingMaxAggregateOutputType | null;
};
export type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RatingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RatingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RatingGroupByOutputType[P]>;
}>>;
export type RatingWhereInput = {
    AND?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    OR?: Prisma.RatingWhereInput[];
    NOT?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    id?: Prisma.UuidFilter<"Rating"> | string;
    orderId?: Prisma.UuidFilter<"Rating"> | string;
    clientId?: Prisma.UuidFilter<"Rating"> | string;
    foodRating?: Prisma.IntFilter<"Rating"> | number;
    driverRating?: Prisma.IntFilter<"Rating"> | number;
    comment?: Prisma.StringNullableFilter<"Rating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type RatingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    foodRating?: Prisma.SortOrder;
    driverRating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    OR?: Prisma.RatingWhereInput[];
    NOT?: Prisma.RatingWhereInput | Prisma.RatingWhereInput[];
    clientId?: Prisma.UuidFilter<"Rating"> | string;
    foodRating?: Prisma.IntFilter<"Rating"> | number;
    driverRating?: Prisma.IntFilter<"Rating"> | number;
    comment?: Prisma.StringNullableFilter<"Rating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id" | "orderId">;
export type RatingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    foodRating?: Prisma.SortOrder;
    driverRating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RatingCountOrderByAggregateInput;
    _avg?: Prisma.RatingAvgOrderByAggregateInput;
    _max?: Prisma.RatingMaxOrderByAggregateInput;
    _min?: Prisma.RatingMinOrderByAggregateInput;
    _sum?: Prisma.RatingSumOrderByAggregateInput;
};
export type RatingScalarWhereWithAggregatesInput = {
    AND?: Prisma.RatingScalarWhereWithAggregatesInput | Prisma.RatingScalarWhereWithAggregatesInput[];
    OR?: Prisma.RatingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RatingScalarWhereWithAggregatesInput | Prisma.RatingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Rating"> | string;
    orderId?: Prisma.UuidWithAggregatesFilter<"Rating"> | string;
    clientId?: Prisma.UuidWithAggregatesFilter<"Rating"> | string;
    foodRating?: Prisma.IntWithAggregatesFilter<"Rating"> | number;
    driverRating?: Prisma.IntWithAggregatesFilter<"Rating"> | number;
    comment?: Prisma.StringNullableWithAggregatesFilter<"Rating"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Rating"> | Date | string;
};
export type RatingCreateInput = {
    id?: string;
    foodRating: number;
    driverRating: number;
    comment?: string | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutRatingInput;
    client: Prisma.ClientCreateNestedOneWithoutRatingsInput;
};
export type RatingUncheckedCreateInput = {
    id?: string;
    orderId: string;
    clientId: string;
    foodRating: number;
    driverRating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type RatingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutRatingNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutRatingsNestedInput;
};
export type RatingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingCreateManyInput = {
    id?: string;
    orderId: string;
    clientId: string;
    foodRating: number;
    driverRating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type RatingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingListRelationFilter = {
    every?: Prisma.RatingWhereInput;
    some?: Prisma.RatingWhereInput;
    none?: Prisma.RatingWhereInput;
};
export type RatingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RatingNullableScalarRelationFilter = {
    is?: Prisma.RatingWhereInput | null;
    isNot?: Prisma.RatingWhereInput | null;
};
export type RatingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    foodRating?: Prisma.SortOrder;
    driverRating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RatingAvgOrderByAggregateInput = {
    foodRating?: Prisma.SortOrder;
    driverRating?: Prisma.SortOrder;
};
export type RatingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    foodRating?: Prisma.SortOrder;
    driverRating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RatingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    foodRating?: Prisma.SortOrder;
    driverRating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RatingSumOrderByAggregateInput = {
    foodRating?: Prisma.SortOrder;
    driverRating?: Prisma.SortOrder;
};
export type RatingCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutClientInput, Prisma.RatingUncheckedCreateWithoutClientInput> | Prisma.RatingCreateWithoutClientInput[] | Prisma.RatingUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutClientInput | Prisma.RatingCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.RatingCreateManyClientInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutClientInput, Prisma.RatingUncheckedCreateWithoutClientInput> | Prisma.RatingCreateWithoutClientInput[] | Prisma.RatingUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutClientInput | Prisma.RatingCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.RatingCreateManyClientInputEnvelope;
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
};
export type RatingUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutClientInput, Prisma.RatingUncheckedCreateWithoutClientInput> | Prisma.RatingCreateWithoutClientInput[] | Prisma.RatingUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutClientInput | Prisma.RatingCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutClientInput | Prisma.RatingUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.RatingCreateManyClientInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutClientInput | Prisma.RatingUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutClientInput | Prisma.RatingUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutClientInput, Prisma.RatingUncheckedCreateWithoutClientInput> | Prisma.RatingCreateWithoutClientInput[] | Prisma.RatingUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutClientInput | Prisma.RatingCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.RatingUpsertWithWhereUniqueWithoutClientInput | Prisma.RatingUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.RatingCreateManyClientInputEnvelope;
    set?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    disconnect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    delete?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    connect?: Prisma.RatingWhereUniqueInput | Prisma.RatingWhereUniqueInput[];
    update?: Prisma.RatingUpdateWithWhereUniqueWithoutClientInput | Prisma.RatingUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.RatingUpdateManyWithWhereWithoutClientInput | Prisma.RatingUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
};
export type RatingCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutOrderInput, Prisma.RatingUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutOrderInput;
    connect?: Prisma.RatingWhereUniqueInput;
};
export type RatingUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutOrderInput, Prisma.RatingUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutOrderInput;
    connect?: Prisma.RatingWhereUniqueInput;
};
export type RatingUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutOrderInput, Prisma.RatingUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.RatingUpsertWithoutOrderInput;
    disconnect?: Prisma.RatingWhereInput | boolean;
    delete?: Prisma.RatingWhereInput | boolean;
    connect?: Prisma.RatingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RatingUpdateToOneWithWhereWithoutOrderInput, Prisma.RatingUpdateWithoutOrderInput>, Prisma.RatingUncheckedUpdateWithoutOrderInput>;
};
export type RatingUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.RatingCreateWithoutOrderInput, Prisma.RatingUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.RatingCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.RatingUpsertWithoutOrderInput;
    disconnect?: Prisma.RatingWhereInput | boolean;
    delete?: Prisma.RatingWhereInput | boolean;
    connect?: Prisma.RatingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RatingUpdateToOneWithWhereWithoutOrderInput, Prisma.RatingUpdateWithoutOrderInput>, Prisma.RatingUncheckedUpdateWithoutOrderInput>;
};
export type RatingCreateWithoutClientInput = {
    id?: string;
    foodRating: number;
    driverRating: number;
    comment?: string | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutRatingInput;
};
export type RatingUncheckedCreateWithoutClientInput = {
    id?: string;
    orderId: string;
    foodRating: number;
    driverRating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type RatingCreateOrConnectWithoutClientInput = {
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateWithoutClientInput, Prisma.RatingUncheckedCreateWithoutClientInput>;
};
export type RatingCreateManyClientInputEnvelope = {
    data: Prisma.RatingCreateManyClientInput | Prisma.RatingCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type RatingUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.RatingWhereUniqueInput;
    update: Prisma.XOR<Prisma.RatingUpdateWithoutClientInput, Prisma.RatingUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.RatingCreateWithoutClientInput, Prisma.RatingUncheckedCreateWithoutClientInput>;
};
export type RatingUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.RatingWhereUniqueInput;
    data: Prisma.XOR<Prisma.RatingUpdateWithoutClientInput, Prisma.RatingUncheckedUpdateWithoutClientInput>;
};
export type RatingUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.RatingScalarWhereInput;
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyWithoutClientInput>;
};
export type RatingScalarWhereInput = {
    AND?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
    OR?: Prisma.RatingScalarWhereInput[];
    NOT?: Prisma.RatingScalarWhereInput | Prisma.RatingScalarWhereInput[];
    id?: Prisma.UuidFilter<"Rating"> | string;
    orderId?: Prisma.UuidFilter<"Rating"> | string;
    clientId?: Prisma.UuidFilter<"Rating"> | string;
    foodRating?: Prisma.IntFilter<"Rating"> | number;
    driverRating?: Prisma.IntFilter<"Rating"> | number;
    comment?: Prisma.StringNullableFilter<"Rating"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Rating"> | Date | string;
};
export type RatingCreateWithoutOrderInput = {
    id?: string;
    foodRating: number;
    driverRating: number;
    comment?: string | null;
    createdAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutRatingsInput;
};
export type RatingUncheckedCreateWithoutOrderInput = {
    id?: string;
    clientId: string;
    foodRating: number;
    driverRating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type RatingCreateOrConnectWithoutOrderInput = {
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateWithoutOrderInput, Prisma.RatingUncheckedCreateWithoutOrderInput>;
};
export type RatingUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.RatingUpdateWithoutOrderInput, Prisma.RatingUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.RatingCreateWithoutOrderInput, Prisma.RatingUncheckedCreateWithoutOrderInput>;
    where?: Prisma.RatingWhereInput;
};
export type RatingUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.RatingWhereInput;
    data: Prisma.XOR<Prisma.RatingUpdateWithoutOrderInput, Prisma.RatingUncheckedUpdateWithoutOrderInput>;
};
export type RatingUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutRatingsNestedInput;
};
export type RatingUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingCreateManyClientInput = {
    id?: string;
    orderId: string;
    foodRating: number;
    driverRating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type RatingUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutRatingNestedInput;
};
export type RatingUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    foodRating?: Prisma.IntFieldUpdateOperationsInput | number;
    driverRating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    clientId?: boolean;
    foodRating?: boolean;
    driverRating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    clientId?: boolean;
    foodRating?: boolean;
    driverRating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    clientId?: boolean;
    foodRating?: boolean;
    driverRating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rating"]>;
export type RatingSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    clientId?: boolean;
    foodRating?: boolean;
    driverRating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
};
export type RatingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "clientId" | "foodRating" | "driverRating" | "comment" | "createdAt", ExtArgs["result"]["rating"]>;
export type RatingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type RatingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type RatingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $RatingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rating";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        clientId: string;
        foodRating: number;
        driverRating: number;
        comment: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["rating"]>;
    composites: {};
};
export type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RatingPayload, S>;
export type RatingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RatingCountAggregateInputType | true;
};
export interface RatingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rating'];
        meta: {
            name: 'Rating';
        };
    };
    findUnique<T extends RatingFindUniqueArgs>(args: Prisma.SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RatingFindFirstArgs>(args?: Prisma.SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RatingFindManyArgs>(args?: Prisma.SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RatingCreateArgs>(args: Prisma.SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RatingCreateManyArgs>(args?: Prisma.SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RatingDeleteArgs>(args: Prisma.SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RatingUpdateArgs>(args: Prisma.SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RatingDeleteManyArgs>(args?: Prisma.SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RatingUpdateManyArgs>(args: Prisma.SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RatingUpsertArgs>(args: Prisma.SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma.Prisma__RatingClient<runtime.Types.Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RatingCountArgs>(args?: Prisma.Subset<T, RatingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RatingCountAggregateOutputType> : number>;
    aggregate<T extends RatingAggregateArgs>(args: Prisma.Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>;
    groupBy<T extends RatingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RatingGroupByArgs['orderBy'];
    } : {
        orderBy?: RatingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RatingFieldRefs;
}
export interface Prisma__RatingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RatingFieldRefs {
    readonly id: Prisma.FieldRef<"Rating", 'String'>;
    readonly orderId: Prisma.FieldRef<"Rating", 'String'>;
    readonly clientId: Prisma.FieldRef<"Rating", 'String'>;
    readonly foodRating: Prisma.FieldRef<"Rating", 'Int'>;
    readonly driverRating: Prisma.FieldRef<"Rating", 'Int'>;
    readonly comment: Prisma.FieldRef<"Rating", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Rating", 'DateTime'>;
}
export type RatingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RatingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingCreateInput, Prisma.RatingUncheckedCreateInput>;
};
export type RatingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RatingCreateManyInput | Prisma.RatingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RatingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    data: Prisma.RatingCreateManyInput | Prisma.RatingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RatingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RatingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingUpdateInput, Prisma.RatingUncheckedUpdateInput>;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyInput>;
    where?: Prisma.RatingWhereInput;
    limit?: number;
};
export type RatingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatingUpdateManyMutationInput, Prisma.RatingUncheckedUpdateManyInput>;
    where?: Prisma.RatingWhereInput;
    limit?: number;
    include?: Prisma.RatingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RatingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatingCreateInput, Prisma.RatingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RatingUpdateInput, Prisma.RatingUncheckedUpdateInput>;
};
export type RatingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
    where: Prisma.RatingWhereUniqueInput;
};
export type RatingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatingWhereInput;
    limit?: number;
};
export type RatingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatingSelect<ExtArgs> | null;
    omit?: Prisma.RatingOmit<ExtArgs> | null;
    include?: Prisma.RatingInclude<ExtArgs> | null;
};
