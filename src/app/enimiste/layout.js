import SignInButton from '@/components/common/SignInButton'
import Side from '@/components/sideBar/side'
import Top from '@/components/topbar/top'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function EnimisteLayout({ children }) {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    if (user.role === 'ENIMISTE') {
      return (
        <div>
          <Top Nom={user.name} lien={user.image} />

          <div className='flex w-screen'>
            <Side />
            <div className='w-full px-5 py-5'>{children}</div>
          </div>
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
