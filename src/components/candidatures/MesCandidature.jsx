'use client'
import CandidatureCard from '../Cards/CandidatureCard'

export default function MesCandidature({ candidatureData }) {
  return (
    <div className='flex flex-col gap-5 py-3'>
      <div className='flex items-center justify-between'>
        <div className='text-xl font-bold'>Mes Candidatures</div>
      </div>
      <div className='carousel rounded-box flex gap-3'>
        {candidatureData.map(
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
}
