import Link from 'next/link'
import { getOffers } from '../../../lib/queries'

export default async function AllOffers() {
  const offers = await getOffers()
  return (
    <div className='flex flex-col gap-5 py-2'>
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
          <div key={id} className='rounded-lg bg-white p-6 shadow-md'>
            <div className='text-2xl font-bold'>{title}</div>
            <div className='text-sm text-gray-500'>{description}</div>
            <div className='mt-4 flex justify-between'>
              <div className='text-sm font-medium text-gray-500'>
                {author ? author.name : 'ENIM'}
              </div>
              <div className='text-sm font-medium text-gray-500'>
                {company.name}
              </div>
              <div className='text-sm font-medium text-gray-500'>{status}</div>
              <div className='text-sm font-medium text-gray-500'>
                {new Date(startDate).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </div>
              <div className='text-sm font-medium text-gray-500'>
                {new Date(endDate).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </div>
              <Link
                className='rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'
                href={'/offers/' + id}
              >
                Details
              </Link>
            </div>
          </div>
        ),
      )}
    </div>
  )
}
