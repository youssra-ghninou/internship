'use client'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import { Fragment, startTransition, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

export default function CompanyDialogPopUp({
  text,
  offerTitle,
  offerDescription,
  company,
  author,
  endDate,
  startDate,
  localisation,
  mode,
  remuneration,
  methode,
  offertype,
  offer_id,
}) {
  const [size, setSize] = useState(null)

  const handleOpen = (value) => setSize(value)

  const router = useRouter()

  const postuler = async (id) => {
    if (window.confirm('Voulez vous postuler ?')) {
      try {
        toast.loading('Waiting...')
        const response = await fetch('/api/postuler', {
          method: 'POST',
          body: id,
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Vous avez postuler')
        } else {
          toast.error('There was an error!' + response)
        }
      } catch (error) {
        toast.error('There was an error: ' + error)
      }
    }
    startTransition(() => {
      router.refresh()
    })
  }
  return (
    <Fragment>
      <div className='mb-3 flex w-full gap-3'>
        <Button
          fullWidth
          className='flex items-center justify-center gap-3 bg-cyan-500 text-white'
          onClick={() => handleOpen('xxl')}
        >
          <InformationCircleIcon strokeWidth={2} className='h-5 w-5' />
          {text}
        </Button>
      </div>
      <Dialog open={size === 'xxl'} size={size || 'md'} handler={handleOpen}>
        <DialogHeader>{offerTitle}</DialogHeader>
        <DialogBody divider>
          <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
            <div className='p-6'>
              <p className='mb-4 text-base text-gray-700'>{offerDescription}</p>
              <div className='flex items-center justify-between text-sm text-gray-500'>
                <div className='flex items-center space-x-4'>
                  <div>
                    <p className='font-semibold text-gray-900'>{company}</p>
                    <p>{author ? author.name : 'ENIM'}</p>
                    <p>{localisation}</p>
                    <p>{mode}</p>
                    <p>{remuneration}</p>
                    <p>{methode}</p>
                    <p>{offertype}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-t border-gray-200 bg-gray-100 px-6 py-4'>
              <p className='text-sm text-gray-600'>
                Date de début de stage:
                {new Date(startDate).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div className='border-t border-gray-200 bg-gray-100 px-6 py-4'>
              <p className='text-sm text-gray-600'>
                Date de fin de stage:
                {new Date(endDate).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={() => handleOpen(null)}
            className='mr-1'
          >
            <span>Annuler</span>
          </Button>
          <Button
            variant='gradient'
            color='green'
            onClick={() => {
              postuler(offer_id)
            }}
          >
            <span>Postuler</span>
          </Button>
          <Toaster />
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}
