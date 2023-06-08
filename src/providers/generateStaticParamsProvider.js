'use client'

import LoginForm from '@/components/login/LoginForm'
import { useSession } from 'next-auth/react'

function GenerateStaticParamsProvider({ children }) {
  const { data: session, status } = useSession()
  if (status === 'authenticated') {
    return <div>{children}</div>
  } else return <LoginForm />
}

export default GenerateStaticParamsProvider
