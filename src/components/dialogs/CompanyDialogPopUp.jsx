'use client'
import {
  ArchiveBoxIcon,
  BellIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HomeModernIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid'
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Fragment, startTransition, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

export default function CompanyDialogPopUp({
  text,
  offerTitle,
  offerDescription,
  company,
  author,
  status,
  startDate,
  localisation,
  mode,
  remuneration,
  companytext,
  offertype,
  offer_id,
}) {
  const [size, setSize] = useState(null)

  const handleOpen = (value) => setSize(value)

  const router = useRouter()

  const supprimerOffre = async (id) => {
    if (window.confirm('Voulez vous supprimer cette offre ?')) {
      try {
        toast.loading('Veuillez patienter...')
        const response = await fetch('/api/deleteoffer', {
          method: 'POST',
          body: id,
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Vous avez supprimer cette l’offre')
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

  const archiverOffre = async (id) => {
    if (window.confirm('Voulez vous archiver cette offre ?')) {
      try {
        toast.loading('Veuillez patienter...')
        const response = await fetch('/api/archiveroffer', {
          method: 'POST',
          body: id,
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Vous avez archiver l’offre')
        } else {
          toast.error('There was an error!' + response)
        }
      } catch (error) {
        toast.error('There was an error: ' + error)
      }
      startTransition(() => {
        router.push('/')
      })
    }
  }

  const republierOffre = async (id) => {
    if (window.confirm('Voulez vous republier cette offre ?')) {
      try {
        toast.loading('Veuillez patienter...')
        const response = await fetch('/api/republierOffre', {
          method: 'POST',
          body: id,
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Vous avez republier l’offre')
        } else {
          toast.error('There was an error!' + response)
        }
      } catch (error) {
        toast.error('There was an error: ' + error)
      }
      startTransition(() => {
        router.push('/')
      })
    }
  }

  return (
    <Fragment>
      <div className='mb-3 flex w-full gap-3'>
        <Link href={'/company/' + offer_id} className='w-full text-white'>
          <Button fullWidth className='flex items-center justify-center gap-3'>
            <InformationCircleIcon strokeWidth={2} className='h-5 w-5' />
            {companytext}
          </Button>
        </Link>
        <Button
          fullWidth
          className='flex items-center justify-center gap-3 bg-cyan-500 text-white'
          onClick={() => handleOpen('xxl')}
        >
          <InformationCircleIcon strokeWidth={2} className='h-5 w-5' />
          {text}
        </Button>
      </div>
      <Dialog
        open={size === 'xxl'}
        size={size || 'md'}
        className='w-screen bg-white'
        handler={handleOpen}
      >
        <DialogHeader>{offerTitle}</DialogHeader>
        <DialogBody className='bg-white' divider>
          <p className='mx-auto mb-4 text-justify text-base text-gray-700'>
            {offerDescription}
          </p>
        </DialogBody>
        <DialogBody className='bg-white' divider>
          <div className='mx-auto flex max-w-[40rem] flex-wrap gap-4 lg:flex-nowrap'>
            <Timeline>
              <TimelineItem className='h-28'>
                <TimelineConnector className='!w-[78px]' />
                <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
                  <TimelineIcon className='p-3' variant='ghost'>
                    <HomeModernIcon className='h-5 w-5' />
                  </TimelineIcon>
                  <div className='flex flex-col gap-1'>
                    <Typography variant='h6' color='blue-gray'>
                      Ville
                    </Typography>
                    <Typography
                      variant='small'
                      color='gray'
                      className='font-normal'
                    >
                      {localisation}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className='h-28'>
                <TimelineConnector className='!w-[78px]' />
                <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
                  <TimelineIcon className='p-3' variant='ghost' color='red'>
                    <ArchiveBoxIcon className='h-5 w-5' />
                  </TimelineIcon>
                  <div className='flex flex-col gap-1'>
                    <Typography variant='h6' color='blue-gray'>
                      Mode de stage
                    </Typography>
                    <Typography
                      variant='small'
                      color='gray'
                      className='font-normal'
                    >
                      {mode}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className='h-28'>
                <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
                  <TimelineIcon className='p-3' variant='ghost' color='green'>
                    <CurrencyDollarIcon className='h-5 w-5' />
                  </TimelineIcon>
                  <div className='flex flex-col gap-1'>
                    <Typography variant='h6' color='blue-gray'>
                      La rémunérations
                    </Typography>
                    <Typography
                      variant='small'
                      color='gray'
                      className='font-normal'
                    >
                      {remuneration}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              {/* <TimelineItem className='h-28'>
                  <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
                    <TimelineIcon className='p-3' variant='ghost' color='green'>
                      <CurrencyDollarIcon className='h-5 w-5' />
                    </TimelineIcon>
                    <div className='flex flex-col gap-1'>
                      <Typography variant='h6' color='blue-gray'>
                        La methode du stage
                      </Typography>
                      <Typography
                        variant='small'
                        color='gray'
                        className='font-normal'
                      >
                        {methode}
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem> */}
            </Timeline>
            <Timeline>
              <TimelineItem className='h-28'>
                <TimelineConnector className='!w-[78px]' />
                <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
                  <TimelineIcon className='p-3' variant='ghost' color='blue'>
                    <BellIcon className='h-5 w-5' />
                  </TimelineIcon>
                  <div className='flex flex-col gap-1'>
                    <Typography variant='h6' color='blue-gray'>
                      Type du stage
                    </Typography>
                    <Typography
                      variant='small'
                      color='gray'
                      className='font-normal'
                    >
                      {offertype}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className='h-28'>
                <TimelineConnector className='!w-[78px]' />
                <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
                  <TimelineIcon className='p-3' variant='ghost' color='red'>
                    <ClockIcon className='h-5 w-5' />
                  </TimelineIcon>
                  <div className='flex flex-col gap-1'>
                    <Typography variant='h6' color='blue-gray'>
                      Date de début de stage
                    </Typography>
                    <Typography
                      variant='small'
                      color='gray'
                      className='font-normal'
                    >
                      {new Date(startDate).toLocaleDateString(undefined, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
              <TimelineItem className='h-28'>
                <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
                  <TimelineIcon className='p-3' variant='ghost' color='green'>
                    <ClockIcon className='h-5 w-5' />
                  </TimelineIcon>
                  <div className='flex flex-col gap-1'>
                    <Typography variant='h6' color='blue-gray'>
                      Date de début de stage
                    </Typography>
                    <Typography
                      variant='small'
                      color='gray'
                      className='font-normal'
                    >
                      {new Date(startDate).toLocaleDateString(undefined, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            </Timeline>{' '}
          </div>
        </DialogBody>
        <DialogFooter className='bg-white'>
          <Button
            variant='text'
            color='green'
            onClick={() => handleOpen(null)}
            className='mr-1'
          >
            <span>Annuler</span>
          </Button>
          {status === 'ARCHIVED' ? (
            <Button
              variant='gradient'
              color='blue'
              className='mr-1'
              onClick={() => {
                republierOffre(offer_id)
              }}
            >
              <span>republier</span>
            </Button>
          ) : (
            <Button
              variant='gradient'
              color='blue'
              className='mr-1'
              onClick={() => {
                archiverOffre(offer_id)
              }}
            >
              <span>archiver</span>
            </Button>
          )}
          <Button
            variant='gradient'
            color='red'
            onClick={() => {
              supprimerOffre(offer_id)
            }}
          >
            <span>Supprimer</span>
          </Button>
          <Toaster />
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}
