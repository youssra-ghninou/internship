import Image from 'next/image'
import Button from './button'
import Information from './information'

const Evenement = () => {
  const eventData = [
    {
      id: '1',
      mois: 'Juin 2023',
      lien: '/Pesto.png',
      company: 'Pesto',
      titre: 'Presentation Du Portfolio ',
      date: '02 Juin 2023',
      heure: '9:00 AM - 11:00 AM',
    },
    {
      id: '2',
      mois: 'Juin 2023',
      lien: '/Vernacular.png',
      company: 'Vernacular.Ai',
      titre: 'Discussion Du Groupe',
      date: '25 Juin 2023',
      heure: '9:00 AM - 10:00 AM',
    },
    {
      id: '3',
      mois: 'Juin 2023',
      lien: '/Groww.png',
      company: 'Groww',
      titre: "Simulation D'Entretien",
      date: '29 Juin 2023',
      heure: '2:00 PM - 4:00 pM',
    },
    {
      id: '4',
      mois: 'Avril 2023',
      lien: '/Pesto.png',
      company: 'Pesto',
      titre: 'Presentation Du Portfolio ',
      date: '3 Avril 2023',
      heure: '9:00 AM - 11:00 AM',
    },
  ]
  return (
    <div>
      <div className='relative  '>
        <div className=' text-[20px] font-bold'> Evénement à venir </div>
        <div className='absolute top-[10px] left-[290px] '>
          <a href='#'>
            {' '}
            <Image
              width={17}
              height={17}
              alt='points'
              src={'/trois-points.png'}
            />{' '}
          </a>
        </div>
      </div>
      <div className='h-[337px] w-[300px] rounded-2xl bg-[#FCFBFF] px-[15px] shadow-xl '>
        <div className='pl-[150px] pt-[12px] pb-[7px] '>
          <Button mois={'Avril 2023'} />
        </div>
        {eventData.slice(0, 3).map((item) => {
          return (
            <div key={item.id} className='pb-[7px]'>
              <Information
                lien={item.lien}
                company={item.company}
                titre={item.titre}
                date={item.date}
                heure={item.heure}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Evenement
