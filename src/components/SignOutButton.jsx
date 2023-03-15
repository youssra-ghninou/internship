'use client'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button className='rounded-md bg-gray-500 px-2' onClick={() => signOut()}>
      Sign out
    </button>
  )
}
