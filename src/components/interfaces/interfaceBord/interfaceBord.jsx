import Candidature from '../../candidatures/candidature'
import Evenement from '../../evenements/evenement'
import Button from '../../interfaces/interfaceBord/button'
import Recommendation from '../../recommendations/recommendation'
import Side from '../../sideBar/side'
import Conteneur from '../../suggestions/conteneur'
import Top from '../../topbar/top'

const InterfaceBord = () => {
  return (
    <div className='bg-[#ecebeb]'>
      <Top
        messagenotif={'3'}
        valisenotif={'8'}
        rappelnotif={'8'}
        lien={'/ProfilePic.png'}
        Nom={'AIMADE'}
        Prenom={'ANOUAR'}
      />
      <div className='flex flex-row gap-4'>
        <Side eventnotif={'3'} />
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
