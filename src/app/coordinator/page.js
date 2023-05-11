import SignInButton from '@/components/common/SignInButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { getUser } from '../../../lib/queries'

export default async function Coordinator() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    if (user.role === 'COORDINATOR') {
      return (
        <div className='flex h-screen items-center justify-center'>
          COORDINATOR dashboard
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
