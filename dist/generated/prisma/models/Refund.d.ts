import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RefundModel = runtime.Types.Result.DefaultSelection<Prisma.$RefundPayload>;
export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null;
    _avg: RefundAvgAggregateOutputType | null;
    _sum: RefundSumAggregateOutputType | null;
    _min: RefundMinAggregateOutputType | null;
    _max: RefundMaxAggregateOutputType | null;
};
export type RefundAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type RefundSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type RefundMinAggregateOutputType = {
    id: string | null;
    paymentId: string | null;
    appointmentId: string | null;
    amount: runtime.Decimal | null;
    reason: string | null;
    createdAt: Date | null;
};
export type RefundMaxAggregateOutputType = {
    id: string | null;
    paymentId: string | null;
    appointmentId: string | null;
    amount: runtime.Decimal | null;
    reason: string | null;
    createdAt: Date | null;
};
export type RefundCountAggregateOutputType = {
    id: number;
    paymentId: number;
    appointmentId: number;
    amount: number;
    reason: number;
    createdAt: number;
    _all: number;
};
export type RefundAvgAggregateInputType = {
    amount?: true;
};
export type RefundSumAggregateInputType = {
    amount?: true;
};
export type RefundMinAggregateInputType = {
    id?: true;
    paymentId?: true;
    appointmentId?: true;
    amount?: true;
    reason?: true;
    createdAt?: true;
};
export type RefundMaxAggregateInputType = {
    id?: true;
    paymentId?: true;
    appointmentId?: true;
    amount?: true;
    reason?: true;
    createdAt?: true;
};
export type RefundCountAggregateInputType = {
    id?: true;
    paymentId?: true;
    appointmentId?: true;
    amount?: true;
    reason?: true;
    createdAt?: true;
    _all?: true;
};
export type RefundAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RefundCountAggregateInputType;
    _avg?: RefundAvgAggregateInputType;
    _sum?: RefundSumAggregateInputType;
    _min?: RefundMinAggregateInputType;
    _max?: RefundMaxAggregateInputType;
};
export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
    [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefund[P]> : Prisma.GetScalarType<T[P], AggregateRefund[P]>;
};
export type RefundGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithAggregationInput | Prisma.RefundOrderByWithAggregationInput[];
    by: Prisma.RefundScalarFieldEnum[] | Prisma.RefundScalarFieldEnum;
    having?: Prisma.RefundScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefundCountAggregateInputType | true;
    _avg?: RefundAvgAggregateInputType;
    _sum?: RefundSumAggregateInputType;
    _min?: RefundMinAggregateInputType;
    _max?: RefundMaxAggregateInputType;
};
export type RefundGroupByOutputType = {
    id: string;
    paymentId: string;
    appointmentId: string;
    amount: runtime.Decimal;
    reason: string;
    createdAt: Date;
    _count: RefundCountAggregateOutputType | null;
    _avg: RefundAvgAggregateOutputType | null;
    _sum: RefundSumAggregateOutputType | null;
    _min: RefundMinAggregateOutputType | null;
    _max: RefundMaxAggregateOutputType | null;
};
export type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RefundGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RefundGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RefundGroupByOutputType[P]>;
}>>;
export type RefundWhereInput = {
    AND?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    OR?: Prisma.RefundWhereInput[];
    NOT?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    id?: Prisma.StringFilter<"Refund"> | string;
    paymentId?: Prisma.StringFilter<"Refund"> | string;
    appointmentId?: Prisma.StringFilter<"Refund"> | string;
    amount?: Prisma.DecimalFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFilter<"Refund"> | string;
    createdAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
    appointment?: Prisma.XOR<Prisma.AppointmentScalarRelationFilter, Prisma.AppointmentWhereInput>;
};
export type RefundOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payment?: Prisma.PaymentOrderByWithRelationInput;
    appointment?: Prisma.AppointmentOrderByWithRelationInput;
    _relevance?: Prisma.RefundOrderByRelevanceInput;
};
export type RefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    OR?: Prisma.RefundWhereInput[];
    NOT?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    paymentId?: Prisma.StringFilter<"Refund"> | string;
    appointmentId?: Prisma.StringFilter<"Refund"> | string;
    amount?: Prisma.DecimalFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFilter<"Refund"> | string;
    createdAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
    appointment?: Prisma.XOR<Prisma.AppointmentScalarRelationFilter, Prisma.AppointmentWhereInput>;
}, "id">;
export type RefundOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RefundCountOrderByAggregateInput;
    _avg?: Prisma.RefundAvgOrderByAggregateInput;
    _max?: Prisma.RefundMaxOrderByAggregateInput;
    _min?: Prisma.RefundMinOrderByAggregateInput;
    _sum?: Prisma.RefundSumOrderByAggregateInput;
};
export type RefundScalarWhereWithAggregatesInput = {
    AND?: Prisma.RefundScalarWhereWithAggregatesInput | Prisma.RefundScalarWhereWithAggregatesInput[];
    OR?: Prisma.RefundScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RefundScalarWhereWithAggregatesInput | Prisma.RefundScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    paymentId?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    appointmentId?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Refund"> | Date | string;
};
export type RefundCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
    payment: Prisma.PaymentCreateNestedOneWithoutRefundsInput;
    appointment: Prisma.AppointmentCreateNestedOneWithoutRefundsInput;
};
export type RefundUncheckedCreateInput = {
    id?: string;
    paymentId: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
};
export type RefundUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutRefundsNestedInput;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutRefundsNestedInput;
};
export type RefundUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundCreateManyInput = {
    id?: string;
    paymentId: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
};
export type RefundUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundListRelationFilter = {
    every?: Prisma.RefundWhereInput;
    some?: Prisma.RefundWhereInput;
    none?: Prisma.RefundWhereInput;
};
export type RefundOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RefundOrderByRelevanceInput = {
    fields: Prisma.RefundOrderByRelevanceFieldEnum | Prisma.RefundOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RefundCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RefundAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type RefundMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RefundMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RefundSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type RefundCreateNestedManyWithoutAppointmentInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutAppointmentInput, Prisma.RefundUncheckedCreateWithoutAppointmentInput> | Prisma.RefundCreateWithoutAppointmentInput[] | Prisma.RefundUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutAppointmentInput | Prisma.RefundCreateOrConnectWithoutAppointmentInput[];
    createMany?: Prisma.RefundCreateManyAppointmentInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutAppointmentInput, Prisma.RefundUncheckedCreateWithoutAppointmentInput> | Prisma.RefundCreateWithoutAppointmentInput[] | Prisma.RefundUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutAppointmentInput | Prisma.RefundCreateOrConnectWithoutAppointmentInput[];
    createMany?: Prisma.RefundCreateManyAppointmentInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUpdateManyWithoutAppointmentNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutAppointmentInput, Prisma.RefundUncheckedCreateWithoutAppointmentInput> | Prisma.RefundCreateWithoutAppointmentInput[] | Prisma.RefundUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutAppointmentInput | Prisma.RefundCreateOrConnectWithoutAppointmentInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutAppointmentInput | Prisma.RefundUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: Prisma.RefundCreateManyAppointmentInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutAppointmentInput | Prisma.RefundUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutAppointmentInput | Prisma.RefundUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutAppointmentInput, Prisma.RefundUncheckedCreateWithoutAppointmentInput> | Prisma.RefundCreateWithoutAppointmentInput[] | Prisma.RefundUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutAppointmentInput | Prisma.RefundCreateOrConnectWithoutAppointmentInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutAppointmentInput | Prisma.RefundUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: Prisma.RefundCreateManyAppointmentInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutAppointmentInput | Prisma.RefundUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutAppointmentInput | Prisma.RefundUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundCreateNestedManyWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutPaymentInput, Prisma.RefundUncheckedCreateWithoutPaymentInput> | Prisma.RefundCreateWithoutPaymentInput[] | Prisma.RefundUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutPaymentInput | Prisma.RefundCreateOrConnectWithoutPaymentInput[];
    createMany?: Prisma.RefundCreateManyPaymentInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutPaymentInput, Prisma.RefundUncheckedCreateWithoutPaymentInput> | Prisma.RefundCreateWithoutPaymentInput[] | Prisma.RefundUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutPaymentInput | Prisma.RefundCreateOrConnectWithoutPaymentInput[];
    createMany?: Prisma.RefundCreateManyPaymentInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUpdateManyWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutPaymentInput, Prisma.RefundUncheckedCreateWithoutPaymentInput> | Prisma.RefundCreateWithoutPaymentInput[] | Prisma.RefundUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutPaymentInput | Prisma.RefundCreateOrConnectWithoutPaymentInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutPaymentInput | Prisma.RefundUpsertWithWhereUniqueWithoutPaymentInput[];
    createMany?: Prisma.RefundCreateManyPaymentInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutPaymentInput | Prisma.RefundUpdateWithWhereUniqueWithoutPaymentInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutPaymentInput | Prisma.RefundUpdateManyWithWhereWithoutPaymentInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutPaymentInput, Prisma.RefundUncheckedCreateWithoutPaymentInput> | Prisma.RefundCreateWithoutPaymentInput[] | Prisma.RefundUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutPaymentInput | Prisma.RefundCreateOrConnectWithoutPaymentInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutPaymentInput | Prisma.RefundUpsertWithWhereUniqueWithoutPaymentInput[];
    createMany?: Prisma.RefundCreateManyPaymentInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutPaymentInput | Prisma.RefundUpdateWithWhereUniqueWithoutPaymentInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutPaymentInput | Prisma.RefundUpdateManyWithWhereWithoutPaymentInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundCreateWithoutAppointmentInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
    payment: Prisma.PaymentCreateNestedOneWithoutRefundsInput;
};
export type RefundUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    paymentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
};
export type RefundCreateOrConnectWithoutAppointmentInput = {
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateWithoutAppointmentInput, Prisma.RefundUncheckedCreateWithoutAppointmentInput>;
};
export type RefundCreateManyAppointmentInputEnvelope = {
    data: Prisma.RefundCreateManyAppointmentInput | Prisma.RefundCreateManyAppointmentInput[];
    skipDuplicates?: boolean;
};
export type RefundUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: Prisma.RefundWhereUniqueInput;
    update: Prisma.XOR<Prisma.RefundUpdateWithoutAppointmentInput, Prisma.RefundUncheckedUpdateWithoutAppointmentInput>;
    create: Prisma.XOR<Prisma.RefundCreateWithoutAppointmentInput, Prisma.RefundUncheckedCreateWithoutAppointmentInput>;
};
export type RefundUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: Prisma.RefundWhereUniqueInput;
    data: Prisma.XOR<Prisma.RefundUpdateWithoutAppointmentInput, Prisma.RefundUncheckedUpdateWithoutAppointmentInput>;
};
export type RefundUpdateManyWithWhereWithoutAppointmentInput = {
    where: Prisma.RefundScalarWhereInput;
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyWithoutAppointmentInput>;
};
export type RefundScalarWhereInput = {
    AND?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
    OR?: Prisma.RefundScalarWhereInput[];
    NOT?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
    id?: Prisma.StringFilter<"Refund"> | string;
    paymentId?: Prisma.StringFilter<"Refund"> | string;
    appointmentId?: Prisma.StringFilter<"Refund"> | string;
    amount?: Prisma.DecimalFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFilter<"Refund"> | string;
    createdAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
};
export type RefundCreateWithoutPaymentInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
    appointment: Prisma.AppointmentCreateNestedOneWithoutRefundsInput;
};
export type RefundUncheckedCreateWithoutPaymentInput = {
    id?: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
};
export type RefundCreateOrConnectWithoutPaymentInput = {
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateWithoutPaymentInput, Prisma.RefundUncheckedCreateWithoutPaymentInput>;
};
export type RefundCreateManyPaymentInputEnvelope = {
    data: Prisma.RefundCreateManyPaymentInput | Prisma.RefundCreateManyPaymentInput[];
    skipDuplicates?: boolean;
};
export type RefundUpsertWithWhereUniqueWithoutPaymentInput = {
    where: Prisma.RefundWhereUniqueInput;
    update: Prisma.XOR<Prisma.RefundUpdateWithoutPaymentInput, Prisma.RefundUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.RefundCreateWithoutPaymentInput, Prisma.RefundUncheckedCreateWithoutPaymentInput>;
};
export type RefundUpdateWithWhereUniqueWithoutPaymentInput = {
    where: Prisma.RefundWhereUniqueInput;
    data: Prisma.XOR<Prisma.RefundUpdateWithoutPaymentInput, Prisma.RefundUncheckedUpdateWithoutPaymentInput>;
};
export type RefundUpdateManyWithWhereWithoutPaymentInput = {
    where: Prisma.RefundScalarWhereInput;
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyWithoutPaymentInput>;
};
export type RefundCreateManyAppointmentInput = {
    id?: string;
    paymentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
};
export type RefundUpdateWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutRefundsNestedInput;
};
export type RefundUncheckedUpdateWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundUncheckedUpdateManyWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundCreateManyPaymentInput = {
    id?: string;
    appointmentId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason: string;
    createdAt?: Date | string;
};
export type RefundUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutRefundsNestedInput;
};
export type RefundUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundUncheckedUpdateManyWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    appointmentId?: boolean;
    amount?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
    appointment?: boolean | Prisma.AppointmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refund"]>;
export type RefundSelectScalar = {
    id?: boolean;
    paymentId?: boolean;
    appointmentId?: boolean;
    amount?: boolean;
    reason?: boolean;
    createdAt?: boolean;
};
export type RefundOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paymentId" | "appointmentId" | "amount" | "reason" | "createdAt", ExtArgs["result"]["refund"]>;
export type RefundInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
    appointment?: boolean | Prisma.AppointmentDefaultArgs<ExtArgs>;
};
export type $RefundPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Refund";
    objects: {
        payment: Prisma.$PaymentPayload<ExtArgs>;
        appointment: Prisma.$AppointmentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        paymentId: string;
        appointmentId: string;
        amount: runtime.Decimal;
        reason: string;
        createdAt: Date;
    }, ExtArgs["result"]["refund"]>;
    composites: {};
};
export type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RefundPayload, S>;
export type RefundCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefundCountAggregateInputType | true;
};
export interface RefundDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Refund'];
        meta: {
            name: 'Refund';
        };
    };
    findUnique<T extends RefundFindUniqueArgs>(args: Prisma.SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RefundFindFirstArgs>(args?: Prisma.SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RefundFindManyArgs>(args?: Prisma.SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RefundCreateArgs>(args: Prisma.SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RefundCreateManyArgs>(args?: Prisma.SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RefundDeleteArgs>(args: Prisma.SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RefundUpdateArgs>(args: Prisma.SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RefundDeleteManyArgs>(args?: Prisma.SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RefundUpdateManyArgs>(args: Prisma.SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RefundUpsertArgs>(args: Prisma.SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RefundCountArgs>(args?: Prisma.Subset<T, RefundCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RefundCountAggregateOutputType> : number>;
    aggregate<T extends RefundAggregateArgs>(args: Prisma.Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>;
    groupBy<T extends RefundGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RefundGroupByArgs['orderBy'];
    } : {
        orderBy?: RefundGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RefundFieldRefs;
}
export interface Prisma__RefundClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payment<T extends Prisma.PaymentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    appointment<T extends Prisma.AppointmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppointmentDefaultArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RefundFieldRefs {
    readonly id: Prisma.FieldRef<"Refund", 'String'>;
    readonly paymentId: Prisma.FieldRef<"Refund", 'String'>;
    readonly appointmentId: Prisma.FieldRef<"Refund", 'String'>;
    readonly amount: Prisma.FieldRef<"Refund", 'Decimal'>;
    readonly reason: Prisma.FieldRef<"Refund", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Refund", 'DateTime'>;
}
export type RefundFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefundFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefundFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefundCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundCreateInput, Prisma.RefundUncheckedCreateInput>;
};
export type RefundCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RefundCreateManyInput | Prisma.RefundCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RefundUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundUpdateInput, Prisma.RefundUncheckedUpdateInput>;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyInput>;
    where?: Prisma.RefundWhereInput;
    limit?: number;
};
export type RefundUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateInput, Prisma.RefundUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RefundUpdateInput, Prisma.RefundUncheckedUpdateInput>;
};
export type RefundDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    limit?: number;
};
export type RefundDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
};
