import AllOffers from '@/components/AllOffers'
import Profile from '@/components/Profile'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'
import { getUser } from '../../lib/queries'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    console.log(user)
    return (
      <>
        <Profile />
        <AllOffers />
        <Link href='/profile'>profile </Link>
        <SignOutButton />
      </>
    )
  }
  return <SignInButton />
}
