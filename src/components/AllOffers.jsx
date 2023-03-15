import Link from 'next/link'
import { getOffers } from '../../lib/queries'

export default async function AllOffers() {
  const offers = await getOffers()

  return (
    <div className='flex gap-5 py-2'>
      {offers.map(({ id, title, content, author: { name } }) => (
        <div key={id} className='offre bg-gray-500'>
          <div className='title'>{title}</div>
          <div className='content'>{content}</div>
          <div className='flex justify-between'>
            <div className='author-name'>{name}</div>
            <Link
              className='rounded-md bg-black px-2 text-red-500'
              href={'offer/' + id}
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
