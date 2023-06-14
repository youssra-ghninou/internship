import prisma from '@@/prisma'
import { getCopetences, getUser } from '@@/queries'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })
  const currentuser = await getUser(session.user.email)
  const competenceUnique = await getCopetences(currentuser.profile.profileId)

  if (req.method === 'POST') {
    try {
      const { titre, adresse, telephone, siteWeb, resume } = req.body

      const competences = req.body.competences.map((competence) => {
        return {
          ...competence,
          profileId: currentuser.profile.profileId,
        }
      })

      const educations = req.body.education.map((education) => {
        return {
          ...education,
          profileId: currentuser.profile.profileId,
        }
      })

      const experiences = req.body.experience.map((experience) => {
        return {
          ...experience,
          profileId: currentuser.profile.profileId,
        }
      })

      const result = await prisma.profile.update({
        where: {
          profileId: currentuser.profile.profileId,
        },
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
        },
      })

      await prisma.$transaction([
        prisma.competence.deleteMany({
          where: { profileId: currentuser.profile.profileId },
        }),
        prisma.education.deleteMany({
          where: { profileId: currentuser.profile.profileId },
        }),
        prisma.experience.deleteMany({
          where: { profileId: currentuser.profile.profileId },
        }),
        prisma.competence.createMany({
          data: competences,
        }),
        prisma.education.createMany({
          data: educations,
        }),
        prisma.experience.createMany({
          data: experiences,
        }),
      ])

      res.json(result)
    } catch (error) {
      console.log(error)
    }
  } else res.redirect(307, '/').end()
}
