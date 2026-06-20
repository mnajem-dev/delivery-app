import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type DispatchLogModel = runtime.Types.Result.DefaultSelection<Prisma.$DispatchLogPayload>;
export type AggregateDispatchLog = {
    _count: DispatchLogCountAggregateOutputType | null;
    _min: DispatchLogMinAggregateOutputType | null;
    _max: DispatchLogMaxAggregateOutputType | null;
};
export type DispatchLogMinAggregateOutputType = {
    id: string | null;
    dispatchId: string | null;
    orderId: string | null;
    driverId: string | null;
    offeredAt: Date | null;
    expiresAt: Date | null;
    status: $Enums.DispatchStatus | null;
};
export type DispatchLogMaxAggregateOutputType = {
    id: string | null;
    dispatchId: string | null;
    orderId: string | null;
    driverId: string | null;
    offeredAt: Date | null;
    expiresAt: Date | null;
    status: $Enums.DispatchStatus | null;
};
export type DispatchLogCountAggregateOutputType = {
    id: number;
    dispatchId: number;
    orderId: number;
    driverId: number;
    offeredAt: number;
    expiresAt: number;
    status: number;
    _all: number;
};
export type DispatchLogMinAggregateInputType = {
    id?: true;
    dispatchId?: true;
    orderId?: true;
    driverId?: true;
    offeredAt?: true;
    expiresAt?: true;
    status?: true;
};
export type DispatchLogMaxAggregateInputType = {
    id?: true;
    dispatchId?: true;
    orderId?: true;
    driverId?: true;
    offeredAt?: true;
    expiresAt?: true;
    status?: true;
};
export type DispatchLogCountAggregateInputType = {
    id?: true;
    dispatchId?: true;
    orderId?: true;
    driverId?: true;
    offeredAt?: true;
    expiresAt?: true;
    status?: true;
    _all?: true;
};
export type DispatchLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DispatchLogWhereInput;
    orderBy?: Prisma.DispatchLogOrderByWithRelationInput | Prisma.DispatchLogOrderByWithRelationInput[];
    cursor?: Prisma.DispatchLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DispatchLogCountAggregateInputType;
    _min?: DispatchLogMinAggregateInputType;
    _max?: DispatchLogMaxAggregateInputType;
};
export type GetDispatchLogAggregateType<T extends DispatchLogAggregateArgs> = {
    [P in keyof T & keyof AggregateDispatchLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDispatchLog[P]> : Prisma.GetScalarType<T[P], AggregateDispatchLog[P]>;
};
export type DispatchLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DispatchLogWhereInput;
    orderBy?: Prisma.DispatchLogOrderByWithAggregationInput | Prisma.DispatchLogOrderByWithAggregationInput[];
    by: Prisma.DispatchLogScalarFieldEnum[] | Prisma.DispatchLogScalarFieldEnum;
    having?: Prisma.DispatchLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DispatchLogCountAggregateInputType | true;
    _min?: DispatchLogMinAggregateInputType;
    _max?: DispatchLogMaxAggregateInputType;
};
export type DispatchLogGroupByOutputType = {
    id: string;
    dispatchId: string;
    orderId: string;
    driverId: string;
    offeredAt: Date;
    expiresAt: Date;
    status: $Enums.DispatchStatus;
    _count: DispatchLogCountAggregateOutputType | null;
    _min: DispatchLogMinAggregateOutputType | null;
    _max: DispatchLogMaxAggregateOutputType | null;
};
export type GetDispatchLogGroupByPayload<T extends DispatchLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DispatchLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DispatchLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DispatchLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DispatchLogGroupByOutputType[P]>;
}>>;
export type DispatchLogWhereInput = {
    AND?: Prisma.DispatchLogWhereInput | Prisma.DispatchLogWhereInput[];
    OR?: Prisma.DispatchLogWhereInput[];
    NOT?: Prisma.DispatchLogWhereInput | Prisma.DispatchLogWhereInput[];
    id?: Prisma.UuidFilter<"DispatchLog"> | string;
    dispatchId?: Prisma.UuidFilter<"DispatchLog"> | string;
    orderId?: Prisma.UuidFilter<"DispatchLog"> | string;
    driverId?: Prisma.UuidFilter<"DispatchLog"> | string;
    offeredAt?: Prisma.DateTimeFilter<"DispatchLog"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"DispatchLog"> | Date | string;
    status?: Prisma.EnumDispatchStatusFilter<"DispatchLog"> | $Enums.DispatchStatus;
    dispatch?: Prisma.XOR<Prisma.DispatchScalarRelationFilter, Prisma.DispatchWhereInput>;
    driver?: Prisma.XOR<Prisma.DriverScalarRelationFilter, Prisma.DriverWhereInput>;
};
export type DispatchLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dispatchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dispatch?: Prisma.DispatchOrderByWithRelationInput;
    driver?: Prisma.DriverOrderByWithRelationInput;
};
export type DispatchLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DispatchLogWhereInput | Prisma.DispatchLogWhereInput[];
    OR?: Prisma.DispatchLogWhereInput[];
    NOT?: Prisma.DispatchLogWhereInput | Prisma.DispatchLogWhereInput[];
    dispatchId?: Prisma.UuidFilter<"DispatchLog"> | string;
    orderId?: Prisma.UuidFilter<"DispatchLog"> | string;
    driverId?: Prisma.UuidFilter<"DispatchLog"> | string;
    offeredAt?: Prisma.DateTimeFilter<"DispatchLog"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"DispatchLog"> | Date | string;
    status?: Prisma.EnumDispatchStatusFilter<"DispatchLog"> | $Enums.DispatchStatus;
    dispatch?: Prisma.XOR<Prisma.DispatchScalarRelationFilter, Prisma.DispatchWhereInput>;
    driver?: Prisma.XOR<Prisma.DriverScalarRelationFilter, Prisma.DriverWhereInput>;
}, "id">;
export type DispatchLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dispatchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.DispatchLogCountOrderByAggregateInput;
    _max?: Prisma.DispatchLogMaxOrderByAggregateInput;
    _min?: Prisma.DispatchLogMinOrderByAggregateInput;
};
export type DispatchLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.DispatchLogScalarWhereWithAggregatesInput | Prisma.DispatchLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.DispatchLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DispatchLogScalarWhereWithAggregatesInput | Prisma.DispatchLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DispatchLog"> | string;
    dispatchId?: Prisma.UuidWithAggregatesFilter<"DispatchLog"> | string;
    orderId?: Prisma.UuidWithAggregatesFilter<"DispatchLog"> | string;
    driverId?: Prisma.UuidWithAggregatesFilter<"DispatchLog"> | string;
    offeredAt?: Prisma.DateTimeWithAggregatesFilter<"DispatchLog"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"DispatchLog"> | Date | string;
    status?: Prisma.EnumDispatchStatusWithAggregatesFilter<"DispatchLog"> | $Enums.DispatchStatus;
};
export type DispatchLogCreateInput = {
    id?: string;
    orderId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
    dispatch: Prisma.DispatchCreateNestedOneWithoutLogsInput;
    driver: Prisma.DriverCreateNestedOneWithoutDispatchLogsInput;
};
export type DispatchLogUncheckedCreateInput = {
    id?: string;
    dispatchId: string;
    orderId: string;
    driverId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
    dispatch?: Prisma.DispatchUpdateOneRequiredWithoutLogsNestedInput;
    driver?: Prisma.DriverUpdateOneRequiredWithoutDispatchLogsNestedInput;
};
export type DispatchLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dispatchId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchLogCreateManyInput = {
    id?: string;
    dispatchId: string;
    orderId: string;
    driverId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dispatchId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchLogListRelationFilter = {
    every?: Prisma.DispatchLogWhereInput;
    some?: Prisma.DispatchLogWhereInput;
    none?: Prisma.DispatchLogWhereInput;
};
export type DispatchLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DispatchLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dispatchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DispatchLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dispatchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DispatchLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dispatchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    offeredAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DispatchLogCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.DispatchLogCreateWithoutDriverInput, Prisma.DispatchLogUncheckedCreateWithoutDriverInput> | Prisma.DispatchLogCreateWithoutDriverInput[] | Prisma.DispatchLogUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.DispatchLogCreateOrConnectWithoutDriverInput | Prisma.DispatchLogCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.DispatchLogCreateManyDriverInputEnvelope;
    connect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
};
export type DispatchLogUncheckedCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.DispatchLogCreateWithoutDriverInput, Prisma.DispatchLogUncheckedCreateWithoutDriverInput> | Prisma.DispatchLogCreateWithoutDriverInput[] | Prisma.DispatchLogUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.DispatchLogCreateOrConnectWithoutDriverInput | Prisma.DispatchLogCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.DispatchLogCreateManyDriverInputEnvelope;
    connect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
};
export type DispatchLogUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.DispatchLogCreateWithoutDriverInput, Prisma.DispatchLogUncheckedCreateWithoutDriverInput> | Prisma.DispatchLogCreateWithoutDriverInput[] | Prisma.DispatchLogUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.DispatchLogCreateOrConnectWithoutDriverInput | Prisma.DispatchLogCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.DispatchLogUpsertWithWhereUniqueWithoutDriverInput | Prisma.DispatchLogUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.DispatchLogCreateManyDriverInputEnvelope;
    set?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    disconnect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    delete?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    connect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    update?: Prisma.DispatchLogUpdateWithWhereUniqueWithoutDriverInput | Prisma.DispatchLogUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.DispatchLogUpdateManyWithWhereWithoutDriverInput | Prisma.DispatchLogUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.DispatchLogScalarWhereInput | Prisma.DispatchLogScalarWhereInput[];
};
export type DispatchLogUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.DispatchLogCreateWithoutDriverInput, Prisma.DispatchLogUncheckedCreateWithoutDriverInput> | Prisma.DispatchLogCreateWithoutDriverInput[] | Prisma.DispatchLogUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.DispatchLogCreateOrConnectWithoutDriverInput | Prisma.DispatchLogCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.DispatchLogUpsertWithWhereUniqueWithoutDriverInput | Prisma.DispatchLogUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.DispatchLogCreateManyDriverInputEnvelope;
    set?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    disconnect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    delete?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    connect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    update?: Prisma.DispatchLogUpdateWithWhereUniqueWithoutDriverInput | Prisma.DispatchLogUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.DispatchLogUpdateManyWithWhereWithoutDriverInput | Prisma.DispatchLogUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.DispatchLogScalarWhereInput | Prisma.DispatchLogScalarWhereInput[];
};
export type DispatchLogCreateNestedManyWithoutDispatchInput = {
    create?: Prisma.XOR<Prisma.DispatchLogCreateWithoutDispatchInput, Prisma.DispatchLogUncheckedCreateWithoutDispatchInput> | Prisma.DispatchLogCreateWithoutDispatchInput[] | Prisma.DispatchLogUncheckedCreateWithoutDispatchInput[];
    connectOrCreate?: Prisma.DispatchLogCreateOrConnectWithoutDispatchInput | Prisma.DispatchLogCreateOrConnectWithoutDispatchInput[];
    createMany?: Prisma.DispatchLogCreateManyDispatchInputEnvelope;
    connect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
};
export type DispatchLogUncheckedCreateNestedManyWithoutDispatchInput = {
    create?: Prisma.XOR<Prisma.DispatchLogCreateWithoutDispatchInput, Prisma.DispatchLogUncheckedCreateWithoutDispatchInput> | Prisma.DispatchLogCreateWithoutDispatchInput[] | Prisma.DispatchLogUncheckedCreateWithoutDispatchInput[];
    connectOrCreate?: Prisma.DispatchLogCreateOrConnectWithoutDispatchInput | Prisma.DispatchLogCreateOrConnectWithoutDispatchInput[];
    createMany?: Prisma.DispatchLogCreateManyDispatchInputEnvelope;
    connect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
};
export type DispatchLogUpdateManyWithoutDispatchNestedInput = {
    create?: Prisma.XOR<Prisma.DispatchLogCreateWithoutDispatchInput, Prisma.DispatchLogUncheckedCreateWithoutDispatchInput> | Prisma.DispatchLogCreateWithoutDispatchInput[] | Prisma.DispatchLogUncheckedCreateWithoutDispatchInput[];
    connectOrCreate?: Prisma.DispatchLogCreateOrConnectWithoutDispatchInput | Prisma.DispatchLogCreateOrConnectWithoutDispatchInput[];
    upsert?: Prisma.DispatchLogUpsertWithWhereUniqueWithoutDispatchInput | Prisma.DispatchLogUpsertWithWhereUniqueWithoutDispatchInput[];
    createMany?: Prisma.DispatchLogCreateManyDispatchInputEnvelope;
    set?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    disconnect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    delete?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    connect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    update?: Prisma.DispatchLogUpdateWithWhereUniqueWithoutDispatchInput | Prisma.DispatchLogUpdateWithWhereUniqueWithoutDispatchInput[];
    updateMany?: Prisma.DispatchLogUpdateManyWithWhereWithoutDispatchInput | Prisma.DispatchLogUpdateManyWithWhereWithoutDispatchInput[];
    deleteMany?: Prisma.DispatchLogScalarWhereInput | Prisma.DispatchLogScalarWhereInput[];
};
export type DispatchLogUncheckedUpdateManyWithoutDispatchNestedInput = {
    create?: Prisma.XOR<Prisma.DispatchLogCreateWithoutDispatchInput, Prisma.DispatchLogUncheckedCreateWithoutDispatchInput> | Prisma.DispatchLogCreateWithoutDispatchInput[] | Prisma.DispatchLogUncheckedCreateWithoutDispatchInput[];
    connectOrCreate?: Prisma.DispatchLogCreateOrConnectWithoutDispatchInput | Prisma.DispatchLogCreateOrConnectWithoutDispatchInput[];
    upsert?: Prisma.DispatchLogUpsertWithWhereUniqueWithoutDispatchInput | Prisma.DispatchLogUpsertWithWhereUniqueWithoutDispatchInput[];
    createMany?: Prisma.DispatchLogCreateManyDispatchInputEnvelope;
    set?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    disconnect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    delete?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    connect?: Prisma.DispatchLogWhereUniqueInput | Prisma.DispatchLogWhereUniqueInput[];
    update?: Prisma.DispatchLogUpdateWithWhereUniqueWithoutDispatchInput | Prisma.DispatchLogUpdateWithWhereUniqueWithoutDispatchInput[];
    updateMany?: Prisma.DispatchLogUpdateManyWithWhereWithoutDispatchInput | Prisma.DispatchLogUpdateManyWithWhereWithoutDispatchInput[];
    deleteMany?: Prisma.DispatchLogScalarWhereInput | Prisma.DispatchLogScalarWhereInput[];
};
export type DispatchLogCreateWithoutDriverInput = {
    id?: string;
    orderId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
    dispatch: Prisma.DispatchCreateNestedOneWithoutLogsInput;
};
export type DispatchLogUncheckedCreateWithoutDriverInput = {
    id?: string;
    dispatchId: string;
    orderId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchLogCreateOrConnectWithoutDriverInput = {
    where: Prisma.DispatchLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.DispatchLogCreateWithoutDriverInput, Prisma.DispatchLogUncheckedCreateWithoutDriverInput>;
};
export type DispatchLogCreateManyDriverInputEnvelope = {
    data: Prisma.DispatchLogCreateManyDriverInput | Prisma.DispatchLogCreateManyDriverInput[];
    skipDuplicates?: boolean;
};
export type DispatchLogUpsertWithWhereUniqueWithoutDriverInput = {
    where: Prisma.DispatchLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.DispatchLogUpdateWithoutDriverInput, Prisma.DispatchLogUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.DispatchLogCreateWithoutDriverInput, Prisma.DispatchLogUncheckedCreateWithoutDriverInput>;
};
export type DispatchLogUpdateWithWhereUniqueWithoutDriverInput = {
    where: Prisma.DispatchLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.DispatchLogUpdateWithoutDriverInput, Prisma.DispatchLogUncheckedUpdateWithoutDriverInput>;
};
export type DispatchLogUpdateManyWithWhereWithoutDriverInput = {
    where: Prisma.DispatchLogScalarWhereInput;
    data: Prisma.XOR<Prisma.DispatchLogUpdateManyMutationInput, Prisma.DispatchLogUncheckedUpdateManyWithoutDriverInput>;
};
export type DispatchLogScalarWhereInput = {
    AND?: Prisma.DispatchLogScalarWhereInput | Prisma.DispatchLogScalarWhereInput[];
    OR?: Prisma.DispatchLogScalarWhereInput[];
    NOT?: Prisma.DispatchLogScalarWhereInput | Prisma.DispatchLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"DispatchLog"> | string;
    dispatchId?: Prisma.UuidFilter<"DispatchLog"> | string;
    orderId?: Prisma.UuidFilter<"DispatchLog"> | string;
    driverId?: Prisma.UuidFilter<"DispatchLog"> | string;
    offeredAt?: Prisma.DateTimeFilter<"DispatchLog"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"DispatchLog"> | Date | string;
    status?: Prisma.EnumDispatchStatusFilter<"DispatchLog"> | $Enums.DispatchStatus;
};
export type DispatchLogCreateWithoutDispatchInput = {
    id?: string;
    orderId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
    driver: Prisma.DriverCreateNestedOneWithoutDispatchLogsInput;
};
export type DispatchLogUncheckedCreateWithoutDispatchInput = {
    id?: string;
    orderId: string;
    driverId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchLogCreateOrConnectWithoutDispatchInput = {
    where: Prisma.DispatchLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.DispatchLogCreateWithoutDispatchInput, Prisma.DispatchLogUncheckedCreateWithoutDispatchInput>;
};
export type DispatchLogCreateManyDispatchInputEnvelope = {
    data: Prisma.DispatchLogCreateManyDispatchInput | Prisma.DispatchLogCreateManyDispatchInput[];
    skipDuplicates?: boolean;
};
export type DispatchLogUpsertWithWhereUniqueWithoutDispatchInput = {
    where: Prisma.DispatchLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.DispatchLogUpdateWithoutDispatchInput, Prisma.DispatchLogUncheckedUpdateWithoutDispatchInput>;
    create: Prisma.XOR<Prisma.DispatchLogCreateWithoutDispatchInput, Prisma.DispatchLogUncheckedCreateWithoutDispatchInput>;
};
export type DispatchLogUpdateWithWhereUniqueWithoutDispatchInput = {
    where: Prisma.DispatchLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.DispatchLogUpdateWithoutDispatchInput, Prisma.DispatchLogUncheckedUpdateWithoutDispatchInput>;
};
export type DispatchLogUpdateManyWithWhereWithoutDispatchInput = {
    where: Prisma.DispatchLogScalarWhereInput;
    data: Prisma.XOR<Prisma.DispatchLogUpdateManyMutationInput, Prisma.DispatchLogUncheckedUpdateManyWithoutDispatchInput>;
};
export type DispatchLogCreateManyDriverInput = {
    id?: string;
    dispatchId: string;
    orderId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchLogUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
    dispatch?: Prisma.DispatchUpdateOneRequiredWithoutLogsNestedInput;
};
export type DispatchLogUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dispatchId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchLogUncheckedUpdateManyWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dispatchId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchLogCreateManyDispatchInput = {
    id?: string;
    orderId: string;
    driverId: string;
    offeredAt: Date | string;
    expiresAt: Date | string;
    status: $Enums.DispatchStatus;
};
export type DispatchLogUpdateWithoutDispatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
    driver?: Prisma.DriverUpdateOneRequiredWithoutDispatchLogsNestedInput;
};
export type DispatchLogUncheckedUpdateWithoutDispatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchLogUncheckedUpdateManyWithoutDispatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    offeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDispatchStatusFieldUpdateOperationsInput | $Enums.DispatchStatus;
};
export type DispatchLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dispatchId?: boolean;
    orderId?: boolean;
    driverId?: boolean;
    offeredAt?: boolean;
    expiresAt?: boolean;
    status?: boolean;
    dispatch?: boolean | Prisma.DispatchDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispatchLog"]>;
export type DispatchLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dispatchId?: boolean;
    orderId?: boolean;
    driverId?: boolean;
    offeredAt?: boolean;
    expiresAt?: boolean;
    status?: boolean;
    dispatch?: boolean | Prisma.DispatchDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispatchLog"]>;
export type DispatchLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dispatchId?: boolean;
    orderId?: boolean;
    driverId?: boolean;
    offeredAt?: boolean;
    expiresAt?: boolean;
    status?: boolean;
    dispatch?: boolean | Prisma.DispatchDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispatchLog"]>;
export type DispatchLogSelectScalar = {
    id?: boolean;
    dispatchId?: boolean;
    orderId?: boolean;
    driverId?: boolean;
    offeredAt?: boolean;
    expiresAt?: boolean;
    status?: boolean;
};
export type DispatchLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dispatchId" | "orderId" | "driverId" | "offeredAt" | "expiresAt" | "status", ExtArgs["result"]["dispatchLog"]>;
export type DispatchLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dispatch?: boolean | Prisma.DispatchDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
};
export type DispatchLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dispatch?: boolean | Prisma.DispatchDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
};
export type DispatchLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dispatch?: boolean | Prisma.DispatchDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
};
export type $DispatchLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DispatchLog";
    objects: {
        dispatch: Prisma.$DispatchPayload<ExtArgs>;
        driver: Prisma.$DriverPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dispatchId: string;
        orderId: string;
        driverId: string;
        offeredAt: Date;
        expiresAt: Date;
        status: $Enums.DispatchStatus;
    }, ExtArgs["result"]["dispatchLog"]>;
    composites: {};
};
export type DispatchLogGetPayload<S extends boolean | null | undefined | DispatchLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload, S>;
export type DispatchLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DispatchLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DispatchLogCountAggregateInputType | true;
};
export interface DispatchLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DispatchLog'];
        meta: {
            name: 'DispatchLog';
        };
    };
    findUnique<T extends DispatchLogFindUniqueArgs>(args: Prisma.SelectSubset<T, DispatchLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DispatchLogClient<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DispatchLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DispatchLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DispatchLogClient<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DispatchLogFindFirstArgs>(args?: Prisma.SelectSubset<T, DispatchLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__DispatchLogClient<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DispatchLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DispatchLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DispatchLogClient<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DispatchLogFindManyArgs>(args?: Prisma.SelectSubset<T, DispatchLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DispatchLogCreateArgs>(args: Prisma.SelectSubset<T, DispatchLogCreateArgs<ExtArgs>>): Prisma.Prisma__DispatchLogClient<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DispatchLogCreateManyArgs>(args?: Prisma.SelectSubset<T, DispatchLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DispatchLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DispatchLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DispatchLogDeleteArgs>(args: Prisma.SelectSubset<T, DispatchLogDeleteArgs<ExtArgs>>): Prisma.Prisma__DispatchLogClient<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DispatchLogUpdateArgs>(args: Prisma.SelectSubset<T, DispatchLogUpdateArgs<ExtArgs>>): Prisma.Prisma__DispatchLogClient<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DispatchLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, DispatchLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DispatchLogUpdateManyArgs>(args: Prisma.SelectSubset<T, DispatchLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DispatchLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DispatchLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DispatchLogUpsertArgs>(args: Prisma.SelectSubset<T, DispatchLogUpsertArgs<ExtArgs>>): Prisma.Prisma__DispatchLogClient<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DispatchLogCountArgs>(args?: Prisma.Subset<T, DispatchLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DispatchLogCountAggregateOutputType> : number>;
    aggregate<T extends DispatchLogAggregateArgs>(args: Prisma.Subset<T, DispatchLogAggregateArgs>): Prisma.PrismaPromise<GetDispatchLogAggregateType<T>>;
    groupBy<T extends DispatchLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DispatchLogGroupByArgs['orderBy'];
    } : {
        orderBy?: DispatchLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DispatchLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispatchLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DispatchLogFieldRefs;
}
export interface Prisma__DispatchLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    dispatch<T extends Prisma.DispatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DispatchDefaultArgs<ExtArgs>>): Prisma.Prisma__DispatchClient<runtime.Types.Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    driver<T extends Prisma.DriverDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DriverDefaultArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DispatchLogFieldRefs {
    readonly id: Prisma.FieldRef<"DispatchLog", 'String'>;
    readonly dispatchId: Prisma.FieldRef<"DispatchLog", 'String'>;
    readonly orderId: Prisma.FieldRef<"DispatchLog", 'String'>;
    readonly driverId: Prisma.FieldRef<"DispatchLog", 'String'>;
    readonly offeredAt: Prisma.FieldRef<"DispatchLog", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"DispatchLog", 'DateTime'>;
    readonly status: Prisma.FieldRef<"DispatchLog", 'DispatchStatus'>;
}
export type DispatchLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelect<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    include?: Prisma.DispatchLogInclude<ExtArgs> | null;
    where: Prisma.DispatchLogWhereUniqueInput;
};
export type DispatchLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelect<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    include?: Prisma.DispatchLogInclude<ExtArgs> | null;
    where: Prisma.DispatchLogWhereUniqueInput;
};
export type DispatchLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DispatchLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DispatchLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DispatchLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelect<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    include?: Prisma.DispatchLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DispatchLogCreateInput, Prisma.DispatchLogUncheckedCreateInput>;
};
export type DispatchLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DispatchLogCreateManyInput | Prisma.DispatchLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DispatchLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    data: Prisma.DispatchLogCreateManyInput | Prisma.DispatchLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DispatchLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DispatchLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelect<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    include?: Prisma.DispatchLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DispatchLogUpdateInput, Prisma.DispatchLogUncheckedUpdateInput>;
    where: Prisma.DispatchLogWhereUniqueInput;
};
export type DispatchLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DispatchLogUpdateManyMutationInput, Prisma.DispatchLogUncheckedUpdateManyInput>;
    where?: Prisma.DispatchLogWhereInput;
    limit?: number;
};
export type DispatchLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DispatchLogUpdateManyMutationInput, Prisma.DispatchLogUncheckedUpdateManyInput>;
    where?: Prisma.DispatchLogWhereInput;
    limit?: number;
    include?: Prisma.DispatchLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DispatchLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelect<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    include?: Prisma.DispatchLogInclude<ExtArgs> | null;
    where: Prisma.DispatchLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.DispatchLogCreateInput, Prisma.DispatchLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DispatchLogUpdateInput, Prisma.DispatchLogUncheckedUpdateInput>;
};
export type DispatchLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelect<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    include?: Prisma.DispatchLogInclude<ExtArgs> | null;
    where: Prisma.DispatchLogWhereUniqueInput;
};
export type DispatchLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DispatchLogWhereInput;
    limit?: number;
};
export type DispatchLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DispatchLogSelect<ExtArgs> | null;
    omit?: Prisma.DispatchLogOmit<ExtArgs> | null;
    include?: Prisma.DispatchLogInclude<ExtArgs> | null;
};
