import SignInButton from '@/components/common/SignInButton'
import Side from '@/components/sideBar/side'
import Top from '@/components/topbar/top'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { getUser } from '../../../lib/queries'

export default async function EnimisteLayout({ children }) {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    console.log(user)
    if (user.role === 'ENIMISTE') {
      return (
        <div>
          <Top Nom={user.name} lien={user.image} />

          <Side />

          {children}
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
