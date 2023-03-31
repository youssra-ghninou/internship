import { getSession } from 'next-auth/react'
import { createProfile, getUser } from '../../../lib/queries'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (!session) {
    res.redirect(307, '/').end()
  }
  if (req.method === 'POST') {
    const user = await getUser(session.user.email)
    const { bio } = req.body
    const profile = await createProfile(bio, user.id)
    res.status(201).json({ profile })
  } else res.redirect(307, '/').end()
}
