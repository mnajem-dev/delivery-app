import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type DispatchModel = runtime.Types.Result.DefaultSelection<Prisma.$DispatchPayload>;
export type AggregateDispatch = {
    _count: DispatchCountAggregateOutputType | null;
    _min: DispatchMinAggregateOutputType | null;
    _max: DispatchMaxAggregateOutputType | null;
};
export type DispatchMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    assignedDriverId: string | null;
    offeredAt: Date | null;
    expiresAt: Date | null;
    status: $Enums.DispatchStatus | null;
};
export type DispatchMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    assignedDriverId: string | null;
    offeredAt: Date | null;
    expiresAt: Date | null;
    status: $Enums.DispatchStatus | null;
};
export type DispatchCountAggregateOutputType = {
    id: number;
    orderId: number;
    assignedDriverId: number;
    offeredAt: number;
    expiresAt: number;
    status: number;
    _all: number;
};
export type DispatchMinAggregateInputType = {
    id?: true;
    orderId?: true;
    assignedDriverId?: true;
    offeredAt?: true;
    expiresAt?: true;
    status?: true;
};
export type DispatchMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    assignedDriverId?: true;
    offeredAt?: true;
    expiresAt?: true;
    status?: true;
};
export type DispatchCountAggregateInputType = {
    id?: true;
    orderId?: true;
    assignedDriverId?: true;
    offeredAt?: true;
    expiresAt?: true;
    status?: true;
    _all?: true;
};
export type DispatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DispatchWhereInput;
    orderBy?: Prisma.DispatchOrderByWithRelationInput | Prisma.DispatchOrderByWithRelationInput[];
    cursor?: Prisma.DispatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DispatchCountAggregateInputType;
    _min?: DispatchMinAggregateInputType;
    _max?: DispatchMaxAggregateInputType;
};
export type GetDispatchAggregateType<T extends DispatchAggregateArgs> = {
    [P in keyof T & keyof AggregateDispatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDispatch[P]> : Prisma.GetScalarType<T[P], AggregateDispatch[P]>;
};
export type DispatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DispatchWhereInput;
    orderBy?: Prisma.DispatchOrderByWithAggregationInput | Prisma.DispatchOrderByWithAggregationInput[];
    by: Prisma.DispatchScalarFieldEnum[] | Prisma.DispatchScalarFieldEnum;
    having?: Prisma.DispatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DispatchCountAggregateInputType | true;
    _min?: DispatchMinAggregateInputType;
    _max?: DispatchMaxAggregateInputType;
};
export type DispatchGroupByOutputType = {
    id: string;
    orderId: string;
    assignedDriverId: string | null;
    offeredAt: Date;
    expiresAt: Date;
    status: $Enums.DispatchStatus;
    _count: DispatchCountAggregateOutputType | null;
    _min: DispatchMinAggregateOutputType | null;
    _max: DispatchMaxAggregateOutputType | null;
};
export type GetDispatchGroupByPayload<T extends DispatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DispatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DispatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DispatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DispatchGroupByOutputType[P]>;
}>>;
export type DispatchWhereInput = {
    AND?: Prisma.DispatchWhereInput | Prisma.DispatchWhereInput[];
    OR?: Prisma.DispatchWhereInput[];
    NOT?: Prisma.DispatchWhereInput | Prisma.DispatchWhereInput[];
    id?: Prisma.UuidFilter<"Dispatch"> | string;
    orderId?: Prisma.UuidFilter<"Dispatch"> | string;
    assignedDriverId?: Prisma.UuidNullableFilter<"Dispatch"> | string | null;
    offeredAt?: Prisma.DateTimeFilter<"Dispatch"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"Dispatch"> | Date | string;
    status?: Prisma.EnumDispatchStatusFilter<"Dispatch"> | $Enums.DispatchStatus;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    logs?: Prisma.DispatchLogListRelationFilter;
};
export type DispatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    logs?: Prisma.DispatchLogOrderByRelationAggregateInput;
};
export type DispatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DispatchWhereInput | Prisma.DispatchWhereInput[];
    OR?: Prisma.DispatchWhereInput[];
    NOT?: Prisma.DispatchWhereInput | Prisma.DispatchWhereInput[];
    orderId?: Prisma.UuidFilter<"Dispatch"> | string;
    assignedDriverId?: Prisma.UuidNullableFilter<"Dispatch"> | string | null;
    offeredAt?: Prisma.DateTimeFilter<"Dispatch"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"Dispatch"> | Date | string;
    status?: Prisma.EnumDispatchStatusFilter<"Dispatch"> | $Enums.DispatchStatus;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    logs?: Prisma.DispatchLogListRelationFilter;
}, "id">;
export type DispatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.DispatchCountOrderByAggregateInput;
    _max?: Prisma.DispatchMaxOrderByAggregateInput;
    _min?: Prisma.DispatchMinOrderByAggregateInput;
};
export type DispatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.DispatchScalarWhereWithAggregatesInput | Prisma.DispatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.DispatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DispatchScalarWhereWithAggregatesInput | Prisma.DispatchScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Dispatch"> | string;
    orderId?: Prisma.UuidWithAggregatesFilter<"Dispatch"> | string;
    assignedDriverId?: Prisma.UuidNullableWithAggregatesFilter<"Dispatch"> | string | null;
    offeredAt?: Prisma.DateTimeWithAggregatesFilter<"Dispatch"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"Dispatch"> | Date | string;
    status?: Prisma.EnumDispatchStatusWithAggregatesFilter<"Dispatch"> | $Enums.DispatchStatus;
};
export type DispatchCreateInput = {
    id?: string;
    assignedDriverId?: string | null;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
    order: Prisma.OrderCreateNestedOneWithoutDispatchesInput;
    logs?: Prisma.DispatchLogCreateNestedManyWithoutDispatchInput;
};
export type DispatchUncheckedCreateInput = {
    id?: string;
    orderId: string;
    assignedDriverId?: string | null;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
    logs?: Prisma.DispatchLogUncheckedCreateNestedManyWithoutDispatchInput;
};
export type DispatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
    order?: Prisma.OrderUpdateOneRequiredWithoutDispatchesNestedInput;
    logs?: Prisma.DispatchLogUpdateManyWithoutDispatchNestedInput;
};
export type DispatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
    logs?: Prisma.DispatchLogUncheckedUpdateManyWithoutDispatchNestedInput;
};
export type DispatchCreateManyInput = {
    id?: string;
    orderId: string;
    assignedDriverId?: string | null;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchListRelationFilter = {
    every?: Prisma.DispatchWhereInput;
    some?: Prisma.DispatchWhereInput;
    none?: Prisma.DispatchWhereInput;
};
export type DispatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DispatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DispatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DispatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DispatchScalarRelationFilter = {
    is?: Prisma.DispatchWhereInput;
    isNot?: Prisma.DispatchWhereInput;
};
export type DispatchCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.DispatchCreateWithoutOrderInput, Prisma.DispatchUncheckedCreateWithoutOrderInput> | Prisma.DispatchCreateWithoutOrderInput[] | Prisma.DispatchUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.DispatchCreateOrConnectWithoutOrderInput | Prisma.DispatchCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.DispatchCreateManyOrderInputEnvelope;
    connect?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
};
export type DispatchUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.DispatchCreateWithoutOrderInput, Prisma.DispatchUncheckedCreateWithoutOrderInput> | Prisma.DispatchCreateWithoutOrderInput[] | Prisma.DispatchUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.DispatchCreateOrConnectWithoutOrderInput | Prisma.DispatchCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.DispatchCreateManyOrderInputEnvelope;
    connect?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
};
export type DispatchUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.DispatchCreateWithoutOrderInput, Prisma.DispatchUncheckedCreateWithoutOrderInput> | Prisma.DispatchCreateWithoutOrderInput[] | Prisma.DispatchUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.DispatchCreateOrConnectWithoutOrderInput | Prisma.DispatchCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.DispatchUpsertWithWhereUniqueWithoutOrderInput | Prisma.DispatchUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.DispatchCreateManyOrderInputEnvelope;
    set?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
    disconnect?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
    delete?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
    connect?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
    update?: Prisma.DispatchUpdateWithWhereUniqueWithoutOrderInput | Prisma.DispatchUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.DispatchUpdateManyWithWhereWithoutOrderInput | Prisma.DispatchUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.DispatchScalarWhereInput | Prisma.DispatchScalarWhereInput[];
};
export type DispatchUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.DispatchCreateWithoutOrderInput, Prisma.DispatchUncheckedCreateWithoutOrderInput> | Prisma.DispatchCreateWithoutOrderInput[] | Prisma.DispatchUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.DispatchCreateOrConnectWithoutOrderInput | Prisma.DispatchCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.DispatchUpsertWithWhereUniqueWithoutOrderInput | Prisma.DispatchUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.DispatchCreateManyOrderInputEnvelope;
    set?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
    disconnect?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
    delete?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
    connect?: Prisma.DispatchWhereUniqueInput | Prisma.DispatchWhereUniqueInput[];
    update?: Prisma.DispatchUpdateWithWhereUniqueWithoutOrderInput | Prisma.DispatchUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.DispatchUpdateManyWithWhereWithoutOrderInput | Prisma.DispatchUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.DispatchScalarWhereInput | Prisma.DispatchScalarWhereInput[];
};
export type EnumDispatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.DispatchStatus;
};
export type DispatchCreateNestedOneWithoutLogsInput = {
    create?: Prisma.XOR<Prisma.DispatchCreateWithoutLogsInput, Prisma.DispatchUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.DispatchCreateOrConnectWithoutLogsInput;
    connect?: Prisma.DispatchWhereUniqueInput;
};
export type DispatchUpdateOneRequiredWithoutLogsNestedInput = {
    create?: Prisma.XOR<Prisma.DispatchCreateWithoutLogsInput, Prisma.DispatchUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.DispatchCreateOrConnectWithoutLogsInput;
    upsert?: Prisma.DispatchUpsertWithoutLogsInput;
    connect?: Prisma.DispatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DispatchUpdateToOneWithWhereWithoutLogsInput, Prisma.DispatchUpdateWithoutLogsInput>, Prisma.DispatchUncheckedUpdateWithoutLogsInput>;
};
export type DispatchCreateWithoutOrderInput = {
    id?: string;
    assignedDriverId?: string | null;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
    logs?: Prisma.DispatchLogCreateNestedManyWithoutDispatchInput;
};
export type DispatchUncheckedCreateWithoutOrderInput = {
    id?: string;
    assignedDriverId?: string | null;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
    logs?: Prisma.DispatchLogUncheckedCreateNestedManyWithoutDispatchInput;
};
export type DispatchCreateOrConnectWithoutOrderInput = {
    where: Prisma.DispatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.DispatchCreateWithoutOrderInput, Prisma.DispatchUncheckedCreateWithoutOrderInput>;
};
export type DispatchCreateManyOrderInputEnvelope = {
    data: Prisma.DispatchCreateManyOrderInput | Prisma.DispatchCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type DispatchUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.DispatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.DispatchUpdateWithoutOrderInput, Prisma.DispatchUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.DispatchCreateWithoutOrderInput, Prisma.DispatchUncheckedCreateWithoutOrderInput>;
};
export type DispatchUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.DispatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.DispatchUpdateWithoutOrderInput, Prisma.DispatchUncheckedUpdateWithoutOrderInput>;
};
export type DispatchUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.DispatchScalarWhereInput;
    data: Prisma.XOR<Prisma.DispatchUpdateManyMutationInput, Prisma.DispatchUncheckedUpdateManyWithoutOrderInput>;
};
export type DispatchScalarWhereInput = {
    AND?: Prisma.DispatchScalarWhereInput | Prisma.DispatchScalarWhereInput[];
    OR?: Prisma.DispatchScalarWhereInput[];
    NOT?: Prisma.DispatchScalarWhereInput | Prisma.DispatchScalarWhereInput[];
    id?: Prisma.UuidFilter<"Dispatch"> | string;
    orderId?: Prisma.UuidFilter<"Dispatch"> | string;
    assignedDriverId?: Prisma.UuidNullableFilter<"Dispatch"> | string | null;
    offeredAt?: Prisma.DateTimeFilter<"Dispatch"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"Dispatch"> | Date | string;
    status?: Prisma.EnumDispatchStatusFilter<"Dispatch"> | $Enums.DispatchStatus;
};
export type DispatchCreateWithoutLogsInput = {
    id?: string;
    assignedDriverId?: string | null;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
    order: Prisma.OrderCreateNestedOneWithoutDispatchesInput;
};
export type DispatchUncheckedCreateWithoutLogsInput = {
    id?: string;
    orderId: string;
    assignedDriverId?: string | null;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchCreateOrConnectWithoutLogsInput = {
    where: Prisma.DispatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.DispatchCreateWithoutLogsInput, Prisma.DispatchUncheckedCreateWithoutLogsInput>;
};
export type DispatchUpsertWithoutLogsInput = {
    update: Prisma.XOR<Prisma.DispatchUpdateWithoutLogsInput, Prisma.DispatchUncheckedUpdateWithoutLogsInput>;
    create: Prisma.XOR<Prisma.DispatchCreateWithoutLogsInput, Prisma.DispatchUncheckedCreateWithoutLogsInput>;
    where?: Prisma.DispatchWhereInput;
};
export type DispatchUpdateToOneWithWhereWithoutLogsInput = {
    where?: Prisma.DispatchWhereInput;
    data: Prisma.XOR<Prisma.DispatchUpdateWithoutLogsInput, Prisma.DispatchUncheckedUpdateWithoutLogsInput>;
};
export type DispatchUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
    order?: Prisma.OrderUpdateOneRequiredWithoutDispatchesNestedInput;
};
export type DispatchUncheckedUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchCreateManyOrderInput = {
    id?: string;
    assignedDriverId?: string | null;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
    logs?: Prisma.DispatchLogUpdateManyWithoutDispatchNestedInput;
};
export type DispatchUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
    logs?: Prisma.DispatchLogUncheckedUpdateManyWithoutDispatchNestedInput;
};
export type DispatchUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchCountOutputType = {
    logs: number;
};
export type DispatchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | DispatchCountOutputTypeCountLogsArgs;
};
export type DispatchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchCountOutputTypeSelect<ExtArgs> | null;
};
export type DispatchCountOutputTypeCountLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DispatchLogWhereInput;
};
export type DispatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    assignedDriverId?: boolean;
    offeredAt?: boolean;
    expiresAt?: boolean;
    status?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    logs?: boolean | Prisma.Dispatch$logsArgs<ExtArgs>;
    _count?: boolean | Prisma.DispatchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispatch"]>;
export type DispatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    assignedDriverId?: boolean;
    offeredAt?: boolean;
    expiresAt?: boolean;
    status?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispatch"]>;
export type DispatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    assignedDriverId?: boolean;
    offeredAt?: boolean;
    expiresAt?: boolean;
    status?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispatch"]>;
export type DispatchSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    assignedDriverId?: boolean;
    offeredAt?: boolean;
    expiresAt?: boolean;
    status?: boolean;
};
export type DispatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "assignedDriverId" | "offeredAt" | "expiresAt" | "status", ExtArgs["result"]["dispatch"]>;
export type DispatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    logs?: boolean | Prisma.Dispatch$logsArgs<ExtArgs>;
    _count?: boolean | Prisma.DispatchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DispatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type DispatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type $DispatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Dispatch";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        logs: Prisma.$DispatchLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        assignedDriverId: string | null;
        offeredAt: Date;
        expiresAt: Date;
        status: $Enums.DispatchStatus;
    }, ExtArgs["result"]["dispatch"]>;
    composites: {};
};
export type DispatchGetPayload<S extends boolean | null | undefined | DispatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DispatchPayload, S>;
export type DispatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DispatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DispatchCountAggregateInputType | true;
};
export interface DispatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Dispatch'];
        meta: {
            name: 'Dispatch';
        };
    };
    findUnique<T extends DispatchFindUniqueArgs>(args: Prisma.SelectSubset<T, DispatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DispatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DispatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DispatchFindFirstArgs>(args?: Prisma.SelectSubset<T, DispatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DispatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DispatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DispatchFindManyArgs>(args?: Prisma.SelectSubset<T, DispatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DispatchCreateArgs>(args: Prisma.SelectSubset<T, DispatchCreateArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DispatchCreateManyArgs>(args?: Prisma.SelectSubset<T, DispatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DispatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DispatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DispatchDeleteArgs>(args: Prisma.SelectSubset<T, DispatchDeleteArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DispatchUpdateArgs>(args: Prisma.SelectSubset<T, DispatchUpdateArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DispatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, DispatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DispatchUpdateManyArgs>(args: Prisma.SelectSubset<T, DispatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DispatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DispatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DispatchUpsertArgs>(args: Prisma.SelectSubset<T, DispatchUpsertArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DispatchCountArgs>(args?: Prisma.Subset<T, DispatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DispatchCountAggregateOutputType> : number>;
    aggregate<T extends DispatchAggregateArgs>(args: Prisma.Subset<T, DispatchAggregateArgs>): Prisma.PrismaPromise<GetDispatchAggregateType<T>>;
    groupBy<T extends DispatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DispatchGroupByArgs['orderBy'];
    } : {
        orderBy?: DispatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DispatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DispatchFieldRefs;
}
export interface Prisma__DispatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    logs<T extends Prisma.Dispatch$logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Dispatch$logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DispatchFieldRefs {
    readonly id: Prisma.FieldRef<"Dispatch", 'String'>;
    readonly orderId: Prisma.FieldRef<"Dispatch", 'String'>;
    readonly assignedDriverId: Prisma.FieldRef<"Dispatch", 'String'>;
    readonly offeredAt: Prisma.FieldRef<"Dispatch", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"Dispatch", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Dispatch", 'DispatchStatus'>;
}
export type DispatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    where: Prisma.DispatchWhereUniqueInput;
};
export type DispatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    where: Prisma.DispatchWhereUniqueInput;
};
export type DispatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    where?: Prisma.DispatchWhereInput;
    orderBy?: Prisma.DispatchOrderByWithRelationInput | Prisma.DispatchOrderByWithRelationInput[];
    cursor?: Prisma.DispatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DispatchScalarFieldEnum | Prisma.DispatchScalarFieldEnum[];
};
export type DispatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    where?: Prisma.DispatchWhereInput;
    orderBy?: Prisma.DispatchOrderByWithRelationInput | Prisma.DispatchOrderByWithRelationInput[];
    cursor?: Prisma.DispatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DispatchScalarFieldEnum | Prisma.DispatchScalarFieldEnum[];
};
export type DispatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    where?: Prisma.DispatchWhereInput;
    orderBy?: Prisma.DispatchOrderByWithRelationInput | Prisma.DispatchOrderByWithRelationInput[];
    cursor?: Prisma.DispatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DispatchScalarFieldEnum | Prisma.DispatchScalarFieldEnum[];
};
export type DispatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DispatchCreateInput, Prisma.DispatchUncheckedCreateInput>;
};
export type DispatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DispatchCreateManyInput | Prisma.DispatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DispatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    data: Prisma.DispatchCreateManyInput | Prisma.DispatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DispatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DispatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DispatchUpdateInput, Prisma.DispatchUncheckedUpdateInput>;
    where: Prisma.DispatchWhereUniqueInput;
};
export type DispatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DispatchUpdateManyMutationInput, Prisma.DispatchUncheckedUpdateManyInput>;
    where?: Prisma.DispatchWhereInput;
    limit?: number;
};
export type DispatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DispatchUpdateManyMutationInput, Prisma.DispatchUncheckedUpdateManyInput>;
    where?: Prisma.DispatchWhereInput;
    limit?: number;
    include?: Prisma.DispatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DispatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    where: Prisma.DispatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.DispatchCreateInput, Prisma.DispatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DispatchUpdateInput, Prisma.DispatchUncheckedUpdateInput>;
};
export type DispatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
    where: Prisma.DispatchWhereUniqueInput;
};
export type DispatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DispatchWhereInput;
    limit?: number;
};
export type Dispatch$logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelect<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    include?: Prisma.DispatchLogInclude<ExtArgs> | null;
    where?: Prisma.DispatchLogWhereInput;
    orderBy?: Prisma.DispatchLogOrderByWithRelationInput | Prisma.DispatchLogOrderByWithRelationInput[];
    cursor?: Prisma.DispatchLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DispatchLogScalarFieldEnum | Prisma.DispatchLogScalarFieldEnum[];
};
export type DispatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchSelect<ExtArgs> | null;
    omit?: Prisma.DispatchOmit<ExtArgs> | null;
    include?: Prisma.DispatchInclude<ExtArgs> | null;
};
