import AllOffers from '@/components/offer/AllOffers'
import GenerateStaticParamsProvider from '@/providers/generateStaticParamsProvider'

export default async function Offers() {
  return (
    <GenerateStaticParamsProvider>
      <AllOffers />
    </GenerateStaticParamsProvider>
  )
}
