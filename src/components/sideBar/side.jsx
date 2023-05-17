import Image from 'next/image'
import Link from 'next/link'
import SignOutButton from '../common/SignOutButton'
import MessageIcon from '../notification/messageIcon'

const Side = ({ eventnotif }) => {
  return (
    <div className='fixed flex h-screen w-fit flex-col items-center justify-center gap-10 bg-[#22506C] px-3 text-xs font-normal'>
      <div className='flex flex-row justify-between'>
        <p className='h-[55px] w-[7px] rounded-r-lg bg-[#FDDC30] '></p>
        <button className='font-popping flex flex-col items-center text-white '>
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
      <div className='flex flex-col items-center justify-center'>
        <Image
          width={20}
          height={20}
          src={'/calendrier.png'}
          alt={'offres'}
          className='pb-1'
        />
        <Link
          className='font-popping flex flex-col items-center text-center text-white '
          href='offers'
        >
          Mes offres
        </Link>
      </div>
      <button className='font-popping flex flex-col items-center   '>
        <MessageIcon lien={'/calendrier.png'} notificationCount={5} />
        <p className='pt-1 text-white'>Événements À Venir</p>
      </button>
      <button className='font-popping flex flex-col items-center text-white '>
        <Image
          width={20}
          height={20}
          src={'/parametres.png'}
          alt={'parametre'}
          className='pb-1'
        />
        Paramètre
      </button>
      <button className='w-fit rounded-md border-[1px] border-solid border-black bg-white px-2 font-medium'>
        Aide
      </button>
      <SignOutButton />
    </div>
  )
}

export default Side
