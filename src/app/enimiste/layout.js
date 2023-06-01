import SignInButton from '@/components/buttons/SignInButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function EnimisteLayout({ children }) {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    if (user.role === 'ENIMISTE') {
      return <>{children}</>
    } else return redirect('/' + user.role.toLowerCase())
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <SignInButton />
    </div>
  )
}
