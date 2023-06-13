import prisma from './prisma'

export const getOffers = async (id) => {
  const offers = prisma.offer.findMany({
    where: {
      status: 'ACTIVE',
      applications: {
        none: {
          studentId: id,
        },
      },
    },
    include: {
      author: {
        select: { name: true },
      },
      company: {
        select: { name: true, image: true },
      },
      _count: {
        select: { applications: true },
      },
    },
  })
  return offers
}

export const getCandidature = async (userId) => {
  const candidature = prisma.application.findMany({
    where: {
      AND: [
        {
          studentId: userId,
        },
        {
          offer: {
            status: 'ACTIVE',
          },
        },
      ],
    },
    include: {
      student: {
        select: { name: true },
      },
      offer: {
        include: {
          author: {
            select: { name: true },
          },
          company: {
            select: { name: true, image: true },
          },
        },
      },
    },
  })
  return candidature
}

export const getCompanyOffers = async (companyid) => {
  const companyoffers = prisma.offer.findMany({
    where: {
      companyId: companyid,
    },
    include: {
      author: {
        select: { name: true },
      },
      company: {
        select: { name: true, image: true },
      },
      _count: {
        select: { applications: true },
      },
    },
  })

  return companyoffers
}

export const getCandidats = async (offerId) => {
  const candidat = prisma.application.findMany({
    where: {
      offerId: offerId,
    },
    select: {
      status: true,
      student: {
        include: {
          profile: true,
        },
      },
      offer: {
        select: { title: true, status: true },
      },
    },
  })
  return candidat
}

export const getOffer = async (id) => {
  const offer = prisma.offer.findUnique({
    where: {
      // status: 'ACTIVE',
      id: id,
    },
    include: {
      author: {
        select: { name: true },
      },
      company: {
        select: { name: true },
      },
    },
  })
  return offer
}

export const getUsers = async () => {
  const users = prisma.user.findMany({
    where: {
      role: 'ENIMISTE',
    },
  })
  return users
}

export const getUser = async (email) => {
  const user = prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      profile: {
        include: {
          education: true,
          experience: true,
          competences: true,
        },
      },
    },
  })
  return user
}

export const getCompany = async (email) => {
  const user = prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      company: true,
    },
  })
  return user
}

export const CountOffers = async (UserId) => {
  const countoffers = prisma.offer.count({
    where: {
      status: 'ACTIVE',
      applications: {
        none: {
          studentId: UserId,
        },
      },
    },
  })
  return countoffers
}

export const CountEntreprises = async () => {
  const countEntreprise = prisma.company.count({})
  return countEntreprise
}

export const CountCandidatures = async (userId) => {
  const countcandidature = prisma.application.count({
    where: {
      studentId: userId,
    },
  })
  return countcandidature
}

export const CountCandidaturesOffer = async () => {
  const countcandidatureoffer = prisma.offer.findMany({
    select: {
      _count: {
        select: { applications: true },
      },
    },
  })
  return countcandidatureoffer
}
