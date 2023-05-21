'use client'
import Image from 'next/image'
import Link from 'next/link'
import SignOutButton from '../common/SignOutButton'

const Side = (board) => {
  return (
    <div className='sticky top-5 bottom-0 left-0 flex h-screen w-fit flex-col items-center justify-center gap-10 bg-[#22506C] text-xs font-normal'>
      <div className='flex flex-row justify-between'>
        <p className='h-[55px] w-[7px] rounded-r-lg bg-[#FDDC30] '></p>
        <Link
          className='font-popping flex flex-col items-center text-center text-white hover:underline '
          href={board}
        >
          <Image
            width={20}
            height={20}
            src={'/tableau-de-bord.png'}
            alt={'tableau'}
            className='pb-1'
          />
          Tableau De Bord
        </Link>
        <p className='h-[55px] w-[7px] rounded-l-lg bg-[#FDDC30] '></p>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='h-[55px] w-[7px] rounded-r-lg bg-[#FDDC30] '></p>
        <Link
          className='font-popping flex flex-col items-center text-center text-white hover:underline'
          href={'/offers'}
        >
          <Image
            width={20}
            height={20}
            src={'/calendrier.png'}
            alt={'offres'}
            className='pb-1'
          />
          Offres de stage
        </Link>
        <p className='h-[55px] w-[7px] rounded-l-lg bg-[#FDDC30] '></p>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='h-[55px] w-[7px] rounded-r-lg bg-[#FDDC30] '></p>
        <Link
          className='font-popping flex flex-col items-center text-center text-white hover:underline'
          href={board}
        >
          <Image
            width={20}
            height={20}
            src={'/parametres.png'}
            alt={'parametre'}
            className='pb-1'
          />
          Paramètre
        </Link>
        <p className='h-[55px] w-[7px] rounded-l-lg bg-[#FDDC30] '></p>
      </div>
      <SignOutButton />
    </div>
  )
}

export default Side
