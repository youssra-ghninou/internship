'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CustomLayout({ children, home }) {
  const pathname = usePathname()
  const menuItems = [
    {
      href: JSON.stringify(home).replace(/"/g, ''),
      title: 'Tableau De Bord',
      image: '/tableau-de-bord.png',
    },
    {
      href: '/offers',
      title: 'Offres de stage',
      image: '/calendrier.png',
    },
    {
      href: JSON.stringify(home).replace(/"/g, '') + '/profile',
      title: 'Paramètre',
      image: '/parametres.png',
    },
    {
      href: '/api/auth/signout',
      title: 'Déconnexion',
      image: '/deconnexion.png',
    },
  ]

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='fixed left-32 top-0 flex h-14 w-full items-center justify-center bg-[#22506C] font-semibold uppercase'>
        Next.js sidebar menu
      </header>
      <div className='flex flex-1 flex-col md:flex-row'>
        <aside className='sticky top-0 z-50 w-full md:w-32 lg:h-screen'>
          <nav className='flex items-center justify-center gap-5 bg-[#22506C] lg:h-full'>
            <ul className='flex flex-col gap-10'>
              {menuItems.map(({ href, title, image }) => (
                <li className='h-14 w-32' key={title}>
                  <Link className='flex justify-between text-sm' href={href}>
                    {pathname === href && (
                      <p className='h-[55px] w-[7px] rounded-l-lg bg-[#FDDC30] '></p>
                    )}
                    <div className='flex w-full cursor-pointer flex-col items-center rounded text-center text-white'>
                      <Image
                        width={20}
                        height={20}
                        src={image}
                        alt={title}
                        className='pb-1'
                      />
                      {title}
                    </div>
                    {pathname === href && (
                      <p className='h-[55px] w-[7px] rounded-l-lg bg-[#FDDC30] '></p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='flex-1 px-4 pt-16 pb-4'>{children}</main>
      </div>
    </div>
  )
}
