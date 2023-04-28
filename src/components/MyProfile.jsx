import Image from 'next/image'

export default function Profile({ data }) {
  return (
    <div className='w-fit bg-red-100 py-6'>
      <div className='user'>
        <div className='image'>
          <Image
            priority
            height={100}
            width={100}
            src={data.image}
            alt={data.name + "'s profile picture"}
          />
        </div>
        <div className='name'>{data.name}</div>
        <div className='email'>{data.email}</div>
        <div className='adresse'>{data.profile.adresse}</div>
        <div className='titre'>{data.profile.titre}</div>
        <div className='titre'>{data.profile.adresse}</div>
        <div className='titre'>{data.profile.telephone}</div>
        <div className='titre'>{data.profile.siteWeb}</div>
        <div className='titre'>{data.profile.resume}</div>
        <div className='titre'>
          {data.profile.education.map((educ) => {
            return (
              <div key={educ.id}>
                <div className='l'>
                  {educ.etablissement}:{educ.diplome}:{educ.domaine}:
                  {educ.dateDebut}:{educ.dateFin}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
