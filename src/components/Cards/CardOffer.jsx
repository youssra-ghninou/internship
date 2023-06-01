'use client'
import {
  AcademicCapIcon,
  BanknotesIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import LinesEllipsis from 'react-lines-ellipsis'

export default function CardOffer({
  title,
  offer,
  image,
  description,
  company,
  remuneration,
  mode,
  method,
  type,
  candidatsCount,
  author,
  applications,
}) {
  return (
    <Card className='z-0 w-full max-w-[26rem] shadow-lg'>
      <CardHeader floated={false} color='blue-gray'>
        <Image
          className='mx-auto'
          width={200}
          height={200}
          src={image}
          alt={title}
        />
        <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ' />
        <IconButton
          size='sm'
          color='red'
          variant='text'
          className='!absolute right-4 top-4 rounded-full'
        >
          <HeartIcon className='h-6 w-6' />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className='flex w-full justify-between font-bold'>
          <Typography variant='h5' color='blue-gray' className=''>
            {title}
          </Typography>
          <Typography
            color='blue-gray'
            className='flex items-center gap-1.5 text-sm font-normal text-gray-400'
          >
            <MapPinIcon className='-mt-0.5 h-5 w-5 text-yellow-700' />
            Rabat
          </Typography>
        </div>
        <div className='pb-3 pt-1 text-xs font-bold text-gray-400'>
          {company}
        </div>
        <LinesEllipsis
          className='text-justify italic'
          text={description}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        <div className='group mt-8 flex flex-wrap items-center justify-between gap-3'>
          <Tooltip content={'Rémunération : ' + remuneration + ' DH/Mois'}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <BanknotesIcon className='h-5 w-5' />
            </span>
          </Tooltip>
          <Tooltip content={'Mode : ' + mode}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <HomeIcon className='h-5 w-5' />
            </span>
          </Tooltip>
          <Tooltip content={'Méthode : ' + method}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <CommandLineIcon className='h-5 w-5' />
            </span>
          </Tooltip>
          <Tooltip content={'Type de stage : ' + type}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              <AcademicCapIcon className='h-5 w-5' />
            </span>
          </Tooltip>
          <Tooltip content={'Nombre de candidats : + ' + candidatsCount}>
            <span className='cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70'>
              +{candidatsCount}
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter>
        <Link href={'/offers/' + offer}>
          <Button
            fullWidth
            variant='outlined'
            className='flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white'
          >
            <CursorArrowRaysIcon strokeWidth={2} className='h-5 w-5' /> Postuler
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
