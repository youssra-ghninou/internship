'use client'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button className='btn-primary btn-active btn' onClick={() => signOut()}>
      Sign out
    </button>
  )
}
