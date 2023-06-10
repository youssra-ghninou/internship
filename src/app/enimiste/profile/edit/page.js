import LoginForm from '@/components/login/LoginForm'
import CreateProfile from '@/components/profile/CreateProfile'
import EditProfile from '@/components/profile/EditProfile'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth/next'

export default async function EditMyProfile() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    if (user.profile) {
      return (
        <div className='flex flex-col gap-2 py-2'>
          <EditProfile data={user} />
        </div>
      )
    }
    return <CreateProfile />
  }
  return <LoginForm />
}
