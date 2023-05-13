import Image from 'next/image'
import Button from './button'
import Remuneration from './remuneration'

const Candidature = () => {
  const candidatureData = [
    {
      id: '1',
      lien: '/techmints.png',
      titre: 'Designer De Produit',
      nom: 'Techmint, SurSite',
      location: 'Rabat, Maroc',
      prix: '900 DH',
      status: 'Rejeté',
    },
    {
      id: '2',
      lien: '/unacademy.png',
      titre: 'Senior Product Designer',
      nom: 'Unacademy, Travail À Domicile',
      location: 'Casablanca, Maroc',
      prix: 'Non Rémunéré',
      status: 'En Cours',
    },
    {
      id: '3',
      lien: '/udemy.png',
      titre: 'Senior Product Designer',
      nom: 'Udemy, Travail À Domicile',
      location: 'Casablanca, Maroc',
      prix: 'Non Rémunéré',
      status: 'Sélectionné',
    },
    {
      id: '4',
      lien: '/techmints.png',
      titre: 'Designer De Produit',
      nom: 'Techmint, SurSite',
      location: 'Rabat, Maroc',
      prix: '900 DH',
      status: 'Rejeté',
    },
  ]
  return (
    <div className='h-[370px] w-[879px] rounded-lg bg-white p-4 pt-7 shadow-xl'>
      <div className='flex items-center justify-between px-[42.75px] pb-[17.49px]'>
        <div className='text-xl font-bold'>Mes Candidature</div>
        <a href='#' className='text-sm font-bold text-[#043CA7]'>
          Voir Tout
        </a>
      </div>
      {candidatureData.slice(0, 3).map((item) => {
        return (
          <div
            key={item.id}
            className='flex h-[85px] w-[854px] items-center justify-between rounded-xl px-2 pb-[11.5px] shadow-md'
          >
            <div className='flex items-center gap-3  '>
              <Image
                width={65.03}
                height={60.09}
                src={item.lien}
                className='pt-[14.78px]'
                alt={item.nom}
              />
              <div className='font-popping font-bold'>
                <div className='pt-[10.32px]'>{item.titre}</div>
                <div className='pb-[1px] text-xs text-gray-400 '>
                  {item.nom}
                </div>
                <div className='text-sm text-gray-400'>{item.location}</div>
              </div>
            </div>
            <Remuneration prix={item.prix} />
            <Button nomButton={item.status} />
          </div>
        )
      })}
    </div>
  )
}

export default Candidature
