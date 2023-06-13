'use client'
import {
  AcademicCapIcon,
  ChevronDownIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  RocketLaunchIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import {
  Cog6ToothIcon,
  PowerIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/solid'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Alert,
  Avatar,
  Card,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SideBare({ children, base, name, profileimage, role }) {
  const [open, setOpen] = React.useState(0)
  const [openAlert, setOpenAlert] = React.useState(true)
  const pathname = usePathname()
  const profileMenuItems = [
    {
      label: 'Mon Profil',
      icon: UserCircleIcon,
      link: JSON.stringify(base).replace(/"/g, '') + '/profile',
    },
    {
      label: 'Éditer Profil',
      icon: PencilIcon,
      link: JSON.stringify(base).replace(/"/g, '') + '/profile/edit',
    },
    {
      label: 'Aide',
      icon: LifebuoyIcon,
      link: JSON.stringify(base).replace(/"/g, '') + '/profile',
    },
  ]

  const profileMenuItemsOther = [
    {
      label: 'Aide',
      icon: LifebuoyIcon,
      link: JSON.stringify(base).replace(/"/g, '') + '/profile',
    },
  ]

  const menuItemsEnimiste = [
    {
      href: JSON.stringify(base).replace(/"/g, ''),
      title: 'Accueil',
      icon: <PresentationChartBarIcon />,
    },
    {
      href: JSON.stringify(base).replace(/"/g, '') + '/mescandidatures',
      title: 'Mes Candidatures',
      icon: <RocketLaunchIcon />,
    },
    {
      href: JSON.stringify(base).replace(/"/g, '') + '/profile',
      title: 'Paramètre',
      icon: <Cog6ToothIcon />,
    },
  ]

  const menuItemsCompany = [
    {
      href: JSON.stringify(base).replace(/"/g, ''),
      title: 'Accueil',
      icon: <PresentationChartBarIcon />,
    },
    {
      href: JSON.stringify(base).replace(/"/g, '') + '/createoffer',
      title: 'Publier une offre',
      icon: <RocketLaunchIcon />,
    },
    {
      href: JSON.stringify(base).replace(/"/g, '') + '/profile',
      title: 'Paramètre',
      icon: <Cog6ToothIcon />,
    },
  ]

  const menuItemsCoordinator = [
    {
      href: JSON.stringify(base).replace(/"/g, ''),
      title: 'Accueil',
      icon: <PresentationChartBarIcon />,
    },
    {
      href: JSON.stringify(base).replace(/"/g, '') + '/createoffer',
      title: 'Publier une offre',
      icon: <RocketLaunchIcon />,
    },
    {
      href: JSON.stringify(base).replace(/"/g, '') + '/',
      title: 'Paramètre',
      icon: <Cog6ToothIcon />,
    },
  ]

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <div className='flex'>
      <Card className='shadow-white-900/5 sticky left-0 top-0 z-50 h-[calc(100vh)] max-w-[16rem] rounded-none bg-[#22506C] text-white shadow-xl'>
        <div className='mb-2 flex items-center gap-4 p-4'>
          <Image
            src='/logo.png'
            width={25}
            height={25}
            alt='brand'
            className='h-8 w-8'
          />
          <Typography variant='h5'>E-internship</Typography>
        </div>
        <div className='p-2 text-white'>
          <Input
            color='white'
            icon={<MagnifyingGlassIcon className='h-5 w-5 text-white' />}
            label='Rechercher'
          />
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 text-white transition-transform ${
                  open === 1 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            <ListItem className='p-0' selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className='flex w-full justify-between gap-1 border-b-0 px-1 py-3 text-base text-white'
              >
                <Avatar
                  variant='circular'
                  size='sm'
                  alt={name}
                  className='border border-blue-500 p-0.5'
                  src={profileimage ? profileimage : '/avatar.png'}
                />
                {name}
              </AccordionHeader>
            </ListItem>
            <AccordionBody className='py-1'>
              <List className='p-0'>
                {role != 'ENIMISTE' &&
                  profileMenuItemsOther.map(({ label, icon, link }) => {
                    return (
                      <Link key={label} href={link}>
                        <ListItem className='text-white'>
                          <ListItemPrefix>
                            {React.createElement(icon, {
                              className: 'h-5 w-5',
                              strokeWidth: 2,
                            })}
                          </ListItemPrefix>
                          <Typography
                            as='span'
                            variant='small'
                            className='font-normal'
                          >
                            {label}
                          </Typography>
                        </ListItem>
                      </Link>
                    )
                  })}
                {role === 'ENIMISTE' &&
                  profileMenuItems.map(({ label, icon, link }) => {
                    return (
                      <Link key={label} href={link}>
                        <ListItem className='text-white'>
                          <ListItemPrefix>
                            {React.createElement(icon, {
                              className: 'h-5 w-5',
                              strokeWidth: 2,
                            })}
                          </ListItemPrefix>
                          <Typography
                            as='span'
                            variant='small'
                            className='font-normal'
                          >
                            {label}
                          </Typography>
                        </ListItem>
                      </Link>
                    )
                  })}
              </List>
            </AccordionBody>
          </Accordion>
          <hr className='border-white-50 my-2' />
          {role === 'COMPANY' &&
            menuItemsCompany.map(({ href, title, icon }, key) => {
              return (
                <Link key={title} href={href}>
                  <ListItem className='text-white'>
                    <ListItemPrefix className='h-5 w-5 text-white'>
                      {icon}
                    </ListItemPrefix>
                    {title}
                  </ListItem>
                </Link>
              )
            })}
          {role === 'ENIMISTE' &&
            menuItemsEnimiste.map(({ href, title, icon }, key) => {
              return (
                <Link key={title} href={href}>
                  <ListItem className='text-white'>
                    <ListItemPrefix className='h-5 w-5 text-white'>
                      {icon}
                    </ListItemPrefix>
                    {title}
                  </ListItem>
                </Link>
              )
            })}
          {role === 'COORDINATOR' &&
            menuItemsCoordinator.map(({ href, title, icon }, key) => {
              return (
                <Link key={title} href={href}>
                  <ListItem className='text-white'>
                    <ListItemPrefix className='h-5 w-5 text-white'>
                      {icon}
                    </ListItemPrefix>
                    {title}
                  </ListItem>
                </Link>
              )
            })}

          <button onClick={() => signOut({ callbackUrl: '/' })}>
            <ListItem className='text-white'>
              <ListItemPrefix className='h-5 w-5 text-white'>
                <PowerIcon />
              </ListItemPrefix>
              Déconnexion
            </ListItem>
          </button>
        </List>
        <Alert
          open={openAlert}
          className='mt-auto bg-black p-2'
          onClose={() => setOpenAlert(false)}
        >
          <AcademicCapIcon className='h-10 w-10 text-white' />
          <Typography variant='h6' className='mb-1 items-center'>
            Vous avez une offre ?
          </Typography>
          <Typography variant='small' className='font-normal opacity-80'>
            Contactez nous pour plus de details sur la procedure de partage au
            sain de la plateforme
          </Typography>
          <div className='mt-4 flex gap-3'>
            <Typography
              as='a'
              href='#'
              variant='small'
              className='font-medium opacity-80'
              onClick={() => setOpenAlert(false)}
            >
              Fermer
            </Typography>
            <Typography as='a' href='#' variant='small' className='font-medium'>
              Nous contacter
            </Typography>
          </div>
        </Alert>
      </Card>
      <main className='flex-1'>{children}</main>
    </div>
  )
}
