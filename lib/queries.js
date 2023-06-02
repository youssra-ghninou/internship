import prisma from './prisma'

export const getOffers = async () => {
  const offers = prisma.offer.findMany({
    where: {
      status: 'ACTIVE',
    },
    include: {
      author: {
        select: { name: true },
      },
      company: {
        select: { name: true, image: true },
      },
    },
  })
  return offers
}

export const getCandidature = async (userId) => {
  const candidature = prisma.application.findMany({
    where: {
      studentId: userId,
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
