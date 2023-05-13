// eslint-disable-next-line no-empty-pattern

const Button = () => {
  return (
    <>
      <select
        id='entretiens'
        class=' block h-[35px] w-[180px] rounded-xl bg-white  text-center text-[14px] font-medium shadow-md focus:ring-[#971ea7] dark:bg-white dark:focus:ring-[#971ea7]'
      >
        <option value='en cours' selected>
          Entretiens en cours
        </option>
        <option value='passe'>Entretiens passe</option>
        <option value='prochain'>Prochain entretiens</option>
      </select>
    </>
  )
}

export default Button
