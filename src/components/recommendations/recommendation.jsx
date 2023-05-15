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
  ]
  return (
    <div className='h-[275px] w-[867px] rounded-lg bg-[#FCFBFF] shadow-xl'>
      {recommendationData.slice(0, 2).map((item) => {
        return (
          <div key={item.id}>
            <div className='flex h-[134px] w-[854px]   gap-[273px] rounded-xl'>
              <div className='flex items-center gap-[42px] pl-[30px]  '>
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
              <div className='flex gap-[39.87px] '>
                <Button />
                <button>
                  <BsBookmark className=' mb-[60px] mr-[30px] stroke-[#001A72] stroke-[0.3px] ' />
                </button>
              </div>
            </div>
            <hr className='ml-[23px] mr-[57.84px] ' />
          </div>
        )
      })}
    </div>
  )
}

export default Recommendation
