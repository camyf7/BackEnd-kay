import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from './common/prisma/prisma.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // 🔥 LIBERA FRONT (Vite)
  app.enableCors({
    origin: "http://localhost:5173",
    credentials: true,
  });

  // ✅ validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // 📄 Swagger (docs da API)
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Kay Nunes SaaS API')
    .setDescription('Booksy/Fresha-lite backend API')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  // 🛢 Prisma shutdown
  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // 🚀 PORTA FIXA (evita bug do 5000 ocupado)
  await app.listen(3000);

  console.log("🚀 Backend rodando em http://localhost:3000");
}

bootstrap();