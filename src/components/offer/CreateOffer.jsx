'use client'
import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function CreateOfferForm() {
  const router = useRouter()
  const [mode, setMode] = useState('')
  const [type, setType] = useState('')
  const [offerData, setOfferData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    localisation: '',
    remuneration: '',
    lien: '',
    methode: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (
        offerData.title !== '' &&
        offerData.description !== '' &&
        offerData.startDate !== '' &&
        offerData.endDate !== '' &&
        offerData.localisation !== '' &&
        offerData.remuneration !== '' &&
        mode !== '' &&
        type !== ''
      ) {
        toast.loading('Waiting...')
        const response = await fetch('/api/createoffer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ offerData, mode, type }),
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Successfully created!')
          setOfferData({
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            localisation: '',
            remuneration: '',
            lien: '',
            methode: '',
          })
          setType('')
          setMode('')
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
      router.push('/company/mesoffres')
      router.refresh()
    })
  }

  const handleChange = (e) => {
    setOfferData({
      ...offerData,
      [e.target.name]: e.target.value,
    })
    console.log(offerData)
  }
  const handleSelectMode = (e) => {
    setMode(e)
  }
  const handleSelectType = (e) => {
    setType(e)
  }

  const { data: session, status } = useSession()

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='h-ful mx-auto flex flex-col gap-3'
      >
        <div className='text-[28px] font-semibold text-[#043CA7]'>
          Publier une offre
        </div>
        <div className='flex flex-wrap gap-2'>
          <Input
            variant='outlined'
            label='Titre de l’offre'
            name='title'
            value={offerData.title}
            onChange={handleChange}
            required
          />
          <Input
            variant='outlined'
            label='Methode de travaille'
            name='methode'
            value={offerData.methode}
            onChange={handleChange}
            required
          />
          <Input
            variant='outlined'
            label='Ville de l’offre'
            name='localisation'
            value={offerData.localisation}
            onChange={handleChange}
            required
          />
          <Select
            value={offerData.mode}
            onChange={handleSelectMode}
            required
            label='Sélectionner le Mode'
          >
            <Option value='A distance'>A distance</Option>
            <Option value='Hybrid'>Hybrid</Option>
            <Option value='Présentiel'>Présentiel</Option>
          </Select>
          <Select
            value={offerData.type}
            onChange={handleSelectType}
            required
            label='Sélectionner le type'
          >
            <Option value='PFE'>Projet de fin d’Étude</Option>
            <Option value='PFA'>Projet de fin d’Année</Option>
          </Select>
          <Input
            variant='outlined'
            label='Rémunération'
            name='remuneration'
            value={offerData.remuneration}
            onChange={handleChange}
            required
          />
          <Input
            variant='outlined'
            label='Lien vers l’offre'
            name='lien'
            value={offerData.lien}
            onChange={handleChange}
          />
        </div>
        <Textarea
          label='Description de l`offre'
          name='description'
          value={offerData.description}
          onChange={handleChange}
          required
        />
        <div className='flex gap-3'>
          <Input
            variant='outlined'
            label='Date de debut de stage'
            type='date'
            name='startDate'
            value={offerData.startDate}
            onChange={handleChange}
            required
          />
          <Input
            variant='outlined'
            label='Date de fin de stage'
            type='date'
            name='endDate'
            value={offerData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Create Offer
          </button>
        </div>
      </form>
      <Toaster />
    </>
  )
}
