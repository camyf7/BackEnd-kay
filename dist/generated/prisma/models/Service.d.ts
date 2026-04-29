import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ServiceModel = runtime.Types.Result.DefaultSelection<Prisma.$ServicePayload>;
export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
};
export type ServiceAvgAggregateOutputType = {
    durationInMinutes: number | null;
    priceBrl: runtime.Decimal | null;
    priceEur: runtime.Decimal | null;
};
export type ServiceSumAggregateOutputType = {
    durationInMinutes: number | null;
    priceBrl: runtime.Decimal | null;
    priceEur: runtime.Decimal | null;
};
export type ServiceMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    durationInMinutes: number | null;
    priceBrl: runtime.Decimal | null;
    priceEur: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ServiceMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    durationInMinutes: number | null;
    priceBrl: runtime.Decimal | null;
    priceEur: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ServiceCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    durationInMinutes: number;
    priceBrl: number;
    priceEur: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ServiceAvgAggregateInputType = {
    durationInMinutes?: true;
    priceBrl?: true;
    priceEur?: true;
};
export type ServiceSumAggregateInputType = {
    durationInMinutes?: true;
    priceBrl?: true;
    priceEur?: true;
};
export type ServiceMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    durationInMinutes?: true;
    priceBrl?: true;
    priceEur?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ServiceMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    durationInMinutes?: true;
    priceBrl?: true;
    priceEur?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ServiceCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    durationInMinutes?: true;
    priceBrl?: true;
    priceEur?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ServiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServiceCountAggregateInputType;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
};
export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateService[P]> : Prisma.GetScalarType<T[P], AggregateService[P]>;
};
export type ServiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithAggregationInput | Prisma.ServiceOrderByWithAggregationInput[];
    by: Prisma.ServiceScalarFieldEnum[] | Prisma.ServiceScalarFieldEnum;
    having?: Prisma.ServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
};
export type ServiceGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    durationInMinutes: number;
    priceBrl: runtime.Decimal;
    priceEur: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
};
export type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServiceGroupByOutputType[P]>;
}>>;
export type ServiceWhereInput = {
    AND?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    OR?: Prisma.ServiceWhereInput[];
    NOT?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    id?: Prisma.StringFilter<"Service"> | string;
    name?: Prisma.StringFilter<"Service"> | string;
    description?: Prisma.StringFilter<"Service"> | string;
    durationInMinutes?: Prisma.IntFilter<"Service"> | number;
    priceBrl?: Prisma.DecimalFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    appointments?: Prisma.AppointmentListRelationFilter;
};
export type ServiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    priceBrl?: Prisma.SortOrder;
    priceEur?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    appointments?: Prisma.AppointmentOrderByRelationAggregateInput;
    _relevance?: Prisma.ServiceOrderByRelevanceInput;
};
export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    OR?: Prisma.ServiceWhereInput[];
    NOT?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    name?: Prisma.StringFilter<"Service"> | string;
    description?: Prisma.StringFilter<"Service"> | string;
    durationInMinutes?: Prisma.IntFilter<"Service"> | number;
    priceBrl?: Prisma.DecimalFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    appointments?: Prisma.AppointmentListRelationFilter;
}, "id">;
export type ServiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    priceBrl?: Prisma.SortOrder;
    priceEur?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ServiceCountOrderByAggregateInput;
    _avg?: Prisma.ServiceAvgOrderByAggregateInput;
    _max?: Prisma.ServiceMaxOrderByAggregateInput;
    _min?: Prisma.ServiceMinOrderByAggregateInput;
    _sum?: Prisma.ServiceSumOrderByAggregateInput;
};
export type ServiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServiceScalarWhereWithAggregatesInput | Prisma.ServiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServiceScalarWhereWithAggregatesInput | Prisma.ServiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    durationInMinutes?: Prisma.IntWithAggregatesFilter<"Service"> | number;
    priceBrl?: Prisma.DecimalWithAggregatesFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalWithAggregatesFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Service"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Service"> | Date | string;
};
export type ServiceCreateInput = {
    id?: string;
    name: string;
    description: string;
    durationInMinutes: number;
    priceBrl: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    durationInMinutes: number;
    priceBrl: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceBrl?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceBrl?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    durationInMinutes: number;
    priceBrl: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceBrl?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceBrl?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceOrderByRelevanceInput = {
    fields: Prisma.ServiceOrderByRelevanceFieldEnum | Prisma.ServiceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ServiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    priceBrl?: Prisma.SortOrder;
    priceEur?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceAvgOrderByAggregateInput = {
    durationInMinutes?: Prisma.SortOrder;
    priceBrl?: Prisma.SortOrder;
    priceEur?: Prisma.SortOrder;
};
export type ServiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    priceBrl?: Prisma.SortOrder;
    priceEur?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    durationInMinutes?: Prisma.SortOrder;
    priceBrl?: Prisma.SortOrder;
    priceEur?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceSumOrderByAggregateInput = {
    durationInMinutes?: Prisma.SortOrder;
    priceBrl?: Prisma.SortOrder;
    priceEur?: Prisma.SortOrder;
};
export type ServiceScalarRelationFilter = {
    is?: Prisma.ServiceWhereInput;
    isNot?: Prisma.ServiceWhereInput;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ServiceCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutAppointmentsInput, Prisma.ServiceUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutAppointmentsInput, Prisma.ServiceUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.ServiceUpsertWithoutAppointmentsInput;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.ServiceUpdateWithoutAppointmentsInput>, Prisma.ServiceUncheckedUpdateWithoutAppointmentsInput>;
};
export type ServiceCreateWithoutAppointmentsInput = {
    id?: string;
    name: string;
    description: string;
    durationInMinutes: number;
    priceBrl: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceUncheckedCreateWithoutAppointmentsInput = {
    id?: string;
    name: string;
    description: string;
    durationInMinutes: number;
    priceBrl: runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutAppointmentsInput, Prisma.ServiceUncheckedCreateWithoutAppointmentsInput>;
};
export type ServiceUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutAppointmentsInput, Prisma.ServiceUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutAppointmentsInput, Prisma.ServiceUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.ServiceWhereInput;
};
export type ServiceUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.ServiceWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutAppointmentsInput, Prisma.ServiceUncheckedUpdateWithoutAppointmentsInput>;
};
export type ServiceUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceBrl?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    durationInMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceBrl?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    priceEur?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceCountOutputType = {
    appointments: number;
};
export type ServiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | ServiceCountOutputTypeCountAppointmentsArgs;
};
export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceCountOutputTypeSelect<ExtArgs> | null;
};
export type ServiceCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
};
export type ServiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    durationInMinutes?: boolean;
    priceBrl?: boolean;
    priceEur?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    appointments?: boolean | Prisma.Service$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["service"]>;
export type ServiceSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    durationInMinutes?: boolean;
    priceBrl?: boolean;
    priceEur?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ServiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "durationInMinutes" | "priceBrl" | "priceEur" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>;
export type ServiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appointments?: boolean | Prisma.Service$appointmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ServicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Service";
    objects: {
        appointments: Prisma.$AppointmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string;
        durationInMinutes: number;
        priceBrl: runtime.Decimal;
        priceEur: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["service"]>;
    composites: {};
};
export type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServicePayload, S>;
export type ServiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceCountAggregateInputType | true;
};
export interface ServiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Service'];
        meta: {
            name: 'Service';
        };
    };
    findUnique<T extends ServiceFindUniqueArgs>(args: Prisma.SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServiceFindFirstArgs>(args?: Prisma.SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServiceFindManyArgs>(args?: Prisma.SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServiceCreateArgs>(args: Prisma.SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServiceCreateManyArgs>(args?: Prisma.SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ServiceDeleteArgs>(args: Prisma.SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServiceUpdateArgs>(args: Prisma.SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServiceUpdateManyArgs>(args: Prisma.SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ServiceUpsertArgs>(args: Prisma.SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServiceCountArgs>(args?: Prisma.Subset<T, ServiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServiceCountAggregateOutputType> : number>;
    aggregate<T extends ServiceAggregateArgs>(args: Prisma.Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>;
    groupBy<T extends ServiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServiceGroupByArgs['orderBy'];
    } : {
        orderBy?: ServiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServiceFieldRefs;
}
export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appointments<T extends Prisma.Service$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Service$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServiceFieldRefs {
    readonly id: Prisma.FieldRef<"Service", 'String'>;
    readonly name: Prisma.FieldRef<"Service", 'String'>;
    readonly description: Prisma.FieldRef<"Service", 'String'>;
    readonly durationInMinutes: Prisma.FieldRef<"Service", 'Int'>;
    readonly priceBrl: Prisma.FieldRef<"Service", 'Decimal'>;
    readonly priceEur: Prisma.FieldRef<"Service", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Service", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Service", 'DateTime'>;
}
export type ServiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type ServiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type ServiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type ServiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceCreateInput, Prisma.ServiceUncheckedCreateInput>;
};
export type ServiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServiceCreateManyInput | Prisma.ServiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceUpdateInput, Prisma.ServiceUncheckedUpdateInput>;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServiceUpdateManyMutationInput, Prisma.ServiceUncheckedUpdateManyInput>;
    where?: Prisma.ServiceWhereInput;
    limit?: number;
};
export type ServiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateInput, Prisma.ServiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServiceUpdateInput, Prisma.ServiceUncheckedUpdateInput>;
};
export type ServiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    limit?: number;
};
export type Service$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentScalarFieldEnum | Prisma.AppointmentScalarFieldEnum[];
};
export type ServiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
};
