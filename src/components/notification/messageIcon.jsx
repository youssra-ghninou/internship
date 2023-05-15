import Image from 'next/image'

const MessageIcon = ({ notificationCount, lien }) => {
  return (
    <div className='relative flex flex-col'>
      <button>
        <Image width={25} height={25} src={lien} alt={'pic'} />

        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 9l-7 7-7-7'
        />
      </button>{' '}
      {notificationCount > 0 && (
        <span
          className='absolute bottom-4 left-4 inline-flex h-[14px] w-[14px] items-center justify-center rounded-full
bg-[#FFD600] text-[9px] font-bold '
        >
          {notificationCount}
        </span>
      )}
    </div>
  )
}

export default MessageIcon
