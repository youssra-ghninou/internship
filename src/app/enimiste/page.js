import AllOffers from '@/components/offer/AllOffers'
import StatsCards from '@/components/stats/StatsCards'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { CountCandidatures, CountEntreprises, CountOffers } from '@@/queries'
import { getServerSession } from 'next-auth'

export default async function Enimiste() {
  const session = await getServerSession(authOptions)
  const totaloffers = await CountOffers(session.user.id)
  const totalEntreprises = await CountEntreprises()
  const totalCandidatures = await CountCandidatures(session.user.id)

  return (
    <div className='flex flex-col gap-5'>
      <StatsCards
        offers={totaloffers}
        entreprises={totalEntreprises}
        canditatures={totalCandidatures}
      />
      <AllOffers />
    </div>
  )
}
