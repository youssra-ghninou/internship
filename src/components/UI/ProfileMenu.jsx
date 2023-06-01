'use client'
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import {
  Avatar,
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfileMenu({ name, home, lien, Nom }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const profileMenuItems = [
    {
      label: 'Mon Profile',
      icon: UserCircleIcon,
      link: JSON.stringify(home).replace(/"/g, '') + '/profile',
    },
    {
      label: 'Éditer Profile',
      icon: Cog6ToothIcon,
      link: JSON.stringify(home).replace(/"/g, '') + '/profile',
    },
    {
      label: 'Aide',
      icon: LifebuoyIcon,
      link: JSON.stringify(home).replace(/"/g, '') + '/profile',
    },
    {
      label: 'Déconnexion',
      icon: PowerIcon,
      link: '/api/auth/signout',
    },
  ]

  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
        <MenuHandler>
          <Button
            variant='text'
            color='blue-gray'
            className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
          >
            <Avatar
              variant='circular'
              size='sm'
              alt={name}
              className='border border-blue-500 p-0.5'
              src={lien}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className='p-1'>
          {profileMenuItems.map(({ label, icon, link }, key) => {
            const isLastItem = key === profileMenuItems.length - 1

            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                    : ''
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                  strokeWidth: 2,
                })}
                <Link href={link}>
                  <Typography
                    as='span'
                    variant='small'
                    className='font-normal'
                    color={isLastItem ? 'red' : 'inherit'}
                  >
                    {label}
                  </Typography>
                </Link>
              </MenuItem>
            )
          })}
        </MenuList>
      </Menu>
      <Navbar fullWidth className='fixed top-0 right-0 p-2'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-row items-center gap-2 pl-[135px]'>
            <Image
              width={25}
              height={25}
              src={'/logo.png'}
              alt={'logo'}
              className='rounded-full'
            />
            <div className='text-[16px] text-black'>e-internship</div>
          </div>
          <div className='relative flex w-full gap-2 md:w-max'>
            <Input
              type='search'
              label='Type here...'
              className='pr-20'
              containerProps={{
                className: 'min-w-[288px]',
              }}
            />
            <Button size='sm' className='!absolute right-1 top-1 rounded'>
              Search
            </Button>
          </div>
          <div className='flex flex-col items-center'>
            <ProfileMenu home={home} lien={lien} name={Nom} />
            <Link
              href='/enimiste/profile'
              className='rounded-xl bg-white px-2 text-center font-medium '
            ></Link>
          </div>
        </div>
      </Navbar>
    </>
  )
}
