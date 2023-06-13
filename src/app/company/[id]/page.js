import SingleOffers from '@/components/offer/SingleOffer'
import { getCandidats, getOffers } from '@@/queries'

export async function generateStaticParams() {
  const offers = await getOffers()
  return offers.map((offer) => ({
    id: offer.id,
  }))
}

export default async function OfferDetails({ params }) {
  const { id } = params
  const candidats = await getCandidats(id)
  return <SingleOffers allCandidats={candidats} />
}
