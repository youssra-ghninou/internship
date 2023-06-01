import SideBare from '@/components/UI/SideBare'
import Filter from '@/components/UI/filter'
import SignInButton from '@/components/buttons/SignInButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth'

export default async function Template({ children }) {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)

    return (
      <SideBare
        className='z-50'
        profileimage={user.image}
        name={user.name}
        base={'/' + user.role.toLowerCase()}
      >
        <Filter />
        <div className='p-4'>{children}</div>
      </SideBare>
    )
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <SignInButton />
    </div>
  )
}
