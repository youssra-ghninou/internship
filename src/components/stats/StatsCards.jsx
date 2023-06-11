'use client'
import { RocketLaunchIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { InboxIcon } from '@heroicons/react/24/solid'
export default function StatsCards({ offers, entreprises, canditatures }) {
  return (
    <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50'>
          <InboxIcon />
        </div>

        <div className='ml-4'>
          <h2 className='font-semibold'>
            {offers} {offers === 1 ? 'Offre disponible' : 'Offres disponibles'}
          </h2>
          <p className='mt-2 text-sm text-gray-500'>
            Dernière offre il y a 3 jours
          </p>
        </div>
      </div>

      <div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50'>
          <UserCircleIcon />
        </div>

        <div className='ml-4'>
          <h2 className='font-semibold'>
            {entreprises} {entreprises === 1 ? 'Entreprise' : 'Entreprises'}
          </h2>
          <p className='mt-2 text-sm text-gray-500'>1 Entreprise par mois</p>
        </div>
      </div>
      <div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50'>
          <RocketLaunchIcon />
        </div>
        <div className='ml-4'>
          <h2 className='font-semibold'>
            {canditatures} {canditatures === 1 ? 'Candidature' : 'Candidatures'}
          </h2>
          <p className='mt-2 text-sm text-gray-500'>Augmenter vos chances</p>
        </div>
      </div>
      <div className='flex items-start rounded-xl bg-white p-4 shadow-lg'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-indigo-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
            />
          </svg>
        </div>

        <div className='ml-4'>
          <h2 className='font-semibold'>5 utilisateurs</h2>
          <p className='mt-2 text-sm text-gray-500'>Il y a une heure</p>
        </div>
      </div>
    </div>
  )
}
