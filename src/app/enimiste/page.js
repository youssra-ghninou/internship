import AllOffers from '@/components/offer/AllOffers'
import StatsCards from '@/components/stats/StatsCards'

export default async function Enimiste() {
  return (
    <div className='flex flex-col gap-5'>
      <StatsCards />
      <AllOffers />
    </div>
  )
}
