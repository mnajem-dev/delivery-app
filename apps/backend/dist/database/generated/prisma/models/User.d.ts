import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    role: $Enums.RoleEnum | null;
    status: $Enums.StatusEnum | null;
    createdAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    role: $Enums.RoleEnum | null;
    status: $Enums.StatusEnum | null;
    createdAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    passwordHash: number;
    role: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    status?: true;
    createdAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    status?: true;
    createdAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string | null;
    phone: string;
    passwordHash: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleEnumFilter<"User"> | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFilter<"User"> | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientNullableScalarRelationFilter, Prisma.ClientWhereInput> | null;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    vendor?: Prisma.XOR<Prisma.VendorNullableScalarRelationFilter, Prisma.VendorWhereInput> | null;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
    driver?: Prisma.DriverOrderByWithRelationInput;
    vendor?: Prisma.VendorOrderByWithRelationInput;
    admin?: Prisma.AdminOrderByWithRelationInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    phone?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleEnumFilter<"User"> | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFilter<"User"> | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientNullableScalarRelationFilter, Prisma.ClientWhereInput> | null;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    vendor?: Prisma.XOR<Prisma.VendorNullableScalarRelationFilter, Prisma.VendorWhereInput> | null;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    notifications?: Prisma.NotificationListRelationFilter;
}, "id" | "email" | "phone">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    phone?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleEnumWithAggregatesFilter<"User"> | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumWithAggregatesFilter<"User"> | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientCreateNestedOneWithoutUserInput;
    driver?: Prisma.DriverCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientUncheckedCreateNestedOneWithoutUserInput;
    driver?: Prisma.DriverUncheckedCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorUncheckedCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneWithoutUserNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUncheckedUpdateOneWithoutUserNestedInput;
    driver?: Prisma.DriverUncheckedUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUncheckedUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.RoleEnum;
};
export type EnumStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.StatusEnum;
};
export type UserCreateNestedOneWithoutClientInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutClientInput, Prisma.UserUncheckedCreateWithoutClientInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutClientInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutClientInput, Prisma.UserUncheckedCreateWithoutClientInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutClientInput;
    upsert?: Prisma.UserUpsertWithoutClientInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutClientInput, Prisma.UserUpdateWithoutClientInput>, Prisma.UserUncheckedUpdateWithoutClientInput>;
};
export type UserCreateNestedOneWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDriverInput, Prisma.UserUncheckedCreateWithoutDriverInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDriverInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDriverInput, Prisma.UserUncheckedCreateWithoutDriverInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDriverInput;
    upsert?: Prisma.UserUpsertWithoutDriverInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDriverInput, Prisma.UserUpdateWithoutDriverInput>, Prisma.UserUncheckedUpdateWithoutDriverInput>;
};
export type UserCreateNestedOneWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVendorInput, Prisma.UserUncheckedCreateWithoutVendorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVendorInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVendorInput, Prisma.UserUncheckedCreateWithoutVendorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVendorInput;
    upsert?: Prisma.UserUpsertWithoutVendorInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutVendorInput, Prisma.UserUpdateWithoutVendorInput>, Prisma.UserUncheckedUpdateWithoutVendorInput>;
};
export type UserCreateNestedOneWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdminInput, Prisma.UserUncheckedCreateWithoutAdminInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdminInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdminInput, Prisma.UserUncheckedCreateWithoutAdminInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdminInput;
    upsert?: Prisma.UserUpsertWithoutAdminInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAdminInput, Prisma.UserUpdateWithoutAdminInput>, Prisma.UserUncheckedUpdateWithoutAdminInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateWithoutClientInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    driver?: Prisma.DriverCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutClientInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    driver?: Prisma.DriverUncheckedCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorUncheckedCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutClientInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutClientInput, Prisma.UserUncheckedCreateWithoutClientInput>;
};
export type UserUpsertWithoutClientInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutClientInput, Prisma.UserUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutClientInput, Prisma.UserUncheckedCreateWithoutClientInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutClientInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutClientInput, Prisma.UserUncheckedUpdateWithoutClientInput>;
};
export type UserUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driver?: Prisma.DriverUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driver?: Prisma.DriverUncheckedUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUncheckedUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutDriverInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutDriverInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientUncheckedCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorUncheckedCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutDriverInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDriverInput, Prisma.UserUncheckedCreateWithoutDriverInput>;
};
export type UserUpsertWithoutDriverInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDriverInput, Prisma.UserUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDriverInput, Prisma.UserUncheckedCreateWithoutDriverInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDriverInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDriverInput, Prisma.UserUncheckedUpdateWithoutDriverInput>;
};
export type UserUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUncheckedUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUncheckedUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutVendorInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientCreateNestedOneWithoutUserInput;
    driver?: Prisma.DriverCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutVendorInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientUncheckedCreateNestedOneWithoutUserInput;
    driver?: Prisma.DriverUncheckedCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutVendorInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutVendorInput, Prisma.UserUncheckedCreateWithoutVendorInput>;
};
export type UserUpsertWithoutVendorInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutVendorInput, Prisma.UserUncheckedUpdateWithoutVendorInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutVendorInput, Prisma.UserUncheckedCreateWithoutVendorInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutVendorInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutVendorInput, Prisma.UserUncheckedUpdateWithoutVendorInput>;
};
export type UserUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneWithoutUserNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUncheckedUpdateOneWithoutUserNestedInput;
    driver?: Prisma.DriverUncheckedUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAdminInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientCreateNestedOneWithoutUserInput;
    driver?: Prisma.DriverCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAdminInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientUncheckedCreateNestedOneWithoutUserInput;
    driver?: Prisma.DriverUncheckedCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorUncheckedCreateNestedOneWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAdminInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdminInput, Prisma.UserUncheckedCreateWithoutAdminInput>;
};
export type UserUpsertWithoutAdminInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAdminInput, Prisma.UserUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdminInput, Prisma.UserUncheckedCreateWithoutAdminInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAdminInput, Prisma.UserUncheckedUpdateWithoutAdminInput>;
};
export type UserUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneWithoutUserNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUncheckedUpdateOneWithoutUserNestedInput;
    driver?: Prisma.DriverUncheckedUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUncheckedUpdateOneWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientCreateNestedOneWithoutUserInput;
    driver?: Prisma.DriverCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email?: string | null;
    phone: string;
    passwordHash?: string | null;
    role: $Enums.RoleEnum;
    status: $Enums.StatusEnum;
    createdAt?: Date | string;
    client?: Prisma.ClientUncheckedCreateNestedOneWithoutUserInput;
    driver?: Prisma.DriverUncheckedCreateNestedOneWithoutUserInput;
    vendor?: Prisma.VendorUncheckedCreateNestedOneWithoutUserInput;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneWithoutUserNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    status?: Prisma.EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUncheckedUpdateOneWithoutUserNestedInput;
    driver?: Prisma.DriverUncheckedUpdateOneWithoutUserNestedInput;
    vendor?: Prisma.VendorUncheckedUpdateOneWithoutUserNestedInput;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCountOutputType = {
    notifications: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
    client?: boolean | Prisma.User$clientArgs<ExtArgs>;
    driver?: boolean | Prisma.User$driverArgs<ExtArgs>;
    vendor?: boolean | Prisma.User$vendorArgs<ExtArgs>;
    admin?: boolean | Prisma.User$adminArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "passwordHash" | "role" | "status" | "createdAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.User$clientArgs<ExtArgs>;
    driver?: boolean | Prisma.User$driverArgs<ExtArgs>;
    vendor?: boolean | Prisma.User$vendorArgs<ExtArgs>;
    admin?: boolean | Prisma.User$adminArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs> | null;
        driver: Prisma.$DriverPayload<ExtArgs> | null;
        vendor: Prisma.$VendorPayload<ExtArgs> | null;
        admin: Prisma.$AdminPayload<ExtArgs> | null;
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string | null;
        phone: string;
        passwordHash: string | null;
        role: $Enums.RoleEnum;
        status: $Enums.StatusEnum;
        createdAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.User$clientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$clientArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    driver<T extends Prisma.User$driverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$driverArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    vendor<T extends Prisma.User$vendorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$vendorArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    admin<T extends Prisma.User$adminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$adminArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'RoleEnum'>;
    readonly status: Prisma.FieldRef<"User", 'StatusEnum'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$clientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
};
export type User$driverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
};
export type User$vendorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
};
export type User$adminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where?: Prisma.AdminWhereInput;
};
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
