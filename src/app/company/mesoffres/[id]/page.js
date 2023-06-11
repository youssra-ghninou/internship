import SingleOffer from '@/components/offer/SingleOffer'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getCandidats, getOffer, getOffers, getUser } from '@@/queries'
import { getServerSession } from 'next-auth'

export default async function OfferDetails({ params }) {
  const { id } = params
  const offer = await getOffer(id)
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    const candidats = await getCandidats(id)
    console.log(candidats)
    return <SingleOffer offer={offer} />
  }
}

export async function generateStaticParams() {
  const offers = await getOffers()
  return offers.map((offer) => ({
    id: offer.id,
  }))
}
