import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (req.method === 'POST') {
    const {
      titre,
      adresse,
      telephone,
      siteWeb,
      resume,
      education,
      experience,
      competences,
    } = req.body
    const result = await prisma.profile.create({
      data: {
        nom: session?.user?.name,
        prenom: session?.user?.name,
        email: session?.user?.email,
        titre: titre,
        adresse: adresse,
        telephone: telephone,
        siteWeb: siteWeb,
        resume: resume,
        user: { connect: { email: session?.user?.email } },
        education: {
          create: education,
        },
        experience: {
          create: experience,
        },
        competences: {
          create: competences,
        },
      },
    })
    res.json(result)
  } else res.redirect(307, '/').end()
}
