import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Headers,
  Param,
  ParseDatePipe,
  Query,
  Delete,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '@prisma/client';
import { AuthGuard } from './auth.guard';
import {
  BlockDateDto,
  CancelAppointmentDto,
  CreateAppointmentDto,
  CreateAvailabilityDto,
  CreateServiceDto,
  GoogleCalendarConnectDto,
  LoginDto,
  PaymentWebhookDto,
  RegisterDto,
  RescheduleDto,
  TenantSettingsDto,
  UpdateServiceDto,
  WaitlistDto,
} from './site.dto';
import { SiteService } from './site.service';
import { AuthPayload } from './site.types';

@Controller()
export class SiteController {
  public constructor(
    private readonly siteService: SiteService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('auth/register-client')
  public async registerClient(@Body() body: RegisterDto): Promise<{ id: string }> {
    return this.siteService.registerUser(body, UserRole.CLIENT);
  }

  @Post('auth/register-admin')
  public async registerAdmin(@Body() body: RegisterDto): Promise<{ id: string }> {
    return this.siteService.registerUser(body, UserRole.ADMIN);
  }

  @Post('auth/login-client')
  public async loginClient(@Body() body: LoginDto): Promise<{ token: string }> {
    return this.siteService.loginUser(body, UserRole.CLIENT);
  }

  @Post('auth/login-admin')
  public async loginAdmin(@Body() body: LoginDto): Promise<{ token: string }> {
    return this.siteService.loginUser(body, UserRole.ADMIN);
  }

  @UseGuards(AuthGuard)
  @Post('services')
  public async createService(
    @Headers('authorization') authorization: string,
    @Body() body: CreateServiceDto,
  ): Promise<{ id: string }> {
    this.assertAdmin(authorization);
    return this.siteService.createService(body);
  }

  @Get('services')
  public async listServices(): Promise<unknown[]> {
    return this.siteService.listServices();
  }

  @UseGuards(AuthGuard)
  @Patch('services/:id')
  public async updateService(
    @Headers('authorization') authorization: string,
    @Param('id') serviceId: string,
    @Body() body: UpdateServiceDto,
  ): Promise<{ id: string }> {
    this.assertAdmin(authorization);
    return this.siteService.updateService(serviceId, body);
  }

  @UseGuards(AuthGuard)
  @Delete('services/:id')
  public async deleteService(
    @Headers('authorization') authorization: string,
    @Param('id') serviceId: string,
  ): Promise<{ id: string }> {
    this.assertAdmin(authorization);
    return this.siteService.deleteService(serviceId);
  }

  @UseGuards(AuthGuard)
  @Post('availability')
  public async createAvailability(
    @Headers('authorization') authorization: string,
    @Body() body: CreateAvailabilityDto,
  ): Promise<{ id: string }> {
    this.assertAdmin(authorization);
    return this.siteService.createAvailability(body);
  }

  @UseGuards(AuthGuard)
  @Post('blocked-dates')
  public async createBlockedDate(
    @Headers('authorization') authorization: string,
    @Body() body: BlockDateDto,
  ): Promise<{ id: string }> {
    this.assertAdmin(authorization);
    return this.siteService.createBlockedDate(body);
  }

  @Get('availability')
  public async listAvailability(): Promise<unknown[]> {
    return this.siteService.listAvailability();
  }

  @Get('blocked-dates')
  public async listBlockedDates(): Promise<unknown[]> {
    return this.siteService.listBlockedDates();
  }

  @UseGuards(AuthGuard)
  @Delete('blocked-dates/:id')
  public async deleteBlockedDate(
    @Headers('authorization') authorization: string,
    @Param('id') blockedDateId: string,
  ): Promise<{ id: string }> {
    this.assertAdmin(authorization);
    return this.siteService.deleteBlockedDate(blockedDateId);
  }

  @UseGuards(AuthGuard)
  @Post('appointments')
  public async createAppointment(
    @Headers('authorization') authorization: string,
    @Body() body: CreateAppointmentDto,
  ): Promise<{ appointmentId: string; paymentId: string }> {
    const user = this.extractAuthPayload(authorization);
    return this.siteService.createAppointment(user.userId, body);
  }

  @UseGuards(AuthGuard)
  @Post('calendar/google/connect')
  public async connectGoogleCalendar(
    @Headers('authorization') authorization: string,
    @Body() body: GoogleCalendarConnectDto,
  ): Promise<{ id: string }> {
    const user = this.extractAuthPayload(authorization);
    return this.siteService.connectGoogleCalendar(user.userId, body);
  }

  @UseGuards(AuthGuard)
  @Post('calendar/google/blocked-date')
  public async receiveGoogleBlockedDate(
    @Headers('authorization') authorization: string,
    @Body() body: BlockDateDto,
  ): Promise<{ id: string }> {
    const user = this.extractAuthPayload(authorization);
    return this.siteService.receiveGoogleBlock(user.userId, {
      date: body.date,
      reason: body.reason,
      providerEventId: `google-${body.date.toISOString()}`,
    });
  }

  @Get('appointments/slots')
  public async getAvailableSlots(
    @Query('serviceId') serviceId: string,
    @Query('date', new ParseDatePipe({ optional: false })) date: Date,
    @Query('timezone') timezone: string,
  ): Promise<{ start: string; end: string }[]> {
    return this.siteService.getAvailableSlots({
      serviceId,
      date,
      timezone: timezone || 'America/Sao_Paulo',
    });
  }

  @UseGuards(AuthGuard)
  @Patch('appointments/:id/reschedule')
  public async rescheduleAppointment(
    @Headers('authorization') authorization: string,
    @Param('id') appointmentId: string,
    @Body() body: RescheduleDto,
  ): Promise<{ id: string }> {
    const user = this.extractAuthPayload(authorization);
    return this.siteService.rescheduleAppointment(user.userId, appointmentId, body.appointmentStart);
  }

  @UseGuards(AuthGuard)
  @Patch('appointments/:id/cancel')
  public async cancelAppointment(
    @Headers('authorization') authorization: string,
    @Param('id') appointmentId: string,
    @Body() body: CancelAppointmentDto,
  ): Promise<{ id: string; refundCreated: boolean }> {
    const user = this.extractAuthPayload(authorization);
    return this.siteService.cancelAppointment(user.userId, appointmentId, body.reason);
  }

  @UseGuards(AuthGuard)
  @Get('client/appointments')
  public async listClientAppointments(
    @Headers('authorization') authorization: string,
  ): Promise<unknown[]> {
    const user = this.extractAuthPayload(authorization);
    return this.siteService.listClientAppointments(user.userId);
  }

  @UseGuards(AuthGuard)
  @Get('client/invoices')
  public async listClientInvoices(
    @Headers('authorization') authorization: string,
  ): Promise<unknown[]> {
    const user = this.extractAuthPayload(authorization);
    return this.siteService.listInvoicesByUser(user.userId);
  }

  @UseGuards(AuthGuard)
  @Post('client/waitlist')
  public async createWaitlistEntry(
    @Headers('authorization') authorization: string,
    @Body() body: WaitlistDto,
  ): Promise<{ id: string }> {
    const user = this.extractAuthPayload(authorization);
    return this.siteService.createWaitlistEntry(user.userId, body);
  }

  @UseGuards(AuthGuard)
  @Get('admin/appointments')
  public async listAdminAppointments(
    @Headers('authorization') authorization: string,
  ): Promise<unknown[]> {
    this.assertAdmin(authorization);
    return this.siteService.listAdminAppointments();
  }

  @UseGuards(AuthGuard)
  @Get('admin/users')
  public async listUsers(@Headers('authorization') authorization: string): Promise<unknown[]> {
    this.assertAdmin(authorization);
    return this.siteService.listUsers();
  }

  @UseGuards(AuthGuard)
  @Get('admin/payments')
  public async listPayments(@Headers('authorization') authorization: string): Promise<unknown[]> {
    this.assertAdmin(authorization);
    return this.siteService.listPayments();
  }

  @UseGuards(AuthGuard)
  @Get('admin/invoices')
  public async listInvoices(@Headers('authorization') authorization: string): Promise<unknown[]> {
    this.assertAdmin(authorization);
    return this.siteService.listAllInvoices();
  }

  @UseGuards(AuthGuard)
  @Post('admin/waitlist/:id/promote/:appointmentId')
  public async promoteWaitlistEntry(
    @Headers('authorization') authorization: string,
    @Param('id') waitlistId: string,
    @Param('appointmentId') appointmentId: string,
  ): Promise<{ id: string }> {
    this.assertAdmin(authorization);
    return this.siteService.promoteWaitlistEntry(waitlistId, appointmentId);
  }

  @UseGuards(AuthGuard)
  @Post('admin/tenant-settings')
  public async upsertTenantSettings(
    @Headers('authorization') authorization: string,
    @Body() body: TenantSettingsDto,
  ): Promise<{ id: string }> {
    this.assertAdmin(authorization);
    return this.siteService.upsertTenantSettings(body);
  }

  @Post('payments/webhook')
  public async processPaymentWebhook(@Body() body: PaymentWebhookDto): Promise<{ id: string }> {
    return this.siteService.processPaymentWebhook({
      tenantId: null,
      provider: body.provider,
      eventId: body.eventId,
      eventName: body.eventName,
      paymentId: body.paymentId,
      payload: body.payload,
    });
  }

  @UseGuards(AuthGuard)
  @Get('admin/financial-report/:date')
  public async getDailyFinancialReport(
    @Headers('authorization') authorization: string,
    @Param('date', new ParseDatePipe({ optional: false })) date: Date,
  ): Promise<unknown> {
    this.assertAdmin(authorization);
    return this.siteService.getDailyFinancialReport(date);
  }

  @Get('admin/test')
  public adminSmokeTest(): { status: string } {
    return { status: 'admin module ok' };
  }

  private assertAdmin(authorization: string): void {
    const user = this.extractAuthPayload(authorization);
    if (user.role !== 'ADMIN') {
      throw new ForbiddenException('Only admin role can access this endpoint');
    }
  }

  private extractAuthPayload(authorization: string): AuthPayload {
    const token: string = authorization?.replace('Bearer ', '');
    return this.jwtService.verify<AuthPayload>(token, {
      secret: process.env.JWT_SECRET ?? 'super-secret-key',
    });
  }
}
