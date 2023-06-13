import prisma from '@@/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })

  if (req.method === 'POST') {
    try {
      const id = req.body
      const archiver = await prisma.offer.update({
        where: {
          id: id,
        },
        data: {
          status: 'ARCHIVED',
        },
      })

      res.json(archiver)
    } catch (error) {
      console.log(error)
    }
  } else res.redirect(307, '/').end()
}
