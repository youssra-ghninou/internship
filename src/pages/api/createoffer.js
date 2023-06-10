import prisma from '@@/prisma'
import { getCompany } from '@@/queries'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })
  const user = await getCompany(session.user.email)
  if (req.method === 'POST') {
    const {
      offerData: {
        title,
        description,
        startDate,
        endDate,
        localisation,
        remuneration,
        lien,
        methode,
      },
      mode,
      type,
    } = req.body
    const result = await prisma.offer.create({
      data: {
        title: title,
        description: description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        authorId: session?.user?.id,
        company: { connect: { id: user.company.id } },
        localisation: localisation,
        remuneration: remuneration,
        mode: mode,
        offertype: type,
        link: lien,
        methode: methode,
      },
    })
    res.json(result)
  } else res.redirect(307, '/').end()
}
