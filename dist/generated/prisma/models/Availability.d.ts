import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AvailabilityModel = runtime.Types.Result.DefaultSelection<Prisma.$AvailabilityPayload>;
export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null;
    _avg: AvailabilityAvgAggregateOutputType | null;
    _sum: AvailabilitySumAggregateOutputType | null;
    _min: AvailabilityMinAggregateOutputType | null;
    _max: AvailabilityMaxAggregateOutputType | null;
};
export type AvailabilityAvgAggregateOutputType = {
    weekDay: number | null;
};
export type AvailabilitySumAggregateOutputType = {
    weekDay: number | null;
};
export type AvailabilityMinAggregateOutputType = {
    id: string | null;
    weekDay: number | null;
    startTime: string | null;
    endTime: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AvailabilityMaxAggregateOutputType = {
    id: string | null;
    weekDay: number | null;
    startTime: string | null;
    endTime: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AvailabilityCountAggregateOutputType = {
    id: number;
    weekDay: number;
    startTime: number;
    endTime: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AvailabilityAvgAggregateInputType = {
    weekDay?: true;
};
export type AvailabilitySumAggregateInputType = {
    weekDay?: true;
};
export type AvailabilityMinAggregateInputType = {
    id?: true;
    weekDay?: true;
    startTime?: true;
    endTime?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AvailabilityMaxAggregateInputType = {
    id?: true;
    weekDay?: true;
    startTime?: true;
    endTime?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AvailabilityCountAggregateInputType = {
    id?: true;
    weekDay?: true;
    startTime?: true;
    endTime?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AvailabilityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityWhereInput;
    orderBy?: Prisma.AvailabilityOrderByWithRelationInput | Prisma.AvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AvailabilityCountAggregateInputType;
    _avg?: AvailabilityAvgAggregateInputType;
    _sum?: AvailabilitySumAggregateInputType;
    _min?: AvailabilityMinAggregateInputType;
    _max?: AvailabilityMaxAggregateInputType;
};
export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
    [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvailability[P]> : Prisma.GetScalarType<T[P], AggregateAvailability[P]>;
};
export type AvailabilityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityWhereInput;
    orderBy?: Prisma.AvailabilityOrderByWithAggregationInput | Prisma.AvailabilityOrderByWithAggregationInput[];
    by: Prisma.AvailabilityScalarFieldEnum[] | Prisma.AvailabilityScalarFieldEnum;
    having?: Prisma.AvailabilityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvailabilityCountAggregateInputType | true;
    _avg?: AvailabilityAvgAggregateInputType;
    _sum?: AvailabilitySumAggregateInputType;
    _min?: AvailabilityMinAggregateInputType;
    _max?: AvailabilityMaxAggregateInputType;
};
export type AvailabilityGroupByOutputType = {
    id: string;
    weekDay: number;
    startTime: string;
    endTime: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: AvailabilityCountAggregateOutputType | null;
    _avg: AvailabilityAvgAggregateOutputType | null;
    _sum: AvailabilitySumAggregateOutputType | null;
    _min: AvailabilityMinAggregateOutputType | null;
    _max: AvailabilityMaxAggregateOutputType | null;
};
export type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvailabilityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvailabilityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvailabilityGroupByOutputType[P]>;
}>>;
export type AvailabilityWhereInput = {
    AND?: Prisma.AvailabilityWhereInput | Prisma.AvailabilityWhereInput[];
    OR?: Prisma.AvailabilityWhereInput[];
    NOT?: Prisma.AvailabilityWhereInput | Prisma.AvailabilityWhereInput[];
    id?: Prisma.StringFilter<"Availability"> | string;
    weekDay?: Prisma.IntFilter<"Availability"> | number;
    startTime?: Prisma.StringFilter<"Availability"> | string;
    endTime?: Prisma.StringFilter<"Availability"> | string;
    isActive?: Prisma.BoolFilter<"Availability"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Availability"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Availability"> | Date | string;
};
export type AvailabilityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weekDay?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.AvailabilityOrderByRelevanceInput;
};
export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AvailabilityWhereInput | Prisma.AvailabilityWhereInput[];
    OR?: Prisma.AvailabilityWhereInput[];
    NOT?: Prisma.AvailabilityWhereInput | Prisma.AvailabilityWhereInput[];
    weekDay?: Prisma.IntFilter<"Availability"> | number;
    startTime?: Prisma.StringFilter<"Availability"> | string;
    endTime?: Prisma.StringFilter<"Availability"> | string;
    isActive?: Prisma.BoolFilter<"Availability"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Availability"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Availability"> | Date | string;
}, "id">;
export type AvailabilityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weekDay?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AvailabilityCountOrderByAggregateInput;
    _avg?: Prisma.AvailabilityAvgOrderByAggregateInput;
    _max?: Prisma.AvailabilityMaxOrderByAggregateInput;
    _min?: Prisma.AvailabilityMinOrderByAggregateInput;
    _sum?: Prisma.AvailabilitySumOrderByAggregateInput;
};
export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvailabilityScalarWhereWithAggregatesInput | Prisma.AvailabilityScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvailabilityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvailabilityScalarWhereWithAggregatesInput | Prisma.AvailabilityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Availability"> | string;
    weekDay?: Prisma.IntWithAggregatesFilter<"Availability"> | number;
    startTime?: Prisma.StringWithAggregatesFilter<"Availability"> | string;
    endTime?: Prisma.StringWithAggregatesFilter<"Availability"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Availability"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Availability"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Availability"> | Date | string;
};
export type AvailabilityCreateInput = {
    id?: string;
    weekDay: number;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvailabilityUncheckedCreateInput = {
    id?: string;
    weekDay: number;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvailabilityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDay?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvailabilityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDay?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvailabilityCreateManyInput = {
    id?: string;
    weekDay: number;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AvailabilityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDay?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvailabilityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekDay?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AvailabilityOrderByRelevanceInput = {
    fields: Prisma.AvailabilityOrderByRelevanceFieldEnum | Prisma.AvailabilityOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AvailabilityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weekDay?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvailabilityAvgOrderByAggregateInput = {
    weekDay?: Prisma.SortOrder;
};
export type AvailabilityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weekDay?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvailabilityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weekDay?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AvailabilitySumOrderByAggregateInput = {
    weekDay?: Prisma.SortOrder;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type AvailabilitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weekDay?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["availability"]>;
export type AvailabilitySelectScalar = {
    id?: boolean;
    weekDay?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AvailabilityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weekDay" | "startTime" | "endTime" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["availability"]>;
export type $AvailabilityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Availability";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weekDay: number;
        startTime: string;
        endTime: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["availability"]>;
    composites: {};
};
export type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload, S>;
export type AvailabilityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvailabilityCountAggregateInputType | true;
};
export interface AvailabilityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Availability'];
        meta: {
            name: 'Availability';
        };
    };
    findUnique<T extends AvailabilityFindUniqueArgs>(args: Prisma.SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvailabilityClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvailabilityClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AvailabilityFindFirstArgs>(args?: Prisma.SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvailabilityClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvailabilityClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AvailabilityFindManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AvailabilityCreateArgs>(args: Prisma.SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma.Prisma__AvailabilityClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AvailabilityCreateManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AvailabilityDeleteArgs>(args: Prisma.SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma.Prisma__AvailabilityClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AvailabilityUpdateArgs>(args: Prisma.SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma.Prisma__AvailabilityClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AvailabilityUpdateManyArgs>(args: Prisma.SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AvailabilityUpsertArgs>(args: Prisma.SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma.Prisma__AvailabilityClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AvailabilityCountArgs>(args?: Prisma.Subset<T, AvailabilityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvailabilityCountAggregateOutputType> : number>;
    aggregate<T extends AvailabilityAggregateArgs>(args: Prisma.Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>;
    groupBy<T extends AvailabilityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvailabilityGroupByArgs['orderBy'];
    } : {
        orderBy?: AvailabilityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AvailabilityFieldRefs;
}
export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AvailabilityFieldRefs {
    readonly id: Prisma.FieldRef<"Availability", 'String'>;
    readonly weekDay: Prisma.FieldRef<"Availability", 'Int'>;
    readonly startTime: Prisma.FieldRef<"Availability", 'String'>;
    readonly endTime: Prisma.FieldRef<"Availability", 'String'>;
    readonly isActive: Prisma.FieldRef<"Availability", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Availability", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Availability", 'DateTime'>;
}
export type AvailabilityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    where: Prisma.AvailabilityWhereUniqueInput;
};
export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    where: Prisma.AvailabilityWhereUniqueInput;
};
export type AvailabilityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    where?: Prisma.AvailabilityWhereInput;
    orderBy?: Prisma.AvailabilityOrderByWithRelationInput | Prisma.AvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityScalarFieldEnum | Prisma.AvailabilityScalarFieldEnum[];
};
export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    where?: Prisma.AvailabilityWhereInput;
    orderBy?: Prisma.AvailabilityOrderByWithRelationInput | Prisma.AvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityScalarFieldEnum | Prisma.AvailabilityScalarFieldEnum[];
};
export type AvailabilityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    where?: Prisma.AvailabilityWhereInput;
    orderBy?: Prisma.AvailabilityOrderByWithRelationInput | Prisma.AvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityScalarFieldEnum | Prisma.AvailabilityScalarFieldEnum[];
};
export type AvailabilityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvailabilityCreateInput, Prisma.AvailabilityUncheckedCreateInput>;
};
export type AvailabilityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AvailabilityCreateManyInput | Prisma.AvailabilityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AvailabilityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvailabilityUpdateInput, Prisma.AvailabilityUncheckedUpdateInput>;
    where: Prisma.AvailabilityWhereUniqueInput;
};
export type AvailabilityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AvailabilityUpdateManyMutationInput, Prisma.AvailabilityUncheckedUpdateManyInput>;
    where?: Prisma.AvailabilityWhereInput;
    limit?: number;
};
export type AvailabilityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    where: Prisma.AvailabilityWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvailabilityCreateInput, Prisma.AvailabilityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AvailabilityUpdateInput, Prisma.AvailabilityUncheckedUpdateInput>;
};
export type AvailabilityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
    where: Prisma.AvailabilityWhereUniqueInput;
};
export type AvailabilityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityWhereInput;
    limit?: number;
};
export type AvailabilityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilitySelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityOmit<ExtArgs> | null;
};
