import Image from 'next/image'
import MessageIcon from '../notification/messageIcon'

const Side = ({ eventnotif }) => {
  return (
    <div className=' flex h-[900px] w-[85px] flex-col items-center bg-[#22506C]  pt-[50px] text-xs font-normal'>
      <div className='flex flex-row justify-between'>
        <p className='h-[55px] w-[7px] rounded-r-lg bg-[#FDDC30] '></p>
        <button className='font-popping flex flex-col items-center pb-[60px]  text-white '>
          <Image
            width={20}
            height={20}
            src={'/tableau-de-bord.png'}
            alt={'tableau'}
            className='pb-1'
          />
          Tableau De Bord
        </button>
        <p className='h-[55px] w-[7px] rounded-l-lg bg-[#FDDC30] '></p>
      </div>
      <button className='font-popping flex flex-col items-center pb-[60px]  text-white '>
        <Image
          width={20}
          height={20}
          src={'/calendrier.png'}
          alt={'offres'}
          className='pb-1'
        />
        Mes Offres
      </button>
      <button className='font-popping flex flex-col items-center pb-[60px]    '>
        <MessageIcon lien={'/calendrier.png'} notificationCount={eventnotif} />
        <p className='pt-1 text-white'>Événemets À Venir</p>
      </button>
      <button className='font-popping relative flex flex-col items-center pb-[60px]  text-white '>
        <Image
          width={20}
          height={20}
          src={'/parametres.png'}
          alt={'parametre'}
          className='pb-1'
        />
        Paramètre
      </button>
      <button className=' absolute bottom-1 w-[55px] rounded-md border-[1px] border-solid border-black bg-white font-medium'>
        Aide
      </button>
      <button className='font-popping flex flex-col items-center pt-[200px] text-white '>
        <Image
          width={20}
          height={20}
          src={'/deconnexion.png'}
          alt={'deconnexion'}
          className='pb-1'
        />
        Déconnexion
      </button>
    </div>
  )
}

export default Side
