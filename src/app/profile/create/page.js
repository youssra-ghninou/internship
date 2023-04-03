'use client'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

export default function Create() {
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData(e.currentTarget)
      const bio = formData.get('bio')
      await fetch('/api/createprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bio }),
      })
      console.log('Created profile')
      toast.success('Created profile')
    } catch (error) {
      console.error(error)
    }
  }

  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className='flex flex-col gap-2 py-2'>loading...</div>
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
}
