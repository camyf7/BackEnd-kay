export type AuthPayload = {
  readonly userId: string;
  readonly role: 'CLIENT' | 'ADMIN';
  readonly email: string;
  readonly tenantId?: string | null;
};

export type RegisterInput = {
  readonly email: string;
  readonly fullName: string;
  readonly password: string;
};

export type LoginInput = {
  readonly email: string;
  readonly password: string;
};

export type CreateAppointmentInput = {
  readonly serviceId: string;
  readonly appointmentStart: Date;
  readonly acceptedTerms: boolean;
  readonly paymentPercentage: 50 | 100;
  readonly paymentMethod: string;
  readonly currency: 'BRL' | 'EUR';
  readonly timezone?: string;
};
