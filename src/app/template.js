import SignInButton from '@/components/common/SignInButton'
import Side from '@/components/sideBar/side'
import Top from '@/components/topbar/top'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth'

export default async function Template({ children }) {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)

    return (
      <div>
        <Top Nom={user.name} lien={user.image} />
        <div className='flex w-screen'>
          <Side board={'/' + user.role.toLowerCase()} />
          <div className='w-full px-5 py-5'>{children}</div>
        </div>
      </div>
    )
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <SignInButton />
    </div>
  )
}
