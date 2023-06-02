import Link from 'next/link'
import { getOffers } from '../../../lib/queries'
import CardOffer from '../Cards/CardOffer'

export default async function AllOffers() {
  const offers = await getOffers()
  return (
    <div className='flex flex-col gap-5 py-3'>
      <div className='flex items-center justify-between'>
        <div className='text-xl font-bold'>Offres disponibles</div>
        <Link href='/offers' className='text-sm font-bold text-[#043CA7]'>
          Voir Tout
        </Link>
      </div>
      <div className='carousel rounded-box flex gap-3'>
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
          }) => (
            <div className='carousel-item' key={id}>
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
                candidatsCount={50}
                offer={id}
              />
            </div>
          ),
        )}
      </div>
    </div>
  )
}
