import Link from 'next/link'
import { getOffers } from '../../lib/queries'

async function AllOffers() {
  const offers = await getOffers()

  return (
    <div className='bg-green-100 py-6'>
      {offers.map(
        ({ id, title, content, status, authorId, author: { name } }) => (
          <div key={id} className='offre'>
            <div className='title'>{title}</div>
            <div className='title'>{id}</div>
            <div className='content'>{content}</div>
            <div className='status'>{status}</div>
            <div className='authorId'>{authorId}</div>
            <div className='author-name'>{name}</div>
            <Link className='bg-black text-red-500' href={'offer/' + id}>
              see full post
            </Link>
          </div>
        ),
      )}
    </div>
  )
}

export default AllOffers
