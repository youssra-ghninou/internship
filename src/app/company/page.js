import SignInButton from '@/components/common/SignInButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { getUser } from '../../../lib/queries'

export default async function Company() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    if (user.role === 'COMPANY') {
      return (
        <div className='flex h-screen items-center justify-center'>
          company dashboard
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
