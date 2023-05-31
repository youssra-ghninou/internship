import Image from 'next/image'
import { BsBookmark } from 'react-icons/bs'
import Button from './button'

const Recommendation = () => {
  const recommendationData = [
    {
      id: '1',
      lien: '/Avalon.png',
      titre: 'Développeur Web',
      location: 'Casablanca, Maroc',
      date: '3',
      candidats: '100',
    },
    {
      id: '2',
      lien: '/Cred.png',
      titre: 'Développeur Web',
      location: 'Rabat, Maroc',
      date: '1',
      candidats: '12',
    },
    {
      id: '3',
      lien: '/Cred.png',
      titre: 'Développeur moile',
      location: 'Fes, Maroc',
      date: '1',
      candidats: '3',
    },
    {
      id: '4',
      lien: '/Cred.png',
      titre: 'Développeur moile',
      location: 'Fes, Maroc',
      date: '1',
      candidats: '3',
    },
    {
      id: '5',
      lien: '/Cred.png',
      titre: 'Développeur moile',
      location: 'Fes, Maroc',
      date: '1',
      candidats: '3',
    },
    {
      id: '6',
      lien: '/Cred.png',
      titre: 'Développeur moile',
      location: 'Fes, Maroc',
      date: '1',
      candidats: '3',
    },
    {
      id: '7',
      lien: '/Cred.png',
      titre: 'Développeur moile',
      location: 'Fes, Maroc',
      date: '1',
      candidats: '3',
    },
    {
      id: '8',
      lien: '/Cred.png',
      titre: 'Développeur moile',
      location: 'Fes, Maroc',
      date: '1',
      candidats: '3',
    },
    {
      id: '9',
      lien: '/Cred.png',
      titre: 'Développeur moile',
      location: 'Fes, Maroc',
      date: '1',
      candidats: '3',
    },
  ]
  return (
    <div className=' shadow-x py-2l flex flex-col gap-5 rounded-lg bg-[#FCFBFF]'>
      {recommendationData.map((item) => {
        return (
          <div
            key={item.id}
            className='flex items-center justify-between rounded-xl bg-white px-5 py-5 shadow-xl'
          >
            <div className='flex items-center justify-between gap-10'>
              <Image
                className='rounded-full shadow-xl'
                width={80}
                height={80}
                src={item.lien}
                alt={item.titre}
              />
              <div className='font-popping '>
                <div className='text-[23px]'>{item.titre}</div>
                <div className=' text-[11.67px]  '>
                  <p className='pb-[5px] pt-[2px] font-normal text-gray-400'>
                    {item.location}
                  </p>
                  <div className='flex items-center gap-2 '>
                    <p className='font-normal text-gray-400'>
                      Il Y A {item.date} Semaines
                    </p>
                    <p className='h-2 w-2 rounded-full bg-[#068923]'></p>
                    <p className='font-semibold text-[#068923]'>
                      {item.candidats} Candidats
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-end gap-[39.87px] '>
              <Button />
              <button>
                <BsBookmark className=' mb-[60px] mr-[30px] stroke-[#001A72] stroke-[0.3px] ' />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Recommendation
