'use client'
import { PencilIcon } from '@heroicons/react/24/outline'
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  IconButton,
  Tooltip,
} from '@material-tailwind/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment, startTransition, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

export default function ViewProfilePopUp({ profile, candidatureId }) {
  const router = useRouter()
  const [size, setSize] = useState(null)

  const handleOpen = (value) => setSize(value)

  const handleAccepte = async () => {
    if (window.confirm('Voulez vous accepter ce candidat ?')) {
      try {
        toast.loading('Veuillez patienter...')
        const response = await fetch('/api/statusAccepte', {
          method: 'POST',
          body: candidatureId,
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Vous avez accepter ce candidat avec succès')
        } else {
          toast.error('There was an error!' + response)
        }
      } catch (error) {
        toast.error('There was an error: ' + error)
      }
      startTransition(() => {
        router.refresh()
      })
    }
  }

  const handleRejete = async () => {
    if (window.confirm('Voulez vous rejeter ce candidat ?')) {
      try {
        toast.loading('Veuillez patienter...')
        const response = await fetch('/api/statusRejete', {
          method: 'POST',
          body: candidatureId,
        })
        toast.dismiss()
        if (response.ok) {
          toast.success('Vous avez rejeter ce candidat avec succès')
        } else {
          toast.error('There was an error!' + response)
        }
      } catch (error) {
        toast.error('There was an error: ' + error)
      }
      startTransition(() => {
        router.refresh()
      })
    }
  }

  return (
    <Fragment>
      <div className='mb-3 flex gap-3'>
        <Tooltip content='Changer statut'>
          <IconButton
            onClick={() => handleOpen('xxl')}
            variant='text'
            color='blue-gray'
          >
            <PencilIcon className='h-4 w-4' />
          </IconButton>
        </Tooltip>
      </div>
      <Dialog open={size === 'xxl'} size={size || 'md'} handler={handleOpen}>
        <DialogBody divider className='bg-white'>
          <div className=' bg-white text-left'>
            <div className='flex flex-col items-center gap-5'>
              <div className='flex w-full items-center gap-2 rounded-xl border-2 p-3 shadow-md'>
                <Image
                  className='rounded-full'
                  priority
                  height={100}
                  width={100}
                  src={profile.user.image.replaceAll('s96-c', 's400-c')}
                  alt={`${profile.user.name}'s profile picture`}
                />
                <div className='flex flex-col gap-1'>
                  <div className='name font-bold'>{profile.nom}</div>
                  <div className='name font-thin '>{profile.titre}</div>
                </div>
              </div>
              <div className='flex w-full flex-col gap-4 rounded-xl border-2 p-5 shadow-md'>
                <div className='flex items-center justify-between'>
                  <div className='name font-bold text-[#043CA7]'>
                    Informations personnelles :
                  </div>
                </div>
                <div className='flex'>
                  <div className='flex w-full flex-col pl-5'>
                    <div className='titre mt-2 text-gray-900'>
                      <span className='font-medium'>Nom complet : </span>{' '}
                      {profile.name}
                    </div>
                    <div className='telephone mt-2 text-gray-900'>
                      <span className='font-medium'>Téléphone : </span>
                      {profile.telephone}
                    </div>
                  </div>
                  <div className='flex w-full flex-col pl-5'>
                    <div className='titre mt-2 text-gray-900'>
                      <span className='font-medium'>Titre : </span>{' '}
                      {profile.titre}
                    </div>

                    <div className='adresse mt-2 text-gray-900'>
                      <span className='font-medium'>Adresse Email : </span>{' '}
                      {profile.email}
                    </div>
                  </div>
                </div>
                <div className='resume mt-2 pl-5 text-gray-900'>
                  <span className='font-medium'>Resume : </span>{' '}
                  {profile.resume}
                </div>
              </div>
              <div className='flex w-full flex-col gap-4 rounded-xl border-2 p-5 shadow-md'>
                <div className='flex items-center justify-between'>
                  <span className='font-bold text-[#043CA7]'>Éducation : </span>
                </div>
                {profile.education.map((educ) => {
                  return (
                    <div key={educ.id} className='mt-2'>
                      <div className='etablissement'>
                        <span className='font-medium'>Etablissement : </span>
                        {educ.etablissement}
                      </div>
                      <div className='flex'>
                        <div className='flex w-full flex-col pl-5'>
                          <div className='diplome text-gray-900'>
                            <span className='font-medium'>Diplôme : </span>{' '}
                            {educ.diplome}
                          </div>
                          <div className='date-debut text-gray-900'>
                            <span className='font-medium'>
                              Date de début de formation :
                            </span>
                            {educ.dateDebut}
                          </div>
                        </div>
                        <div className='flex w-full flex-col pl-5'>
                          <div className='domaine text-gray-900'>
                            <span className='font-medium'>
                              Domaine des études :{' '}
                            </span>
                            {educ.domaine}
                          </div>
                          <div className='date-fin text-gray-900'>
                            <span className='font-medium'>
                              Date d{"'"}obtention du diplôme :
                            </span>
                            {educ.dateFin}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='flex w-full flex-col gap-4 rounded-xl border-2 p-3 shadow-md'>
                <div className='flex items-center justify-between'>
                  <span className='font-bold text-[#043CA7]'>
                    Éxpériences :{' '}
                  </span>
                </div>
                {profile.experience.map((exp) => {
                  return (
                    <div key={exp.id} className='mt-2'>
                      <div className='etablissement'>
                        <span className='font-medium'>Etablissement : </span>
                        {exp.entreprise}
                      </div>
                      <div className='flex'>
                        <div className='flex w-full flex-col pl-5'>
                          <div className='diplome text-gray-900'>
                            <span className='font-medium'>Role : </span>{' '}
                            {exp.poste}
                          </div>
                          <div className='date-debut text-gray-900'>
                            <span className='font-medium'>
                              Date de début :{' '}
                            </span>
                            {exp.dateDebut}
                          </div>
                        </div>
                        <div className='flex w-full flex-col pl-5'>
                          <div className='domaine text-gray-900'>
                            <span className='font-medium'>
                              Description du poste :{' '}
                            </span>
                            {exp.description}
                          </div>

                          <div className='date-fin text-gray-900'>
                            <span className='font-medium'>Date fin : </span>
                            {exp.dateFin
                              ? exp.dateFin
                              : 'Travaille actuellement'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='flex w-full items-center justify-between gap-4 rounded-xl border-2 p-3 shadow-md'>
                <div className='flex items-center gap-3 '>
                  <span className='font-bold text-[#043CA7]'>Competences </span>
                  <div className='flex flex-wrap'>
                    {profile.competences.map((comp) => {
                      return (
                        <div key={comp.id} className='mt-2 flex'>
                          <div className='cursor-default rounded-md border-2 px-2 py-1 text-xs font-bold text-black transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-yellow-500'>
                            {comp.nom}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className='flex gap-3 bg-white'>
          <Button variant='text' color='red' onClick={() => handleOpen(null)}>
            <span>Annuler</span>
          </Button>
          <Button variant='gradient' color='red' onClick={() => handleRejete()}>
            <span>Rejeté</span>
          </Button>
          <Button
            variant='gradient'
            color='green'
            onClick={() => handleAccepte()}
          >
            <span>Accepté</span>
          </Button>
          <Toaster />
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}
