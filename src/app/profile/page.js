import GoBackButton from '@/components/GoBackButton'
import MyProfile from '@/components/MyProfile'
import SignInButton from '@/components/SignInButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { getUser } from '../../../lib/queries'
import Create from './create/page'

export default async function Profile() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    console.log(user)
    if (user.profile) {
      return (
        <div className='flex flex-col gap-2 py-2'>
          <GoBackButton />
          <MyProfile data={user} />
        </div>
      )
    }
    return <Create />
  }
  return <SignInButton />
}
