'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function CreateOfferForm() {
  const router = useRouter()
  const [offerData, setOfferData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    companyId: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (
        offerData.title !== '' &&
        offerData.description !== '' &&
        offerData.startDate !== '' &&
        offerData.endDate !== '' &&
        offerData.companyId !== ''
      ) {
        toast.loading('Waiting...')
        const response = await fetch('/api/createoffer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(offerData),
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Successfully created!')
          setOfferData({
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            companyId: '',
          })
        } else {
          toast.error('There was an error!')
        }
      } else {
        toast.error('This field cannot be blank')
      }
    } catch (error) {
      toast.error('There was an error: ' + error)
    }
    startTransition(() => {
      router.refresh()
    })
  }

  const handleChange = (e) => {
    setOfferData({
      ...offerData,
      [e.target.name]: e.target.value,
    })
  }
  const { data: session, status } = useSession()

  return (
    <>
      <form onSubmit={handleSubmit} className='mx-auto max-w-sm'>
        <div className='mb-4'>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Title:
          </label>
          <input
            type='text'
            name='title'
            value={offerData.title}
            onChange={handleChange}
            required
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700'
          >
            Description:
          </label>
          <textarea
            name='description'
            value={offerData.description}
            onChange={handleChange}
            required
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='startDate'
            className='block text-sm font-medium text-gray-700'
          >
            Start Date:
          </label>
          <input
            type='date'
            name='startDate'
            value={offerData.startDate}
            onChange={handleChange}
            required
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='endDate'
            className='block text-sm font-medium text-gray-700'
          >
            End Date:
          </label>
          <input
            type='date'
            name='endDate'
            value={offerData.endDate}
            onChange={handleChange}
            required
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='companyId'
            className='block text-sm font-medium text-gray-700'
          >
            Company ID:
          </label>
          <input
            type='text'
            name='companyId'
            value={offerData.companyId}
            onChange={handleChange}
            required
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Create Offer
          </button>
        </div>
      </form>
      <Toaster />
    </>
  )
}
