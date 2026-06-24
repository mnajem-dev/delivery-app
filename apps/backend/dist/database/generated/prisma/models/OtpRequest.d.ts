import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type OtpRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$OtpRequestPayload>;
export type AggregateOtpRequest = {
    _count: OtpRequestCountAggregateOutputType | null;
    _avg: OtpRequestAvgAggregateOutputType | null;
    _sum: OtpRequestSumAggregateOutputType | null;
    _min: OtpRequestMinAggregateOutputType | null;
    _max: OtpRequestMaxAggregateOutputType | null;
};
export type OtpRequestAvgAggregateOutputType = {
    attempts: number | null;
};
export type OtpRequestSumAggregateOutputType = {
    attempts: number | null;
};
export type OtpRequestMinAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    phone: string | null;
    attempts: number | null;
    blockedUntil: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type OtpRequestMaxAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    phone: string | null;
    attempts: number | null;
    blockedUntil: Date | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type OtpRequestCountAggregateOutputType = {
    id: number;
    requestId: number;
    phone: number;
    attempts: number;
    blockedUntil: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
};
export type OtpRequestAvgAggregateInputType = {
    attempts?: true;
};
export type OtpRequestSumAggregateInputType = {
    attempts?: true;
};
export type OtpRequestMinAggregateInputType = {
    id?: true;
    requestId?: true;
    phone?: true;
    attempts?: true;
    blockedUntil?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type OtpRequestMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    phone?: true;
    attempts?: true;
    blockedUntil?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type OtpRequestCountAggregateInputType = {
    id?: true;
    requestId?: true;
    phone?: true;
    attempts?: true;
    blockedUntil?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
};
export type OtpRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpRequestWhereInput;
    orderBy?: Prisma.OtpRequestOrderByWithRelationInput | Prisma.OtpRequestOrderByWithRelationInput[];
    cursor?: Prisma.OtpRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OtpRequestCountAggregateInputType;
    _avg?: OtpRequestAvgAggregateInputType;
    _sum?: OtpRequestSumAggregateInputType;
    _min?: OtpRequestMinAggregateInputType;
    _max?: OtpRequestMaxAggregateInputType;
};
export type GetOtpRequestAggregateType<T extends OtpRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateOtpRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOtpRequest[P]> : Prisma.GetScalarType<T[P], AggregateOtpRequest[P]>;
};
export type OtpRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpRequestWhereInput;
    orderBy?: Prisma.OtpRequestOrderByWithAggregationInput | Prisma.OtpRequestOrderByWithAggregationInput[];
    by: Prisma.OtpRequestScalarFieldEnum[] | Prisma.OtpRequestScalarFieldEnum;
    having?: Prisma.OtpRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpRequestCountAggregateInputType | true;
    _avg?: OtpRequestAvgAggregateInputType;
    _sum?: OtpRequestSumAggregateInputType;
    _min?: OtpRequestMinAggregateInputType;
    _max?: OtpRequestMaxAggregateInputType;
};
export type OtpRequestGroupByOutputType = {
    id: string;
    requestId: string;
    phone: string;
    attempts: number;
    blockedUntil: Date | null;
    expiresAt: Date;
    createdAt: Date;
    _count: OtpRequestCountAggregateOutputType | null;
    _avg: OtpRequestAvgAggregateOutputType | null;
    _sum: OtpRequestSumAggregateOutputType | null;
    _min: OtpRequestMinAggregateOutputType | null;
    _max: OtpRequestMaxAggregateOutputType | null;
};
export type GetOtpRequestGroupByPayload<T extends OtpRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OtpRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OtpRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OtpRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OtpRequestGroupByOutputType[P]>;
}>>;
export type OtpRequestWhereInput = {
    AND?: Prisma.OtpRequestWhereInput | Prisma.OtpRequestWhereInput[];
    OR?: Prisma.OtpRequestWhereInput[];
    NOT?: Prisma.OtpRequestWhereInput | Prisma.OtpRequestWhereInput[];
    id?: Prisma.UuidFilter<"OtpRequest"> | string;
    requestId?: Prisma.StringFilter<"OtpRequest"> | string;
    phone?: Prisma.StringFilter<"OtpRequest"> | string;
    attempts?: Prisma.IntFilter<"OtpRequest"> | number;
    blockedUntil?: Prisma.DateTimeNullableFilter<"OtpRequest"> | Date | string | null;
    expiresAt?: Prisma.DateTimeFilter<"OtpRequest"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"OtpRequest"> | Date | string;
};
export type OtpRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    blockedUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    requestId?: string;
    AND?: Prisma.OtpRequestWhereInput | Prisma.OtpRequestWhereInput[];
    OR?: Prisma.OtpRequestWhereInput[];
    NOT?: Prisma.OtpRequestWhereInput | Prisma.OtpRequestWhereInput[];
    phone?: Prisma.StringFilter<"OtpRequest"> | string;
    attempts?: Prisma.IntFilter<"OtpRequest"> | number;
    blockedUntil?: Prisma.DateTimeNullableFilter<"OtpRequest"> | Date | string | null;
    expiresAt?: Prisma.DateTimeFilter<"OtpRequest"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"OtpRequest"> | Date | string;
}, "id" | "requestId">;
export type OtpRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    blockedUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OtpRequestCountOrderByAggregateInput;
    _avg?: Prisma.OtpRequestAvgOrderByAggregateInput;
    _max?: Prisma.OtpRequestMaxOrderByAggregateInput;
    _min?: Prisma.OtpRequestMinOrderByAggregateInput;
    _sum?: Prisma.OtpRequestSumOrderByAggregateInput;
};
export type OtpRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.OtpRequestScalarWhereWithAggregatesInput | Prisma.OtpRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.OtpRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OtpRequestScalarWhereWithAggregatesInput | Prisma.OtpRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"OtpRequest"> | string;
    requestId?: Prisma.StringWithAggregatesFilter<"OtpRequest"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"OtpRequest"> | string;
    attempts?: Prisma.IntWithAggregatesFilter<"OtpRequest"> | number;
    blockedUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"OtpRequest"> | Date | string | null;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"OtpRequest"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OtpRequest"> | Date | string;
};
export type OtpRequestCreateInput = {
    id?: string;
    requestId: string;
    phone: string;
    attempts?: number;
    blockedUntil?: Date | string | null;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type OtpRequestUncheckedCreateInput = {
    id?: string;
    requestId: string;
    phone: string;
    attempts?: number;
    blockedUntil?: Date | string | null;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type OtpRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    blockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    blockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpRequestCreateManyInput = {
    id?: string;
    requestId: string;
    phone: string;
    attempts?: number;
    blockedUntil?: Date | string | null;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type OtpRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    blockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    blockedUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    blockedUntil?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpRequestAvgOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type OtpRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    blockedUntil?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    blockedUntil?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpRequestSumOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type OtpRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    phone?: boolean;
    attempts?: boolean;
    blockedUntil?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpRequest"]>;
export type OtpRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    phone?: boolean;
    attempts?: boolean;
    blockedUntil?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpRequest"]>;
export type OtpRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    phone?: boolean;
    attempts?: boolean;
    blockedUntil?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["otpRequest"]>;
export type OtpRequestSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    phone?: boolean;
    attempts?: boolean;
    blockedUntil?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
};
export type OtpRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "phone" | "attempts" | "blockedUntil" | "expiresAt" | "createdAt", ExtArgs["result"]["otpRequest"]>;
export type $OtpRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OtpRequest";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestId: string;
        phone: string;
        attempts: number;
        blockedUntil: Date | null;
        expiresAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["otpRequest"]>;
    composites: {};
};
export type OtpRequestGetPayload<S extends boolean | null | undefined | OtpRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload, S>;
export type OtpRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OtpRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtpRequestCountAggregateInputType | true;
};
export interface OtpRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OtpRequest'];
        meta: {
            name: 'OtpRequest';
        };
    };
    findUnique<T extends OtpRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, OtpRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OtpRequestClient<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OtpRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OtpRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpRequestClient<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OtpRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, OtpRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__OtpRequestClient<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OtpRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OtpRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpRequestClient<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OtpRequestFindManyArgs>(args?: Prisma.SelectSubset<T, OtpRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OtpRequestCreateArgs>(args: Prisma.SelectSubset<T, OtpRequestCreateArgs<ExtArgs>>): Prisma.Prisma__OtpRequestClient<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OtpRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, OtpRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OtpRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OtpRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OtpRequestDeleteArgs>(args: Prisma.SelectSubset<T, OtpRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__OtpRequestClient<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OtpRequestUpdateArgs>(args: Prisma.SelectSubset<T, OtpRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__OtpRequestClient<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OtpRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, OtpRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OtpRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, OtpRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OtpRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OtpRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OtpRequestUpsertArgs>(args: Prisma.SelectSubset<T, OtpRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__OtpRequestClient<runtime.Types.Result.GetResult<Prisma.$OtpRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OtpRequestCountArgs>(args?: Prisma.Subset<T, OtpRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OtpRequestCountAggregateOutputType> : number>;
    aggregate<T extends OtpRequestAggregateArgs>(args: Prisma.Subset<T, OtpRequestAggregateArgs>): Prisma.PrismaPromise<GetOtpRequestAggregateType<T>>;
    groupBy<T extends OtpRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OtpRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: OtpRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OtpRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OtpRequestFieldRefs;
}
export interface Prisma__OtpRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OtpRequestFieldRefs {
    readonly id: Prisma.FieldRef<"OtpRequest", 'String'>;
    readonly requestId: Prisma.FieldRef<"OtpRequest", 'String'>;
    readonly phone: Prisma.FieldRef<"OtpRequest", 'String'>;
    readonly attempts: Prisma.FieldRef<"OtpRequest", 'Int'>;
    readonly blockedUntil: Prisma.FieldRef<"OtpRequest", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"OtpRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"OtpRequest", 'DateTime'>;
}
export type OtpRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    where: Prisma.OtpRequestWhereUniqueInput;
};
export type OtpRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    where: Prisma.OtpRequestWhereUniqueInput;
};
export type OtpRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    where?: Prisma.OtpRequestWhereInput;
    orderBy?: Prisma.OtpRequestOrderByWithRelationInput | Prisma.OtpRequestOrderByWithRelationInput[];
    cursor?: Prisma.OtpRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpRequestScalarFieldEnum | Prisma.OtpRequestScalarFieldEnum[];
};
export type OtpRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    where?: Prisma.OtpRequestWhereInput;
    orderBy?: Prisma.OtpRequestOrderByWithRelationInput | Prisma.OtpRequestOrderByWithRelationInput[];
    cursor?: Prisma.OtpRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpRequestScalarFieldEnum | Prisma.OtpRequestScalarFieldEnum[];
};
export type OtpRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    where?: Prisma.OtpRequestWhereInput;
    orderBy?: Prisma.OtpRequestOrderByWithRelationInput | Prisma.OtpRequestOrderByWithRelationInput[];
    cursor?: Prisma.OtpRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpRequestScalarFieldEnum | Prisma.OtpRequestScalarFieldEnum[];
};
export type OtpRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpRequestCreateInput, Prisma.OtpRequestUncheckedCreateInput>;
};
export type OtpRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OtpRequestCreateManyInput | Prisma.OtpRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    data: Prisma.OtpRequestCreateManyInput | Prisma.OtpRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpRequestUpdateInput, Prisma.OtpRequestUncheckedUpdateInput>;
    where: Prisma.OtpRequestWhereUniqueInput;
};
export type OtpRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OtpRequestUpdateManyMutationInput, Prisma.OtpRequestUncheckedUpdateManyInput>;
    where?: Prisma.OtpRequestWhereInput;
    limit?: number;
};
export type OtpRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpRequestUpdateManyMutationInput, Prisma.OtpRequestUncheckedUpdateManyInput>;
    where?: Prisma.OtpRequestWhereInput;
    limit?: number;
};
export type OtpRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    where: Prisma.OtpRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.OtpRequestCreateInput, Prisma.OtpRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OtpRequestUpdateInput, Prisma.OtpRequestUncheckedUpdateInput>;
};
export type OtpRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
    where: Prisma.OtpRequestWhereUniqueInput;
};
export type OtpRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpRequestWhereInput;
    limit?: number;
};
export type OtpRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpRequestSelect<ExtArgs> | null;
    omit?: Prisma.OtpRequestOmit<ExtArgs> | null;
};
