const Remuneration = ({ prix }) => {
  return (
    <div className='flex flex-col text-center '>
      <div className=' text-lg font-medium'>{prix}</div>
      <div className='text-xs text-gray-500	'>Par Mois</div>
    </div>
  )
}

export default Remuneration
