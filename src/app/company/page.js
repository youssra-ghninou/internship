import LoginForm from '@/components/login/LoginForm'
import CompanyEveryOffers from '@/components/offer/CompanyAllOffers'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function Company() {
  const session = await getServerSession(authOptions)
  if (session) {
    return <CompanyEveryOffers />
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      <LoginForm />
    </div>
  )
}
