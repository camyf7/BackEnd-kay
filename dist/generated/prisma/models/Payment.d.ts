import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentPayload>;
export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type PaymentAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    appointmentId: string | null;
    amount: runtime.Decimal | null;
    currency: $Enums.CurrencyCode | null;
    method: string | null;
    isTermsAccepted: boolean | null;
    status: $Enums.PaymentStatus | null;
    createdAt: Date | null;
};
export type PaymentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    appointmentId: string | null;
    amount: runtime.Decimal | null;
    currency: $Enums.CurrencyCode | null;
    method: string | null;
    isTermsAccepted: boolean | null;
    status: $Enums.PaymentStatus | null;
    createdAt: Date | null;
};
export type PaymentCountAggregateOutputType = {
    id: number;
    userId: number;
    appointmentId: number;
    amount: number;
    currency: number;
    method: number;
    isTermsAccepted: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type PaymentAvgAggregateInputType = {
    amount?: true;
};
export type PaymentSumAggregateInputType = {
    amount?: true;
};
export type PaymentMinAggregateInputType = {
    id?: true;
    userId?: true;
    appointmentId?: true;
    amount?: true;
    currency?: true;
    method?: true;
    isTermsAccepted?: true;
    status?: true;
    createdAt?: true;
};
export type PaymentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    appointmentId?: true;
    amount?: true;
    currency?: true;
    method?: true;
    isTermsAccepted?: true;
    status?: true;
    createdAt?: true;
};
export type PaymentCountAggregateInputType = {
    id?: true;
    userId?: true;
    appointmentId?: true;
    amount?: true;
    currency?: true;
    method?: true;
    isTermsAccepted?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type PaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentCountAggregateInputType;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment[P]> : Prisma.GetScalarType<T[P], AggregatePayment[P]>;
};
export type PaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithAggregationInput | Prisma.PaymentOrderByWithAggregationInput[];
    by: Prisma.PaymentScalarFieldEnum[] | Prisma.PaymentScalarFieldEnum;
    having?: Prisma.PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type PaymentGroupByOutputType = {
    id: string;
    userId: string;
    appointmentId: string;
    amount: runtime.Decimal;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status: $Enums.PaymentStatus;
    createdAt: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]>;
}>>;
export type PaymentWhereInput = {
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    userId?: Prisma.StringFilter<"Payment"> | string;
    appointmentId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFilter<"Payment"> | $Enums.CurrencyCode;
    method?: Prisma.StringFilter<"Payment"> | string;
    isTermsAccepted?: Prisma.BoolFilter<"Payment"> | boolean;
    status?: Prisma.EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    appointment?: Prisma.XOR<Prisma.AppointmentScalarRelationFilter, Prisma.AppointmentWhereInput>;
    refunds?: Prisma.RefundListRelationFilter;
    invoice?: Prisma.XOR<Prisma.InvoiceNullableScalarRelationFilter, Prisma.InvoiceWhereInput> | null;
};
export type PaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    isTermsAccepted?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    appointment?: Prisma.AppointmentOrderByWithRelationInput;
    refunds?: Prisma.RefundOrderByRelationAggregateInput;
    invoice?: Prisma.InvoiceOrderByWithRelationInput;
    _relevance?: Prisma.PaymentOrderByRelevanceInput;
};
export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    userId?: Prisma.StringFilter<"Payment"> | string;
    appointmentId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFilter<"Payment"> | $Enums.CurrencyCode;
    method?: Prisma.StringFilter<"Payment"> | string;
    isTermsAccepted?: Prisma.BoolFilter<"Payment"> | boolean;
    status?: Prisma.EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    appointment?: Prisma.XOR<Prisma.AppointmentScalarRelationFilter, Prisma.AppointmentWhereInput>;
    refunds?: Prisma.RefundListRelationFilter;
    invoice?: Prisma.XOR<Prisma.InvoiceNullableScalarRelationFilter, Prisma.InvoiceWhereInput> | null;
}, "id">;
export type PaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    isTermsAccepted?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAvgOrderByAggregateInput;
    _max?: Prisma.PaymentMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMinOrderByAggregateInput;
    _sum?: Prisma.PaymentSumOrderByAggregateInput;
};
export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    appointmentId?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeWithAggregatesFilter<"Payment"> | $Enums.CurrencyCode;
    method?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    isTermsAccepted?: Prisma.BoolWithAggregatesFilter<"Payment"> | boolean;
    status?: Prisma.EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
};
export type PaymentCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPaymentsInput;
    appointment: Prisma.AppointmentCreateNestedOneWithoutPaymentsInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutPaymentInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutPaymentInput;
};
export type PaymentUncheckedCreateInput = {
    id?: string;
    userId: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutPaymentInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutPaymentInput;
};
export type PaymentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPaymentsNestedInput;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutPaymentsNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutPaymentNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutPaymentNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutPaymentNestedInput;
};
export type PaymentCreateManyInput = {
    id?: string;
    userId: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
};
export type PaymentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentListRelationFilter = {
    every?: Prisma.PaymentWhereInput;
    some?: Prisma.PaymentWhereInput;
    none?: Prisma.PaymentWhereInput;
};
export type PaymentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentOrderByRelevanceInput = {
    fields: Prisma.PaymentOrderByRelevanceFieldEnum | Prisma.PaymentOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type PaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    isTermsAccepted?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    isTermsAccepted?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    isTermsAccepted?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentScalarRelationFilter = {
    is?: Prisma.PaymentWhereInput;
    isNot?: Prisma.PaymentWhereInput;
};
export type PaymentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutUserInput, Prisma.PaymentUncheckedCreateWithoutUserInput> | Prisma.PaymentCreateWithoutUserInput[] | Prisma.PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutUserInput | Prisma.PaymentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PaymentCreateManyUserInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutUserInput, Prisma.PaymentUncheckedCreateWithoutUserInput> | Prisma.PaymentCreateWithoutUserInput[] | Prisma.PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutUserInput | Prisma.PaymentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PaymentCreateManyUserInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutUserInput, Prisma.PaymentUncheckedCreateWithoutUserInput> | Prisma.PaymentCreateWithoutUserInput[] | Prisma.PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutUserInput | Prisma.PaymentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutUserInput | Prisma.PaymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PaymentCreateManyUserInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutUserInput | Prisma.PaymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutUserInput | Prisma.PaymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutUserInput, Prisma.PaymentUncheckedCreateWithoutUserInput> | Prisma.PaymentCreateWithoutUserInput[] | Prisma.PaymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutUserInput | Prisma.PaymentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutUserInput | Prisma.PaymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PaymentCreateManyUserInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutUserInput | Prisma.PaymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutUserInput | Prisma.PaymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentCreateNestedManyWithoutAppointmentInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAppointmentInput, Prisma.PaymentUncheckedCreateWithoutAppointmentInput> | Prisma.PaymentCreateWithoutAppointmentInput[] | Prisma.PaymentUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAppointmentInput | Prisma.PaymentCreateOrConnectWithoutAppointmentInput[];
    createMany?: Prisma.PaymentCreateManyAppointmentInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAppointmentInput, Prisma.PaymentUncheckedCreateWithoutAppointmentInput> | Prisma.PaymentCreateWithoutAppointmentInput[] | Prisma.PaymentUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAppointmentInput | Prisma.PaymentCreateOrConnectWithoutAppointmentInput[];
    createMany?: Prisma.PaymentCreateManyAppointmentInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutAppointmentNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAppointmentInput, Prisma.PaymentUncheckedCreateWithoutAppointmentInput> | Prisma.PaymentCreateWithoutAppointmentInput[] | Prisma.PaymentUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAppointmentInput | Prisma.PaymentCreateOrConnectWithoutAppointmentInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutAppointmentInput | Prisma.PaymentUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: Prisma.PaymentCreateManyAppointmentInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutAppointmentInput | Prisma.PaymentUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutAppointmentInput | Prisma.PaymentUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAppointmentInput, Prisma.PaymentUncheckedCreateWithoutAppointmentInput> | Prisma.PaymentCreateWithoutAppointmentInput[] | Prisma.PaymentUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAppointmentInput | Prisma.PaymentCreateOrConnectWithoutAppointmentInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutAppointmentInput | Prisma.PaymentUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: Prisma.PaymentCreateManyAppointmentInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutAppointmentInput | Prisma.PaymentUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutAppointmentInput | Prisma.PaymentUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type EnumCurrencyCodeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyCode;
};
export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
};
export type PaymentCreateNestedOneWithoutRefundsInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRefundsInput, Prisma.PaymentUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRefundsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRefundsInput, Prisma.PaymentUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRefundsInput;
    upsert?: Prisma.PaymentUpsertWithoutRefundsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentUpdateToOneWithWhereWithoutRefundsInput, Prisma.PaymentUpdateWithoutRefundsInput>, Prisma.PaymentUncheckedUpdateWithoutRefundsInput>;
};
export type PaymentCreateNestedOneWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput;
    connect?: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput;
    upsert?: Prisma.PaymentUpsertWithoutInvoiceInput;
    connect?: Prisma.PaymentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentUpdateToOneWithWhereWithoutInvoiceInput, Prisma.PaymentUpdateWithoutInvoiceInput>, Prisma.PaymentUncheckedUpdateWithoutInvoiceInput>;
};
export type PaymentCreateWithoutUserInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    appointment: Prisma.AppointmentCreateNestedOneWithoutPaymentsInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutPaymentInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutPaymentInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutUserInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutUserInput, Prisma.PaymentUncheckedCreateWithoutUserInput>;
};
export type PaymentCreateManyUserInputEnvelope = {
    data: Prisma.PaymentCreateManyUserInput | Prisma.PaymentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutUserInput, Prisma.PaymentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutUserInput, Prisma.PaymentUncheckedCreateWithoutUserInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutUserInput, Prisma.PaymentUncheckedUpdateWithoutUserInput>;
};
export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutUserInput>;
};
export type PaymentScalarWhereInput = {
    AND?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    OR?: Prisma.PaymentScalarWhereInput[];
    NOT?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    userId?: Prisma.StringFilter<"Payment"> | string;
    appointmentId?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFilter<"Payment"> | $Enums.CurrencyCode;
    method?: Prisma.StringFilter<"Payment"> | string;
    isTermsAccepted?: Prisma.BoolFilter<"Payment"> | boolean;
    status?: Prisma.EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
};
export type PaymentCreateWithoutAppointmentInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPaymentsInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutPaymentInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    userId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutPaymentInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutAppointmentInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAppointmentInput, Prisma.PaymentUncheckedCreateWithoutAppointmentInput>;
};
export type PaymentCreateManyAppointmentInputEnvelope = {
    data: Prisma.PaymentCreateManyAppointmentInput | Prisma.PaymentCreateManyAppointmentInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutAppointmentInput, Prisma.PaymentUncheckedUpdateWithoutAppointmentInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAppointmentInput, Prisma.PaymentUncheckedCreateWithoutAppointmentInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutAppointmentInput, Prisma.PaymentUncheckedUpdateWithoutAppointmentInput>;
};
export type PaymentUpdateManyWithWhereWithoutAppointmentInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutAppointmentInput>;
};
export type PaymentCreateWithoutRefundsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPaymentsInput;
    appointment: Prisma.AppointmentCreateNestedOneWithoutPaymentsInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutRefundsInput = {
    id?: string;
    userId: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutRefundsInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutRefundsInput, Prisma.PaymentUncheckedCreateWithoutRefundsInput>;
};
export type PaymentUpsertWithoutRefundsInput = {
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutRefundsInput, Prisma.PaymentUncheckedUpdateWithoutRefundsInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutRefundsInput, Prisma.PaymentUncheckedCreateWithoutRefundsInput>;
    where?: Prisma.PaymentWhereInput;
};
export type PaymentUpdateToOneWithWhereWithoutRefundsInput = {
    where?: Prisma.PaymentWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutRefundsInput, Prisma.PaymentUncheckedUpdateWithoutRefundsInput>;
};
export type PaymentUpdateWithoutRefundsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPaymentsNestedInput;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutPaymentsNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutRefundsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutPaymentNestedInput;
};
export type PaymentCreateWithoutInvoiceInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPaymentsInput;
    appointment: Prisma.AppointmentCreateNestedOneWithoutPaymentsInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    userId: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput>;
};
export type PaymentUpsertWithoutInvoiceInput = {
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutInvoiceInput, Prisma.PaymentUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput>;
    where?: Prisma.PaymentWhereInput;
};
export type PaymentUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: Prisma.PaymentWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutInvoiceInput, Prisma.PaymentUncheckedUpdateWithoutInvoiceInput>;
};
export type PaymentUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPaymentsNestedInput;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutPaymentsNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentCreateManyUserInput = {
    id?: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
};
export type PaymentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutPaymentsNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutPaymentNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutPaymentNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentCreateManyAppointmentInput = {
    id?: string;
    userId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: $Enums.CurrencyCode;
    method: string;
    isTermsAccepted: boolean;
    status?: $Enums.PaymentStatus;
    createdAt?: Date | string;
};
export type PaymentUpdateWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPaymentsNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutPaymentNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutPaymentNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateManyWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode;
    method?: Prisma.StringFieldUpdateOperationsInput | string;
    isTermsAccepted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentCountOutputType = {
    refunds: number;
};
export type PaymentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refunds?: boolean | PaymentCountOutputTypeCountRefundsArgs;
};
export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentCountOutputTypeSelect<ExtArgs> | null;
};
export type PaymentCountOutputTypeCountRefundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
};
export type PaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    appointmentId?: boolean;
    amount?: boolean;
    currency?: boolean;
    method?: boolean;
    isTermsAccepted?: boolean;
    status?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    appointment?: boolean | Prisma.AppointmentDefaultArgs<ExtArgs>;
    refunds?: boolean | Prisma.Payment$refundsArgs<ExtArgs>;
    invoice?: boolean | Prisma.Payment$invoiceArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    appointmentId?: boolean;
    amount?: boolean;
    currency?: boolean;
    method?: boolean;
    isTermsAccepted?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type PaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "appointmentId" | "amount" | "currency" | "method" | "isTermsAccepted" | "status" | "createdAt", ExtArgs["result"]["payment"]>;
export type PaymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    appointment?: boolean | Prisma.AppointmentDefaultArgs<ExtArgs>;
    refunds?: boolean | Prisma.Payment$refundsArgs<ExtArgs>;
    invoice?: boolean | Prisma.Payment$invoiceArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $PaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payment";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        appointment: Prisma.$AppointmentPayload<ExtArgs>;
        refunds: Prisma.$RefundPayload<ExtArgs>[];
        invoice: Prisma.$InvoicePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        appointmentId: string;
        amount: runtime.Decimal;
        currency: $Enums.CurrencyCode;
        method: string;
        isTermsAccepted: boolean;
        status: $Enums.PaymentStatus;
        createdAt: Date;
    }, ExtArgs["result"]["payment"]>;
    composites: {};
};
export type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentPayload, S>;
export type PaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
};
export interface PaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
        meta: {
            name: 'Payment';
        };
    };
    findUnique<T extends PaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentCreateArgs>(args: Prisma.SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends PaymentDeleteArgs>(args: Prisma.SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentUpdateArgs>(args: Prisma.SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends PaymentUpsertArgs>(args: Prisma.SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentCountArgs>(args?: Prisma.Subset<T, PaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAggregateArgs>(args: Prisma.Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;
    groupBy<T extends PaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentFieldRefs;
}
export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    appointment<T extends Prisma.AppointmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppointmentDefaultArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    refunds<T extends Prisma.Payment$refundsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payment$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoice<T extends Prisma.Payment$invoiceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payment$invoiceArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentFieldRefs {
    readonly id: Prisma.FieldRef<"Payment", 'String'>;
    readonly userId: Prisma.FieldRef<"Payment", 'String'>;
    readonly appointmentId: Prisma.FieldRef<"Payment", 'String'>;
    readonly amount: Prisma.FieldRef<"Payment", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Payment", 'CurrencyCode'>;
    readonly method: Prisma.FieldRef<"Payment", 'String'>;
    readonly isTermsAccepted: Prisma.FieldRef<"Payment", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Payment", 'PaymentStatus'>;
    readonly createdAt: Prisma.FieldRef<"Payment", 'DateTime'>;
}
export type PaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
};
export type PaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type PaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
};
export type PaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type Payment$refundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundScalarFieldEnum | Prisma.RefundScalarFieldEnum[];
};
export type Payment$invoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
};
export type PaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
};
