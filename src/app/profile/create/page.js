'use client'
import SignInButton from '@/components/SignInButton'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'

export default function Create() {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const bio = formData.get('bio')

    const data = await fetch('/api/createprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bio }),
    })

    toast.success('Created profile')
  }

  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className='flex flex-col gap-2 py-2'>loading ...</div>
  }
  if (status === 'authenticated') {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        {/* We will make a handleSubmit function */}
        <form onSubmit={handleSubmit}>
          <input type='text' name='bio' placeholder='Please enter your bio' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
  return (
    <>
      <SignInButton />
    </>
  )
}
