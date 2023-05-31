import CustomLayout from '@/components/UI/customLayout'
import SignInButton from '@/components/common/SignInButton'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth'

export default async function Template({ children }) {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)

    return (
      <CustomLayout home={'/' + user.role.toLowerCase()}>
        {children}
      </CustomLayout>
    )
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <SignInButton />
    </div>
  )
}
