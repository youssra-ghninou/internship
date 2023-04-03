import GoBackButton from '@/components/GoBackButton'
import SingleOffers from '@/components/SingleOffer'
import { getOffer, getOffers } from '../../../../lib/queries'

export default async function OfferDetails({ params }) {
  const { id } = params
  const offer = await getOffer(id)
  return (
    <div>
      <GoBackButton />
      <SingleOffers offer={offer} />
    </div>
  )
}

export async function generateStaticParams() {
  const offers = await getOffers()
  return offers.map((offer) => ({
    id: offer.id,
  }))
}
