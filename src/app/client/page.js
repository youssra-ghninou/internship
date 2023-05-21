import SignInButton from '@/components/common/SignInButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function Client() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    return redirect('/client/' + user.role.toLowerCase())
  }
  return (
    <div className='flex items-center justify-center'>
      <SignInButton />
    </div>
  )
}
