'use client'

import SignInButton from '@/components/buttons/SignInButton'
import { useSession } from 'next-auth/react'

function GenerateStaticParamsProvider({ children }) {
  const { data: session, status } = useSession()
  if (status === 'authenticated') {
    return <div>{children}</div>
  } else return <SignInButton />
}

export default GenerateStaticParamsProvider
