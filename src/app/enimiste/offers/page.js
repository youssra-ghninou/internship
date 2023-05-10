import SignInButton from '@/components/common/SignInButton'
import AllOffers from '@/components/offer/AllOffers'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { getUser } from '../../../../lib/queries'

export default async function Offers() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)

    if (user.role === 'ENIMISTE') {
      return (
        <div className='flex h-screen items-center justify-center'>
          <AllOffers />
        </div>
      )
    } else if (user.role === 'COMPANY') {
      return <div className=''>COMPANY ROLE</div>
    } else if (user.role === 'COORDIBATOR') {
      return <div className=''>COORDIBATOR ROLE</div>
    }

    return (
      <div className='flex h-screen items-center justify-center'>
        <SignInButton />
      </div>
    )
  }
}
