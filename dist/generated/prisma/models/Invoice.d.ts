import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoicePayload>;
export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type InvoiceMinAggregateOutputType = {
    id: string | null;
    invoiceNumber: string | null;
    userId: string | null;
    appointmentId: string | null;
    paymentId: string | null;
    createdAt: Date | null;
};
export type InvoiceMaxAggregateOutputType = {
    id: string | null;
    invoiceNumber: string | null;
    userId: string | null;
    appointmentId: string | null;
    paymentId: string | null;
    createdAt: Date | null;
};
export type InvoiceCountAggregateOutputType = {
    id: number;
    invoiceNumber: number;
    userId: number;
    appointmentId: number;
    paymentId: number;
    createdAt: number;
    _all: number;
};
export type InvoiceMinAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    userId?: true;
    appointmentId?: true;
    paymentId?: true;
    createdAt?: true;
};
export type InvoiceMaxAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    userId?: true;
    appointmentId?: true;
    paymentId?: true;
    createdAt?: true;
};
export type InvoiceCountAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    userId?: true;
    appointmentId?: true;
    paymentId?: true;
    createdAt?: true;
    _all?: true;
};
export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvoiceCountAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoice[P]> : Prisma.GetScalarType<T[P], AggregateInvoice[P]>;
};
export type InvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithAggregationInput | Prisma.InvoiceOrderByWithAggregationInput[];
    by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum;
    having?: Prisma.InvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type InvoiceGroupByOutputType = {
    id: string;
    invoiceNumber: string;
    userId: string;
    appointmentId: string;
    paymentId: string;
    createdAt: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
}>>;
export type InvoiceWhereInput = {
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    id?: Prisma.StringFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"Invoice"> | string;
    userId?: Prisma.StringFilter<"Invoice"> | string;
    appointmentId?: Prisma.StringFilter<"Invoice"> | string;
    paymentId?: Prisma.StringFilter<"Invoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    appointment?: Prisma.XOR<Prisma.AppointmentScalarRelationFilter, Prisma.AppointmentWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
};
export type InvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    appointment?: Prisma.AppointmentOrderByWithRelationInput;
    payment?: Prisma.PaymentOrderByWithRelationInput;
    _relevance?: Prisma.InvoiceOrderByRelevanceInput;
};
export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    invoiceNumber?: string;
    paymentId?: string;
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    userId?: Prisma.StringFilter<"Invoice"> | string;
    appointmentId?: Prisma.StringFilter<"Invoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    appointment?: Prisma.XOR<Prisma.AppointmentScalarRelationFilter, Prisma.AppointmentWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
}, "id" | "invoiceNumber" | "paymentId">;
export type InvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvoiceCountOrderByAggregateInput;
    _max?: Prisma.InvoiceMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceMinOrderByAggregateInput;
};
export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    appointmentId?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    paymentId?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateInput = {
    id?: string;
    invoiceNumber: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutInvoicesInput;
    appointment: Prisma.AppointmentCreateNestedOneWithoutInvoicesInput;
    payment: Prisma.PaymentCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateInput = {
    id?: string;
    invoiceNumber: string;
    userId: string;
    appointmentId: string;
    paymentId: string;
    createdAt?: Date | string;
};
export type InvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutInvoicesNestedInput;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutInvoicesNestedInput;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyInput = {
    id?: string;
    invoiceNumber: string;
    userId: string;
    appointmentId: string;
    paymentId: string;
    createdAt?: Date | string;
};
export type InvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceListRelationFilter = {
    every?: Prisma.InvoiceWhereInput;
    some?: Prisma.InvoiceWhereInput;
    none?: Prisma.InvoiceWhereInput;
};
export type InvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceNullableScalarRelationFilter = {
    is?: Prisma.InvoiceWhereInput | null;
    isNot?: Prisma.InvoiceWhereInput | null;
};
export type InvoiceOrderByRelevanceInput = {
    fields: Prisma.InvoiceOrderByRelevanceFieldEnum | Prisma.InvoiceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type InvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    appointmentId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvoiceCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutUserInput, Prisma.InvoiceUncheckedCreateWithoutUserInput> | Prisma.InvoiceCreateWithoutUserInput[] | Prisma.InvoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutUserInput | Prisma.InvoiceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.InvoiceCreateManyUserInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutUserInput, Prisma.InvoiceUncheckedCreateWithoutUserInput> | Prisma.InvoiceCreateWithoutUserInput[] | Prisma.InvoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutUserInput | Prisma.InvoiceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.InvoiceCreateManyUserInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutUserInput, Prisma.InvoiceUncheckedCreateWithoutUserInput> | Prisma.InvoiceCreateWithoutUserInput[] | Prisma.InvoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutUserInput | Prisma.InvoiceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutUserInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.InvoiceCreateManyUserInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutUserInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutUserInput | Prisma.InvoiceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutUserInput, Prisma.InvoiceUncheckedCreateWithoutUserInput> | Prisma.InvoiceCreateWithoutUserInput[] | Prisma.InvoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutUserInput | Prisma.InvoiceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutUserInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.InvoiceCreateManyUserInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutUserInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutUserInput | Prisma.InvoiceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateNestedManyWithoutAppointmentInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutAppointmentInput, Prisma.InvoiceUncheckedCreateWithoutAppointmentInput> | Prisma.InvoiceCreateWithoutAppointmentInput[] | Prisma.InvoiceUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutAppointmentInput | Prisma.InvoiceCreateOrConnectWithoutAppointmentInput[];
    createMany?: Prisma.InvoiceCreateManyAppointmentInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutAppointmentInput, Prisma.InvoiceUncheckedCreateWithoutAppointmentInput> | Prisma.InvoiceCreateWithoutAppointmentInput[] | Prisma.InvoiceUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutAppointmentInput | Prisma.InvoiceCreateOrConnectWithoutAppointmentInput[];
    createMany?: Prisma.InvoiceCreateManyAppointmentInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutAppointmentNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutAppointmentInput, Prisma.InvoiceUncheckedCreateWithoutAppointmentInput> | Prisma.InvoiceCreateWithoutAppointmentInput[] | Prisma.InvoiceUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutAppointmentInput | Prisma.InvoiceCreateOrConnectWithoutAppointmentInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutAppointmentInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: Prisma.InvoiceCreateManyAppointmentInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutAppointmentInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutAppointmentInput | Prisma.InvoiceUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutAppointmentInput, Prisma.InvoiceUncheckedCreateWithoutAppointmentInput> | Prisma.InvoiceCreateWithoutAppointmentInput[] | Prisma.InvoiceUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutAppointmentInput | Prisma.InvoiceCreateOrConnectWithoutAppointmentInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutAppointmentInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: Prisma.InvoiceCreateManyAppointmentInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutAppointmentInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutAppointmentInput | Prisma.InvoiceUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentInput, Prisma.InvoiceUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentInput, Prisma.InvoiceUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateOneWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentInput, Prisma.InvoiceUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.InvoiceUpsertWithoutPaymentInput;
    disconnect?: Prisma.InvoiceWhereInput | boolean;
    delete?: Prisma.InvoiceWhereInput | boolean;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutPaymentInput, Prisma.InvoiceUpdateWithoutPaymentInput>, Prisma.InvoiceUncheckedUpdateWithoutPaymentInput>;
};
export type InvoiceUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentInput, Prisma.InvoiceUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.InvoiceUpsertWithoutPaymentInput;
    disconnect?: Prisma.InvoiceWhereInput | boolean;
    delete?: Prisma.InvoiceWhereInput | boolean;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutPaymentInput, Prisma.InvoiceUpdateWithoutPaymentInput>, Prisma.InvoiceUncheckedUpdateWithoutPaymentInput>;
};
export type InvoiceCreateWithoutUserInput = {
    id?: string;
    invoiceNumber: string;
    createdAt?: Date | string;
    appointment: Prisma.AppointmentCreateNestedOneWithoutInvoicesInput;
    payment: Prisma.PaymentCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutUserInput = {
    id?: string;
    invoiceNumber: string;
    appointmentId: string;
    paymentId: string;
    createdAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutUserInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutUserInput, Prisma.InvoiceUncheckedCreateWithoutUserInput>;
};
export type InvoiceCreateManyUserInputEnvelope = {
    data: Prisma.InvoiceCreateManyUserInput | Prisma.InvoiceCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutUserInput, Prisma.InvoiceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutUserInput, Prisma.InvoiceUncheckedCreateWithoutUserInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutUserInput, Prisma.InvoiceUncheckedUpdateWithoutUserInput>;
};
export type InvoiceUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutUserInput>;
};
export type InvoiceScalarWhereInput = {
    AND?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    OR?: Prisma.InvoiceScalarWhereInput[];
    NOT?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    id?: Prisma.StringFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"Invoice"> | string;
    userId?: Prisma.StringFilter<"Invoice"> | string;
    appointmentId?: Prisma.StringFilter<"Invoice"> | string;
    paymentId?: Prisma.StringFilter<"Invoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateWithoutAppointmentInput = {
    id?: string;
    invoiceNumber: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutInvoicesInput;
    payment: Prisma.PaymentCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    invoiceNumber: string;
    userId: string;
    paymentId: string;
    createdAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutAppointmentInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutAppointmentInput, Prisma.InvoiceUncheckedCreateWithoutAppointmentInput>;
};
export type InvoiceCreateManyAppointmentInputEnvelope = {
    data: Prisma.InvoiceCreateManyAppointmentInput | Prisma.InvoiceCreateManyAppointmentInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutAppointmentInput, Prisma.InvoiceUncheckedUpdateWithoutAppointmentInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutAppointmentInput, Prisma.InvoiceUncheckedCreateWithoutAppointmentInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutAppointmentInput, Prisma.InvoiceUncheckedUpdateWithoutAppointmentInput>;
};
export type InvoiceUpdateManyWithWhereWithoutAppointmentInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutAppointmentInput>;
};
export type InvoiceCreateWithoutPaymentInput = {
    id?: string;
    invoiceNumber: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutInvoicesInput;
    appointment: Prisma.AppointmentCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateWithoutPaymentInput = {
    id?: string;
    invoiceNumber: string;
    userId: string;
    appointmentId: string;
    createdAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutPaymentInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentInput, Prisma.InvoiceUncheckedCreateWithoutPaymentInput>;
};
export type InvoiceUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutPaymentInput, Prisma.InvoiceUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentInput, Prisma.InvoiceUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.InvoiceWhereInput;
};
export type InvoiceUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.InvoiceWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutPaymentInput, Prisma.InvoiceUncheckedUpdateWithoutPaymentInput>;
};
export type InvoiceUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutInvoicesNestedInput;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyUserInput = {
    id?: string;
    invoiceNumber: string;
    appointmentId: string;
    paymentId: string;
    createdAt?: Date | string;
};
export type InvoiceUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: Prisma.AppointmentUpdateOneRequiredWithoutInvoicesNestedInput;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyAppointmentInput = {
    id?: string;
    invoiceNumber: string;
    userId: string;
    paymentId: string;
    createdAt?: Date | string;
};
export type InvoiceUpdateWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutInvoicesNestedInput;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyWithoutAppointmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceNumber?: boolean;
    userId?: boolean;
    appointmentId?: boolean;
    paymentId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    appointment?: boolean | Prisma.AppointmentDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectScalar = {
    id?: boolean;
    invoiceNumber?: boolean;
    userId?: boolean;
    appointmentId?: boolean;
    paymentId?: boolean;
    createdAt?: boolean;
};
export type InvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "invoiceNumber" | "userId" | "appointmentId" | "paymentId" | "createdAt", ExtArgs["result"]["invoice"]>;
export type InvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    appointment?: boolean | Prisma.AppointmentDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
};
export type $InvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invoice";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        appointment: Prisma.$AppointmentPayload<ExtArgs>;
        payment: Prisma.$PaymentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        invoiceNumber: string;
        userId: string;
        appointmentId: string;
        paymentId: string;
        createdAt: Date;
    }, ExtArgs["result"]["invoice"]>;
    composites: {};
};
export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoicePayload, S>;
export type InvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true;
};
export interface InvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invoice'];
        meta: {
            name: 'Invoice';
        };
    };
    findUnique<T extends InvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvoiceCreateArgs>(args: Prisma.SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvoiceCountArgs>(args?: Prisma.Subset<T, InvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType> : number>;
    aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;
    groupBy<T extends InvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvoiceFieldRefs;
}
export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    appointment<T extends Prisma.AppointmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppointmentDefaultArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payment<T extends Prisma.PaymentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"Invoice", 'String'>;
    readonly invoiceNumber: Prisma.FieldRef<"Invoice", 'String'>;
    readonly userId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly appointmentId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly paymentId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
}
export type InvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type InvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type InvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type InvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
};
export type InvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type InvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
};
export type InvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type InvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
};
