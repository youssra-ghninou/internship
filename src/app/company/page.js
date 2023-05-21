import SignInButton from '@/components/common/SignInButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Company() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    return (
      <div className='flex h-screen items-center justify-center'>
        <Link
          className='rounded-full bg-red-500 p-3'
          href={'/company/createoffer'}
        >
          Creer une offre
        </Link>
      </div>
    )
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <SignInButton />
    </div>
  )
}
