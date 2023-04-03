import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (req.method === 'POST') {
    const { bio } = req.body
    const result = await prisma.profile.create({
      data: {
        bio: bio,
        user: { connect: { email: session?.user?.email } },
      },
    })
    res.json(result)
  } else res.redirect(307, '/').end()
}
