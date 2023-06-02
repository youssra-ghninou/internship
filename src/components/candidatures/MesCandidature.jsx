import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getCandidature, getUser } from '@@/queries'
import { getServerSession } from 'next-auth'
import CandidatureCard from '../Cards/CandidatureCard'
import SignInButton from '../buttons/SignInButton'

export default async function MesCandidature() {
  const session = await getServerSession(authOptions)
  if (session) {
    const user = await getUser(session.user.email)
    const candidature = await getCandidature(user.id)
    return (
      <div className='flex flex-col gap-5 py-3'>
        <div className='flex items-center justify-between'>
          <div className='text-xl font-bold'>Mes Candidatures</div>
        </div>
        <div className='carousel rounded-box flex gap-3'>
          {candidature.map(
            ({
              status,
              offer: {
                id,
                title,
                company,
                description,
                localisation,
                mode,
                remuneration,
                methode,
                offertype,
              },
            }) => (
              <div className='carousel-item' key={id}>
                <CandidatureCard
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
                  status={status}
                />
              </div>
            ),
          )}
        </div>
      </div>
    )
  } else
    return (
      <div className='flex h-screen items-center justify-center'>
        <SignInButton />
      </div>
    )
}
