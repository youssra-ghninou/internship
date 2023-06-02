import SignInButton from '@/components/buttons/SignInButton'
import MesCandidature from '@/components/candidatures/MesCandidature'
import CreateProfile from '@/components/profile/CreateProfile'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getUser } from '@@/queries'
import { getServerSession } from 'next-auth/next'

export default async function MesCandidaturesPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    if (user.profile) {
      return (
        <div className='flex flex-col gap-2 py-2'>
          <MesCandidature />
        </div>
      )
    }
    return <CreateProfile />
  }
  return <SignInButton />
}
