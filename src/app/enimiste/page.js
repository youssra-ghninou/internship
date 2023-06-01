import AllOffers from '@/components/offer/AllOffers'
import Recommendation from '@/components/recommendations/recommendation'

export default async function Enimiste() {
  return (
    <div className='flex flex-col gap-5'>
      <AllOffers />
      <Recommendation />
    </div>
  )
}
