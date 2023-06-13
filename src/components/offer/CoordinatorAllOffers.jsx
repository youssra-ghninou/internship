import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { getCompanyOffers, getUser } from '../../../lib/queries'
import CardMesOfferCoordinator from '../Cards/CardMesOffresCoordinator'

export default async function CoordinatorEveryOffers() {
  const session = await getServerSession(authOptions)
  const user = await getUser(session.user.email)
  const offers = await getCompanyOffers(user.id)
  return (
    <div className='flex w-fit flex-col gap-5 rounded-lg bg-white p-4'>
      <div className='flex items-center justify-between'>
        <Link href='/offers' className='text-2xl font-bold text-[#043CA7]'>
          Offres publiées :
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
            link,
            _count: { applications },
          }) => (
            <div className='' key={id}>
              <CardMesOfferCoordinator
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
                author={author}
                startDate={startDate}
                endDate={endDate}
                offer_id={id}
                lien={link}
              />
            </div>
          ),
        )}
      </div>
    </div>
  )
}
