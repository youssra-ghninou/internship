'use client'
import { signIn } from 'next-auth/react'

export default function SignInButton() {
  return (
    <button
      className='rounded-md bg-gray-500 px-2'
      onClick={() => signIn('google')}
    >
      Sign in with Google
    </button>
  )
}
