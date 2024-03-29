import Image from 'next/image'

export default function MyProfile({ data }) {
  return (
    <div className='capitalize'>
      <div className='text-[28px] font-semibold text-[#043CA7]'>Mon profil</div>
      <div className='flex flex-col items-center gap-5'>
        <div className='flex w-full items-center gap-2 rounded-xl border-2 p-3 shadow-md'>
          <Image
            className='rounded-full'
            priority
            height={100}
            width={100}
            src={data.image.replaceAll('s96-c', 's400-c')}
            alt={`${data.name}'s profile picture`}
          />
          <div className='flex flex-col gap-1'>
            <div className='name font-bold'>{data.name}</div>
            <div className='name font-thin'>{data.profile.titre}</div>
          </div>
        </div>
        <div className='flex w-full flex-col gap-4 rounded-xl border-2 p-5 shadow-md'>
          <div className='flex items-center justify-between'>
            <div className='name font-bold text-[#043CA7]'>
              Informations personnelles :
            </div>
          </div>
          <div className='flex'>
            <div className='flex w-full flex-col pl-5'>
              <div className='titre mt-2 text-gray-900'>
                <span className='font-bold'>Nom complet : </span> {data.name}
              </div>
              <div className='telephone mt-2 text-gray-900'>
                <span className='font-bold'>Téléphone : </span>
                {data.profile.telephone}
              </div>
            </div>
            <div className='flex w-full flex-col pl-5'>
              <div className='titre mt-2 text-gray-900'>
                <span className='font-bold'>Titre : </span> {data.profile.titre}
              </div>

              <div className='adresse mt-2 text-gray-900'>
                <span className='font-bold'>Adresse Email : </span> {data.email}
              </div>
            </div>
          </div>
          <div className='resume mt-2 pl-5 text-justify text-gray-900'>
            {data.profile.resume}
          </div>
        </div>
        <div className='flex w-full flex-col gap-4 rounded-xl border-2 p-5 shadow-md'>
          <div className='flex items-center justify-between'>
            <span className='font-bold text-[#043CA7]'>Éducation : </span>
          </div>
          {data.profile.education.map((educ) => {
            return (
              <div key={educ.id} className='mt-2'>
                <div className='etablissement'>
                  <span className='font-bold'>Etablissement : </span>
                  {educ.etablissement}
                </div>
                <div className='flex'>
                  <div className='flex w-full flex-col pl-5'>
                    <div className='text-gray-900'>
                      <span className='font-bold'>Diplôme : </span>{' '}
                      {educ.diplome}
                    </div>
                    <div className='date-debut text-gray-900'>
                      <span className='font-bold'>
                        Date de début de formation :
                      </span>
                      {educ.dateDebut}
                    </div>
                  </div>
                  <div className='flex w-full flex-col pl-5'>
                    <div className='domaine text-gray-900'>
                      <span className='font-bold'>Domaine des études : </span>
                      {educ.domaine}
                    </div>
                    <div className='date-fin text-gray-900'>
                      <span className='font-bold'>
                        Date d{"'"}obtention du diplôme :
                      </span>
                      {educ.dateFin}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex w-full flex-col gap-4 rounded-xl border-2 p-3 shadow-md'>
          <div className='flex items-center justify-between'>
            <span className='font-bold text-[#043CA7]'>Expériences : </span>
          </div>
          {data.profile.experience.map((exp) => {
            return (
              <div key={exp.id} className='mt-2'>
                <div className='flex'>
                  <div className='flex w-full flex-col pl-5'>
                    <div className='text-gray-900'>
                      <span className='font-bold'>Établissement : </span>
                      {exp.entreprise}
                    </div>
                    <div className='text-gray-900'>
                      <span className='font-bold'>Poste : </span> {exp.poste}
                    </div>
                    <div className='date-debut text-gray-900'>
                      <span className='font-bold'>Date de début : </span>
                      {exp.dateDebut}
                    </div>
                  </div>
                  <div className='flex w-full flex-col pl-5'>
                    <div className='domaine text-gray-900'>
                      <span className='font-bold'>Description du poste : </span>
                      {exp.description}
                    </div>

                    <div className='date-fin text-gray-900'>
                      <span className='font-bold'>Date fin : </span>
                      {exp.dateFin ? exp.dateFin : 'Travaille actuellement'}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex w-full items-center justify-between gap-4 rounded-xl border-2 p-3 shadow-md'>
          <div className='flex w-full items-center gap-3'>
            <span className='font-bold text-[#043CA7]'>Competences </span>
            <div className='flex w-full flex-wrap justify-between gap-3'>
              {data.profile.competences.map((comp) => {
                return (
                  <div key={comp.id} className='mt-2 flex'>
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
    </div>
  )
}
