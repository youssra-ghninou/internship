'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import { toast } from 'react-hot-toast'

export default function CreateOfferForm() {
  const router = useRouter()
  const [offerData, setOfferData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    companyId: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (
        offerData.title != '' &&
        offerData.description != '' &&
        offerData.startDate != '' &&
        offerData.endDate != '' &&
        offerData.companyId != ''
      ) {
        await fetch(
          '/api/createoffer',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(offerData),
          },
          toast.loading('Waiting...'),
        )
        toast.success('Successfully created!')
      } else {
        toast.error('This field can not be blank')
      }
    } catch (error) {
      toast.error('There was an error!' + error)
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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type='text'
          name='title'
          value={offerData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name='description'
          value={offerData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Start Date:
        <input
          type='datetime-local'
          name='startDate'
          value={offerData.startDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        End Date:
        <input
          type='datetime-local'
          name='endDate'
          value={offerData.endDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Company ID:
        <input
          type='text'
          name='companyId'
          value={offerData.companyId}
          onChange={handleChange}
          required
        />
      </label>
      {isLoading ? (
        <button disabled>Creating Offer...</button>
      ) : (
        <button type='submit'>Create Offer</button>
      )}
      {isError && <p>Error: {errorMessage}</p>}
    </form>
  )
}
