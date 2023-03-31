import { getSession } from 'next-auth/react'
import { createProfile, getUser } from '../../../lib/queries'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (req.method === 'POST') {
    const user = await getUser(session.user.email)
    console.log(user.id)
    const { bio } = req.body
    console.log(bio)

    const profile = await createProfile(bio, user.id)

    res.redirect(307, '/profile').end()
  } else res.redirect(307, '/').end()
  if (!session) {
    res.status(200).json({ name: 'you are not allowed' })
  }
}
