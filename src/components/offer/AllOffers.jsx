import Link from 'next/link'
import { getOffers } from '../../../lib/queries'

export default async function AllOffers() {
  const offers = await getOffers()
  console.log(offers)
  return (
    <div className='flex gap-5 py-2'>
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
          <div key={id} className='offre bg-gray-500'>
            <div className='title'>{title}</div>
            <div className='content'>{description}</div>
            <div className='flex justify-between'>
              <div className='author-name'>{author.name}</div>
              <div className='author-name'>{company.name}</div>
              <div className='author-name'>{status}</div>
              <div className='author-name'>{JSON.stringify(startDate)}</div>
              <div className='author-name'>{JSON.stringify(endDate)}</div>
              <Link
                className='rounded-md bg-black px-2 text-red-500'
                href={'enimiste/offers/' + id}
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
