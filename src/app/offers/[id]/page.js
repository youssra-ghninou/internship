import SingleOffer from '@/components/offer/SingleOffer'
import GenerateStaticParamsProvider from '@/providers/generateStaticParamsProvider'
import { getOffer, getOffers } from '@@/queries'

export default async function OfferDetails({ params }) {
  const { id } = params
  const offer = await getOffer(id)
  return (
    <GenerateStaticParamsProvider>
      <SingleOffer offer={offer} />
    </GenerateStaticParamsProvider>
  )
}

export async function generateStaticParams() {
  const offers = await getOffers()
  return offers.map((offer) => ({
    id: offer.id,
  }))
}
