import prisma from '@@/prisma'
import { getUser } from '@@/queries'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
  const session = await getSession({ req })
  const currentuser = await getUser(session.user.email)

  if (req.method === 'POST') {
    try {
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
      // await prisma.profile.delete({
      //   where: {
      //     profileId: currentuser.profile.profileId,
      //   },
      // })

      const deleted = await prisma.profile.update({
        where: {
          profileId: currentuser.profile.profileId,
        },
        data: {
          education: {
            deleteMany: { profileId: currentuser.profile.profileId },
          },
          experience: {
            deleteMany: { profileId: currentuser.profile.profileId },
          },
          competences: {
            deleteMany: { profileId: currentuser.profile.profileId },
          },
        },
      })

      const result = await prisma.profile.upsert({
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
    } catch (error) {
      console.log(error)
    }
  } else res.redirect(307, '/').end()
}
