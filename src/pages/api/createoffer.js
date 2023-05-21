import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (req.method === 'POST') {
    const { title, description, startDate, endDate, companyId } = req.body
    const result = await prisma.offer.create({
      data: {
        title: title,
        description: description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        authorId: session?.user?.id,
        companyId: companyId,
      },
    })
    res.json(result)
  } else res.redirect(307, '/').end()
}
