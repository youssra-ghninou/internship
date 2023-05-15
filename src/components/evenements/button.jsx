// eslint-disable-next-line no-empty-pattern
const Button = ({}) => {
  return (
    <>
      <select
        id='months'
        class=' block h-[25px] w-[120px] rounded-full bg-[#FEF6FF]  text-center text-[11px] font-semibold shadow-md focus:ring-[#971ea7] dark:bg-[#FEF6FF] dark:focus:ring-[#971ea7]'
      >
        <option selected>Juin 2023</option>
        <option value='january'>Janvier 2023</option>
        <option value='february'>Février 2023</option>
        <option value='march'>Mars 2023</option>
        <option value='april'>Avril 2023</option>
        <option value='may'>Mai 2023</option>
        <option value='june'>Juin 2023</option>
        <option value='july'>Juillet 2023</option>
        <option value='august'>Août 2023</option>
        <option value='september'>Septembre 2023</option>
        <option value='october'>Octobre 2023</option>
        <option value='november'>Novembre 2023</option>
        <option value='december'>Décembre 2023</option>
      </select>
    </>
  )
}

export default Button
