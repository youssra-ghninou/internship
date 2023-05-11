'use client'

import { useSession } from 'next-auth/react'

function GenerateStaticParamsProvider({ children }) {
  const { data: session, status } = useSession()
  if (status === 'authenticated') {
    return <div>{children}</div>
  }
}

export default GenerateStaticParamsProvider
