'use client'
import Image from 'next/image'

import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button
      className='font-popping flex flex-col items-center text-white '
      onClick={() => signOut()}
    >
      <Image
        width={20}
        height={20}
        src={'/deconnexion.png'}
        alt={'deconnexion'}
        className='pb-1'
      />
      Déconnexion
    </button>
  )
}
