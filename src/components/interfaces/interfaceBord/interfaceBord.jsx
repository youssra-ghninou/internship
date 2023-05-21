import AllOffers from '@/components/offer/AllOffers'
import Recommendation from '@/components/recommendations/recommendation'

const InterfaceBord = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className=' text-[28px] font-semibold '>Tableau De Bord</div>
      <div className='flex flex-col gap-10'>
        <div>
          <AllOffers />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-[28px] font-semibold '>
            Recommendation De Stage Pour Vous
          </p>
          <Recommendation />
        </div>
      </div>
    </div>
  )
}

export default InterfaceBord
