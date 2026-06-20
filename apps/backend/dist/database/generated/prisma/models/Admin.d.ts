import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AdminModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminPayload>;
export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
};
export type AdminMinAggregateOutputType = {
    userId: string | null;
    department: string | null;
};
export type AdminMaxAggregateOutputType = {
    userId: string | null;
    department: string | null;
};
export type AdminCountAggregateOutputType = {
    userId: number;
    department: number;
    _all: number;
};
export type AdminMinAggregateInputType = {
    userId?: true;
    department?: true;
};
export type AdminMaxAggregateInputType = {
    userId?: true;
    department?: true;
};
export type AdminCountAggregateInputType = {
    userId?: true;
    department?: true;
    _all?: true;
};
export type AdminAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminWhereInput;
    orderBy?: Prisma.AdminOrderByWithRelationInput | Prisma.AdminOrderByWithRelationInput[];
    cursor?: Prisma.AdminWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminCountAggregateInputType;
    _min?: AdminMinAggregateInputType;
    _max?: AdminMaxAggregateInputType;
};
export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdmin[P]> : Prisma.GetScalarType<T[P], AggregateAdmin[P]>;
};
export type AdminGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminWhereInput;
    orderBy?: Prisma.AdminOrderByWithAggregationInput | Prisma.AdminOrderByWithAggregationInput[];
    by: Prisma.AdminScalarFieldEnum[] | Prisma.AdminScalarFieldEnum;
    having?: Prisma.AdminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminCountAggregateInputType | true;
    _min?: AdminMinAggregateInputType;
    _max?: AdminMaxAggregateInputType;
};
export type AdminGroupByOutputType = {
    userId: string;
    department: string;
    _count: AdminCountAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
};
export type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminGroupByOutputType[P]>;
}>>;
export type AdminWhereInput = {
    AND?: Prisma.AdminWhereInput | Prisma.AdminWhereInput[];
    OR?: Prisma.AdminWhereInput[];
    NOT?: Prisma.AdminWhereInput | Prisma.AdminWhereInput[];
    userId?: Prisma.UuidFilter<"Admin"> | string;
    department?: Prisma.StringFilter<"Admin"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    resolvedReconciliations?: Prisma.CashReconciliationListRelationFilter;
};
export type AdminOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    resolvedReconciliations?: Prisma.CashReconciliationOrderByRelationAggregateInput;
};
export type AdminWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.AdminWhereInput | Prisma.AdminWhereInput[];
    OR?: Prisma.AdminWhereInput[];
    NOT?: Prisma.AdminWhereInput | Prisma.AdminWhereInput[];
    department?: Prisma.StringFilter<"Admin"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    resolvedReconciliations?: Prisma.CashReconciliationListRelationFilter;
}, "userId">;
export type AdminOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    _count?: Prisma.AdminCountOrderByAggregateInput;
    _max?: Prisma.AdminMaxOrderByAggregateInput;
    _min?: Prisma.AdminMinOrderByAggregateInput;
};
export type AdminScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminScalarWhereWithAggregatesInput | Prisma.AdminScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminScalarWhereWithAggregatesInput | Prisma.AdminScalarWhereWithAggregatesInput[];
    userId?: Prisma.UuidWithAggregatesFilter<"Admin"> | string;
    department?: Prisma.StringWithAggregatesFilter<"Admin"> | string;
};
export type AdminCreateInput = {
    department: string;
    user: Prisma.UserCreateNestedOneWithoutAdminInput;
    resolvedReconciliations?: Prisma.CashReconciliationCreateNestedManyWithoutAdminInput;
};
export type AdminUncheckedCreateInput = {
    userId: string;
    department: string;
    resolvedReconciliations?: Prisma.CashReconciliationUncheckedCreateNestedManyWithoutAdminInput;
};
export type AdminUpdateInput = {
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAdminNestedInput;
    resolvedReconciliations?: Prisma.CashReconciliationUpdateManyWithoutAdminNestedInput;
};
export type AdminUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    resolvedReconciliations?: Prisma.CashReconciliationUncheckedUpdateManyWithoutAdminNestedInput;
};
export type AdminCreateManyInput = {
    userId: string;
    department: string;
};
export type AdminUpdateManyMutationInput = {
    department?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminNullableScalarRelationFilter = {
    is?: Prisma.AdminWhereInput | null;
    isNot?: Prisma.AdminWhereInput | null;
};
export type AdminCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
};
export type AdminMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
};
export type AdminMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
};
export type AdminCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutUserInput, Prisma.AdminUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutUserInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutUserInput, Prisma.AdminUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutUserInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutUserInput, Prisma.AdminUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AdminUpsertWithoutUserInput;
    disconnect?: Prisma.AdminWhereInput | boolean;
    delete?: Prisma.AdminWhereInput | boolean;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutUserInput, Prisma.AdminUpdateWithoutUserInput>, Prisma.AdminUncheckedUpdateWithoutUserInput>;
};
export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutUserInput, Prisma.AdminUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AdminUpsertWithoutUserInput;
    disconnect?: Prisma.AdminWhereInput | boolean;
    delete?: Prisma.AdminWhereInput | boolean;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutUserInput, Prisma.AdminUpdateWithoutUserInput>, Prisma.AdminUncheckedUpdateWithoutUserInput>;
};
export type AdminCreateNestedOneWithoutResolvedReconciliationsInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutResolvedReconciliationsInput, Prisma.AdminUncheckedCreateWithoutResolvedReconciliationsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutResolvedReconciliationsInput;
    connect?: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateOneWithoutResolvedReconciliationsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminCreateWithoutResolvedReconciliationsInput, Prisma.AdminUncheckedCreateWithoutResolvedReconciliationsInput>;
    connectOrCreate?: Prisma.AdminCreateOrConnectWithoutResolvedReconciliationsInput;
    upsert?: Prisma.AdminUpsertWithoutResolvedReconciliationsInput;
    disconnect?: Prisma.AdminWhereInput | boolean;
    delete?: Prisma.AdminWhereInput | boolean;
    connect?: Prisma.AdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUpdateToOneWithWhereWithoutResolvedReconciliationsInput, Prisma.AdminUpdateWithoutResolvedReconciliationsInput>, Prisma.AdminUncheckedUpdateWithoutResolvedReconciliationsInput>;
};
export type AdminCreateWithoutUserInput = {
    department: string;
    resolvedReconciliations?: Prisma.CashReconciliationCreateNestedManyWithoutAdminInput;
};
export type AdminUncheckedCreateWithoutUserInput = {
    department: string;
    resolvedReconciliations?: Prisma.CashReconciliationUncheckedCreateNestedManyWithoutAdminInput;
};
export type AdminCreateOrConnectWithoutUserInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutUserInput, Prisma.AdminUncheckedCreateWithoutUserInput>;
};
export type AdminUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutUserInput, Prisma.AdminUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutUserInput, Prisma.AdminUncheckedCreateWithoutUserInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutUserInput, Prisma.AdminUncheckedUpdateWithoutUserInput>;
};
export type AdminUpdateWithoutUserInput = {
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    resolvedReconciliations?: Prisma.CashReconciliationUpdateManyWithoutAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutUserInput = {
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    resolvedReconciliations?: Prisma.CashReconciliationUncheckedUpdateManyWithoutAdminNestedInput;
};
export type AdminCreateWithoutResolvedReconciliationsInput = {
    department: string;
    user: Prisma.UserCreateNestedOneWithoutAdminInput;
};
export type AdminUncheckedCreateWithoutResolvedReconciliationsInput = {
    userId: string;
    department: string;
};
export type AdminCreateOrConnectWithoutResolvedReconciliationsInput = {
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateWithoutResolvedReconciliationsInput, Prisma.AdminUncheckedCreateWithoutResolvedReconciliationsInput>;
};
export type AdminUpsertWithoutResolvedReconciliationsInput = {
    update: Prisma.XOR<Prisma.AdminUpdateWithoutResolvedReconciliationsInput, Prisma.AdminUncheckedUpdateWithoutResolvedReconciliationsInput>;
    create: Prisma.XOR<Prisma.AdminCreateWithoutResolvedReconciliationsInput, Prisma.AdminUncheckedCreateWithoutResolvedReconciliationsInput>;
    where?: Prisma.AdminWhereInput;
};
export type AdminUpdateToOneWithWhereWithoutResolvedReconciliationsInput = {
    where?: Prisma.AdminWhereInput;
    data: Prisma.XOR<Prisma.AdminUpdateWithoutResolvedReconciliationsInput, Prisma.AdminUncheckedUpdateWithoutResolvedReconciliationsInput>;
};
export type AdminUpdateWithoutResolvedReconciliationsInput = {
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAdminNestedInput;
};
export type AdminUncheckedUpdateWithoutResolvedReconciliationsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminCountOutputType = {
    resolvedReconciliations: number;
};
export type AdminCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resolvedReconciliations?: boolean | AdminCountOutputTypeCountResolvedReconciliationsArgs;
};
export type AdminCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminCountOutputTypeSelect<ExtArgs> | null;
};
export type AdminCountOutputTypeCountResolvedReconciliationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CashReconciliationWhereInput;
};
export type AdminSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    department?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedReconciliations?: boolean | Prisma.Admin$resolvedReconciliationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin"]>;
export type AdminSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    department?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin"]>;
export type AdminSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    department?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin"]>;
export type AdminSelectScalar = {
    userId?: boolean;
    department?: boolean;
};
export type AdminOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "department", ExtArgs["result"]["admin"]>;
export type AdminInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolvedReconciliations?: boolean | Prisma.Admin$resolvedReconciliationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdminIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AdminIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AdminPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Admin";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        resolvedReconciliations: Prisma.$CashReconciliationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        department: string;
    }, ExtArgs["result"]["admin"]>;
    composites: {};
};
export type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminPayload, S>;
export type AdminCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminCountAggregateInputType | true;
};
export interface AdminDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Admin'];
        meta: {
            name: 'Admin';
        };
    };
    findUnique<T extends AdminFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminFindManyArgs>(args?: Prisma.SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminCreateArgs>(args: Prisma.SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminDeleteArgs>(args: Prisma.SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminUpdateArgs>(args: Prisma.SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminUpsertArgs>(args: Prisma.SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminCountArgs>(args?: Prisma.Subset<T, AdminCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminCountAggregateOutputType> : number>;
    aggregate<T extends AdminAggregateArgs>(args: Prisma.Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>;
    groupBy<T extends AdminGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminFieldRefs;
}
export interface Prisma__AdminClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    resolvedReconciliations<T extends Prisma.Admin$resolvedReconciliationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Admin$resolvedReconciliationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CashReconciliationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminFieldRefs {
    readonly userId: Prisma.FieldRef<"Admin", 'String'>;
    readonly department: Prisma.FieldRef<"Admin", 'String'>;
}
export type AdminFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where: Prisma.AdminWhereUniqueInput;
};
export type AdminFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where: Prisma.AdminWhereUniqueInput;
};
export type AdminFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where?: Prisma.AdminWhereInput;
    orderBy?: Prisma.AdminOrderByWithRelationInput | Prisma.AdminOrderByWithRelationInput[];
    cursor?: Prisma.AdminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
export type AdminFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where?: Prisma.AdminWhereInput;
    orderBy?: Prisma.AdminOrderByWithRelationInput | Prisma.AdminOrderByWithRelationInput[];
    cursor?: Prisma.AdminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
export type AdminFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where?: Prisma.AdminWhereInput;
    orderBy?: Prisma.AdminOrderByWithRelationInput | Prisma.AdminOrderByWithRelationInput[];
    cursor?: Prisma.AdminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
export type AdminCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminCreateInput, Prisma.AdminUncheckedCreateInput>;
};
export type AdminCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminCreateManyInput | Prisma.AdminCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    data: Prisma.AdminCreateManyInput | Prisma.AdminCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdminIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdminUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminUpdateInput, Prisma.AdminUncheckedUpdateInput>;
    where: Prisma.AdminWhereUniqueInput;
};
export type AdminUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminUpdateManyMutationInput, Prisma.AdminUncheckedUpdateManyInput>;
    where?: Prisma.AdminWhereInput;
    limit?: number;
};
export type AdminUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminUpdateManyMutationInput, Prisma.AdminUncheckedUpdateManyInput>;
    where?: Prisma.AdminWhereInput;
    limit?: number;
    include?: Prisma.AdminIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdminUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where: Prisma.AdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminCreateInput, Prisma.AdminUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminUpdateInput, Prisma.AdminUncheckedUpdateInput>;
};
export type AdminDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where: Prisma.AdminWhereUniqueInput;
};
export type AdminDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminWhereInput;
    limit?: number;
};
export type Admin$resolvedReconciliationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AdminDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminSelect<ExtArgs> | null;
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    include?: Prisma.AdminInclude<ExtArgs> | null;
};
