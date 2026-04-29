"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
async function executeSeed() {
    const tenant = await prismaClient.tenant.upsert({
        where: { slug: 'kay-nunes' },
        update: {},
        create: {
            slug: 'kay-nunes',
            name: 'Kay Nunes',
            defaultCurrency: client_1.CurrencyCode.BRL,
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
    .catch(async (err) => {
    console.error(err);
    await prismaClient.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map