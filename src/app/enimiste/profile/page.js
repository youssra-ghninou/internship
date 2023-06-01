import SignInButton from '@/components/buttons/SignInButton'
import CreateProfile from '@/components/profile/CreateProfile'
import MyProfile from '@/components/profile/MyProfile'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth/next'

export default async function Profile() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    if (user.profile) {
      return (
        <div className='flex flex-col gap-2 py-2'>
          <MyProfile data={user} />
        </div>
      )
    }
    return <CreateProfile />
  }
  return <SignInButton />
}
