'use client'
import { signIn } from 'next-auth/react'

export default function SignInButton() {
  return (
    <button className='btn-primary btn-active btn' onClick={() => signIn('')}>
      Sign in with Google
    </button>
  )
}
