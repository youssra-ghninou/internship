'use client'
import { signIn } from 'next-auth/react'

export default function SignInButton() {
  return (
    <button className='btn-primary btn-active btn' onClick={() => signIn('')}>
      Se Connecter
    </button>
  )
}
