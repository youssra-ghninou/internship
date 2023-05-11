import SignInButton from '@/components/common/SignInButton'
import SignOutButton from '@/components/common/SignOutButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getUser } from '../../../lib/queries'

export default async function Enimiste() {
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
    } else return redirect('/' + user.role.toLowerCase())
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <SignInButton />
    </div>
  )
}
