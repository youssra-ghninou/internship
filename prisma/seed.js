const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const offers = await prisma.offer.createMany({
    data: [
      {
        title: 'Ingénieur Développement Full Stack',
        description:
          'Nous recherchons un ingénieur développement full stack expérimenté pour rejoindre notre équipe de développement.',
        startDate: new Date('2023-06-01T09:00:00Z'),
        endDate: new Date('2023-08-31T18:00:00Z'),
        companyId: 'clhj2bf5w0000zpagwmlh7b6t',
      },
      {
        title: 'Responsable Marketing Digital',
        description:
          'Nous recherchons un responsable marketing digital pour élaborer et mettre en place notre stratégie de marketing en ligne.',
        startDate: new Date('2023-07-01T09:00:00Z'),
        endDate: new Date('2023-09-30T18:00:00Z'),
        companyId: 'clhj2bf5w0000zpagwmlh7b6t',
      },
      {
        title: 'Spécialiste des Ventes',
        description:
          'Nous recherchons un spécialiste des ventes pour gérer nos activités de vente et établir des relations avec nos clients.',
        startDate: new Date('2023-06-15T09:00:00Z'),
        endDate: new Date('2023-09-15T18:00:00Z'),
        companyId: 'clhj2bf5w0000zpagwmlh7b6t',
      },
      {
        title: 'Développeur Mobile',
        description:
          'Nous recherchons un développeur mobile expérimenté pour rejoindre notre équipe de développement mobile.',
        startDate: new Date('2023-07-15T09:00:00Z'),
        endDate: new Date('2023-10-15T18:00:00Z'),
        companyId: 'clhj2bf5w0000zpagwmlh7b6t',
      },
      {
        title: 'Analyste Financier',
        description:
          'Nous recherchons un analyste financier pour nous aider à évaluer notre performance financière et à planifier notre stratégie financière.',
        startDate: new Date('2023-06-30T09:00:00Z'),
        endDate: new Date('2023-09-30T18:00:00Z'),
        companyId: 'clhj2bf5w0000zpagwmlh7b6t',
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
