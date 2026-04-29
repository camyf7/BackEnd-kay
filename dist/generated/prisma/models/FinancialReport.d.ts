import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FinancialReportModel = runtime.Types.Result.DefaultSelection<Prisma.$FinancialReportPayload>;
export type AggregateFinancialReport = {
    _count: FinancialReportCountAggregateOutputType | null;
    _avg: FinancialReportAvgAggregateOutputType | null;
    _sum: FinancialReportSumAggregateOutputType | null;
    _min: FinancialReportMinAggregateOutputType | null;
    _max: FinancialReportMaxAggregateOutputType | null;
};
export type FinancialReportAvgAggregateOutputType = {
    grossAmount: runtime.Decimal | null;
    paidReservations: number | null;
    pendingPayments: number | null;
};
export type FinancialReportSumAggregateOutputType = {
    grossAmount: runtime.Decimal | null;
    paidReservations: number | null;
    pendingPayments: number | null;
};
export type FinancialReportMinAggregateOutputType = {
    id: string | null;
    reportDate: Date | null;
    currency: $Enums.CurrencyCode | null;
    grossAmount: runtime.Decimal | null;
    paidReservations: number | null;
    pendingPayments: number | null;
    summary: string | null;
    createdAt: Date | null;
};
export type FinancialReportMaxAggregateOutputType = {
    id: string | null;
    reportDate: Date | null;
    currency: $Enums.CurrencyCode | null;
    grossAmount: runtime.Decimal | null;
    paidReservations: number | null;
    pendingPayments: number | null;
    summary: string | null;
    createdAt: Date | null;
};
export type FinancialReportCountAggregateOutputType = {
    id: number;
    reportDate: number;
    currency: number;
    grossAmount: number;
    paidReservations: number;
    pendingPayments: number;
    summary: number;
    createdAt: number;
    _all: number;
};
export type FinancialReportAvgAggregateInputType = {
    grossAmount?: true;
    paidReservations?: true;
    pendingPayments?: true;
};
export type FinancialReportSumAggregateInputType = {
    grossAmount?: true;
    paidReservations?: true;
    pendingPayments?: true;
};
export type FinancialReportMinAggregateInputType = {
    id?: true;
    reportDate?: true;
    currency?: true;
    grossAmount?: true;
    paidReservations?: true;
    pendingPayments?: true;
    summary?: true;
    createdAt?: true;
};
export type FinancialReportMaxAggregateInputType = {
    id?: true;
    reportDate?: true;
    currency?: true;
    grossAmount?: true;
    paidReservations?: true;
    pendingPayments?: true;
    summary?: true;
    createdAt?: true;
};
export type FinancialReportCountAggregateInputType = {
    id?: true;
    reportDate?: true;
    currency?: true;
    grossAmount?: true;
    paidReservations?: true;
    pendingPayments?: true;
    summary?: true;
    createdAt?: true;
    _all?: true;
};
export type FinancialReportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FinancialReportWhereInput;
    orderBy?: Prisma.FinancialReportOrderByWithRelationInput | Prisma.FinancialReportOrderByWithRelationInput[];
    cursor?: Prisma.FinancialReportWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FinancialReportCountAggregateInputType;
    _avg?: FinancialReportAvgAggregateInputType;
    _sum?: FinancialReportSumAggregateInputType;
    _min?: FinancialReportMinAggregateInputType;
    _max?: FinancialReportMaxAggregateInputType;
};
export type GetFinancialReportAggregateType<T extends FinancialReportAggregateArgs> = {
    [P in keyof T & keyof AggregateFinancialReport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFinancialReport[P]> : Prisma.GetScalarType<T[P], AggregateFinancialReport[P]>;
};
export type FinancialReportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FinancialReportWhereInput;
    orderBy?: Prisma.FinancialReportOrderByWithAggregationInput | Prisma.FinancialReportOrderByWithAggregationInput[];
    by: Prisma.FinancialReportScalarFieldEnum[] | Prisma.FinancialReportScalarFieldEnum;
    having?: Prisma.FinancialReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FinancialReportCountAggregateInputType | true;
    _avg?: FinancialReportAvgAggregateInputType;
    _sum?: FinancialReportSumAggregateInputType;
    _min?: FinancialReportMinAggregateInputType;
    _max?: FinancialReportMaxAggregateInputType;
};
export type FinancialReportGroupByOutputType = {
    id: string;
    reportDate: Date;
    currency: $Enums.CurrencyCode;
    grossAmount: runtime.Decimal;
    paidReservations: number;
    pendingPayments: number;
    summary: string;
    createdAt: Date;
    _count: FinancialReportCountAggregateOutputType | null;
    _avg: FinancialReportAvgAggregateOutputType | null;
    _sum: FinancialReportSumAggregateOutputType | null;
    _min: FinancialReportMinAggregateOutputType | null;
    _max: FinancialReportMaxAggregateOutputType | null;
};
export type GetFinancialReportGroupByPayload<T extends FinancialReportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FinancialReportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FinancialReportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FinancialReportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FinancialReportGroupByOutputType[P]>;
}>>;
export type FinancialReportWhereInput = {
    AND?: Prisma.FinancialReportWhereInput | Prisma.FinancialReportWhereInput[];
    OR?: Prisma.FinancialReportWhereInput[];
    NOT?: Prisma.FinancialReportWhereInput | Prisma.FinancialReportWhereInput[];
    id?: Prisma.StringFilter<"FinancialReport"> | string;
    reportDate?: Prisma.DateTimeFilter<"FinancialReport"> | Date | string;
    currency?: Prisma.EnumCurrencyCodeFilter<"FinancialReport"> | $Enums.CurrencyCode;
    grossAmount?: Prisma.DecimalFilter<"FinancialReport"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations?: Prisma.IntFilter<"FinancialReport"> | number;
    pendingPayments?: Prisma.IntFilter<"FinancialReport"> | number;
    summary?: Prisma.StringFilter<"FinancialReport"> | string;
    createdAt?: Prisma.DateTimeFilter<"FinancialReport"> | Date | string;
};
export type FinancialReportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reportDate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    grossAmount?: Prisma.SortOrder;
    paidReservations?: Prisma.SortOrder;
    pendingPayments?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _relevance?: Prisma.FinancialReportOrderByRelevanceInput;
};
export type FinancialReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    reportDate?: Date | string;
    AND?: Prisma.FinancialReportWhereInput | Prisma.FinancialReportWhereInput[];
    OR?: Prisma.FinancialReportWhereInput[];
    NOT?: Prisma.FinancialReportWhereInput | Prisma.FinancialReportWhereInput[];
    currency?: Prisma.EnumCurrencyCodeFilter<"FinancialReport"> | $Enums.CurrencyCode;
    grossAmount?: Prisma.DecimalFilter<"FinancialReport"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations?: Prisma.IntFilter<"FinancialReport"> | number;
    pendingPayments?: Prisma.IntFilter<"FinancialReport"> | number;
    summary?: Prisma.StringFilter<"FinancialReport"> | string;
    createdAt?: Prisma.DateTimeFilter<"FinancialReport"> | Date | string;
}, "id" | "reportDate">;
export type FinancialReportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reportDate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    grossAmount?: Prisma.SortOrder;
    paidReservations?: Prisma.SortOrder;
    pendingPayments?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FinancialReportCountOrderByAggregateInput;
    _avg?: Prisma.FinancialReportAvgOrderByAggregateInput;
    _max?: Prisma.FinancialReportMaxOrderByAggregateInput;
    _min?: Prisma.FinancialReportMinOrderByAggregateInput;
    _sum?: Prisma.FinancialReportSumOrderByAggregateInput;
};
export type FinancialReportScalarWhereWithAggregatesInput = {
    AND?: Prisma.FinancialReportScalarWhereWithAggregatesInput | Prisma.FinancialReportScalarWhereWithAggregatesInput[];
    OR?: Prisma.FinancialReportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FinancialReportScalarWhereWithAggregatesInput | Prisma.FinancialReportScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FinancialReport"> | string;
    reportDate?: Prisma.DateTimeWithAggregatesFilter<"FinancialReport"> | Date | string;
    currency?: Prisma.EnumCurrencyCodeWithAggregatesFilter<"FinancialReport"> | $Enums.CurrencyCode;
    grossAmount?: Prisma.DecimalWithAggregatesFilter<"FinancialReport"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations?: Prisma.IntWithAggregatesFilter<"FinancialReport"> | number;
    pendingPayments?: Prisma.IntWithAggregatesFilter<"FinancialReport"> | number;
    summary?: Prisma.StringWithAggregatesFilter<"FinancialReport"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FinancialReport"> | Date | string;
};
export type FinancialReportCreateInput = {
    id?: string;
    reportDate: Date | string;
    currency: $Enums.CurrencyCode;
    grossAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations: number;
    pendingPayments: number;
    summary: string;
    createdAt?: Date | string;
};
export type FinancialReportUncheckedCreateInput = {
    id?: string;
    reportDate: Date | string;
    currency: $Enums.CurrencyCode;
    grossAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations: number;
    pendingPayments: number;
    summary: string;
    createdAt?: Date | string;
};
export type FinancialReportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    grossAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations?: Prisma.IntFieldUpdateOperationsInput | number;
    pendingPayments?: Prisma.IntFieldUpdateOperationsInput | number;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinancialReportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    grossAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations?: Prisma.IntFieldUpdateOperationsInput | number;
    pendingPayments?: Prisma.IntFieldUpdateOperationsInput | number;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinancialReportCreateManyInput = {
    id?: string;
    reportDate: Date | string;
    currency: $Enums.CurrencyCode;
    grossAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations: number;
    pendingPayments: number;
    summary: string;
    createdAt?: Date | string;
};
export type FinancialReportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    grossAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations?: Prisma.IntFieldUpdateOperationsInput | number;
    pendingPayments?: Prisma.IntFieldUpdateOperationsInput | number;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinancialReportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    grossAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidReservations?: Prisma.IntFieldUpdateOperationsInput | number;
    pendingPayments?: Prisma.IntFieldUpdateOperationsInput | number;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinancialReportOrderByRelevanceInput = {
    fields: Prisma.FinancialReportOrderByRelevanceFieldEnum | Prisma.FinancialReportOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type FinancialReportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reportDate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    grossAmount?: Prisma.SortOrder;
    paidReservations?: Prisma.SortOrder;
    pendingPayments?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FinancialReportAvgOrderByAggregateInput = {
    grossAmount?: Prisma.SortOrder;
    paidReservations?: Prisma.SortOrder;
    pendingPayments?: Prisma.SortOrder;
};
export type FinancialReportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reportDate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    grossAmount?: Prisma.SortOrder;
    paidReservations?: Prisma.SortOrder;
    pendingPayments?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FinancialReportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reportDate?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    grossAmount?: Prisma.SortOrder;
    paidReservations?: Prisma.SortOrder;
    pendingPayments?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FinancialReportSumOrderByAggregateInput = {
    grossAmount?: Prisma.SortOrder;
    paidReservations?: Prisma.SortOrder;
    pendingPayments?: Prisma.SortOrder;
};
export type FinancialReportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reportDate?: boolean;
    currency?: boolean;
    grossAmount?: boolean;
    paidReservations?: boolean;
    pendingPayments?: boolean;
    summary?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["financialReport"]>;
export type FinancialReportSelectScalar = {
    id?: boolean;
    reportDate?: boolean;
    currency?: boolean;
    grossAmount?: boolean;
    paidReservations?: boolean;
    pendingPayments?: boolean;
    summary?: boolean;
    createdAt?: boolean;
};
export type FinancialReportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reportDate" | "currency" | "grossAmount" | "paidReservations" | "pendingPayments" | "summary" | "createdAt", ExtArgs["result"]["financialReport"]>;
export type $FinancialReportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FinancialReport";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reportDate: Date;
        currency: $Enums.CurrencyCode;
        grossAmount: runtime.Decimal;
        paidReservations: number;
        pendingPayments: number;
        summary: string;
        createdAt: Date;
    }, ExtArgs["result"]["financialReport"]>;
    composites: {};
};
export type FinancialReportGetPayload<S extends boolean | null | undefined | FinancialReportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload, S>;
export type FinancialReportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FinancialReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FinancialReportCountAggregateInputType | true;
};
export interface FinancialReportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FinancialReport'];
        meta: {
            name: 'FinancialReport';
        };
    };
    findUnique<T extends FinancialReportFindUniqueArgs>(args: Prisma.SelectSubset<T, FinancialReportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FinancialReportClient<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FinancialReportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FinancialReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FinancialReportClient<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FinancialReportFindFirstArgs>(args?: Prisma.SelectSubset<T, FinancialReportFindFirstArgs<ExtArgs>>): Prisma.Prisma__FinancialReportClient<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FinancialReportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FinancialReportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FinancialReportClient<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FinancialReportFindManyArgs>(args?: Prisma.SelectSubset<T, FinancialReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FinancialReportCreateArgs>(args: Prisma.SelectSubset<T, FinancialReportCreateArgs<ExtArgs>>): Prisma.Prisma__FinancialReportClient<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FinancialReportCreateManyArgs>(args?: Prisma.SelectSubset<T, FinancialReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends FinancialReportDeleteArgs>(args: Prisma.SelectSubset<T, FinancialReportDeleteArgs<ExtArgs>>): Prisma.Prisma__FinancialReportClient<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FinancialReportUpdateArgs>(args: Prisma.SelectSubset<T, FinancialReportUpdateArgs<ExtArgs>>): Prisma.Prisma__FinancialReportClient<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FinancialReportDeleteManyArgs>(args?: Prisma.SelectSubset<T, FinancialReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FinancialReportUpdateManyArgs>(args: Prisma.SelectSubset<T, FinancialReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends FinancialReportUpsertArgs>(args: Prisma.SelectSubset<T, FinancialReportUpsertArgs<ExtArgs>>): Prisma.Prisma__FinancialReportClient<runtime.Types.Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FinancialReportCountArgs>(args?: Prisma.Subset<T, FinancialReportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FinancialReportCountAggregateOutputType> : number>;
    aggregate<T extends FinancialReportAggregateArgs>(args: Prisma.Subset<T, FinancialReportAggregateArgs>): Prisma.PrismaPromise<GetFinancialReportAggregateType<T>>;
    groupBy<T extends FinancialReportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FinancialReportGroupByArgs['orderBy'];
    } : {
        orderBy?: FinancialReportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FinancialReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FinancialReportFieldRefs;
}
export interface Prisma__FinancialReportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FinancialReportFieldRefs {
    readonly id: Prisma.FieldRef<"FinancialReport", 'String'>;
    readonly reportDate: Prisma.FieldRef<"FinancialReport", 'DateTime'>;
    readonly currency: Prisma.FieldRef<"FinancialReport", 'CurrencyCode'>;
    readonly grossAmount: Prisma.FieldRef<"FinancialReport", 'Decimal'>;
    readonly paidReservations: Prisma.FieldRef<"FinancialReport", 'Int'>;
    readonly pendingPayments: Prisma.FieldRef<"FinancialReport", 'Int'>;
    readonly summary: Prisma.FieldRef<"FinancialReport", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FinancialReport", 'DateTime'>;
}
export type FinancialReportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    where: Prisma.FinancialReportWhereUniqueInput;
};
export type FinancialReportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    where: Prisma.FinancialReportWhereUniqueInput;
};
export type FinancialReportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    where?: Prisma.FinancialReportWhereInput;
    orderBy?: Prisma.FinancialReportOrderByWithRelationInput | Prisma.FinancialReportOrderByWithRelationInput[];
    cursor?: Prisma.FinancialReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FinancialReportScalarFieldEnum | Prisma.FinancialReportScalarFieldEnum[];
};
export type FinancialReportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    where?: Prisma.FinancialReportWhereInput;
    orderBy?: Prisma.FinancialReportOrderByWithRelationInput | Prisma.FinancialReportOrderByWithRelationInput[];
    cursor?: Prisma.FinancialReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FinancialReportScalarFieldEnum | Prisma.FinancialReportScalarFieldEnum[];
};
export type FinancialReportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    where?: Prisma.FinancialReportWhereInput;
    orderBy?: Prisma.FinancialReportOrderByWithRelationInput | Prisma.FinancialReportOrderByWithRelationInput[];
    cursor?: Prisma.FinancialReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FinancialReportScalarFieldEnum | Prisma.FinancialReportScalarFieldEnum[];
};
export type FinancialReportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FinancialReportCreateInput, Prisma.FinancialReportUncheckedCreateInput>;
};
export type FinancialReportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FinancialReportCreateManyInput | Prisma.FinancialReportCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FinancialReportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FinancialReportUpdateInput, Prisma.FinancialReportUncheckedUpdateInput>;
    where: Prisma.FinancialReportWhereUniqueInput;
};
export type FinancialReportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FinancialReportUpdateManyMutationInput, Prisma.FinancialReportUncheckedUpdateManyInput>;
    where?: Prisma.FinancialReportWhereInput;
    limit?: number;
};
export type FinancialReportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    where: Prisma.FinancialReportWhereUniqueInput;
    create: Prisma.XOR<Prisma.FinancialReportCreateInput, Prisma.FinancialReportUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FinancialReportUpdateInput, Prisma.FinancialReportUncheckedUpdateInput>;
};
export type FinancialReportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
    where: Prisma.FinancialReportWhereUniqueInput;
};
export type FinancialReportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FinancialReportWhereInput;
    limit?: number;
};
export type FinancialReportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinancialReportSelect<ExtArgs> | null;
    omit?: Prisma.FinancialReportOmit<ExtArgs> | null;
};
