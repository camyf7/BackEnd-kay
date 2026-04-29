import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$UserHistoryPayload>;
export type AggregateUserHistory = {
    _count: UserHistoryCountAggregateOutputType | null;
    _min: UserHistoryMinAggregateOutputType | null;
    _max: UserHistoryMaxAggregateOutputType | null;
};
export type UserHistoryMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    action: string | null;
    metadata: string | null;
    createdAt: Date | null;
};
export type UserHistoryMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    action: string | null;
    metadata: string | null;
    createdAt: Date | null;
};
export type UserHistoryCountAggregateOutputType = {
    id: number;
    userId: number;
    action: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type UserHistoryMinAggregateInputType = {
    id?: true;
    userId?: true;
    action?: true;
    metadata?: true;
    createdAt?: true;
};
export type UserHistoryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    action?: true;
    metadata?: true;
    createdAt?: true;
};
export type UserHistoryCountAggregateInputType = {
    id?: true;
    userId?: true;
    action?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type UserHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserHistoryWhereInput;
    orderBy?: Prisma.UserHistoryOrderByWithRelationInput | Prisma.UserHistoryOrderByWithRelationInput[];
    cursor?: Prisma.UserHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserHistoryCountAggregateInputType;
    _min?: UserHistoryMinAggregateInputType;
    _max?: UserHistoryMaxAggregateInputType;
};
export type GetUserHistoryAggregateType<T extends UserHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateUserHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserHistory[P]> : Prisma.GetScalarType<T[P], AggregateUserHistory[P]>;
};
export type UserHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserHistoryWhereInput;
    orderBy?: Prisma.UserHistoryOrderByWithAggregationInput | Prisma.UserHistoryOrderByWithAggregationInput[];
    by: Prisma.UserHistoryScalarFieldEnum[] | Prisma.UserHistoryScalarFieldEnum;
    having?: Prisma.UserHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserHistoryCountAggregateInputType | true;
    _min?: UserHistoryMinAggregateInputType;
    _max?: UserHistoryMaxAggregateInputType;
};
export type UserHistoryGroupByOutputType = {
    id: string;
    userId: string;
    action: string;
    metadata: string;
    createdAt: Date;
    _count: UserHistoryCountAggregateOutputType | null;
    _min: UserHistoryMinAggregateOutputType | null;
    _max: UserHistoryMaxAggregateOutputType | null;
};
export type GetUserHistoryGroupByPayload<T extends UserHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserHistoryGroupByOutputType[P]>;
}>>;
export type UserHistoryWhereInput = {
    AND?: Prisma.UserHistoryWhereInput | Prisma.UserHistoryWhereInput[];
    OR?: Prisma.UserHistoryWhereInput[];
    NOT?: Prisma.UserHistoryWhereInput | Prisma.UserHistoryWhereInput[];
    id?: Prisma.StringFilter<"UserHistory"> | string;
    userId?: Prisma.StringFilter<"UserHistory"> | string;
    action?: Prisma.StringFilter<"UserHistory"> | string;
    metadata?: Prisma.StringFilter<"UserHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"UserHistory"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.UserHistoryOrderByRelevanceInput;
};
export type UserHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UserHistoryWhereInput | Prisma.UserHistoryWhereInput[];
    OR?: Prisma.UserHistoryWhereInput[];
    NOT?: Prisma.UserHistoryWhereInput | Prisma.UserHistoryWhereInput[];
    userId?: Prisma.StringFilter<"UserHistory"> | string;
    action?: Prisma.StringFilter<"UserHistory"> | string;
    metadata?: Prisma.StringFilter<"UserHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"UserHistory"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type UserHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserHistoryCountOrderByAggregateInput;
    _max?: Prisma.UserHistoryMaxOrderByAggregateInput;
    _min?: Prisma.UserHistoryMinOrderByAggregateInput;
};
export type UserHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserHistoryScalarWhereWithAggregatesInput | Prisma.UserHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserHistoryScalarWhereWithAggregatesInput | Prisma.UserHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserHistory"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserHistory"> | string;
    action?: Prisma.StringWithAggregatesFilter<"UserHistory"> | string;
    metadata?: Prisma.StringWithAggregatesFilter<"UserHistory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserHistory"> | Date | string;
};
export type UserHistoryCreateInput = {
    id?: string;
    action: string;
    metadata: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutHistoriesInput;
};
export type UserHistoryUncheckedCreateInput = {
    id?: string;
    userId: string;
    action: string;
    metadata: string;
    createdAt?: Date | string;
};
export type UserHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutHistoriesNestedInput;
};
export type UserHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserHistoryCreateManyInput = {
    id?: string;
    userId: string;
    action: string;
    metadata: string;
    createdAt?: Date | string;
};
export type UserHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserHistoryListRelationFilter = {
    every?: Prisma.UserHistoryWhereInput;
    some?: Prisma.UserHistoryWhereInput;
    none?: Prisma.UserHistoryWhereInput;
};
export type UserHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserHistoryOrderByRelevanceInput = {
    fields: Prisma.UserHistoryOrderByRelevanceFieldEnum | Prisma.UserHistoryOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type UserHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserHistoryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserHistoryCreateWithoutUserInput, Prisma.UserHistoryUncheckedCreateWithoutUserInput> | Prisma.UserHistoryCreateWithoutUserInput[] | Prisma.UserHistoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserHistoryCreateOrConnectWithoutUserInput | Prisma.UserHistoryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserHistoryCreateManyUserInputEnvelope;
    connect?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
};
export type UserHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserHistoryCreateWithoutUserInput, Prisma.UserHistoryUncheckedCreateWithoutUserInput> | Prisma.UserHistoryCreateWithoutUserInput[] | Prisma.UserHistoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserHistoryCreateOrConnectWithoutUserInput | Prisma.UserHistoryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserHistoryCreateManyUserInputEnvelope;
    connect?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
};
export type UserHistoryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserHistoryCreateWithoutUserInput, Prisma.UserHistoryUncheckedCreateWithoutUserInput> | Prisma.UserHistoryCreateWithoutUserInput[] | Prisma.UserHistoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserHistoryCreateOrConnectWithoutUserInput | Prisma.UserHistoryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserHistoryUpsertWithWhereUniqueWithoutUserInput | Prisma.UserHistoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserHistoryCreateManyUserInputEnvelope;
    set?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
    disconnect?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
    delete?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
    connect?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
    update?: Prisma.UserHistoryUpdateWithWhereUniqueWithoutUserInput | Prisma.UserHistoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserHistoryUpdateManyWithWhereWithoutUserInput | Prisma.UserHistoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserHistoryScalarWhereInput | Prisma.UserHistoryScalarWhereInput[];
};
export type UserHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserHistoryCreateWithoutUserInput, Prisma.UserHistoryUncheckedCreateWithoutUserInput> | Prisma.UserHistoryCreateWithoutUserInput[] | Prisma.UserHistoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserHistoryCreateOrConnectWithoutUserInput | Prisma.UserHistoryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserHistoryUpsertWithWhereUniqueWithoutUserInput | Prisma.UserHistoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserHistoryCreateManyUserInputEnvelope;
    set?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
    disconnect?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
    delete?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
    connect?: Prisma.UserHistoryWhereUniqueInput | Prisma.UserHistoryWhereUniqueInput[];
    update?: Prisma.UserHistoryUpdateWithWhereUniqueWithoutUserInput | Prisma.UserHistoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserHistoryUpdateManyWithWhereWithoutUserInput | Prisma.UserHistoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserHistoryScalarWhereInput | Prisma.UserHistoryScalarWhereInput[];
};
export type UserHistoryCreateWithoutUserInput = {
    id?: string;
    action: string;
    metadata: string;
    createdAt?: Date | string;
};
export type UserHistoryUncheckedCreateWithoutUserInput = {
    id?: string;
    action: string;
    metadata: string;
    createdAt?: Date | string;
};
export type UserHistoryCreateOrConnectWithoutUserInput = {
    where: Prisma.UserHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserHistoryCreateWithoutUserInput, Prisma.UserHistoryUncheckedCreateWithoutUserInput>;
};
export type UserHistoryCreateManyUserInputEnvelope = {
    data: Prisma.UserHistoryCreateManyUserInput | Prisma.UserHistoryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserHistoryUpdateWithoutUserInput, Prisma.UserHistoryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserHistoryCreateWithoutUserInput, Prisma.UserHistoryUncheckedCreateWithoutUserInput>;
};
export type UserHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserHistoryUpdateWithoutUserInput, Prisma.UserHistoryUncheckedUpdateWithoutUserInput>;
};
export type UserHistoryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.UserHistoryUpdateManyMutationInput, Prisma.UserHistoryUncheckedUpdateManyWithoutUserInput>;
};
export type UserHistoryScalarWhereInput = {
    AND?: Prisma.UserHistoryScalarWhereInput | Prisma.UserHistoryScalarWhereInput[];
    OR?: Prisma.UserHistoryScalarWhereInput[];
    NOT?: Prisma.UserHistoryScalarWhereInput | Prisma.UserHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"UserHistory"> | string;
    userId?: Prisma.StringFilter<"UserHistory"> | string;
    action?: Prisma.StringFilter<"UserHistory"> | string;
    metadata?: Prisma.StringFilter<"UserHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"UserHistory"> | Date | string;
};
export type UserHistoryCreateManyUserInput = {
    id?: string;
    action: string;
    metadata: string;
    createdAt?: Date | string;
};
export type UserHistoryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserHistoryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    action?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userHistory"]>;
export type UserHistorySelectScalar = {
    id?: boolean;
    userId?: boolean;
    action?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type UserHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "action" | "metadata" | "createdAt", ExtArgs["result"]["userHistory"]>;
export type UserHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserHistory";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        action: string;
        metadata: string;
        createdAt: Date;
    }, ExtArgs["result"]["userHistory"]>;
    composites: {};
};
export type UserHistoryGetPayload<S extends boolean | null | undefined | UserHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload, S>;
export type UserHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserHistoryCountAggregateInputType | true;
};
export interface UserHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserHistory'];
        meta: {
            name: 'UserHistory';
        };
    };
    findUnique<T extends UserHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, UserHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserHistoryClient<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserHistoryClient<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, UserHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserHistoryClient<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserHistoryClient<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, UserHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserHistoryCreateArgs>(args: Prisma.SelectSubset<T, UserHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__UserHistoryClient<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, UserHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UserHistoryDeleteArgs>(args: Prisma.SelectSubset<T, UserHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__UserHistoryClient<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserHistoryUpdateArgs>(args: Prisma.SelectSubset<T, UserHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__UserHistoryClient<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, UserHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UserHistoryUpsertArgs>(args: Prisma.SelectSubset<T, UserHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__UserHistoryClient<runtime.Types.Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserHistoryCountArgs>(args?: Prisma.Subset<T, UserHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserHistoryCountAggregateOutputType> : number>;
    aggregate<T extends UserHistoryAggregateArgs>(args: Prisma.Subset<T, UserHistoryAggregateArgs>): Prisma.PrismaPromise<GetUserHistoryAggregateType<T>>;
    groupBy<T extends UserHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: UserHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserHistoryFieldRefs;
}
export interface Prisma__UserHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"UserHistory", 'String'>;
    readonly userId: Prisma.FieldRef<"UserHistory", 'String'>;
    readonly action: Prisma.FieldRef<"UserHistory", 'String'>;
    readonly metadata: Prisma.FieldRef<"UserHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"UserHistory", 'DateTime'>;
}
export type UserHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    where: Prisma.UserHistoryWhereUniqueInput;
};
export type UserHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    where: Prisma.UserHistoryWhereUniqueInput;
};
export type UserHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    where?: Prisma.UserHistoryWhereInput;
    orderBy?: Prisma.UserHistoryOrderByWithRelationInput | Prisma.UserHistoryOrderByWithRelationInput[];
    cursor?: Prisma.UserHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserHistoryScalarFieldEnum | Prisma.UserHistoryScalarFieldEnum[];
};
export type UserHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    where?: Prisma.UserHistoryWhereInput;
    orderBy?: Prisma.UserHistoryOrderByWithRelationInput | Prisma.UserHistoryOrderByWithRelationInput[];
    cursor?: Prisma.UserHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserHistoryScalarFieldEnum | Prisma.UserHistoryScalarFieldEnum[];
};
export type UserHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    where?: Prisma.UserHistoryWhereInput;
    orderBy?: Prisma.UserHistoryOrderByWithRelationInput | Prisma.UserHistoryOrderByWithRelationInput[];
    cursor?: Prisma.UserHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserHistoryScalarFieldEnum | Prisma.UserHistoryScalarFieldEnum[];
};
export type UserHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserHistoryCreateInput, Prisma.UserHistoryUncheckedCreateInput>;
};
export type UserHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserHistoryCreateManyInput | Prisma.UserHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserHistoryUpdateInput, Prisma.UserHistoryUncheckedUpdateInput>;
    where: Prisma.UserHistoryWhereUniqueInput;
};
export type UserHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserHistoryUpdateManyMutationInput, Prisma.UserHistoryUncheckedUpdateManyInput>;
    where?: Prisma.UserHistoryWhereInput;
    limit?: number;
};
export type UserHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    where: Prisma.UserHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserHistoryCreateInput, Prisma.UserHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserHistoryUpdateInput, Prisma.UserHistoryUncheckedUpdateInput>;
};
export type UserHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
    where: Prisma.UserHistoryWhereUniqueInput;
};
export type UserHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserHistoryWhereInput;
    limit?: number;
};
export type UserHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHistorySelect<ExtArgs> | null;
    omit?: Prisma.UserHistoryOmit<ExtArgs> | null;
    include?: Prisma.UserHistoryInclude<ExtArgs> | null;
};
