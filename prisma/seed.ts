import { PrismaClient, CurrencyCode } from '@prisma/client';

const prismaClient: PrismaClient = new PrismaClient();

async function executeSeed(): Promise<void> {
  const tenant = await prismaClient.tenant.upsert({
    where: { slug: 'kay-nunes' },
    update: {},
    create: {
      slug: 'kay-nunes',
      name: 'Kay Nunes',
      defaultCurrency: CurrencyCode.BRL,
      defaultTimezone: 'America/Sao_Paulo',
    },
  });
  await prismaClient.service.upsert({
    where: { id: 'cm-default-service' },
    update: {},
    create: {
      id: 'cm-default-service',
      tenantId: tenant.id,
      name: 'Default Service',
      description: 'Initial seed service',
      durationInMinutes: 60,
      priceBrl: 150,
      priceEur: 30,
    },
  });
}

executeSeed()
  .then(async () => prismaClient.$disconnect())
  .catch(async (err: unknown) => {
    console.error(err);
    await prismaClient.$disconnect();
    process.exit(1);
  });
