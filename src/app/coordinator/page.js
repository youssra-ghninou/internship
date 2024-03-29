import LoginForm from '@/components/login/LoginForm'
import CoordinatorEveryOffers from '@/components/offer/CoordinatorAllOffers'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function Coordinator() {
  const session = await getServerSession(authOptions)
  if (session) {
    return <CoordinatorEveryOffers />
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <LoginForm />
    </div>
  )
}
