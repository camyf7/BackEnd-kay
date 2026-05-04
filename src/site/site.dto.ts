import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsIn,
  IsInt,
  IsObject,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  Max,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public fullName: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}

export class LoginDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsInt()
  @Min(15)
  public durationInMinutes: number;

  @Type(() => Number)
  @Min(1)
  public priceBrl: number;

  @Type(() => Number)
  @Min(1)
  public priceEur: number;
}

export class UpdateServiceDto {
  @IsString()
  @IsOptional()
  public name?: string;

  @IsString()
  @IsOptional()
  public description?: string;

  @IsInt()
  @Min(15)
  @IsOptional()
  public durationInMinutes?: number;

  @Type(() => Number)
  @Min(1)
  @IsOptional()
  public priceBrl?: number;

  @Type(() => Number)
  @Min(1)
  @IsOptional()
  public priceEur?: number;
}

export class CreateAvailabilityDto {
  @IsInt()
  @Min(0)
  public weekDay: number;

  @IsString()
  @IsNotEmpty()
  public startTime: string;

  @IsString()
  @IsNotEmpty()
  public endTime: string;
}

export class BlockDateDto {
  @Type(() => Date)
  @IsDate()
  public date: Date;

  @IsString()
  @IsNotEmpty()
  public reason: string;
}

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  public serviceId: string;

  @Type(() => Date)
  @IsDate()
  public appointmentStart: Date;

  @IsBoolean()
  public acceptedTerms: boolean;

  @IsInt()
  @IsIn([50, 100])
  public paymentPercentage: 50 | 100;

  @IsString()
  @IsNotEmpty()
  public paymentMethod: string;

  @IsString()
  @IsIn(['BRL', 'EUR'])
  public currency: 'BRL' | 'EUR';

  @IsString()
  @IsOptional()
  public timezone?: string;
}

export class RescheduleDto {
  @Type(() => Date)
  @IsDate()
  public appointmentStart: Date;
}

export class CancelAppointmentDto {
  @IsString()
  @IsOptional()
  public reason: string = 'Canceled by customer';
}

export class GoogleCalendarConnectDto {
  @IsString()
  @IsNotEmpty()
  public providerAccountId: string;

  @IsString()
  @IsNotEmpty()
  public calendarId: string;

  @IsString()
  @IsNotEmpty()
  public calendarName: string;

  @IsString()
  @IsNotEmpty()
  public accessToken: string;

  @IsString()
  @IsNotEmpty()
  public refreshToken: string;

  @Type(() => Date)
  @IsDate()
  public tokenExpiresAt: Date;
}

export class PaymentWebhookDto {
  @IsString()
  @IsNotEmpty()
  public provider: string;

  @IsString()
  @IsNotEmpty()
  public eventId: string;

  @IsString()
  @IsNotEmpty()
  public eventName: string;

  @IsString()
  @IsOptional()
  public paymentId?: string;

  @IsObject()
  public payload: Record<string, unknown>;
}

export class WaitlistDto {
  @IsString()
  @IsNotEmpty()
  public serviceId: string;

  @Type(() => Date)
  @IsDate()
  public preferredStartDate: Date;

  @Type(() => Date)
  @IsDate()
  public preferredEndDate: Date;
}

export class TenantSettingsDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsOptional()
  public logoUrl?: string;

  @IsString()
  @IsOptional()
  public primaryColor?: string;

  @IsString()
  @IsIn(['BRL', 'EUR'])
  public defaultCurrency: 'BRL' | 'EUR';

  @IsString()
  @IsNotEmpty()
  public defaultTimezone: string;

  @IsInt()
  @Min(1)
  @Max(48)
  public minimumNoticeHours: number;

  @IsInt()
  @Min(1)
  @Max(120)
  public maximumAdvanceDays: number;

  @IsInt()
  @Min(1)
  @Max(72)
  public cancellationHoursLimit: number;

  @IsInt()
  @Min(10)
  @Max(100)
  public bookingSignalPercentage: number;

  @IsString()
  @IsNotEmpty()
  public paymentMethods: string;
}

export class ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}
