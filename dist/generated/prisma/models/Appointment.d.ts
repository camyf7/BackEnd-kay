import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AppointmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AppointmentPayload>;
export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
};
export type AppointmentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    serviceId: string | null;
    appointmentStart: Date | null;
    appointmentEnd: Date | null;
    status: $Enums.AppointmentStatus | null;
    cancelReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    serviceId: string | null;
    appointmentStart: Date | null;
    appointmentEnd: Date | null;
    status: $Enums.AppointmentStatus | null;
    cancelReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AppointmentCountAggregateOutputType = {
    id: number;
    userId: number;
    serviceId: number;
    appointmentStart: number;
    appointmentEnd: number;
    status: number;
    cancelReason: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AppointmentMinAggregateInputType = {
    id?: true;
    userId?: true;
    serviceId?: true;
    appointmentStart?: true;
    appointmentEnd?: true;
    status?: true;
    cancelReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AppointmentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    serviceId?: true;
    appointmentStart?: true;
    appointmentEnd?: true;
    status?: true;
    cancelReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AppointmentCountAggregateInputType = {
    id?: true;
    userId?: true;
    serviceId?: true;
    appointmentStart?: true;
    appointmentEnd?: true;
    status?: true;
    cancelReason?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AppointmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AppointmentCountAggregateInputType;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
};
export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAppointment[P]> : Prisma.GetScalarType<T[P], AggregateAppointment[P]>;
};
export type AppointmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithAggregationInput | Prisma.AppointmentOrderByWithAggregationInput[];
    by: Prisma.AppointmentScalarFieldEnum[] | Prisma.AppointmentScalarFieldEnum;
    having?: Prisma.AppointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
};
export type AppointmentGroupByOutputType = {
    id: string;
    userId: string;
    serviceId: string;
    appointmentStart: Date;
    appointmentEnd: Date;
    status: $Enums.AppointmentStatus;
    cancelReason: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
};
export type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AppointmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
}>>;
export type AppointmentWhereInput = {
    AND?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    OR?: Prisma.AppointmentWhereInput[];
    NOT?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    id?: Prisma.StringFilter<"Appointment"> | string;
    userId?: Prisma.StringFilter<"Appointment"> | string;
    serviceId?: Prisma.StringFilter<"Appointment"> | string;
    appointmentStart?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    appointmentEnd?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    status?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    cancelReason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
    refunds?: Prisma.RefundListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
};
export type AppointmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    appointmentStart?: Prisma.SortOrder;
    appointmentEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    cancelReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    service?: Prisma.ServiceOrderByWithRelationInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
    refunds?: Prisma.RefundOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
    _relevance?: Prisma.AppointmentOrderByRelevanceInput;
};
export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    OR?: Prisma.AppointmentWhereInput[];
    NOT?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    userId?: Prisma.StringFilter<"Appointment"> | string;
    serviceId?: Prisma.StringFilter<"Appointment"> | string;
    appointmentStart?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    appointmentEnd?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    status?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    cancelReason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
    refunds?: Prisma.RefundListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
}, "id">;
export type AppointmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    appointmentStart?: Prisma.SortOrder;
    appointmentEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    cancelReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AppointmentCountOrderByAggregateInput;
    _max?: Prisma.AppointmentMaxOrderByAggregateInput;
    _min?: Prisma.AppointmentMinOrderByAggregateInput;
};
export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AppointmentScalarWhereWithAggregatesInput | Prisma.AppointmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AppointmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AppointmentScalarWhereWithAggregatesInput | Prisma.AppointmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    serviceId?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    appointmentStart?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    appointmentEnd?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    status?: Prisma.EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus;
    cancelReason?: Prisma.StringNullableWithAggregatesFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
};
export type AppointmentCreateInput = {
    id?: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAppointmentsInput;
    service: Prisma.ServiceCreateNestedOneWithoutAppointmentsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAppointmentInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateInput = {
    id?: string;
    userId: string;
    serviceId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAppointmentInput;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput;
    service?: Prisma.ServiceUpdateOneRequiredWithoutAppointmentsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAppointmentNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAppointmentNestedInput;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentCreateManyInput = {
    id?: string;
    userId: string;
    serviceId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentListRelationFilter = {
    every?: Prisma.AppointmentWhereInput;
    some?: Prisma.AppointmentWhereInput;
    none?: Prisma.AppointmentWhereInput;
};
export type AppointmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AppointmentOrderByRelevanceInput = {
    fields: Prisma.AppointmentOrderByRelevanceFieldEnum | Prisma.AppointmentOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AppointmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    appointmentStart?: Prisma.SortOrder;
    appointmentEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    cancelReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    appointmentStart?: Prisma.SortOrder;
    appointmentEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    cancelReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    appointmentStart?: Prisma.SortOrder;
    appointmentEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    cancelReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentScalarRelationFilter = {
    is?: Prisma.AppointmentWhereInput;
    isNot?: Prisma.AppointmentWhereInput;
};
export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutUserInput, Prisma.AppointmentUncheckedCreateWithoutUserInput> | Prisma.AppointmentCreateWithoutUserInput[] | Prisma.AppointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutUserInput | Prisma.AppointmentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AppointmentCreateManyUserInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutUserInput, Prisma.AppointmentUncheckedCreateWithoutUserInput> | Prisma.AppointmentCreateWithoutUserInput[] | Prisma.AppointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutUserInput | Prisma.AppointmentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AppointmentCreateManyUserInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutUserInput, Prisma.AppointmentUncheckedCreateWithoutUserInput> | Prisma.AppointmentCreateWithoutUserInput[] | Prisma.AppointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutUserInput | Prisma.AppointmentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutUserInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AppointmentCreateManyUserInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutUserInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutUserInput | Prisma.AppointmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutUserInput, Prisma.AppointmentUncheckedCreateWithoutUserInput> | Prisma.AppointmentCreateWithoutUserInput[] | Prisma.AppointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutUserInput | Prisma.AppointmentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutUserInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AppointmentCreateManyUserInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutUserInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutUserInput | Prisma.AppointmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutServiceInput, Prisma.AppointmentUncheckedCreateWithoutServiceInput> | Prisma.AppointmentCreateWithoutServiceInput[] | Prisma.AppointmentUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutServiceInput | Prisma.AppointmentCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.AppointmentCreateManyServiceInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutServiceInput, Prisma.AppointmentUncheckedCreateWithoutServiceInput> | Prisma.AppointmentCreateWithoutServiceInput[] | Prisma.AppointmentUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutServiceInput | Prisma.AppointmentCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.AppointmentCreateManyServiceInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutServiceInput, Prisma.AppointmentUncheckedCreateWithoutServiceInput> | Prisma.AppointmentCreateWithoutServiceInput[] | Prisma.AppointmentUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutServiceInput | Prisma.AppointmentCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutServiceInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.AppointmentCreateManyServiceInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutServiceInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutServiceInput | Prisma.AppointmentUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutServiceInput, Prisma.AppointmentUncheckedCreateWithoutServiceInput> | Prisma.AppointmentCreateWithoutServiceInput[] | Prisma.AppointmentUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutServiceInput | Prisma.AppointmentCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutServiceInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.AppointmentCreateManyServiceInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutServiceInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutServiceInput | Prisma.AppointmentUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type AppointmentCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPaymentsInput, Prisma.AppointmentUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPaymentsInput, Prisma.AppointmentUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.AppointmentUpsertWithoutPaymentsInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppointmentUpdateToOneWithWhereWithoutPaymentsInput, Prisma.AppointmentUpdateWithoutPaymentsInput>, Prisma.AppointmentUncheckedUpdateWithoutPaymentsInput>;
};
export type AppointmentCreateNestedOneWithoutRefundsInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutRefundsInput, Prisma.AppointmentUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutRefundsInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutRefundsInput, Prisma.AppointmentUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutRefundsInput;
    upsert?: Prisma.AppointmentUpsertWithoutRefundsInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppointmentUpdateToOneWithWhereWithoutRefundsInput, Prisma.AppointmentUpdateWithoutRefundsInput>, Prisma.AppointmentUncheckedUpdateWithoutRefundsInput>;
};
export type AppointmentCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutInvoicesInput, Prisma.AppointmentUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutInvoicesInput, Prisma.AppointmentUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.AppointmentUpsertWithoutInvoicesInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppointmentUpdateToOneWithWhereWithoutInvoicesInput, Prisma.AppointmentUpdateWithoutInvoicesInput>, Prisma.AppointmentUncheckedUpdateWithoutInvoicesInput>;
};
export type AppointmentCreateWithoutUserInput = {
    id?: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    service: Prisma.ServiceCreateNestedOneWithoutAppointmentsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAppointmentInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: string;
    serviceId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAppointmentInput;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutUserInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutUserInput, Prisma.AppointmentUncheckedCreateWithoutUserInput>;
};
export type AppointmentCreateManyUserInputEnvelope = {
    data: Prisma.AppointmentCreateManyUserInput | Prisma.AppointmentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutUserInput, Prisma.AppointmentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutUserInput, Prisma.AppointmentUncheckedCreateWithoutUserInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutUserInput, Prisma.AppointmentUncheckedUpdateWithoutUserInput>;
};
export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutUserInput>;
};
export type AppointmentScalarWhereInput = {
    AND?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
    OR?: Prisma.AppointmentScalarWhereInput[];
    NOT?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Appointment"> | string;
    userId?: Prisma.StringFilter<"Appointment"> | string;
    serviceId?: Prisma.StringFilter<"Appointment"> | string;
    appointmentStart?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    appointmentEnd?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    status?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    cancelReason?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
};
export type AppointmentCreateWithoutServiceInput = {
    id?: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAppointmentsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAppointmentInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutServiceInput = {
    id?: string;
    userId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAppointmentInput;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutServiceInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutServiceInput, Prisma.AppointmentUncheckedCreateWithoutServiceInput>;
};
export type AppointmentCreateManyServiceInputEnvelope = {
    data: Prisma.AppointmentCreateManyServiceInput | Prisma.AppointmentCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutServiceInput, Prisma.AppointmentUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutServiceInput, Prisma.AppointmentUncheckedCreateWithoutServiceInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutServiceInput, Prisma.AppointmentUncheckedUpdateWithoutServiceInput>;
};
export type AppointmentUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutServiceInput>;
};
export type AppointmentCreateWithoutPaymentsInput = {
    id?: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAppointmentsInput;
    service: Prisma.ServiceCreateNestedOneWithoutAppointmentsInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    userId: string;
    serviceId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutPaymentsInput, Prisma.AppointmentUncheckedCreateWithoutPaymentsInput>;
};
export type AppointmentUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutPaymentsInput, Prisma.AppointmentUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutPaymentsInput, Prisma.AppointmentUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.AppointmentWhereInput;
};
export type AppointmentUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.AppointmentWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutPaymentsInput, Prisma.AppointmentUncheckedUpdateWithoutPaymentsInput>;
};
export type AppointmentUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput;
    service?: Prisma.ServiceUpdateOneRequiredWithoutAppointmentsNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentCreateWithoutRefundsInput = {
    id?: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAppointmentsInput;
    service: Prisma.ServiceCreateNestedOneWithoutAppointmentsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutRefundsInput = {
    id?: string;
    userId: string;
    serviceId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAppointmentInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutRefundsInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutRefundsInput, Prisma.AppointmentUncheckedCreateWithoutRefundsInput>;
};
export type AppointmentUpsertWithoutRefundsInput = {
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutRefundsInput, Prisma.AppointmentUncheckedUpdateWithoutRefundsInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutRefundsInput, Prisma.AppointmentUncheckedCreateWithoutRefundsInput>;
    where?: Prisma.AppointmentWhereInput;
};
export type AppointmentUpdateToOneWithWhereWithoutRefundsInput = {
    where?: Prisma.AppointmentWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutRefundsInput, Prisma.AppointmentUncheckedUpdateWithoutRefundsInput>;
};
export type AppointmentUpdateWithoutRefundsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput;
    service?: Prisma.ServiceUpdateOneRequiredWithoutAppointmentsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutRefundsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentCreateWithoutInvoicesInput = {
    id?: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAppointmentsInput;
    service: Prisma.ServiceCreateNestedOneWithoutAppointmentsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutAppointmentInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    userId: string;
    serviceId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutAppointmentInput;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutInvoicesInput, Prisma.AppointmentUncheckedCreateWithoutInvoicesInput>;
};
export type AppointmentUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutInvoicesInput, Prisma.AppointmentUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutInvoicesInput, Prisma.AppointmentUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.AppointmentWhereInput;
};
export type AppointmentUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.AppointmentWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutInvoicesInput, Prisma.AppointmentUncheckedUpdateWithoutInvoicesInput>;
};
export type AppointmentUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput;
    service?: Prisma.ServiceUpdateOneRequiredWithoutAppointmentsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAppointmentNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAppointmentNestedInput;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentCreateManyUserInput = {
    id?: string;
    serviceId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    service?: Prisma.ServiceUpdateOneRequiredWithoutAppointmentsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAppointmentNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAppointmentNestedInput;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyServiceInput = {
    id?: string;
    userId: string;
    appointmentStart: Date | string;
    appointmentEnd: Date | string;
    status?: $Enums.AppointmentStatus;
    cancelReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutAppointmentNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutAppointmentNestedInput;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutAppointmentNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    appointmentStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appointmentEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCountOutputType = {
    payments: number;
    refunds: number;
    invoices: number;
};
export type AppointmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | AppointmentCountOutputTypeCountPaymentsArgs;
    refunds?: boolean | AppointmentCountOutputTypeCountRefundsArgs;
    invoices?: boolean | AppointmentCountOutputTypeCountInvoicesArgs;
};
export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentCountOutputTypeSelect<ExtArgs> | null;
};
export type AppointmentCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type AppointmentCountOutputTypeCountRefundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
};
export type AppointmentCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type AppointmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    serviceId?: boolean;
    appointmentStart?: boolean;
    appointmentEnd?: boolean;
    status?: boolean;
    cancelReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.Appointment$paymentsArgs<ExtArgs>;
    refunds?: boolean | Prisma.Appointment$refundsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Appointment$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointment"]>;
export type AppointmentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    serviceId?: boolean;
    appointmentStart?: boolean;
    appointmentEnd?: boolean;
    status?: boolean;
    cancelReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AppointmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "serviceId" | "appointmentStart" | "appointmentEnd" | "status" | "cancelReason" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>;
export type AppointmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.Appointment$paymentsArgs<ExtArgs>;
    refunds?: boolean | Prisma.Appointment$refundsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Appointment$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $AppointmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Appointment";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        service: Prisma.$ServicePayload<ExtArgs>;
        payments: Prisma.$PaymentPayload<ExtArgs>[];
        refunds: Prisma.$RefundPayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        serviceId: string;
        appointmentStart: Date;
        appointmentEnd: Date;
        status: $Enums.AppointmentStatus;
        cancelReason: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["appointment"]>;
    composites: {};
};
export type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AppointmentPayload, S>;
export type AppointmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppointmentCountAggregateInputType | true;
};
export interface AppointmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Appointment'];
        meta: {
            name: 'Appointment';
        };
    };
    findUnique<T extends AppointmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AppointmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AppointmentFindManyArgs>(args?: Prisma.SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AppointmentCreateArgs>(args: Prisma.SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AppointmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AppointmentDeleteArgs>(args: Prisma.SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AppointmentUpdateArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AppointmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AppointmentUpsertArgs>(args: Prisma.SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AppointmentCountArgs>(args?: Prisma.Subset<T, AppointmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AppointmentCountAggregateOutputType> : number>;
    aggregate<T extends AppointmentAggregateArgs>(args: Prisma.Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;
    groupBy<T extends AppointmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AppointmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AppointmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AppointmentFieldRefs;
}
export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    service<T extends Prisma.ServiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServiceDefaultArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.Appointment$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Appointment$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refunds<T extends Prisma.Appointment$refundsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Appointment$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.Appointment$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Appointment$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AppointmentFieldRefs {
    readonly id: Prisma.FieldRef<"Appointment", 'String'>;
    readonly userId: Prisma.FieldRef<"Appointment", 'String'>;
    readonly serviceId: Prisma.FieldRef<"Appointment", 'String'>;
    readonly appointmentStart: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly appointmentEnd: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Appointment", 'AppointmentStatus'>;
    readonly cancelReason: Prisma.FieldRef<"Appointment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Appointment", 'DateTime'>;
}
export type AppointmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentCreateInput, Prisma.AppointmentUncheckedCreateInput>;
};
export type AppointmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AppointmentCreateManyInput | Prisma.AppointmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentUpdateInput, Prisma.AppointmentUncheckedUpdateInput>;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyInput>;
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
};
export type AppointmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateInput, Prisma.AppointmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AppointmentUpdateInput, Prisma.AppointmentUncheckedUpdateInput>;
};
export type AppointmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
};
export type Appointment$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Appointment$refundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Appointment$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppointmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
};
