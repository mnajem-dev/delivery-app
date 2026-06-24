import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type DriverModel = runtime.Types.Result.DefaultSelection<Prisma.$DriverPayload>;
export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null;
    _avg: DriverAvgAggregateOutputType | null;
    _sum: DriverSumAggregateOutputType | null;
    _min: DriverMinAggregateOutputType | null;
    _max: DriverMaxAggregateOutputType | null;
};
export type DriverAvgAggregateOutputType = {
    currentLat: number | null;
    currentLng: number | null;
    totalEarningsMinor: number | null;
    cashCollectedMinor: number | null;
};
export type DriverSumAggregateOutputType = {
    currentLat: number | null;
    currentLng: number | null;
    totalEarningsMinor: number | null;
    cashCollectedMinor: number | null;
};
export type DriverMinAggregateOutputType = {
    userId: string | null;
    vehicleInfo: string | null;
    status: $Enums.DriverStatus | null;
    currentLat: number | null;
    currentLng: number | null;
    totalEarningsMinor: number | null;
    totalEarningsCurrency: string | null;
    cashCollectedMinor: number | null;
    cashCollectedCurrency: string | null;
    idDocUrl: string | null;
    licenseDocUrl: string | null;
    vehicleDocUrl: string | null;
    approvalStatus: $Enums.ApprovalEnum | null;
};
export type DriverMaxAggregateOutputType = {
    userId: string | null;
    vehicleInfo: string | null;
    status: $Enums.DriverStatus | null;
    currentLat: number | null;
    currentLng: number | null;
    totalEarningsMinor: number | null;
    totalEarningsCurrency: string | null;
    cashCollectedMinor: number | null;
    cashCollectedCurrency: string | null;
    idDocUrl: string | null;
    licenseDocUrl: string | null;
    vehicleDocUrl: string | null;
    approvalStatus: $Enums.ApprovalEnum | null;
};
export type DriverCountAggregateOutputType = {
    userId: number;
    vehicleInfo: number;
    status: number;
    currentLat: number;
    currentLng: number;
    totalEarningsMinor: number;
    totalEarningsCurrency: number;
    cashCollectedMinor: number;
    cashCollectedCurrency: number;
    idDocUrl: number;
    licenseDocUrl: number;
    vehicleDocUrl: number;
    approvalStatus: number;
    _all: number;
};
export type DriverAvgAggregateInputType = {
    currentLat?: true;
    currentLng?: true;
    totalEarningsMinor?: true;
    cashCollectedMinor?: true;
};
export type DriverSumAggregateInputType = {
    currentLat?: true;
    currentLng?: true;
    totalEarningsMinor?: true;
    cashCollectedMinor?: true;
};
export type DriverMinAggregateInputType = {
    userId?: true;
    vehicleInfo?: true;
    status?: true;
    currentLat?: true;
    currentLng?: true;
    totalEarningsMinor?: true;
    totalEarningsCurrency?: true;
    cashCollectedMinor?: true;
    cashCollectedCurrency?: true;
    idDocUrl?: true;
    licenseDocUrl?: true;
    vehicleDocUrl?: true;
    approvalStatus?: true;
};
export type DriverMaxAggregateInputType = {
    userId?: true;
    vehicleInfo?: true;
    status?: true;
    currentLat?: true;
    currentLng?: true;
    totalEarningsMinor?: true;
    totalEarningsCurrency?: true;
    cashCollectedMinor?: true;
    cashCollectedCurrency?: true;
    idDocUrl?: true;
    licenseDocUrl?: true;
    vehicleDocUrl?: true;
    approvalStatus?: true;
};
export type DriverCountAggregateInputType = {
    userId?: true;
    vehicleInfo?: true;
    status?: true;
    currentLat?: true;
    currentLng?: true;
    totalEarningsMinor?: true;
    totalEarningsCurrency?: true;
    cashCollectedMinor?: true;
    cashCollectedCurrency?: true;
    idDocUrl?: true;
    licenseDocUrl?: true;
    vehicleDocUrl?: true;
    approvalStatus?: true;
    _all?: true;
};
export type DriverAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DriverCountAggregateInputType;
    _avg?: DriverAvgAggregateInputType;
    _sum?: DriverSumAggregateInputType;
    _min?: DriverMinAggregateInputType;
    _max?: DriverMaxAggregateInputType;
};
export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
    [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDriver[P]> : Prisma.GetScalarType<T[P], AggregateDriver[P]>;
};
export type DriverGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithAggregationInput | Prisma.DriverOrderByWithAggregationInput[];
    by: Prisma.DriverScalarFieldEnum[] | Prisma.DriverScalarFieldEnum;
    having?: Prisma.DriverScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DriverCountAggregateInputType | true;
    _avg?: DriverAvgAggregateInputType;
    _sum?: DriverSumAggregateInputType;
    _min?: DriverMinAggregateInputType;
    _max?: DriverMaxAggregateInputType;
};
export type DriverGroupByOutputType = {
    userId: string;
    vehicleInfo: string | null;
    status: $Enums.DriverStatus;
    currentLat: number | null;
    currentLng: number | null;
    totalEarningsMinor: number;
    totalEarningsCurrency: string;
    cashCollectedMinor: number;
    cashCollectedCurrency: string;
    idDocUrl: string | null;
    licenseDocUrl: string | null;
    vehicleDocUrl: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    _count: DriverCountAggregateOutputType | null;
    _avg: DriverAvgAggregateOutputType | null;
    _sum: DriverSumAggregateOutputType | null;
    _min: DriverMinAggregateOutputType | null;
    _max: DriverMaxAggregateOutputType | null;
};
export type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DriverGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DriverGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DriverGroupByOutputType[P]>;
}>>;
export type DriverWhereInput = {
    AND?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    OR?: Prisma.DriverWhereInput[];
    NOT?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    userId?: Prisma.UuidFilter<"Driver"> | string;
    vehicleInfo?: Prisma.StringNullableFilter<"Driver"> | string | null;
    status?: Prisma.EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus;
    currentLat?: Prisma.FloatNullableFilter<"Driver"> | number | null;
    currentLng?: Prisma.FloatNullableFilter<"Driver"> | number | null;
    totalEarningsMinor?: Prisma.IntFilter<"Driver"> | number;
    totalEarningsCurrency?: Prisma.StringFilter<"Driver"> | string;
    cashCollectedMinor?: Prisma.IntFilter<"Driver"> | number;
    cashCollectedCurrency?: Prisma.StringFilter<"Driver"> | string;
    idDocUrl?: Prisma.StringNullableFilter<"Driver"> | string | null;
    licenseDocUrl?: Prisma.StringNullableFilter<"Driver"> | string | null;
    vehicleDocUrl?: Prisma.StringNullableFilter<"Driver"> | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFilter<"Driver"> | $Enums.ApprovalEnum;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    orders?: Prisma.OrderListRelationFilter;
    dispatchLogs?: Prisma.DispatchLogListRelationFilter;
    reconciliations?: Prisma.CashReconciliationListRelationFilter;
};
export type DriverOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    vehicleInfo?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentLng?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalEarningsMinor?: Prisma.SortOrder;
    totalEarningsCurrency?: Prisma.SortOrder;
    cashCollectedMinor?: Prisma.SortOrder;
    cashCollectedCurrency?: Prisma.SortOrder;
    idDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    licenseDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    vehicleDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    dispatchLogs?: Prisma.DispatchLogOrderByRelationAggregateInput;
    reconciliations?: Prisma.CashReconciliationOrderByRelationAggregateInput;
};
export type DriverWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    OR?: Prisma.DriverWhereInput[];
    NOT?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    vehicleInfo?: Prisma.StringNullableFilter<"Driver"> | string | null;
    status?: Prisma.EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus;
    currentLat?: Prisma.FloatNullableFilter<"Driver"> | number | null;
    currentLng?: Prisma.FloatNullableFilter<"Driver"> | number | null;
    totalEarningsMinor?: Prisma.IntFilter<"Driver"> | number;
    totalEarningsCurrency?: Prisma.StringFilter<"Driver"> | string;
    cashCollectedMinor?: Prisma.IntFilter<"Driver"> | number;
    cashCollectedCurrency?: Prisma.StringFilter<"Driver"> | string;
    idDocUrl?: Prisma.StringNullableFilter<"Driver"> | string | null;
    licenseDocUrl?: Prisma.StringNullableFilter<"Driver"> | string | null;
    vehicleDocUrl?: Prisma.StringNullableFilter<"Driver"> | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFilter<"Driver"> | $Enums.ApprovalEnum;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    orders?: Prisma.OrderListRelationFilter;
    dispatchLogs?: Prisma.DispatchLogListRelationFilter;
    reconciliations?: Prisma.CashReconciliationListRelationFilter;
}, "userId">;
export type DriverOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    vehicleInfo?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentLng?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalEarningsMinor?: Prisma.SortOrder;
    totalEarningsCurrency?: Prisma.SortOrder;
    cashCollectedMinor?: Prisma.SortOrder;
    cashCollectedCurrency?: Prisma.SortOrder;
    idDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    licenseDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    vehicleDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
    _count?: Prisma.DriverCountOrderByAggregateInput;
    _avg?: Prisma.DriverAvgOrderByAggregateInput;
    _max?: Prisma.DriverMaxOrderByAggregateInput;
    _min?: Prisma.DriverMinOrderByAggregateInput;
    _sum?: Prisma.DriverSumOrderByAggregateInput;
};
export type DriverScalarWhereWithAggregatesInput = {
    AND?: Prisma.DriverScalarWhereWithAggregatesInput | Prisma.DriverScalarWhereWithAggregatesInput[];
    OR?: Prisma.DriverScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DriverScalarWhereWithAggregatesInput | Prisma.DriverScalarWhereWithAggregatesInput[];
    userId?: Prisma.UuidWithAggregatesFilter<"Driver"> | string;
    vehicleInfo?: Prisma.StringNullableWithAggregatesFilter<"Driver"> | string | null;
    status?: Prisma.EnumDriverStatusWithAggregatesFilter<"Driver"> | $Enums.DriverStatus;
    currentLat?: Prisma.FloatNullableWithAggregatesFilter<"Driver"> | number | null;
    currentLng?: Prisma.FloatNullableWithAggregatesFilter<"Driver"> | number | null;
    totalEarningsMinor?: Prisma.IntWithAggregatesFilter<"Driver"> | number;
    totalEarningsCurrency?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    cashCollectedMinor?: Prisma.IntWithAggregatesFilter<"Driver"> | number;
    cashCollectedCurrency?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    idDocUrl?: Prisma.StringNullableWithAggregatesFilter<"Driver"> | string | null;
    licenseDocUrl?: Prisma.StringNullableWithAggregatesFilter<"Driver"> | string | null;
    vehicleDocUrl?: Prisma.StringNullableWithAggregatesFilter<"Driver"> | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumWithAggregatesFilter<"Driver"> | $Enums.ApprovalEnum;
};
export type DriverCreateInput = {
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    user: Prisma.UserCreateNestedOneWithoutDriverInput;
    orders?: Prisma.OrderCreateNestedManyWithoutDriverInput;
    dispatchLogs?: Prisma.DispatchLogCreateNestedManyWithoutDriverInput;
    reconciliations?: Prisma.CashReconciliationCreateNestedManyWithoutDriverInput;
};
export type DriverUncheckedCreateInput = {
    userId: string;
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutDriverInput;
    dispatchLogs?: Prisma.DispatchLogUncheckedCreateNestedManyWithoutDriverInput;
    reconciliations?: Prisma.CashReconciliationUncheckedCreateNestedManyWithoutDriverInput;
};
export type DriverUpdateInput = {
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    user?: Prisma.UserUpdateOneRequiredWithoutDriverNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutDriverNestedInput;
    dispatchLogs?: Prisma.DispatchLogUpdateManyWithoutDriverNestedInput;
    reconciliations?: Prisma.CashReconciliationUpdateManyWithoutDriverNestedInput;
};
export type DriverUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutDriverNestedInput;
    dispatchLogs?: Prisma.DispatchLogUncheckedUpdateManyWithoutDriverNestedInput;
    reconciliations?: Prisma.CashReconciliationUncheckedUpdateManyWithoutDriverNestedInput;
};
export type DriverCreateManyInput = {
    userId: string;
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
};
export type DriverUpdateManyMutationInput = {
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
};
export type DriverUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
};
export type DriverNullableScalarRelationFilter = {
    is?: Prisma.DriverWhereInput | null;
    isNot?: Prisma.DriverWhereInput | null;
};
export type DriverCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    vehicleInfo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentLat?: Prisma.SortOrder;
    currentLng?: Prisma.SortOrder;
    totalEarningsMinor?: Prisma.SortOrder;
    totalEarningsCurrency?: Prisma.SortOrder;
    cashCollectedMinor?: Prisma.SortOrder;
    cashCollectedCurrency?: Prisma.SortOrder;
    idDocUrl?: Prisma.SortOrder;
    licenseDocUrl?: Prisma.SortOrder;
    vehicleDocUrl?: Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
};
export type DriverAvgOrderByAggregateInput = {
    currentLat?: Prisma.SortOrder;
    currentLng?: Prisma.SortOrder;
    totalEarningsMinor?: Prisma.SortOrder;
    cashCollectedMinor?: Prisma.SortOrder;
};
export type DriverMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    vehicleInfo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentLat?: Prisma.SortOrder;
    currentLng?: Prisma.SortOrder;
    totalEarningsMinor?: Prisma.SortOrder;
    totalEarningsCurrency?: Prisma.SortOrder;
    cashCollectedMinor?: Prisma.SortOrder;
    cashCollectedCurrency?: Prisma.SortOrder;
    idDocUrl?: Prisma.SortOrder;
    licenseDocUrl?: Prisma.SortOrder;
    vehicleDocUrl?: Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
};
export type DriverMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    vehicleInfo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentLat?: Prisma.SortOrder;
    currentLng?: Prisma.SortOrder;
    totalEarningsMinor?: Prisma.SortOrder;
    totalEarningsCurrency?: Prisma.SortOrder;
    cashCollectedMinor?: Prisma.SortOrder;
    cashCollectedCurrency?: Prisma.SortOrder;
    idDocUrl?: Prisma.SortOrder;
    licenseDocUrl?: Prisma.SortOrder;
    vehicleDocUrl?: Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
};
export type DriverSumOrderByAggregateInput = {
    currentLat?: Prisma.SortOrder;
    currentLng?: Prisma.SortOrder;
    totalEarningsMinor?: Prisma.SortOrder;
    cashCollectedMinor?: Prisma.SortOrder;
};
export type DriverScalarRelationFilter = {
    is?: Prisma.DriverWhereInput;
    isNot?: Prisma.DriverWhereInput;
};
export type DriverCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutUserInput, Prisma.DriverUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutUserInput;
    connect?: Prisma.DriverWhereUniqueInput;
};
export type DriverUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutUserInput, Prisma.DriverUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutUserInput;
    connect?: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutUserInput, Prisma.DriverUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutUserInput;
    upsert?: Prisma.DriverUpsertWithoutUserInput;
    disconnect?: Prisma.DriverWhereInput | boolean;
    delete?: Prisma.DriverWhereInput | boolean;
    connect?: Prisma.DriverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DriverUpdateToOneWithWhereWithoutUserInput, Prisma.DriverUpdateWithoutUserInput>, Prisma.DriverUncheckedUpdateWithoutUserInput>;
};
export type DriverUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutUserInput, Prisma.DriverUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutUserInput;
    upsert?: Prisma.DriverUpsertWithoutUserInput;
    disconnect?: Prisma.DriverWhereInput | boolean;
    delete?: Prisma.DriverWhereInput | boolean;
    connect?: Prisma.DriverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DriverUpdateToOneWithWhereWithoutUserInput, Prisma.DriverUpdateWithoutUserInput>, Prisma.DriverUncheckedUpdateWithoutUserInput>;
};
export type EnumDriverStatusFieldUpdateOperationsInput = {
    set?: $Enums.DriverStatus;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumApprovalEnumFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalEnum;
};
export type DriverCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutOrdersInput, Prisma.DriverUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutOrdersInput, Prisma.DriverUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.DriverUpsertWithoutOrdersInput;
    disconnect?: Prisma.DriverWhereInput | boolean;
    delete?: Prisma.DriverWhereInput | boolean;
    connect?: Prisma.DriverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DriverUpdateToOneWithWhereWithoutOrdersInput, Prisma.DriverUpdateWithoutOrdersInput>, Prisma.DriverUncheckedUpdateWithoutOrdersInput>;
};
export type DriverCreateNestedOneWithoutDispatchLogsInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutDispatchLogsInput, Prisma.DriverUncheckedCreateWithoutDispatchLogsInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutDispatchLogsInput;
    connect?: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateOneRequiredWithoutDispatchLogsNestedInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutDispatchLogsInput, Prisma.DriverUncheckedCreateWithoutDispatchLogsInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutDispatchLogsInput;
    upsert?: Prisma.DriverUpsertWithoutDispatchLogsInput;
    connect?: Prisma.DriverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DriverUpdateToOneWithWhereWithoutDispatchLogsInput, Prisma.DriverUpdateWithoutDispatchLogsInput>, Prisma.DriverUncheckedUpdateWithoutDispatchLogsInput>;
};
export type DriverCreateNestedOneWithoutReconciliationsInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutReconciliationsInput, Prisma.DriverUncheckedCreateWithoutReconciliationsInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutReconciliationsInput;
    connect?: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateOneRequiredWithoutReconciliationsNestedInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutReconciliationsInput, Prisma.DriverUncheckedCreateWithoutReconciliationsInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutReconciliationsInput;
    upsert?: Prisma.DriverUpsertWithoutReconciliationsInput;
    connect?: Prisma.DriverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DriverUpdateToOneWithWhereWithoutReconciliationsInput, Prisma.DriverUpdateWithoutReconciliationsInput>, Prisma.DriverUncheckedUpdateWithoutReconciliationsInput>;
};
export type DriverCreateWithoutUserInput = {
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    orders?: Prisma.OrderCreateNestedManyWithoutDriverInput;
    dispatchLogs?: Prisma.DispatchLogCreateNestedManyWithoutDriverInput;
    reconciliations?: Prisma.CashReconciliationCreateNestedManyWithoutDriverInput;
};
export type DriverUncheckedCreateWithoutUserInput = {
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutDriverInput;
    dispatchLogs?: Prisma.DispatchLogUncheckedCreateNestedManyWithoutDriverInput;
    reconciliations?: Prisma.CashReconciliationUncheckedCreateNestedManyWithoutDriverInput;
};
export type DriverCreateOrConnectWithoutUserInput = {
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateWithoutUserInput, Prisma.DriverUncheckedCreateWithoutUserInput>;
};
export type DriverUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.DriverUpdateWithoutUserInput, Prisma.DriverUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.DriverCreateWithoutUserInput, Prisma.DriverUncheckedCreateWithoutUserInput>;
    where?: Prisma.DriverWhereInput;
};
export type DriverUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.DriverWhereInput;
    data: Prisma.XOR<Prisma.DriverUpdateWithoutUserInput, Prisma.DriverUncheckedUpdateWithoutUserInput>;
};
export type DriverUpdateWithoutUserInput = {
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    orders?: Prisma.OrderUpdateManyWithoutDriverNestedInput;
    dispatchLogs?: Prisma.DispatchLogUpdateManyWithoutDriverNestedInput;
    reconciliations?: Prisma.CashReconciliationUpdateManyWithoutDriverNestedInput;
};
export type DriverUncheckedUpdateWithoutUserInput = {
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutDriverNestedInput;
    dispatchLogs?: Prisma.DispatchLogUncheckedUpdateManyWithoutDriverNestedInput;
    reconciliations?: Prisma.CashReconciliationUncheckedUpdateManyWithoutDriverNestedInput;
};
export type DriverCreateWithoutOrdersInput = {
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    user: Prisma.UserCreateNestedOneWithoutDriverInput;
    dispatchLogs?: Prisma.DispatchLogCreateNestedManyWithoutDriverInput;
    reconciliations?: Prisma.CashReconciliationCreateNestedManyWithoutDriverInput;
};
export type DriverUncheckedCreateWithoutOrdersInput = {
    userId: string;
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    dispatchLogs?: Prisma.DispatchLogUncheckedCreateNestedManyWithoutDriverInput;
    reconciliations?: Prisma.CashReconciliationUncheckedCreateNestedManyWithoutDriverInput;
};
export type DriverCreateOrConnectWithoutOrdersInput = {
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateWithoutOrdersInput, Prisma.DriverUncheckedCreateWithoutOrdersInput>;
};
export type DriverUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.DriverUpdateWithoutOrdersInput, Prisma.DriverUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.DriverCreateWithoutOrdersInput, Prisma.DriverUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.DriverWhereInput;
};
export type DriverUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.DriverWhereInput;
    data: Prisma.XOR<Prisma.DriverUpdateWithoutOrdersInput, Prisma.DriverUncheckedUpdateWithoutOrdersInput>;
};
export type DriverUpdateWithoutOrdersInput = {
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    user?: Prisma.UserUpdateOneRequiredWithoutDriverNestedInput;
    dispatchLogs?: Prisma.DispatchLogUpdateManyWithoutDriverNestedInput;
    reconciliations?: Prisma.CashReconciliationUpdateManyWithoutDriverNestedInput;
};
export type DriverUncheckedUpdateWithoutOrdersInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    dispatchLogs?: Prisma.DispatchLogUncheckedUpdateManyWithoutDriverNestedInput;
    reconciliations?: Prisma.CashReconciliationUncheckedUpdateManyWithoutDriverNestedInput;
};
export type DriverCreateWithoutDispatchLogsInput = {
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    user: Prisma.UserCreateNestedOneWithoutDriverInput;
    orders?: Prisma.OrderCreateNestedManyWithoutDriverInput;
    reconciliations?: Prisma.CashReconciliationCreateNestedManyWithoutDriverInput;
};
export type DriverUncheckedCreateWithoutDispatchLogsInput = {
    userId: string;
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutDriverInput;
    reconciliations?: Prisma.CashReconciliationUncheckedCreateNestedManyWithoutDriverInput;
};
export type DriverCreateOrConnectWithoutDispatchLogsInput = {
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateWithoutDispatchLogsInput, Prisma.DriverUncheckedCreateWithoutDispatchLogsInput>;
};
export type DriverUpsertWithoutDispatchLogsInput = {
    update: Prisma.XOR<Prisma.DriverUpdateWithoutDispatchLogsInput, Prisma.DriverUncheckedUpdateWithoutDispatchLogsInput>;
    create: Prisma.XOR<Prisma.DriverCreateWithoutDispatchLogsInput, Prisma.DriverUncheckedCreateWithoutDispatchLogsInput>;
    where?: Prisma.DriverWhereInput;
};
export type DriverUpdateToOneWithWhereWithoutDispatchLogsInput = {
    where?: Prisma.DriverWhereInput;
    data: Prisma.XOR<Prisma.DriverUpdateWithoutDispatchLogsInput, Prisma.DriverUncheckedUpdateWithoutDispatchLogsInput>;
};
export type DriverUpdateWithoutDispatchLogsInput = {
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    user?: Prisma.UserUpdateOneRequiredWithoutDriverNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutDriverNestedInput;
    reconciliations?: Prisma.CashReconciliationUpdateManyWithoutDriverNestedInput;
};
export type DriverUncheckedUpdateWithoutDispatchLogsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutDriverNestedInput;
    reconciliations?: Prisma.CashReconciliationUncheckedUpdateManyWithoutDriverNestedInput;
};
export type DriverCreateWithoutReconciliationsInput = {
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    user: Prisma.UserCreateNestedOneWithoutDriverInput;
    orders?: Prisma.OrderCreateNestedManyWithoutDriverInput;
    dispatchLogs?: Prisma.DispatchLogCreateNestedManyWithoutDriverInput;
};
export type DriverUncheckedCreateWithoutReconciliationsInput = {
    userId: string;
    vehicleInfo?: string | null;
    status: $Enums.DriverStatus;
    currentLat?: number | null;
    currentLng?: number | null;
    totalEarningsMinor?: number;
    totalEarningsCurrency?: string;
    cashCollectedMinor?: number;
    cashCollectedCurrency?: string;
    idDocUrl?: string | null;
    licenseDocUrl?: string | null;
    vehicleDocUrl?: string | null;
    approvalStatus: $Enums.ApprovalEnum;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutDriverInput;
    dispatchLogs?: Prisma.DispatchLogUncheckedCreateNestedManyWithoutDriverInput;
};
export type DriverCreateOrConnectWithoutReconciliationsInput = {
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateWithoutReconciliationsInput, Prisma.DriverUncheckedCreateWithoutReconciliationsInput>;
};
export type DriverUpsertWithoutReconciliationsInput = {
    update: Prisma.XOR<Prisma.DriverUpdateWithoutReconciliationsInput, Prisma.DriverUncheckedUpdateWithoutReconciliationsInput>;
    create: Prisma.XOR<Prisma.DriverCreateWithoutReconciliationsInput, Prisma.DriverUncheckedCreateWithoutReconciliationsInput>;
    where?: Prisma.DriverWhereInput;
};
export type DriverUpdateToOneWithWhereWithoutReconciliationsInput = {
    where?: Prisma.DriverWhereInput;
    data: Prisma.XOR<Prisma.DriverUpdateWithoutReconciliationsInput, Prisma.DriverUncheckedUpdateWithoutReconciliationsInput>;
};
export type DriverUpdateWithoutReconciliationsInput = {
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    user?: Prisma.UserUpdateOneRequiredWithoutDriverNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutDriverNestedInput;
    dispatchLogs?: Prisma.DispatchLogUpdateManyWithoutDriverNestedInput;
};
export type DriverUncheckedUpdateWithoutReconciliationsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleInfo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    currentLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalEarningsMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    totalEarningsCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    cashCollectedMinor?: Prisma.IntFieldUpdateOperationsInput | number;
    cashCollectedCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    idDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    licenseDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.EnumApprovalEnumFieldUpdateOperationsInput | $Enums.ApprovalEnum;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutDriverNestedInput;
    dispatchLogs?: Prisma.DispatchLogUncheckedUpdateManyWithoutDriverNestedInput;
};
export type DriverCountOutputType = {
    orders: number;
    dispatchLogs: number;
    reconciliations: number;
};
export type DriverCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | DriverCountOutputTypeCountOrdersArgs;
    dispatchLogs?: boolean | DriverCountOutputTypeCountDispatchLogsArgs;
    reconciliations?: boolean | DriverCountOutputTypeCountReconciliationsArgs;
};
export type DriverCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverCountOutputTypeSelect<ExtArgs> | null;
};
export type DriverCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type DriverCountOutputTypeCountDispatchLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DispatchLogWhereInput;
};
export type DriverCountOutputTypeCountReconciliationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashReconciliationWhereInput;
};
export type DriverSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    vehicleInfo?: boolean;
    status?: boolean;
    currentLat?: boolean;
    currentLng?: boolean;
    totalEarningsMinor?: boolean;
    totalEarningsCurrency?: boolean;
    cashCollectedMinor?: boolean;
    cashCollectedCurrency?: boolean;
    idDocUrl?: boolean;
    licenseDocUrl?: boolean;
    vehicleDocUrl?: boolean;
    approvalStatus?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.Driver$ordersArgs<ExtArgs>;
    dispatchLogs?: boolean | Prisma.Driver$dispatchLogsArgs<ExtArgs>;
    reconciliations?: boolean | Prisma.Driver$reconciliationsArgs<ExtArgs>;
    _count?: boolean | Prisma.DriverCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    vehicleInfo?: boolean;
    status?: boolean;
    currentLat?: boolean;
    currentLng?: boolean;
    totalEarningsMinor?: boolean;
    totalEarningsCurrency?: boolean;
    cashCollectedMinor?: boolean;
    cashCollectedCurrency?: boolean;
    idDocUrl?: boolean;
    licenseDocUrl?: boolean;
    vehicleDocUrl?: boolean;
    approvalStatus?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    vehicleInfo?: boolean;
    status?: boolean;
    currentLat?: boolean;
    currentLng?: boolean;
    totalEarningsMinor?: boolean;
    totalEarningsCurrency?: boolean;
    cashCollectedMinor?: boolean;
    cashCollectedCurrency?: boolean;
    idDocUrl?: boolean;
    licenseDocUrl?: boolean;
    vehicleDocUrl?: boolean;
    approvalStatus?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectScalar = {
    userId?: boolean;
    vehicleInfo?: boolean;
    status?: boolean;
    currentLat?: boolean;
    currentLng?: boolean;
    totalEarningsMinor?: boolean;
    totalEarningsCurrency?: boolean;
    cashCollectedMinor?: boolean;
    cashCollectedCurrency?: boolean;
    idDocUrl?: boolean;
    licenseDocUrl?: boolean;
    vehicleDocUrl?: boolean;
    approvalStatus?: boolean;
};
export type DriverOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "vehicleInfo" | "status" | "currentLat" | "currentLng" | "totalEarningsMinor" | "totalEarningsCurrency" | "cashCollectedMinor" | "cashCollectedCurrency" | "idDocUrl" | "licenseDocUrl" | "vehicleDocUrl" | "approvalStatus", ExtArgs["result"]["driver"]>;
export type DriverInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.Driver$ordersArgs<ExtArgs>;
    dispatchLogs?: boolean | Prisma.Driver$dispatchLogsArgs<ExtArgs>;
    reconciliations?: boolean | Prisma.Driver$reconciliationsArgs<ExtArgs>;
    _count?: boolean | Prisma.DriverCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DriverIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DriverIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DriverPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Driver";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        orders: Prisma.$OrderPayload<ExtArgs>[];
        dispatchLogs: Prisma.$DispatchLogPayload<ExtArgs>[];
        reconciliations: Prisma.$CashReconciliationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        vehicleInfo: string | null;
        status: $Enums.DriverStatus;
        currentLat: number | null;
        currentLng: number | null;
        totalEarningsMinor: number;
        totalEarningsCurrency: string;
        cashCollectedMinor: number;
        cashCollectedCurrency: string;
        idDocUrl: string | null;
        licenseDocUrl: string | null;
        vehicleDocUrl: string | null;
        approvalStatus: $Enums.ApprovalEnum;
    }, ExtArgs["result"]["driver"]>;
    composites: {};
};
export type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DriverPayload, S>;
export type DriverCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DriverCountAggregateInputType | true;
};
export interface DriverDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Driver'];
        meta: {
            name: 'Driver';
        };
    };
    findUnique<T extends DriverFindUniqueArgs>(args: Prisma.SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DriverFindFirstArgs>(args?: Prisma.SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DriverFindManyArgs>(args?: Prisma.SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DriverCreateArgs>(args: Prisma.SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DriverCreateManyArgs>(args?: Prisma.SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DriverDeleteArgs>(args: Prisma.SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DriverUpdateArgs>(args: Prisma.SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DriverDeleteManyArgs>(args?: Prisma.SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DriverUpdateManyArgs>(args: Prisma.SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DriverUpsertArgs>(args: Prisma.SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DriverCountArgs>(args?: Prisma.Subset<T, DriverCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DriverCountAggregateOutputType> : number>;
    aggregate<T extends DriverAggregateArgs>(args: Prisma.Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>;
    groupBy<T extends DriverGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DriverGroupByArgs['orderBy'];
    } : {
        orderBy?: DriverGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DriverFieldRefs;
}
export interface Prisma__DriverClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.Driver$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Driver$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    dispatchLogs<T extends Prisma.Driver$dispatchLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Driver$dispatchLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DispatchLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reconciliations<T extends Prisma.Driver$reconciliationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Driver$reconciliationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DriverFieldRefs {
    readonly userId: Prisma.FieldRef<"Driver", 'String'>;
    readonly vehicleInfo: Prisma.FieldRef<"Driver", 'String'>;
    readonly status: Prisma.FieldRef<"Driver", 'DriverStatus'>;
    readonly currentLat: Prisma.FieldRef<"Driver", 'Float'>;
    readonly currentLng: Prisma.FieldRef<"Driver", 'Float'>;
    readonly totalEarningsMinor: Prisma.FieldRef<"Driver", 'Int'>;
    readonly totalEarningsCurrency: Prisma.FieldRef<"Driver", 'String'>;
    readonly cashCollectedMinor: Prisma.FieldRef<"Driver", 'Int'>;
    readonly cashCollectedCurrency: Prisma.FieldRef<"Driver", 'String'>;
    readonly idDocUrl: Prisma.FieldRef<"Driver", 'String'>;
    readonly licenseDocUrl: Prisma.FieldRef<"Driver", 'String'>;
    readonly vehicleDocUrl: Prisma.FieldRef<"Driver", 'String'>;
    readonly approvalStatus: Prisma.FieldRef<"Driver", 'ApprovalEnum'>;
}
export type DriverFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverCreateInput, Prisma.DriverUncheckedCreateInput>;
};
export type DriverCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DriverCreateManyInput | Prisma.DriverCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DriverCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    data: Prisma.DriverCreateManyInput | Prisma.DriverCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DriverIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DriverUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverUpdateInput, Prisma.DriverUncheckedUpdateInput>;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DriverUpdateManyMutationInput, Prisma.DriverUncheckedUpdateManyInput>;
    where?: Prisma.DriverWhereInput;
    limit?: number;
};
export type DriverUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverUpdateManyMutationInput, Prisma.DriverUncheckedUpdateManyInput>;
    where?: Prisma.DriverWhereInput;
    limit?: number;
    include?: Prisma.DriverIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DriverUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateInput, Prisma.DriverUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DriverUpdateInput, Prisma.DriverUncheckedUpdateInput>;
};
export type DriverDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    limit?: number;
};
export type Driver$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Driver$dispatchLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Driver$reconciliationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DriverDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
};
