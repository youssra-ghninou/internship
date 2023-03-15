import AllOffers from '@/components/AllOffers'
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
    return (
      <div className='py-2'>
        <div className='flex gap-2'>
          <Link className='rounded-md bg-gray-500 px-2' href='/profile'>
            profile
          </Link>
          <SignOutButton />
        </div>
        <AllOffers />
      </div>
    )
  }
  return <SignInButton />
}
