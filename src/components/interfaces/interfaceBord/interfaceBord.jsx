import Button from '@/components/candidatures/button'
import Candidature from '@/components/candidatures/candidature'
import Evenement from '@/components/evenements/evenement'
import Recommendation from '@/components/recommendations/recommendation'
import Conteneur from '@/components/suggestions/conteneur'

const InterfaceBord = () => {
  return (
    <div className='bg-[#ecebeb]'>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-col pt-[40px] '>
          <div>
            <div className=' flex flex-row items-end justify-between pb-[10px] '>
              <div className=' text-[28px] font-semibold '>Tableau De Bord</div>
              <div className='flex flex-col items-center text-[16px] font-medium '>
                Statut de recherche de stage
                <Button />
              </div>
            </div>
            <div>
              <Candidature />
            </div>
          </div>
          <p className='pt-[60px] text-[28px] font-semibold '>
            Recommendation De Stage Pour Vous
          </p>
          <div className='flex flex-row justify-between pt-2 pb-1 '>
            <div className='flex flex-row gap-8 text-[15px] font-normal '>
              <div className='flex flex-row items-center gap-3 '>
                <p className='h-[10px] w-[10px] rounded-full bg-[#043CA7] '></p>
                Developeur Web
              </div>
              <div className='flex flex-row items-center gap-3 '>
                <p className='h-[10px] w-[10px] rounded-full bg-[#043CA7] '></p>
                Casablanca, Maroc
              </div>
            </div>
            <button className='pr-4 text-[15px] font-bold text-[#043CA7] '>
              Voir Tout
            </button>
          </div>
          <Recommendation />
        </div>
        <div className='flex flex-col pt-[20px] '>
          <Conteneur />
          <div className='pt-[45px] '>
            <Evenement />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterfaceBord
