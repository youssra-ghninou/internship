import Image from 'next/image'
import Link from 'next/link'

const Top = ({ lien, Nom }) => {
  return (
    <div className='sticky top-0 left-0 z-50 flex h-fit flex-row justify-between bg-[#22506C] px-3 py-2'>
      <div className='flex flex-row items-center gap-2'>
        <Image
          width={25}
          height={25}
          src={'/logo.png'}
          alt={'logo'}
          className='rounded-full'
        />
        <div className='text-[16px] text-white'>e-internship</div>
      </div>
      <div className='my-auto'>
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
      <div className='flex flex-row items-center gap-3'>
        <Image
          width={50}
          className='rounded-full'
          height={50}
          src={lien}
          alt={'ProfilePic'}
        />
        <div className='flex flex-col content-center text-[10px]'>
          <div className='text-[12px] font-medium text-white '>{Nom}</div>
          <Link
            href='/enimiste/profile'
            className='rounded-xl bg-white px-2 py-1 text-center font-medium '
          >
            PROFILE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Top
