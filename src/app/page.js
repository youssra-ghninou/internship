import SignInButton from '@/components/common/SignInButton'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { getUser } from '../../lib/queries'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    return redirect('/' + user.role.toLowerCase())
  }
  return (
    <div className='flex items-center justify-center'>
      <SignInButton />
    </div>
  )
}
