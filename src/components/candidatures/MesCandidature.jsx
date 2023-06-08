'use client'
import CandidatureCard from '../Cards/CandidatureCard'

export default function MesCandidature({ candidatureData }) {
  return (
    <div className='flex flex-col gap-5 py-3'>
      <div className='flex items-center justify-between'>
        <div className='text-2xl font-bold text-[#043CA7]'>
          Mes Candidatures
        </div>
      </div>
      <div className='carousel rounded-box flex gap-3'>
        {candidatureData.map(
          ({
            status,
            id,
            offer: {
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
                status={status}
                candidature_id={id}
              />
            </div>
          ),
        )}
      </div>
    </div>
  )
}
