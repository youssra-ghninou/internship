// import SingleOffer from '@/components/offer/SingleOffer'
// import CreateProfile from '@/components/profile/CreateProfile'
// import { authOptions } from '@/pages/api/auth/[...nextauth]'
// import { getOffer, getOffers, getUser } from '@@/queries'
// import { getServerSession } from 'next-auth'

// export default async function OfferDetails({ params }) {
//   const { id } = params
//   const offer = await getOffer(id)
//   const session = await getServerSession(authOptions)
//   if (session) {
//     const user = await getUser(session.user.email)
//     if (user.profile) {
//       return <SingleOffer offer={offer} />
//     }
//     return <CreateProfile />
//   }
// }

// export async function generateStaticParams() {
//   const offers = await getOffers()
//   return offers.map((offer) => ({
//     id: offer.id,
//   }))
// }
