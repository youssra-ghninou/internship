import SignInButton from '@/components/common/SignInButton'
import SignOutButton from '@/components/common/SignOutButton'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'
import { getUser } from '../../lib/queries'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    if (user.role === 'ENIMISTE') {
      return (
        <div className='flex h-screen items-center justify-center'>
          <div className='flex gap-2'>
            <Link className='btn-active btn' href='/enimiste/profile'>
              profile
            </Link>
            <SignOutButton />
          </div>
          <Link className='btn-active btn' href='/enimiste/offers'>
            Voir les offres
          </Link>
        </div>
      )
    } else if (user.role === 'COMPANY') {
      return <div className=''>COMPANY ROLE</div>
    } else if (user.role === 'COORDIBATOR') {
      return <div className=''>COORDIBATOR ROLE</div>
    }
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <SignInButton />
    </div>
  )
}
