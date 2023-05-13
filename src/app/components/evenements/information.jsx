import Image from 'next/image'

const Information = ({ titre, date, heure, company, lien }) => {
  return (
    <div className=' flex h-[90px] w-[270px] flex-row  justify-between rounded-md bg-white shadow-md '>
      <div className=' flex h-[90px] w-[100px] flex-col items-center justify-center gap-1'>
        <Image
          width={55}
          height={55}
          alt='image'
          src={lien}
          className=' rounded shadow-lg'
        />
        <div className=' text-[10px] font-bold'>{company}</div>
      </div>

      <div className='flex flex-row'>
        <div className='mt-[15px] h-[60px] w-[8px] rounded-l-lg bg-gradient-to-b from-orange-100 to-red-400 '></div>
        <div className='h-[90px] w-[140px] flex-col rounded pt-5 text-center text-[11px] shadow-md '>
          <div className='  font-medium '>{titre}</div>
          <div className='font-bold text-[#e17c7c] '>{date}</div>
          <div className='font-medium '>{heure}</div>
        </div>
      </div>
    </div>
  )
}

export default Information
