import Image from 'next/image'
import Link from 'next/link'
import { getOffers } from '../../../lib/queries'
import Button from '../candidatures/button'
import Remuneration from '../candidatures/remuneration'

export default async function AllOffers() {
  const offers = await getOffers()
  return (
    <div className='text flex flex-col gap-5 py-3'>
      <div className='flex items-center justify-between'>
        <div className='text-xl font-bold'>Mes Candidature</div>
        <a href='#' className='text-sm font-bold text-[#043CA7]'>
          Voir Tout
        </a>
      </div>
      {offers.map(
        ({
          id,
          title,
          description,
          status,
          startDate,
          endDate,
          author,
          company,
        }) => (
          <>
            <div
              key={id}
              className='flex w-full items-center justify-between gap-36 rounded-xl bg-white px-5 py-5 shadow-xl'
            >
              <div className='flex items-center gap-3  '>
                <Image
                  width={100.03}
                  height={60.09}
                  src={company.image}
                  className='pt-[14.78px]'
                  alt={company.name}
                />
                <div className='font-popping flex flex-col gap-2 font-bold'>
                  <div className='pt-[10.32px]'>{title}</div>
                  <div className='pb-[1px] text-xs text-gray-400 '>
                    {company.name}
                  </div>
                  <div className='text-sm text-gray-400'>{'Rabat, Maroc'}</div>
                </div>
              </div>
              <Remuneration prix={'900dh'} />
              <Button nomButton={'status'} />
              <Link
                className='rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'
                href={'/offers/' + id}
              >
                Details
              </Link>
            </div>
          </>
        ),
      )}
    </div>
  )
}
