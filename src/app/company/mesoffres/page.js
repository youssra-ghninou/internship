import LoginForm from '@/components/login/LoginForm'
import CompanyEveryOffers from '@/components/offer/CompanyAllOffers'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

export default async function MesOffres() {
  const session = await getServerSession(authOptions)
  if (session) {
    return (
      <div className='flex flex-col flex-wrap gap-2 py-2'>
        <CompanyEveryOffers />
      </div>
    )
  }
  return <LoginForm />
}
