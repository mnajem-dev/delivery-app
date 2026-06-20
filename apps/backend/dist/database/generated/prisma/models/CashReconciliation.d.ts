import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type CashReconciliationModel = runtime.Types.Result.DefaultSelection<Prisma.$CashReconciliationPayload>;
export type AggregateCashReconciliation = {
    _count: CashReconciliationCountAggregateOutputType | null;
    _avg: CashReconciliationAvgAggregateOutputType | null;
    _sum: CashReconciliationSumAggregateOutputType | null;
    _min: CashReconciliationMinAggregateOutputType | null;
    _max: CashReconciliationMaxAggregateOutputType | null;
};
export type CashReconciliationAvgAggregateOutputType = {
    expectedAmountMinor: number | null;
    collectedAmountMinor: number | null;
    discrepancyMinor: number | null;
};
export type CashReconciliationSumAggregateOutputType = {
    expectedAmountMinor: number | null;
    collectedAmountMinor: number | null;
    discrepancyMinor: number | null;
};
export type CashReconciliationMinAggregateOutputType = {
    id: string | null;
    driverId: string | null;
    orderId: string | null;
    expectedAmountMinor: number | null;
    expectedAmountCurrency: string | null;
    collectedAmountMinor: number | null;
    collectedAmountCurrency: string | null;
    discrepancyMinor: number | null;
    discrepancyCurrency: string | null;
    status: $Enums.ReconStatus | null;
    resolvedBy: string | null;
};
export type CashReconciliationMaxAggregateOutputType = {
    id: string | null;
    driverId: string | null;
    orderId: string | null;
    expectedAmountMinor: number | null;
    expectedAmountCurrency: string | null;
    collectedAmountMinor: number | null;
    collectedAmountCurrency: string | null;
    discrepancyMinor: number | null;
    discrepancyCurrency: string | null;
    status: $Enums.ReconStatus | null;
    resolvedBy: string | null;
};
export type CashReconciliationCountAggregateOutputType = {
    id: number;
    driverId: number;
    orderId: number;
    expectedAmountMinor: number;
    expectedAmountCurrency: number;
    collectedAmountMinor: number;
    collectedAmountCurrency: number;
    discrepancyMinor: number;
    discrepancyCurrency: number;
    status: number;
    resolvedBy: number;
    _all: number;
};
export type CashReconciliationAvgAggregateInputType = {
    expectedAmountMinor?: true;
    collectedAmountMinor?: true;
    discrepancyMinor?: true;
};
export type CashReconciliationSumAggregateInputType = {
    expectedAmountMinor?: true;
    collectedAmountMinor?: true;
    discrepancyMinor?: true;
};
export type CashReconciliationMinAggregateInputType = {
    id?: true;
    driverId?: true;
    orderId?: true;
    expectedAmountMinor?: true;
    expectedAmountCurrency?: true;
    collectedAmountMinor?: true;
    collectedAmountCurrency?: true;
    discrepancyMinor?: true;
    discrepancyCurrency?: true;
    status?: true;
    resolvedBy?: true;
};
export type CashReconciliationMaxAggregateInputType = {
    id?: true;
    driverId?: true;
    orderId?: true;
    expectedAmountMinor?: true;
    expectedAmountCurrency?: true;
    collectedAmountMinor?: true;
    collectedAmountCurrency?: true;
    discrepancyMinor?: true;
    discrepancyCurrency?: true;
    status?: true;
    resolvedBy?: true;
};
export type CashReconciliationCountAggregateInputType = {
    id?: true;
    driverId?: true;
    orderId?: true;
    expectedAmountMinor?: true;
    expectedAmountCurrency?: true;
    collectedAmountMinor?: true;
    collectedAmountCurrency?: true;
    discrepancyMinor?: true;
    discrepancyCurrency?: true;
    status?: true;
    resolvedBy?: true;
    _all?: true;
};
export type CashReconciliationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashReconciliationWhereInput;
    orderBy?: Prisma.CashReconciliationOrderByWithRelationInput | Prisma.CashReconciliationOrderByWithRelationInput[];
    cursor?: Prisma.CashReconciliationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CashReconciliationCountAggregateInputType;
    _avg?: CashReconciliationAvgAggregateInputType;
    _sum?: CashReconciliationSumAggregateInputType;
    _min?: CashReconciliationMinAggregateInputType;
    _max?: CashReconciliationMaxAggregateInputType;
};
export type GetCashReconciliationAggregateType<T extends CashReconciliationAggregateArgs> = {
    [P in keyof T & keyof AggregateCashReconciliation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCashReconciliation[P]> : Prisma.GetScalarType<T[P], AggregateCashReconciliation[P]>;
};
export type CashReconciliationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashReconciliationWhereInput;
    orderBy?: Prisma.CashReconciliationOrderByWithAggregationInput | Prisma.CashReconciliationOrderByWithAggregationInput[];
    by: Prisma.CashReconciliationScalarFieldEnum[] | Prisma.CashReconciliationScalarFieldEnum;
    having?: Prisma.CashReconciliationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CashReconciliationCountAggregateInputType | true;
    _avg?: CashReconciliationAvgAggregateInputType;
    _sum?: CashReconciliationSumAggregateInputType;
    _min?: CashReconciliationMinAggregateInputType;
    _max?: CashReconciliationMaxAggregateInputType;
};
export type CashReconciliationGroupByOutputType = {
    id: string;
    driverId: string;
    orderId: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    resolvedBy: string | null;
    _count: CashReconciliationCountAggregateOutputType | null;
    _avg: CashReconciliationAvgAggregateOutputType | null;
    _sum: CashReconciliationSumAggregateOutputType | null;
    _min: CashReconciliationMinAggregateOutputType | null;
    _max: CashReconciliationMaxAggregateOutputType | null;
};
export type GetCashReconciliationGroupByPayload<T extends CashReconciliationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CashReconciliationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CashReconciliationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CashReconciliationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CashReconciliationGroupByOutputType[P]>;
}>>;
export type CashReconciliationWhereInput = {
    AND?: Prisma.CashReconciliationWhereInput | Prisma.CashReconciliationWhereInput[];
    OR?: Prisma.CashReconciliationWhereInput[];
    NOT?: Prisma.CashReconciliationWhereInput | Prisma.CashReconciliationWhereInput[];
    id?: Prisma.UuidFilter<"CashReconciliation"> | string;
    driverId?: Prisma.UuidFilter<"CashReconciliation"> | string;
    orderId?: Prisma.UuidFilter<"CashReconciliation"> | string;
    expectedAmountMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    expectedAmountCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    collectedAmountMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    collectedAmountCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    discrepancyMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    discrepancyCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    status?: Prisma.EnumReconStatusFilter<"CashReconciliation"> | $Enums.ReconStatus;
    resolvedBy?: Prisma.UuidNullableFilter<"CashReconciliation"> | string | null;
    driver?: Prisma.XOR<Prisma.DriverScalarRelationFilter, Prisma.DriverWhereInput>;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
};
export type CashReconciliationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    expectedAmountMinor?: Prisma.SortOrder;
    expectedAmountCurrency?: Prisma.SortOrder;
    collectedAmountMinor?: Prisma.SortOrder;
    collectedAmountCurrency?: Prisma.SortOrder;
    discrepancyMinor?: Prisma.SortOrder;
    discrepancyCurrency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    driver?: Prisma.DriverOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    admin?: Prisma.AdminOrderByWithRelationInput;
};
export type CashReconciliationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.CashReconciliationWhereInput | Prisma.CashReconciliationWhereInput[];
    OR?: Prisma.CashReconciliationWhereInput[];
    NOT?: Prisma.CashReconciliationWhereInput | Prisma.CashReconciliationWhereInput[];
    driverId?: Prisma.UuidFilter<"CashReconciliation"> | string;
    expectedAmountMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    expectedAmountCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    collectedAmountMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    collectedAmountCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    discrepancyMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    discrepancyCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    status?: Prisma.EnumReconStatusFilter<"CashReconciliation"> | $Enums.ReconStatus;
    resolvedBy?: Prisma.UuidNullableFilter<"CashReconciliation"> | string | null;
    driver?: Prisma.XOR<Prisma.DriverScalarRelationFilter, Prisma.DriverWhereInput>;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
}, "id" | "orderId">;
export type CashReconciliationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    expectedAmountMinor?: Prisma.SortOrder;
    expectedAmountCurrency?: Prisma.SortOrder;
    collectedAmountMinor?: Prisma.SortOrder;
    collectedAmountCurrency?: Prisma.SortOrder;
    discrepancyMinor?: Prisma.SortOrder;
    discrepancyCurrency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CashReconciliationCountOrderByAggregateInput;
    _avg?: Prisma.CashReconciliationAvgOrderByAggregateInput;
    _max?: Prisma.CashReconciliationMaxOrderByAggregateInput;
    _min?: Prisma.CashReconciliationMinOrderByAggregateInput;
    _sum?: Prisma.CashReconciliationSumOrderByAggregateInput;
};
export type CashReconciliationScalarWhereWithAggregatesInput = {
    AND?: Prisma.CashReconciliationScalarWhereWithAggregatesInput | Prisma.CashReconciliationScalarWhereWithAggregatesInput[];
    OR?: Prisma.CashReconciliationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CashReconciliationScalarWhereWithAggregatesInput | Prisma.CashReconciliationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CashReconciliation"> | string;
    driverId?: Prisma.UuidWithAggregatesFilter<"CashReconciliation"> | string;
    orderId?: Prisma.UuidWithAggregatesFilter<"CashReconciliation"> | string;
    expectedAmountMinor?: Prisma.IntWithAggregatesFilter<"CashReconciliation"> | number;
    expectedAmountCurrency?: Prisma.StringWithAggregatesFilter<"CashReconciliation"> | string;
    collectedAmountMinor?: Prisma.IntWithAggregatesFilter<"CashReconciliation"> | number;
    collectedAmountCurrency?: Prisma.StringWithAggregatesFilter<"CashReconciliation"> | string;
    discrepancyMinor?: Prisma.IntWithAggregatesFilter<"CashReconciliation"> | number;
    discrepancyCurrency?: Prisma.StringWithAggregatesFilter<"CashReconciliation"> | string;
    status?: Prisma.EnumReconStatusWithAggregatesFilter<"CashReconciliation"> | $Enums.ReconStatus;
    resolvedBy?: Prisma.UuidNullableWithAggregatesFilter<"CashReconciliation"> | string | null;
};
export type CashReconciliationCreateInput = {
    id?: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    driver: Prisma.DriverCreateNestedOneWithoutReconciliationsInput;
    order: Prisma.OrderCreateNestedOneWithoutReconciliationInput;
    admin?: Prisma.AdminCreateNestedOneWithoutResolvedReconciliationsInput;
};
export type CashReconciliationUncheckedCreateInput = {
    id?: string;
    driverId: string;
    orderId: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    resolvedBy?: string | null;
};
export type CashReconciliationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    driver?: Prisma.DriverUpdateOneRequiredWithoutReconciliationsNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutReconciliationNestedInput;
    admin?: Prisma.AdminUpdateOneWithoutResolvedReconciliationsNestedInput;
};
export type CashReconciliationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    resolvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CashReconciliationCreateManyInput = {
    id?: string;
    driverId: string;
    orderId: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    resolvedBy?: string | null;
};
export type CashReconciliationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
};
export type CashReconciliationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    resolvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CashReconciliationListRelationFilter = {
    every?: Prisma.CashReconciliationWhereInput;
    some?: Prisma.CashReconciliationWhereInput;
    none?: Prisma.CashReconciliationWhereInput;
};
export type CashReconciliationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CashReconciliationNullableScalarRelationFilter = {
    is?: Prisma.CashReconciliationWhereInput | null;
    isNot?: Prisma.CashReconciliationWhereInput | null;
};
export type CashReconciliationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    expectedAmountMinor?: Prisma.SortOrder;
    expectedAmountCurrency?: Prisma.SortOrder;
    collectedAmountMinor?: Prisma.SortOrder;
    collectedAmountCurrency?: Prisma.SortOrder;
    discrepancyMinor?: Prisma.SortOrder;
    discrepancyCurrency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedBy?: Prisma.SortOrder;
};
export type CashReconciliationAvgOrderByAggregateInput = {
    expectedAmountMinor?: Prisma.SortOrder;
    collectedAmountMinor?: Prisma.SortOrder;
    discrepancyMinor?: Prisma.SortOrder;
};
export type CashReconciliationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    expectedAmountMinor?: Prisma.SortOrder;
    expectedAmountCurrency?: Prisma.SortOrder;
    collectedAmountMinor?: Prisma.SortOrder;
    collectedAmountCurrency?: Prisma.SortOrder;
    discrepancyMinor?: Prisma.SortOrder;
    discrepancyCurrency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedBy?: Prisma.SortOrder;
};
export type CashReconciliationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    expectedAmountMinor?: Prisma.SortOrder;
    expectedAmountCurrency?: Prisma.SortOrder;
    collectedAmountMinor?: Prisma.SortOrder;
    collectedAmountCurrency?: Prisma.SortOrder;
    discrepancyMinor?: Prisma.SortOrder;
    discrepancyCurrency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    resolvedBy?: Prisma.SortOrder;
};
export type CashReconciliationSumOrderByAggregateInput = {
    expectedAmountMinor?: Prisma.SortOrder;
    collectedAmountMinor?: Prisma.SortOrder;
    discrepancyMinor?: Prisma.SortOrder;
};
export type CashReconciliationCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutDriverInput, Prisma.CashReconciliationUncheckedCreateWithoutDriverInput> | Prisma.CashReconciliationCreateWithoutDriverInput[] | Prisma.CashReconciliationUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutDriverInput | Prisma.CashReconciliationCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.CashReconciliationCreateManyDriverInputEnvelope;
    connect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
};
export type CashReconciliationUncheckedCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutDriverInput, Prisma.CashReconciliationUncheckedCreateWithoutDriverInput> | Prisma.CashReconciliationCreateWithoutDriverInput[] | Prisma.CashReconciliationUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutDriverInput | Prisma.CashReconciliationCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.CashReconciliationCreateManyDriverInputEnvelope;
    connect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
};
export type CashReconciliationUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutDriverInput, Prisma.CashReconciliationUncheckedCreateWithoutDriverInput> | Prisma.CashReconciliationCreateWithoutDriverInput[] | Prisma.CashReconciliationUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutDriverInput | Prisma.CashReconciliationCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.CashReconciliationUpsertWithWhereUniqueWithoutDriverInput | Prisma.CashReconciliationUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.CashReconciliationCreateManyDriverInputEnvelope;
    set?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    disconnect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    delete?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    connect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    update?: Prisma.CashReconciliationUpdateWithWhereUniqueWithoutDriverInput | Prisma.CashReconciliationUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.CashReconciliationUpdateManyWithWhereWithoutDriverInput | Prisma.CashReconciliationUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.CashReconciliationScalarWhereInput | Prisma.CashReconciliationScalarWhereInput[];
};
export type CashReconciliationUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutDriverInput, Prisma.CashReconciliationUncheckedCreateWithoutDriverInput> | Prisma.CashReconciliationCreateWithoutDriverInput[] | Prisma.CashReconciliationUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutDriverInput | Prisma.CashReconciliationCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.CashReconciliationUpsertWithWhereUniqueWithoutDriverInput | Prisma.CashReconciliationUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.CashReconciliationCreateManyDriverInputEnvelope;
    set?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    disconnect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    delete?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    connect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    update?: Prisma.CashReconciliationUpdateWithWhereUniqueWithoutDriverInput | Prisma.CashReconciliationUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.CashReconciliationUpdateManyWithWhereWithoutDriverInput | Prisma.CashReconciliationUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.CashReconciliationScalarWhereInput | Prisma.CashReconciliationScalarWhereInput[];
};
export type CashReconciliationCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutAdminInput, Prisma.CashReconciliationUncheckedCreateWithoutAdminInput> | Prisma.CashReconciliationCreateWithoutAdminInput[] | Prisma.CashReconciliationUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutAdminInput | Prisma.CashReconciliationCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.CashReconciliationCreateManyAdminInputEnvelope;
    connect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
};
export type CashReconciliationUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutAdminInput, Prisma.CashReconciliationUncheckedCreateWithoutAdminInput> | Prisma.CashReconciliationCreateWithoutAdminInput[] | Prisma.CashReconciliationUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutAdminInput | Prisma.CashReconciliationCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.CashReconciliationCreateManyAdminInputEnvelope;
    connect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
};
export type CashReconciliationUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutAdminInput, Prisma.CashReconciliationUncheckedCreateWithoutAdminInput> | Prisma.CashReconciliationCreateWithoutAdminInput[] | Prisma.CashReconciliationUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutAdminInput | Prisma.CashReconciliationCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.CashReconciliationUpsertWithWhereUniqueWithoutAdminInput | Prisma.CashReconciliationUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.CashReconciliationCreateManyAdminInputEnvelope;
    set?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    disconnect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    delete?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    connect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    update?: Prisma.CashReconciliationUpdateWithWhereUniqueWithoutAdminInput | Prisma.CashReconciliationUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.CashReconciliationUpdateManyWithWhereWithoutAdminInput | Prisma.CashReconciliationUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.CashReconciliationScalarWhereInput | Prisma.CashReconciliationScalarWhereInput[];
};
export type CashReconciliationUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutAdminInput, Prisma.CashReconciliationUncheckedCreateWithoutAdminInput> | Prisma.CashReconciliationCreateWithoutAdminInput[] | Prisma.CashReconciliationUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutAdminInput | Prisma.CashReconciliationCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.CashReconciliationUpsertWithWhereUniqueWithoutAdminInput | Prisma.CashReconciliationUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.CashReconciliationCreateManyAdminInputEnvelope;
    set?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    disconnect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    delete?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    connect?: Prisma.CashReconciliationWhereUniqueInput | Prisma.CashReconciliationWhereUniqueInput[];
    update?: Prisma.CashReconciliationUpdateWithWhereUniqueWithoutAdminInput | Prisma.CashReconciliationUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.CashReconciliationUpdateManyWithWhereWithoutAdminInput | Prisma.CashReconciliationUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.CashReconciliationScalarWhereInput | Prisma.CashReconciliationScalarWhereInput[];
};
export type CashReconciliationCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutOrderInput, Prisma.CashReconciliationUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutOrderInput;
    connect?: Prisma.CashReconciliationWhereUniqueInput;
};
export type CashReconciliationUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutOrderInput, Prisma.CashReconciliationUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutOrderInput;
    connect?: Prisma.CashReconciliationWhereUniqueInput;
};
export type CashReconciliationUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutOrderInput, Prisma.CashReconciliationUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.CashReconciliationUpsertWithoutOrderInput;
    disconnect?: Prisma.CashReconciliationWhereInput | boolean;
    delete?: Prisma.CashReconciliationWhereInput | boolean;
    connect?: Prisma.CashReconciliationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CashReconciliationUpdateToOneWithWhereWithoutOrderInput, Prisma.CashReconciliationUpdateWithoutOrderInput>, Prisma.CashReconciliationUncheckedUpdateWithoutOrderInput>;
};
export type CashReconciliationUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.CashReconciliationCreateWithoutOrderInput, Prisma.CashReconciliationUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.CashReconciliationCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.CashReconciliationUpsertWithoutOrderInput;
    disconnect?: Prisma.CashReconciliationWhereInput | boolean;
    delete?: Prisma.CashReconciliationWhereInput | boolean;
    connect?: Prisma.CashReconciliationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CashReconciliationUpdateToOneWithWhereWithoutOrderInput, Prisma.CashReconciliationUpdateWithoutOrderInput>, Prisma.CashReconciliationUncheckedUpdateWithoutOrderInput>;
};
export type EnumReconStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReconStatus;
};
export type CashReconciliationCreateWithoutDriverInput = {
    id?: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    order: Prisma.OrderCreateNestedOneWithoutReconciliationInput;
    admin?: Prisma.AdminCreateNestedOneWithoutResolvedReconciliationsInput;
};
export type CashReconciliationUncheckedCreateWithoutDriverInput = {
    id?: string;
    orderId: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    resolvedBy?: string | null;
};
export type CashReconciliationCreateOrConnectWithoutDriverInput = {
    where: Prisma.CashReconciliationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashReconciliationCreateWithoutDriverInput, Prisma.CashReconciliationUncheckedCreateWithoutDriverInput>;
};
export type CashReconciliationCreateManyDriverInputEnvelope = {
    data: Prisma.CashReconciliationCreateManyDriverInput | Prisma.CashReconciliationCreateManyDriverInput[];
    skipDuplicates?: boolean;
};
export type CashReconciliationUpsertWithWhereUniqueWithoutDriverInput = {
    where: Prisma.CashReconciliationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashReconciliationUpdateWithoutDriverInput, Prisma.CashReconciliationUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.CashReconciliationCreateWithoutDriverInput, Prisma.CashReconciliationUncheckedCreateWithoutDriverInput>;
};
export type CashReconciliationUpdateWithWhereUniqueWithoutDriverInput = {
    where: Prisma.CashReconciliationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashReconciliationUpdateWithoutDriverInput, Prisma.CashReconciliationUncheckedUpdateWithoutDriverInput>;
};
export type CashReconciliationUpdateManyWithWhereWithoutDriverInput = {
    where: Prisma.CashReconciliationScalarWhereInput;
    data: Prisma.XOR<Prisma.CashReconciliationUpdateManyMutationInput, Prisma.CashReconciliationUncheckedUpdateManyWithoutDriverInput>;
};
export type CashReconciliationScalarWhereInput = {
    AND?: Prisma.CashReconciliationScalarWhereInput | Prisma.CashReconciliationScalarWhereInput[];
    OR?: Prisma.CashReconciliationScalarWhereInput[];
    NOT?: Prisma.CashReconciliationScalarWhereInput | Prisma.CashReconciliationScalarWhereInput[];
    id?: Prisma.UuidFilter<"CashReconciliation"> | string;
    driverId?: Prisma.UuidFilter<"CashReconciliation"> | string;
    orderId?: Prisma.UuidFilter<"CashReconciliation"> | string;
    expectedAmountMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    expectedAmountCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    collectedAmountMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    collectedAmountCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    discrepancyMinor?: Prisma.IntFilter<"CashReconciliation"> | number;
    discrepancyCurrency?: Prisma.StringFilter<"CashReconciliation"> | string;
    status?: Prisma.EnumReconStatusFilter<"CashReconciliation"> | $Enums.ReconStatus;
    resolvedBy?: Prisma.UuidNullableFilter<"CashReconciliation"> | string | null;
};
export type CashReconciliationCreateWithoutAdminInput = {
    id?: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    driver: Prisma.DriverCreateNestedOneWithoutReconciliationsInput;
    order: Prisma.OrderCreateNestedOneWithoutReconciliationInput;
};
export type CashReconciliationUncheckedCreateWithoutAdminInput = {
    id?: string;
    driverId: string;
    orderId: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
};
export type CashReconciliationCreateOrConnectWithoutAdminInput = {
    where: Prisma.CashReconciliationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashReconciliationCreateWithoutAdminInput, Prisma.CashReconciliationUncheckedCreateWithoutAdminInput>;
};
export type CashReconciliationCreateManyAdminInputEnvelope = {
    data: Prisma.CashReconciliationCreateManyAdminInput | Prisma.CashReconciliationCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type CashReconciliationUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.CashReconciliationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CashReconciliationUpdateWithoutAdminInput, Prisma.CashReconciliationUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.CashReconciliationCreateWithoutAdminInput, Prisma.CashReconciliationUncheckedCreateWithoutAdminInput>;
};
export type CashReconciliationUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.CashReconciliationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CashReconciliationUpdateWithoutAdminInput, Prisma.CashReconciliationUncheckedUpdateWithoutAdminInput>;
};
export type CashReconciliationUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.CashReconciliationScalarWhereInput;
    data: Prisma.XOR<Prisma.CashReconciliationUpdateManyMutationInput, Prisma.CashReconciliationUncheckedUpdateManyWithoutAdminInput>;
};
export type CashReconciliationCreateWithoutOrderInput = {
    id?: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    driver: Prisma.DriverCreateNestedOneWithoutReconciliationsInput;
    admin?: Prisma.AdminCreateNestedOneWithoutResolvedReconciliationsInput;
};
export type CashReconciliationUncheckedCreateWithoutOrderInput = {
    id?: string;
    driverId: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    resolvedBy?: string | null;
};
export type CashReconciliationCreateOrConnectWithoutOrderInput = {
    where: Prisma.CashReconciliationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashReconciliationCreateWithoutOrderInput, Prisma.CashReconciliationUncheckedCreateWithoutOrderInput>;
};
export type CashReconciliationUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.CashReconciliationUpdateWithoutOrderInput, Prisma.CashReconciliationUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.CashReconciliationCreateWithoutOrderInput, Prisma.CashReconciliationUncheckedCreateWithoutOrderInput>;
    where?: Prisma.CashReconciliationWhereInput;
};
export type CashReconciliationUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.CashReconciliationWhereInput;
    data: Prisma.XOR<Prisma.CashReconciliationUpdateWithoutOrderInput, Prisma.CashReconciliationUncheckedUpdateWithoutOrderInput>;
};
export type CashReconciliationUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    driver?: Prisma.DriverUpdateOneRequiredWithoutReconciliationsNestedInput;
    admin?: Prisma.AdminUpdateOneWithoutResolvedReconciliationsNestedInput;
};
export type CashReconciliationUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    resolvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CashReconciliationCreateManyDriverInput = {
    id?: string;
    orderId: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
    resolvedBy?: string | null;
};
export type CashReconciliationUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    order?: Prisma.OrderUpdateOneRequiredWithoutReconciliationNestedInput;
    admin?: Prisma.AdminUpdateOneWithoutResolvedReconciliationsNestedInput;
};
export type CashReconciliationUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    resolvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CashReconciliationUncheckedUpdateManyWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    resolvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CashReconciliationCreateManyAdminInput = {
    id?: string;
    driverId: string;
    orderId: string;
    expectedAmountMinor: number;
    expectedAmountCurrency: string;
    collectedAmountMinor: number;
    collectedAmountCurrency: string;
    discrepancyMinor: number;
    discrepancyCurrency: string;
    status: $Enums.ReconStatus;
};
export type CashReconciliationUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
    driver?: Prisma.DriverUpdateOneRequiredWithoutReconciliationsNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutReconciliationNestedInput;
};
export type CashReconciliationUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
};
export type CashReconciliationUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    expectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    expectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    collectedAmountMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    collectedAmountCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    discrepancyMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    discrepancyCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReconStatusFieldUpdateOperationsInput | $Enums.ReconStatus;
};
export type CashReconciliationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    driverId?: boolean;
    orderId?: boolean;
    expectedAmountMinor?: boolean;
    expectedAmountCurrency?: boolean;
    collectedAmountMinor?: boolean;
    collectedAmountCurrency?: boolean;
    discrepancyMinor?: boolean;
    discrepancyCurrency?: boolean;
    status?: boolean;
    resolvedBy?: boolean;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.CashReconciliation$adminArgs<ExtArgs>;
}, ExtArgs["result"]["cashReconciliation"]>;
export type CashReconciliationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    driverId?: boolean;
    orderId?: boolean;
    expectedAmountMinor?: boolean;
    expectedAmountCurrency?: boolean;
    collectedAmountMinor?: boolean;
    collectedAmountCurrency?: boolean;
    discrepancyMinor?: boolean;
    discrepancyCurrency?: boolean;
    status?: boolean;
    resolvedBy?: boolean;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.CashReconciliation$adminArgs<ExtArgs>;
}, ExtArgs["result"]["cashReconciliation"]>;
export type CashReconciliationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    driverId?: boolean;
    orderId?: boolean;
    expectedAmountMinor?: boolean;
    expectedAmountCurrency?: boolean;
    collectedAmountMinor?: boolean;
    collectedAmountCurrency?: boolean;
    discrepancyMinor?: boolean;
    discrepancyCurrency?: boolean;
    status?: boolean;
    resolvedBy?: boolean;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.CashReconciliation$adminArgs<ExtArgs>;
}, ExtArgs["result"]["cashReconciliation"]>;
export type CashReconciliationSelectScalar = {
    id?: boolean;
    driverId?: boolean;
    orderId?: boolean;
    expectedAmountMinor?: boolean;
    expectedAmountCurrency?: boolean;
    collectedAmountMinor?: boolean;
    collectedAmountCurrency?: boolean;
    discrepancyMinor?: boolean;
    discrepancyCurrency?: boolean;
    status?: boolean;
    resolvedBy?: boolean;
};
export type CashReconciliationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "driverId" | "orderId" | "expectedAmountMinor" | "expectedAmountCurrency" | "collectedAmountMinor" | "collectedAmountCurrency" | "discrepancyMinor" | "discrepancyCurrency" | "status" | "resolvedBy", ExtArgs["result"]["cashReconciliation"]>;
export type CashReconciliationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.CashReconciliation$adminArgs<ExtArgs>;
};
export type CashReconciliationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.CashReconciliation$adminArgs<ExtArgs>;
};
export type CashReconciliationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.CashReconciliation$adminArgs<ExtArgs>;
};
export type $CashReconciliationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CashReconciliation";
    objects: {
        driver: Prisma.$DriverPayload<ExtArgs>;
        order: Prisma.$OrderPayload<ExtArgs>;
        admin: Prisma.$AdminPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        driverId: string;
        orderId: string;
        expectedAmountMinor: number;
        expectedAmountCurrency: string;
        collectedAmountMinor: number;
        collectedAmountCurrency: string;
        discrepancyMinor: number;
        discrepancyCurrency: string;
        status: $Enums.ReconStatus;
        resolvedBy: string | null;
    }, ExtArgs["result"]["cashReconciliation"]>;
    composites: {};
};
export type CashReconciliationGetPayload<S extends boolean | null | undefined | CashReconciliationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload, S>;
export type CashReconciliationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CashReconciliationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CashReconciliationCountAggregateInputType | true;
};
export interface CashReconciliationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CashReconciliation'];
        meta: {
            name: 'CashReconciliation';
        };
    };
    findUnique<T extends CashReconciliationFindUniqueArgs>(args: Prisma.SelectSubset<T, CashReconciliationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CashReconciliationClient<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CashReconciliationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CashReconciliationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashReconciliationClient<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CashReconciliationFindFirstArgs>(args?: Prisma.SelectSubset<T, CashReconciliationFindFirstArgs<ExtArgs>>): Prisma.Prisma__CashReconciliationClient<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CashReconciliationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CashReconciliationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CashReconciliationClient<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CashReconciliationFindManyArgs>(args?: Prisma.SelectSubset<T, CashReconciliationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CashReconciliationCreateArgs>(args: Prisma.SelectSubset<T, CashReconciliationCreateArgs<ExtArgs>>): Prisma.Prisma__CashReconciliationClient<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CashReconciliationCreateManyArgs>(args?: Prisma.SelectSubset<T, CashReconciliationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CashReconciliationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CashReconciliationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CashReconciliationDeleteArgs>(args: Prisma.SelectSubset<T, CashReconciliationDeleteArgs<ExtArgs>>): Prisma.Prisma__CashReconciliationClient<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CashReconciliationUpdateArgs>(args: Prisma.SelectSubset<T, CashReconciliationUpdateArgs<ExtArgs>>): Prisma.Prisma__CashReconciliationClient<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CashReconciliationDeleteManyArgs>(args?: Prisma.SelectSubset<T, CashReconciliationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CashReconciliationUpdateManyArgs>(args: Prisma.SelectSubset<T, CashReconciliationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CashReconciliationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CashReconciliationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CashReconciliationUpsertArgs>(args: Prisma.SelectSubset<T, CashReconciliationUpsertArgs<ExtArgs>>): Prisma.Prisma__CashReconciliationClient<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CashReconciliationCountArgs>(args?: Prisma.Subset<T, CashReconciliationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CashReconciliationCountAggregateOutputType> : number>;
    aggregate<T extends CashReconciliationAggregateArgs>(args: Prisma.Subset<T, CashReconciliationAggregateArgs>): Prisma.PrismaPromise<GetCashReconciliationAggregateType<T>>;
    groupBy<T extends CashReconciliationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CashReconciliationGroupByArgs['orderBy'];
    } : {
        orderBy?: CashReconciliationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CashReconciliationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashReconciliationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CashReconciliationFieldRefs;
}
export interface Prisma__CashReconciliationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    driver<T extends Prisma.DriverDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DriverDefaultArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    admin<T extends Prisma.CashReconciliation$adminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CashReconciliation$adminArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CashReconciliationFieldRefs {
    readonly id: Prisma.FieldRef<"CashReconciliation", 'String'>;
    readonly driverId: Prisma.FieldRef<"CashReconciliation", 'String'>;
    readonly orderId: Prisma.FieldRef<"CashReconciliation", 'String'>;
    readonly expectedAmountMinor: Prisma.FieldRef<"CashReconciliation", 'Int'>;
    readonly expectedAmountCurrency: Prisma.FieldRef<"CashReconciliation", 'String'>;
    readonly collectedAmountMinor: Prisma.FieldRef<"CashReconciliation", 'Int'>;
    readonly collectedAmountCurrency: Prisma.FieldRef<"CashReconciliation", 'String'>;
    readonly discrepancyMinor: Prisma.FieldRef<"CashReconciliation", 'Int'>;
    readonly discrepancyCurrency: Prisma.FieldRef<"CashReconciliation", 'String'>;
    readonly status: Prisma.FieldRef<"CashReconciliation", 'ReconStatus'>;
    readonly resolvedBy: Prisma.FieldRef<"CashReconciliation", 'String'>;
}
export type CashReconciliationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    where: Prisma.CashReconciliationWhereUniqueInput;
};
export type CashReconciliationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    where: Prisma.CashReconciliationWhereUniqueInput;
};
export type CashReconciliationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    where?: Prisma.CashReconciliationWhereInput;
    orderBy?: Prisma.CashReconciliationOrderByWithRelationInput | Prisma.CashReconciliationOrderByWithRelationInput[];
    cursor?: Prisma.CashReconciliationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashReconciliationScalarFieldEnum | Prisma.CashReconciliationScalarFieldEnum[];
};
export type CashReconciliationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    where?: Prisma.CashReconciliationWhereInput;
    orderBy?: Prisma.CashReconciliationOrderByWithRelationInput | Prisma.CashReconciliationOrderByWithRelationInput[];
    cursor?: Prisma.CashReconciliationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashReconciliationScalarFieldEnum | Prisma.CashReconciliationScalarFieldEnum[];
};
export type CashReconciliationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    where?: Prisma.CashReconciliationWhereInput;
    orderBy?: Prisma.CashReconciliationOrderByWithRelationInput | Prisma.CashReconciliationOrderByWithRelationInput[];
    cursor?: Prisma.CashReconciliationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CashReconciliationScalarFieldEnum | Prisma.CashReconciliationScalarFieldEnum[];
};
export type CashReconciliationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashReconciliationCreateInput, Prisma.CashReconciliationUncheckedCreateInput>;
};
export type CashReconciliationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CashReconciliationCreateManyInput | Prisma.CashReconciliationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CashReconciliationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    data: Prisma.CashReconciliationCreateManyInput | Prisma.CashReconciliationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CashReconciliationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CashReconciliationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashReconciliationUpdateInput, Prisma.CashReconciliationUncheckedUpdateInput>;
    where: Prisma.CashReconciliationWhereUniqueInput;
};
export type CashReconciliationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CashReconciliationUpdateManyMutationInput, Prisma.CashReconciliationUncheckedUpdateManyInput>;
    where?: Prisma.CashReconciliationWhereInput;
    limit?: number;
};
export type CashReconciliationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CashReconciliationUpdateManyMutationInput, Prisma.CashReconciliationUncheckedUpdateManyInput>;
    where?: Prisma.CashReconciliationWhereInput;
    limit?: number;
    include?: Prisma.CashReconciliationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CashReconciliationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    where: Prisma.CashReconciliationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CashReconciliationCreateInput, Prisma.CashReconciliationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CashReconciliationUpdateInput, Prisma.CashReconciliationUncheckedUpdateInput>;
};
export type CashReconciliationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
    where: Prisma.CashReconciliationWhereUniqueInput;
};
export type CashReconciliationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashReconciliationWhereInput;
    limit?: number;
};
export type CashReconciliation$adminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where?: Prisma.AdminWhereInput;
};
export type CashReconciliationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CashReconciliationSelect<ExtArgs> | null;
    omit?: Prisma.CashReconciliationOmit<ExtArgs> | null;
    include?: Prisma.CashReconciliationInclude<ExtArgs> | null;
};
