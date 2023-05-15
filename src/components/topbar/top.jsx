import Image from 'next/image'
import MessageIcon from '../notification/messageIcon'

const Top = ({ messagenotif, valisenotif, rappelnotif, lien, Nom, Prenom }) => {
  return (
    <div className='flex h-[58px] flex-row bg-[#22506C] '>
      <div className='ml-5 flex flex-row items-center'>
        <Image
          width={25}
          height={25}
          src={'/logo.png'}
          alt={'logo'}
          className='rounded-full'
        />
        <div className='ml-2 text-[16px] text-white'>e-internship</div>
      </div>
      <div className='my-auto pl-[150px] '>
        <form className='max-w-sm px-4 '>
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute top-0 bottom-0 left-3 my-auto h-6 w-6  text-black'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
            <input
              type='text'
              placeholder='Rechercher'
              className='w-[400px] rounded-xl border bg-gray-50 py-[1px] pl-12 pr-4 text-gray-500 outline-none focus:border-indigo-600 focus:bg-white'
            />
          </div>
        </form>
      </div>
      <div className='my-auto flex gap-5 pl-[240px] '>
        <button>
          <MessageIcon lien={'/message.png'} notificationCount={messagenotif} />
        </button>
        <button>
          <MessageIcon lien={'/rappel.png'} notificationCount={rappelnotif} />
        </button>
        <button>
          <MessageIcon
            lien={'/icons-valise.png'}
            notificationCount={valisenotif}
          />
        </button>
      </div>
      <div className='flex flex-row pl-[120px] '>
        <Image
          width={50}
          height={50}
          src={lien}
          alt={'ProfilePic'}
          className='my-auto'
        />
        <div className='my-auto flex flex-col content-center pl-[15px] text-[10px] '>
          <div className=' text-[12px] font-medium text-white '>
            {Nom} {Prenom}
          </div>
          <button className='h-[20px] w-[130px] rounded-full bg-white font-medium '>
            MODIFIER MON PROFILE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Top
