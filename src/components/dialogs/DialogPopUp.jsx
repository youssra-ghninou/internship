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
import { useRouter } from 'next/navigation'
import { Fragment, startTransition, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import CreateProfile from '../profile/CreateProfile'

export default function DialogPopUp({
  text,
  offerTitle,
  offerDescription,
  company,
  endDate,
  startDate,
  localisation,
  mode,
  remuneration,
  methode,
  offertype,
  offer_id,
  VerifyProfile,
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
  if (VerifyProfile) {
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
              </Timeline>
            </div>
          </DialogBody>
          <DialogFooter className='bg-white'>
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
  } else {
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
          {VerifyProfile}
          <CreateProfile />
          <Button
            variant='text'
            color='red'
            onClick={() => handleOpen(null)}
            className='mr-1'
          >
            <span>Annuler</span>
          </Button>
        </Dialog>
      </Fragment>
    )
  }
}
