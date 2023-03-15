'use client'

import { useRouter } from 'next/navigation'

export default function GoBackButton() {
  const route = useRouter()
  return (
    <button
      className='w-fit rounded-md bg-gray-500 px-2'
      onClick={() => route.back()}
    >
      go back
    </button>
  )
}
