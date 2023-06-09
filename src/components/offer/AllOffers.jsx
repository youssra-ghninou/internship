import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { getOffers, getUser } from '../../../lib/queries'
import CardOffer from '../Cards/CardOffer'

export default async function AllOffers() {
  const session = await getServerSession(authOptions)
  const user = await getUser(session.user.email)
  const offers = await getOffers(user.id)
  return (
    <div className='flex w-fit flex-col gap-5 rounded-lg bg-white p-4'>
      <div className='flex items-center justify-between'>
        <Link href='/offers' className='text-2xl font-bold text-[#043CA7]'>
          Offres disponibles
        </Link>
      </div>
      <div className='flex flex-wrap gap-3 pb-2'>
        {offers.map(
          ({
            id,
            title,
            company,
            description,
            localisation,
            mode,
            remuneration,
            methode,
            offertype,
            author,
            startDate,
            endDate,
            _count: { applications },
          }) => (
            <div className='' key={id}>
              <CardOffer
                image={company.image}
                title={title}
                company={company.name}
                description={description}
                remuneration={remuneration}
                mode={mode}
                method={methode}
                type={offertype}
                lieu={localisation}
                candidatsCount={applications}
                offer={id}
                author={author}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          ),
        )}
      </div>
    </div>
  )
}
