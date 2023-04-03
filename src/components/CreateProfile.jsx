'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

export default function Create() {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget)
      const bio = formData.get('bio')
      if (bio != '') {
        await fetch(
          '/api/createprofile',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bio }),
          },
          toast.loading('Waiting...'),
        )
        toast.success('Successfully created!')
        router.refresh()
      } else {
        toast.error('This field can not be blank')
      }
    } catch (error) {
      toast.error('There was an error!')
    }
  }

  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className='flex flex-col gap-2 py-2'>loading...</div>
  }
  if (status === 'authenticated') {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='bio' placeholder='Please enter your bio' />
          <button type='submit'>Submit</button>
        </form>
        <Toaster />
      </div>
    )
  }
}
