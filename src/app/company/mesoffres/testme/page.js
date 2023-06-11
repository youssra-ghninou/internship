import SingleOffers from '@/components/offer/SingleOffer'
import { getCandidats } from '@@/queries'

export default async function OfferDetails() {
  const candidats = await getCandidats()
  return <SingleOffers />
}
