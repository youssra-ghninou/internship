import prisma from '@@/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (req.method === 'POST') {
    const offerId = req.body
    const result = await prisma.application.create({
      data: {
        student: { connect: { email: session?.user?.email } },
        offer: { connect: { id: offerId } },
      },
    })
    res.json(result)
  } else res.redirect(307, '/').end()
}
