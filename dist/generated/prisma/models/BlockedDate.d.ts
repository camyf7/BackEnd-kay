import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlockedDateModel = runtime.Types.Result.DefaultSelection<Prisma.$BlockedDatePayload>;
export type AggregateBlockedDate = {
    _count: BlockedDateCountAggregateOutputType | null;
    _min: BlockedDateMinAggregateOutputType | null;
    _max: BlockedDateMaxAggregateOutputType | null;
};
export type BlockedDateMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    reason: string | null;
    createdAt: Date | null;
};
export type BlockedDateMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    reason: string | null;
    createdAt: Date | null;
};
export type BlockedDateCountAggregateOutputType = {
    id: number;
    date: number;
    reason: number;
    createdAt: number;
    _all: number;
};
export type BlockedDateMinAggregateInputType = {
    id?: true;
    date?: true;
    reason?: true;
    createdAt?: true;
};
export type BlockedDateMaxAggregateInputType = {
    id?: true;
    date?: true;
    reason?: true;
    createdAt?: true;
};
export type BlockedDateCountAggregateInputType = {
    id?: true;
    date?: true;
    reason?: true;
    createdAt?: true;
    _all?: true;
};
export type BlockedDateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockedDateWhereInput;
    orderBy?: Prisma.BlockedDateOrderByWithRelationInput | Prisma.BlockedDateOrderByWithRelationInput[];
    cursor?: Prisma.BlockedDateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlockedDateCountAggregateInputType;
    _min?: BlockedDateMinAggregateInputType;
    _max?: BlockedDateMaxAggregateInputType;
};
export type GetBlockedDateAggregateType<T extends BlockedDateAggregateArgs> = {
    [P in keyof T & keyof AggregateBlockedDate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlockedDate[P]> : Prisma.GetScalarType<T[P], AggregateBlockedDate[P]>;
};
export type BlockedDateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockedDateWhereInput;
    orderBy?: Prisma.BlockedDateOrderByWithAggregationInput | Prisma.BlockedDateOrderByWithAggregationInput[];
    by: Prisma.BlockedDateScalarFieldEnum[] | Prisma.BlockedDateScalarFieldEnum;
    having?: Prisma.BlockedDateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlockedDateCountAggregateInputType | true;
    _min?: BlockedDateMinAggregateInputType;
    _max?: BlockedDateMaxAggregateInputType;
};
export type BlockedDateGroupByOutputType = {
    id: string;
    date: Date;
    reason: string;
    createdAt: Date;
    _count: BlockedDateCountAggregateOutputType | null;
    _min: BlockedDateMinAggregateOutputType | null;
    _max: BlockedDateMaxAggregateOutputType | null;
};
export type GetBlockedDateGroupByPayload<T extends BlockedDateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlockedDateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlockedDateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlockedDateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlockedDateGroupByOutputType[P]>;
}>>;
export type BlockedDateWhereInput = {
    AND?: Prisma.BlockedDateWhereInput | Prisma.BlockedDateWhereInput[];
    OR?: Prisma.BlockedDateWhereInput[];
    NOT?: Prisma.BlockedDateWhereInput | Prisma.BlockedDateWhereInput[];
    id?: Prisma.StringFilter<"BlockedDate"> | string;
    date?: Prisma.DateTimeFilter<"BlockedDate"> | Date | string;
    reason?: Prisma.StringFilter<"BlockedDate"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlockedDate"> | Date | string;
};
export type BlockedDateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _relevance?: Prisma.BlockedDateOrderByRelevanceInput;
};
export type BlockedDateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BlockedDateWhereInput | Prisma.BlockedDateWhereInput[];
    OR?: Prisma.BlockedDateWhereInput[];
    NOT?: Prisma.BlockedDateWhereInput | Prisma.BlockedDateWhereInput[];
    date?: Prisma.DateTimeFilter<"BlockedDate"> | Date | string;
    reason?: Prisma.StringFilter<"BlockedDate"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlockedDate"> | Date | string;
}, "id">;
export type BlockedDateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BlockedDateCountOrderByAggregateInput;
    _max?: Prisma.BlockedDateMaxOrderByAggregateInput;
    _min?: Prisma.BlockedDateMinOrderByAggregateInput;
};
export type BlockedDateScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlockedDateScalarWhereWithAggregatesInput | Prisma.BlockedDateScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlockedDateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlockedDateScalarWhereWithAggregatesInput | Prisma.BlockedDateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BlockedDate"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"BlockedDate"> | Date | string;
    reason?: Prisma.StringWithAggregatesFilter<"BlockedDate"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BlockedDate"> | Date | string;
};
export type BlockedDateCreateInput = {
    id?: string;
    date: Date | string;
    reason: string;
    createdAt?: Date | string;
};
export type BlockedDateUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    reason: string;
    createdAt?: Date | string;
};
export type BlockedDateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockedDateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockedDateCreateManyInput = {
    id?: string;
    date: Date | string;
    reason: string;
    createdAt?: Date | string;
};
export type BlockedDateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockedDateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlockedDateOrderByRelevanceInput = {
    fields: Prisma.BlockedDateOrderByRelevanceFieldEnum | Prisma.BlockedDateOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BlockedDateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlockedDateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlockedDateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlockedDateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    reason?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["blockedDate"]>;
export type BlockedDateSelectScalar = {
    id?: boolean;
    date?: boolean;
    reason?: boolean;
    createdAt?: boolean;
};
export type BlockedDateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "reason" | "createdAt", ExtArgs["result"]["blockedDate"]>;
export type $BlockedDatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlockedDate";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        reason: string;
        createdAt: Date;
    }, ExtArgs["result"]["blockedDate"]>;
    composites: {};
};
export type BlockedDateGetPayload<S extends boolean | null | undefined | BlockedDateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload, S>;
export type BlockedDateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlockedDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlockedDateCountAggregateInputType | true;
};
export interface BlockedDateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlockedDate'];
        meta: {
            name: 'BlockedDate';
        };
    };
    findUnique<T extends BlockedDateFindUniqueArgs>(args: Prisma.SelectSubset<T, BlockedDateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlockedDateClient<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlockedDateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlockedDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlockedDateClient<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlockedDateFindFirstArgs>(args?: Prisma.SelectSubset<T, BlockedDateFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlockedDateClient<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlockedDateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlockedDateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlockedDateClient<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlockedDateFindManyArgs>(args?: Prisma.SelectSubset<T, BlockedDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlockedDateCreateArgs>(args: Prisma.SelectSubset<T, BlockedDateCreateArgs<ExtArgs>>): Prisma.Prisma__BlockedDateClient<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlockedDateCreateManyArgs>(args?: Prisma.SelectSubset<T, BlockedDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BlockedDateDeleteArgs>(args: Prisma.SelectSubset<T, BlockedDateDeleteArgs<ExtArgs>>): Prisma.Prisma__BlockedDateClient<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlockedDateUpdateArgs>(args: Prisma.SelectSubset<T, BlockedDateUpdateArgs<ExtArgs>>): Prisma.Prisma__BlockedDateClient<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlockedDateDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlockedDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlockedDateUpdateManyArgs>(args: Prisma.SelectSubset<T, BlockedDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BlockedDateUpsertArgs>(args: Prisma.SelectSubset<T, BlockedDateUpsertArgs<ExtArgs>>): Prisma.Prisma__BlockedDateClient<runtime.Types.Result.GetResult<Prisma.$BlockedDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BlockedDateCountArgs>(args?: Prisma.Subset<T, BlockedDateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlockedDateCountAggregateOutputType> : number>;
    aggregate<T extends BlockedDateAggregateArgs>(args: Prisma.Subset<T, BlockedDateAggregateArgs>): Prisma.PrismaPromise<GetBlockedDateAggregateType<T>>;
    groupBy<T extends BlockedDateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlockedDateGroupByArgs['orderBy'];
    } : {
        orderBy?: BlockedDateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlockedDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlockedDateFieldRefs;
}
export interface Prisma__BlockedDateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlockedDateFieldRefs {
    readonly id: Prisma.FieldRef<"BlockedDate", 'String'>;
    readonly date: Prisma.FieldRef<"BlockedDate", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"BlockedDate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BlockedDate", 'DateTime'>;
}
export type BlockedDateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    where: Prisma.BlockedDateWhereUniqueInput;
};
export type BlockedDateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    where: Prisma.BlockedDateWhereUniqueInput;
};
export type BlockedDateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    where?: Prisma.BlockedDateWhereInput;
    orderBy?: Prisma.BlockedDateOrderByWithRelationInput | Prisma.BlockedDateOrderByWithRelationInput[];
    cursor?: Prisma.BlockedDateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockedDateScalarFieldEnum | Prisma.BlockedDateScalarFieldEnum[];
};
export type BlockedDateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    where?: Prisma.BlockedDateWhereInput;
    orderBy?: Prisma.BlockedDateOrderByWithRelationInput | Prisma.BlockedDateOrderByWithRelationInput[];
    cursor?: Prisma.BlockedDateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockedDateScalarFieldEnum | Prisma.BlockedDateScalarFieldEnum[];
};
export type BlockedDateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    where?: Prisma.BlockedDateWhereInput;
    orderBy?: Prisma.BlockedDateOrderByWithRelationInput | Prisma.BlockedDateOrderByWithRelationInput[];
    cursor?: Prisma.BlockedDateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockedDateScalarFieldEnum | Prisma.BlockedDateScalarFieldEnum[];
};
export type BlockedDateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlockedDateCreateInput, Prisma.BlockedDateUncheckedCreateInput>;
};
export type BlockedDateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlockedDateCreateManyInput | Prisma.BlockedDateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlockedDateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlockedDateUpdateInput, Prisma.BlockedDateUncheckedUpdateInput>;
    where: Prisma.BlockedDateWhereUniqueInput;
};
export type BlockedDateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlockedDateUpdateManyMutationInput, Prisma.BlockedDateUncheckedUpdateManyInput>;
    where?: Prisma.BlockedDateWhereInput;
    limit?: number;
};
export type BlockedDateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    where: Prisma.BlockedDateWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlockedDateCreateInput, Prisma.BlockedDateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlockedDateUpdateInput, Prisma.BlockedDateUncheckedUpdateInput>;
};
export type BlockedDateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
    where: Prisma.BlockedDateWhereUniqueInput;
};
export type BlockedDateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockedDateWhereInput;
    limit?: number;
};
export type BlockedDateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlockedDateSelect<ExtArgs> | null;
    omit?: Prisma.BlockedDateOmit<ExtArgs> | null;
};
