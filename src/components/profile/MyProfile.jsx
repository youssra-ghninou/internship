import Image from 'next/image'

export default function Profile({ data }) {
  return (
    <div className=''>
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-2'>
          <Image
            className='rounded-full'
            priority
            height={100}
            width={100}
            src={data.image.replaceAll('s96-c', 's400-c')}
            alt={`${data.name}'s profile picture`}
          />
          <div className=''>
            <div className='name font-bold'>{data.name}</div>
            <div className='email text-gray-500'>{data.email}</div>
          </div>
        </div>
        <div className='Profile info'>
          <div className='adresse mt-2 text-gray-500'>
            <span className='font-medium'>Adresse : </span>{' '}
            {data.profile.adresse}
          </div>
          <div className='titre mt-2 text-gray-500'>
            <span className='font-medium'>Titre : </span> {data.profile.titre}
          </div>
          <div className='telephone mt-2 text-gray-500'>
            <span className='font-medium'>Téléphone : </span>
            {data.profile.telephone}
          </div>
          <div className='site-web mt-2 text-gray-500'>
            <span className='font-medium'>Portfolio : </span>
            {data.profile.siteWeb}
          </div>
          <div className='resume mt-2 text-gray-500'>
            <span className='font-medium'>Bio : </span> {data.profile.resume}
          </div>
          <div className='education mt-2 flex items-center gap-5 text-gray-500'>
            <span className='font-medium'>Éducation : </span>
            {data.profile.education.map((educ) => {
              return (
                <div key={educ.id} className='mt-2'>
                  <div className='etablissement'>
                    <span className='font-medium'>Etablissement : </span>
                    {educ.etablissement}
                  </div>
                  <div className='diplome text-gray-500'>
                    <span className='font-medium'>Diplôme : </span>{' '}
                    {educ.diplome}
                  </div>
                  <div className='domaine text-gray-500'>
                    <span className='font-medium'>Domaine des études : </span>
                    {educ.domaine}
                  </div>
                  <div className='date-debut text-gray-500'>
                    <span className='font-medium'>
                      Date de début de formation :
                    </span>
                    {educ.dateDebut}
                  </div>
                  <div className='date-fin text-gray-500'>
                    <span className='font-medium'>
                      Date d{"'"}obtention du diplôme :
                    </span>
                    {educ.dateFin}
                  </div>
                </div>
              )
            })}
          </div>
          <div className='experience mt-2 flex items-center gap-5 text-gray-500'>
            <span className='font-medium'>Experience : </span>
            {data.profile.experience.map((exp) => {
              return (
                <div key={exp.id} className='mt-2'>
                  <div className='etablissement'>
                    <span className='font-medium'>Etablissement : </span>
                    {exp.entreprise}
                  </div>
                  <div className='diplome text-gray-500'>
                    <span className='font-medium'>Role : </span> {exp.poste}
                  </div>
                  <div className='domaine text-gray-500'>
                    <span className='font-medium'>Description du poste : </span>
                    {exp.description}
                  </div>
                  <div className='date-debut text-gray-500'>
                    <span className='font-medium'>Date de début : </span>
                    {exp.dateDebut}
                  </div>
                  <div className='date-fin text-gray-500'>
                    <span className='font-medium'>Date fin : </span>
                    {exp.dateFin ? exp.date : 'Travaille actuelle'}
                  </div>
                </div>
              )
            })}
          </div>
          <div className='education mt-2 flex items-center gap-5 text-gray-500'>
            <span className='font-medium'>Competences :</span>
            {data.profile.competences.map((comp) => {
              return (
                <div key={comp.id} className='mt-2'>
                  <div className='cursor-default rounded-md border-2 px-2 py-1 text-xs font-bold text-black transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-yellow-500'>
                    {comp.nom}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
