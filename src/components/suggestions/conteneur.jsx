import Image from 'next/image'
import Button from './button'

const Conteneur = () => {
  const suggestion = [
    {
      id: 1,
      title: "Simulation d'entretien",
      date: '24 aout 2023',
      heure: '(9:00 AM - 11:00 AM)',
    },
    {
      id: 2,
      title: 'Présentation de portfolio',
      date: '10 septembre 2023',
      heure: '(12:00 AM - 2:00 PM)',
    },
    {
      id: 3,
      title: 'Tour technique',
      date: '10 septembre 2023',
      heure: '(12:00 AM - 2:00 PM)',
    },
    {
      id: 4,
      title: "Simulation d'entretien",
      date: '24 aout 2023',
      heure: '(9:00 AM - 11:00 AM)',
    },
  ]
  return (
    <div className='relative h-[460px] w-[340px]  rounded-xl bg-white p-3 shadow-xl'>
      <div className='absolute top-[10px] left-[320px] '>
        <a href='#'>
          {' '}
          <Image
            width={20}
            height={20}
            alt='points'
            src={'/trois-points.png'}
          />{' '}
        </a>
      </div>
      <div className='flex items-center justify-center pb-4'>
        <Image
          width={224.52}
          height={119.22}
          alt='image'
          src={'/imageSugg.png'}
        />
      </div>
      <div className=' flex items-center justify-between '>
        <div className='px-4	text-base font-medium'>Sessions suggérées</div>
        <a href='#' className='px-4 text-sm font-bold text-[#043CA7]'>
          Voir Tout
        </a>
      </div>
      {suggestion.slice(0, 3).map((item) => {
        return (
          <div key={item.id}>
            <div className='flex h-[93px] w-[310px] items-center justify-between rounded-xl   '>
              <div className='p-5 text-center font-normal '>
                <div className='text-sm'>{item.title}</div>
                <div className=' text-[10px] text-gray-400'>{item.date}</div>
                <div className='text-xs'>{item.heure}</div>
              </div>
              <Button />
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Conteneur
