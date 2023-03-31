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
    },
  })
  return offers
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
  })
  return user
}
