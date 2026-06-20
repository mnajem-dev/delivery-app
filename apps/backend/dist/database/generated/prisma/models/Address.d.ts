import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AddressModel = runtime.Types.Result.DefaultSelection<Prisma.$AddressPayload>;
export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null;
    _avg: AddressAvgAggregateOutputType | null;
    _sum: AddressSumAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
};
export type AddressAvgAggregateOutputType = {
    lat: number | null;
    lng: number | null;
};
export type AddressSumAggregateOutputType = {
    lat: number | null;
    lng: number | null;
};
export type AddressMinAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    label: string | null;
    fullAddress: string | null;
    lat: number | null;
    lng: number | null;
    isDefault: boolean | null;
};
export type AddressMaxAggregateOutputType = {
    id: string | null;
    clientId: string | null;
    label: string | null;
    fullAddress: string | null;
    lat: number | null;
    lng: number | null;
    isDefault: boolean | null;
};
export type AddressCountAggregateOutputType = {
    id: number;
    clientId: number;
    label: number;
    fullAddress: number;
    lat: number;
    lng: number;
    isDefault: number;
    _all: number;
};
export type AddressAvgAggregateInputType = {
    lat?: true;
    lng?: true;
};
export type AddressSumAggregateInputType = {
    lat?: true;
    lng?: true;
};
export type AddressMinAggregateInputType = {
    id?: true;
    clientId?: true;
    label?: true;
    fullAddress?: true;
    lat?: true;
    lng?: true;
    isDefault?: true;
};
export type AddressMaxAggregateInputType = {
    id?: true;
    clientId?: true;
    label?: true;
    fullAddress?: true;
    lat?: true;
    lng?: true;
    isDefault?: true;
};
export type AddressCountAggregateInputType = {
    id?: true;
    clientId?: true;
    label?: true;
    fullAddress?: true;
    lat?: true;
    lng?: true;
    isDefault?: true;
    _all?: true;
};
export type AddressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput | Prisma.AddressOrderByWithRelationInput[];
    cursor?: Prisma.AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AddressCountAggregateInputType;
    _avg?: AddressAvgAggregateInputType;
    _sum?: AddressSumAggregateInputType;
    _min?: AddressMinAggregateInputType;
    _max?: AddressMaxAggregateInputType;
};
export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
    [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAddress[P]> : Prisma.GetScalarType<T[P], AggregateAddress[P]>;
};
export type AddressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithAggregationInput | Prisma.AddressOrderByWithAggregationInput[];
    by: Prisma.AddressScalarFieldEnum[] | Prisma.AddressScalarFieldEnum;
    having?: Prisma.AddressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressCountAggregateInputType | true;
    _avg?: AddressAvgAggregateInputType;
    _sum?: AddressSumAggregateInputType;
    _min?: AddressMinAggregateInputType;
    _max?: AddressMaxAggregateInputType;
};
export type AddressGroupByOutputType = {
    id: string;
    clientId: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
    _count: AddressCountAggregateOutputType | null;
    _avg: AddressAvgAggregateOutputType | null;
    _sum: AddressSumAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
};
export type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AddressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AddressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AddressGroupByOutputType[P]>;
}>>;
export type AddressWhereInput = {
    AND?: Prisma.AddressWhereInput | Prisma.AddressWhereInput[];
    OR?: Prisma.AddressWhereInput[];
    NOT?: Prisma.AddressWhereInput | Prisma.AddressWhereInput[];
    id?: Prisma.UuidFilter<"Address"> | string;
    clientId?: Prisma.UuidFilter<"Address"> | string;
    label?: Prisma.StringFilter<"Address"> | string;
    fullAddress?: Prisma.StringFilter<"Address"> | string;
    lat?: Prisma.FloatFilter<"Address"> | number;
    lng?: Prisma.FloatFilter<"Address"> | number;
    isDefault?: Prisma.BoolFilter<"Address"> | boolean;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type AddressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fullAddress?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AddressWhereInput | Prisma.AddressWhereInput[];
    OR?: Prisma.AddressWhereInput[];
    NOT?: Prisma.AddressWhereInput | Prisma.AddressWhereInput[];
    clientId?: Prisma.UuidFilter<"Address"> | string;
    label?: Prisma.StringFilter<"Address"> | string;
    fullAddress?: Prisma.StringFilter<"Address"> | string;
    lat?: Prisma.FloatFilter<"Address"> | number;
    lng?: Prisma.FloatFilter<"Address"> | number;
    isDefault?: Prisma.BoolFilter<"Address"> | boolean;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id">;
export type AddressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fullAddress?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    _count?: Prisma.AddressCountOrderByAggregateInput;
    _avg?: Prisma.AddressAvgOrderByAggregateInput;
    _max?: Prisma.AddressMaxOrderByAggregateInput;
    _min?: Prisma.AddressMinOrderByAggregateInput;
    _sum?: Prisma.AddressSumOrderByAggregateInput;
};
export type AddressScalarWhereWithAggregatesInput = {
    AND?: Prisma.AddressScalarWhereWithAggregatesInput | Prisma.AddressScalarWhereWithAggregatesInput[];
    OR?: Prisma.AddressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AddressScalarWhereWithAggregatesInput | Prisma.AddressScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Address"> | string;
    clientId?: Prisma.UuidWithAggregatesFilter<"Address"> | string;
    label?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    fullAddress?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    lat?: Prisma.FloatWithAggregatesFilter<"Address"> | number;
    lng?: Prisma.FloatWithAggregatesFilter<"Address"> | number;
    isDefault?: Prisma.BoolWithAggregatesFilter<"Address"> | boolean;
};
export type AddressCreateInput = {
    id?: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
    client: Prisma.ClientCreateNestedOneWithoutAddressesInput;
};
export type AddressUncheckedCreateInput = {
    id?: string;
    clientId: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
};
export type AddressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fullAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    client?: Prisma.ClientUpdateOneRequiredWithoutAddressesNestedInput;
};
export type AddressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fullAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AddressCreateManyInput = {
    id?: string;
    clientId: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
};
export type AddressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fullAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AddressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fullAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AddressListRelationFilter = {
    every?: Prisma.AddressWhereInput;
    some?: Prisma.AddressWhereInput;
    none?: Prisma.AddressWhereInput;
};
export type AddressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AddressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fullAddress?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
};
export type AddressAvgOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
};
export type AddressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fullAddress?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
};
export type AddressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fullAddress?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
};
export type AddressSumOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
};
export type AddressCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutClientInput, Prisma.AddressUncheckedCreateWithoutClientInput> | Prisma.AddressCreateWithoutClientInput[] | Prisma.AddressUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutClientInput | Prisma.AddressCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.AddressCreateManyClientInputEnvelope;
    connect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
};
export type AddressUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutClientInput, Prisma.AddressUncheckedCreateWithoutClientInput> | Prisma.AddressCreateWithoutClientInput[] | Prisma.AddressUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutClientInput | Prisma.AddressCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.AddressCreateManyClientInputEnvelope;
    connect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
};
export type AddressUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutClientInput, Prisma.AddressUncheckedCreateWithoutClientInput> | Prisma.AddressCreateWithoutClientInput[] | Prisma.AddressUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutClientInput | Prisma.AddressCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.AddressUpsertWithWhereUniqueWithoutClientInput | Prisma.AddressUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.AddressCreateManyClientInputEnvelope;
    set?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    disconnect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    delete?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    connect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    update?: Prisma.AddressUpdateWithWhereUniqueWithoutClientInput | Prisma.AddressUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.AddressUpdateManyWithWhereWithoutClientInput | Prisma.AddressUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.AddressScalarWhereInput | Prisma.AddressScalarWhereInput[];
};
export type AddressUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutClientInput, Prisma.AddressUncheckedCreateWithoutClientInput> | Prisma.AddressCreateWithoutClientInput[] | Prisma.AddressUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutClientInput | Prisma.AddressCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.AddressUpsertWithWhereUniqueWithoutClientInput | Prisma.AddressUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.AddressCreateManyClientInputEnvelope;
    set?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    disconnect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    delete?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    connect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    update?: Prisma.AddressUpdateWithWhereUniqueWithoutClientInput | Prisma.AddressUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.AddressUpdateManyWithWhereWithoutClientInput | Prisma.AddressUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.AddressScalarWhereInput | Prisma.AddressScalarWhereInput[];
};
export type AddressCreateWithoutClientInput = {
    id?: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
};
export type AddressUncheckedCreateWithoutClientInput = {
    id?: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
};
export type AddressCreateOrConnectWithoutClientInput = {
    where: Prisma.AddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddressCreateWithoutClientInput, Prisma.AddressUncheckedCreateWithoutClientInput>;
};
export type AddressCreateManyClientInputEnvelope = {
    data: Prisma.AddressCreateManyClientInput | Prisma.AddressCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type AddressUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.AddressWhereUniqueInput;
    update: Prisma.XOR<Prisma.AddressUpdateWithoutClientInput, Prisma.AddressUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.AddressCreateWithoutClientInput, Prisma.AddressUncheckedCreateWithoutClientInput>;
};
export type AddressUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.AddressWhereUniqueInput;
    data: Prisma.XOR<Prisma.AddressUpdateWithoutClientInput, Prisma.AddressUncheckedUpdateWithoutClientInput>;
};
export type AddressUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.AddressScalarWhereInput;
    data: Prisma.XOR<Prisma.AddressUpdateManyMutationInput, Prisma.AddressUncheckedUpdateManyWithoutClientInput>;
};
export type AddressScalarWhereInput = {
    AND?: Prisma.AddressScalarWhereInput | Prisma.AddressScalarWhereInput[];
    OR?: Prisma.AddressScalarWhereInput[];
    NOT?: Prisma.AddressScalarWhereInput | Prisma.AddressScalarWhereInput[];
    id?: Prisma.UuidFilter<"Address"> | string;
    clientId?: Prisma.UuidFilter<"Address"> | string;
    label?: Prisma.StringFilter<"Address"> | string;
    fullAddress?: Prisma.StringFilter<"Address"> | string;
    lat?: Prisma.FloatFilter<"Address"> | number;
    lng?: Prisma.FloatFilter<"Address"> | number;
    isDefault?: Prisma.BoolFilter<"Address"> | boolean;
};
export type AddressCreateManyClientInput = {
    id?: string;
    label: string;
    fullAddress: string;
    lat: number;
    lng: number;
    isDefault: boolean;
};
export type AddressUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fullAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AddressUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fullAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AddressUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fullAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AddressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    label?: boolean;
    fullAddress?: boolean;
    lat?: boolean;
    lng?: boolean;
    isDefault?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type AddressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    label?: boolean;
    fullAddress?: boolean;
    lat?: boolean;
    lng?: boolean;
    isDefault?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type AddressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientId?: boolean;
    label?: boolean;
    fullAddress?: boolean;
    lat?: boolean;
    lng?: boolean;
    isDefault?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type AddressSelectScalar = {
    id?: boolean;
    clientId?: boolean;
    label?: boolean;
    fullAddress?: boolean;
    lat?: boolean;
    lng?: boolean;
    isDefault?: boolean;
};
export type AddressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clientId" | "label" | "fullAddress" | "lat" | "lng" | "isDefault", ExtArgs["result"]["address"]>;
export type AddressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type AddressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type AddressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $AddressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Address";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clientId: string;
        label: string;
        fullAddress: string;
        lat: number;
        lng: number;
        isDefault: boolean;
    }, ExtArgs["result"]["address"]>;
    composites: {};
};
export type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AddressPayload, S>;
export type AddressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddressCountAggregateInputType | true;
};
export interface AddressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Address'];
        meta: {
            name: 'Address';
        };
    };
    findUnique<T extends AddressFindUniqueArgs>(args: Prisma.SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AddressFindFirstArgs>(args?: Prisma.SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AddressFindManyArgs>(args?: Prisma.SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AddressCreateArgs>(args: Prisma.SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AddressCreateManyArgs>(args?: Prisma.SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AddressDeleteArgs>(args: Prisma.SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AddressUpdateArgs>(args: Prisma.SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AddressDeleteManyArgs>(args?: Prisma.SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AddressUpdateManyArgs>(args: Prisma.SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AddressUpsertArgs>(args: Prisma.SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AddressCountArgs>(args?: Prisma.Subset<T, AddressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AddressCountAggregateOutputType> : number>;
    aggregate<T extends AddressAggregateArgs>(args: Prisma.Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>;
    groupBy<T extends AddressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AddressGroupByArgs['orderBy'];
    } : {
        orderBy?: AddressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AddressFieldRefs;
}
export interface Prisma__AddressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AddressFieldRefs {
    readonly id: Prisma.FieldRef<"Address", 'String'>;
    readonly clientId: Prisma.FieldRef<"Address", 'String'>;
    readonly label: Prisma.FieldRef<"Address", 'String'>;
    readonly fullAddress: Prisma.FieldRef<"Address", 'String'>;
    readonly lat: Prisma.FieldRef<"Address", 'Float'>;
    readonly lng: Prisma.FieldRef<"Address", 'Float'>;
    readonly isDefault: Prisma.FieldRef<"Address", 'Boolean'>;
}
export type AddressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where: Prisma.AddressWhereUniqueInput;
};
export type AddressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where: Prisma.AddressWhereUniqueInput;
};
export type AddressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AddressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AddressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AddressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddressCreateInput, Prisma.AddressUncheckedCreateInput>;
};
export type AddressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AddressCreateManyInput | Prisma.AddressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AddressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    data: Prisma.AddressCreateManyInput | Prisma.AddressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AddressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AddressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddressUpdateInput, Prisma.AddressUncheckedUpdateInput>;
    where: Prisma.AddressWhereUniqueInput;
};
export type AddressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AddressUpdateManyMutationInput, Prisma.AddressUncheckedUpdateManyInput>;
    where?: Prisma.AddressWhereInput;
    limit?: number;
};
export type AddressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddressUpdateManyMutationInput, Prisma.AddressUncheckedUpdateManyInput>;
    where?: Prisma.AddressWhereInput;
    limit?: number;
    include?: Prisma.AddressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AddressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where: Prisma.AddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddressCreateInput, Prisma.AddressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AddressUpdateInput, Prisma.AddressUncheckedUpdateInput>;
};
export type AddressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where: Prisma.AddressWhereUniqueInput;
};
export type AddressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressWhereInput;
    limit?: number;
};
export type AddressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
};
