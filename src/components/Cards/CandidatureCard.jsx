'use client'
import {
  AcademicCapIcon,
  BanknotesIcon,
  CommandLineIcon,
  HomeIcon,
} from '@heroicons/react/24/solid'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tooltip,
} from '@material-tailwind/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import LinesEllipsis from 'react-lines-ellipsis'

export default function CandidatureCard({
  title,
  status,
  image,
  description,
  company,
  remuneration,
  mode,
  method,
  type,
  candidature_id,
}) {
  const router = useRouter()
  const deletePost = async (id) => {
    if (window.confirm('Retirer votre candidature ?')) {
      try {
        toast.loading('Veuillez patienter...')
        const response = await fetch('/api/deleteapplication', {
          method: 'POST',
          body: id,
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Candidature Supprimée avec succès')
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
    <Card className='z-0 flex w-full max-w-[25rem] justify-between shadow-lg'>
      <CardHeader floated={false} color='blue-gray relative h-[201px]'>
        <Image
          className='mx-auto h-[201px] object-fill'
          width={200}
          height={200}
          src={image ? image : '/enimlogo.png'}
          alt={title}
        />
        <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ' />
      </CardHeader>
      <CardBody>
        <div className='flex w-full justify-between font-bold'>
          <LinesEllipsis
            className='text-base uppercase'
            text={title}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
        <div className='pb-3 pt-1 text-[10px] font-bold text-gray-400'>
          {company}
        </div>
        <LinesEllipsis
          className='text-justify italic'
          text={description}
          maxLine='2'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        <div className='group mt-8 flex flex-wrap items-center justify-between'>
          <Tooltip content={'Rémunération : ' + remuneration + ' DH/Mois'}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <BanknotesIcon className='h-4 w-4' />
            </span>
          </Tooltip>
          <Tooltip content={'Mode : ' + mode}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <HomeIcon className='h-4 w-4' />
            </span>
          </Tooltip>
          <Tooltip content={'Méthode : ' + method}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <CommandLineIcon className='h-4 w-4' />
            </span>
          </Tooltip>
          <Tooltip content={'Type de stage : ' + type}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <AcademicCapIcon className='h-4 w-4' />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className='flex flex-col gap-3'>
        <Chip
          variant='ghost'
          color={
            status === null ? 'amber' : status === 'Rejeté' ? 'red' : 'green'
          }
          size='sm'
          value={status === null ? 'En Cour de traitement' : status}
          icon={
            <span
              className={clsx(
                'mx-auto mt-1 block h-2 w-2 rounded-full',
                status === null && 'bg-amber-900',
                status === 'Accepté' && 'bg-green-900',
                status === 'Rejeté' && 'bg-red-900',
              )}
            />
            // <span className=" bg-green-900 " />
          }
        />
        <Button
          onClick={() => {
            deletePost(candidature_id)
          }}
          fullWidth
          color='red'
        >
          Supprimer
        </Button>
      </CardFooter>
      <Toaster />
    </Card>
  )
}
