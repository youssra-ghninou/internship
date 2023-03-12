'use client'

import { useRouter } from 'next/navigation'

function GoBackButton() {
  const route = useRouter()
  return <button onClick={() => route.back()}>go back</button>
}

export default GoBackButton
