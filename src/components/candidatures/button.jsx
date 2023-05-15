import { BsQuestionCircle } from 'react-icons/bs'

const Button = ({ nomButton }) => {
  return (
    <div>
      {nomButton == 'Rejeté' && (
        <div className='flex flex-row items-center '>
          <button className='w-[110px] rounded-full bg-[#FFAAAA] py-1  text-sm font-bold text-[#AF0808] shadow-xl'>
            {nomButton}
          </button>
          <a href='#' className='px-3'>
            <BsQuestionCircle className='stroke-[#AF0808] stroke-1' />
          </a>
        </div>
      )}
      {nomButton == 'En Cours' && (
        <div className='pr-[40px] '>
          <button className='w-[110px] rounded-full bg-[#FFF3B2] py-1  text-sm font-bold text-[#AE9407] shadow-xl'>
            {nomButton}
          </button>
        </div>
      )}
      {nomButton == 'Sélectionné' && (
        <div className='pr-[40px] '>
          <button className='w-[110px] rounded-full bg-[#C4FFD1] py-1  text-sm font-bold text-[#00A324] shadow-xl'>
            {nomButton}
          </button>
        </div>
      )}
    </div>
  )
}

export default Button
