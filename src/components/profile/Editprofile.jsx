'use client'
import { IconButton, Input, Textarea } from '@material-tailwind/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AiFillPlusCircle, AiOutlineCloseCircle } from 'react-icons/ai'

export default function EditProfile({ data }) {
  const router = useRouter()
  const [titre, setTitre] = useState(data.profile.titre)
  const [adresse, setAdresse] = useState(data.profile.adresse)
  const [telephone, setTelephone] = useState(data.profile.telephone)
  const [siteWeb, setSiteWeb] = useState(data.profile.siteWeb)
  const [resume, setResume] = useState(data.profile.resume)
  const [education, setEducation] = useState(data.profile.education)
  const [experience, setExperience] = useState(data.profile.experience)
  const [competences, setCompetences] = useState(data.profile.competences)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (
        titre !== '' &&
        adresse !== '' &&
        telephone !== '' &&
        siteWeb !== '' &&
        resume !== ''
      ) {
        toast.loading('Veuillez patienter un peu ...')
        const response = await fetch('/api/updateprofile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            titre,
            adresse,
            telephone,
            siteWeb,
            resume,
            education,
            experience,
            competences,
          }),
        })
        toast.dismiss()
        startTransition(() => {
          router.refresh()
          router.push('/enimiste/profile')
        })
        if (response.ok) {
          toast.success('Vous avez mis a jour votre profile!')
        } else {
          toast.error(
            'Une erreur est produite lors de la modification de votre profile, veuillez ressayer kjhkjh!',
          )
        }
      } else {
        toast.error('Tous les champs sont obligatoires')
      }
    } catch (error) {
      toast.error(
        'Une erreur est produite lors de la modification de votre profile, veuillez ressayer!' +
          error,
      )
    }
  }
  const { data: session, status } = useSession()

  const handleAddEducation = () => {
    setEducation((prevEducation) => [
      ...prevEducation,
      {
        etablissement: '',
        diplome: '',
        domaine: '',
        dateDebut: '',
        dateFin: '',
      },
    ])
  }

  const handleEducationChange = (index, field, value) => {
    setEducation((prevEducation) => {
      const updatedEducation = [...prevEducation]
      updatedEducation[index][field] = value
      return updatedEducation
    })
  }

  const handleDeleteEducation = (index) => {
    setEducation((prevEducation) => {
      const updatedEducation = prevEducation.filter((_, i) => i !== index)
      return updatedEducation
    })
  }

  const handleAddExperience = () => {
    setExperience((prevExperience) => [
      ...prevExperience,
      {
        entreprise: '',
        poste: '',
        dateDebut: '',
        dateFin: '',
        description: '',
      },
    ])
  }

  const handleExperienceChange = (index, field, value) => {
    setExperience((prevExperience) => {
      const updatedExperience = [...prevExperience]
      updatedExperience[index][field] = value
      return updatedExperience
    })
  }

  const handleDeleteExperience = (index) => {
    setExperience((prevExperience) => {
      const updatedExperience = prevExperience.filter((_, i) => i !== index)
      return updatedExperience
    })
  }

  const handleAddCompetence = () => {
    setCompetences((prevCompetences) => [...prevCompetences, { nom: '' }])
  }

  const handleCompetenceChange = (index, field, value) => {
    setCompetences((prevCompetences) => {
      const updatedCompetences = [...prevCompetences]
      updatedCompetences[index][field] = value
      return updatedCompetences
    })
  }

  const handleDeleteCompetence = (index) => {
    setCompetences((prevCompetences) => {
      const updatedCompetences = prevCompetences.filter((_, i) => i !== index)
      return updatedCompetences
    })
  }

  if (status === 'loading') {
    return <div className='flex flex-col gap-2 py-2'>loading...</div>
  }
  if (status === 'authenticated') {
    return (
      <>
        <form className='gap-10 p-2' onSubmit={handleSubmit}>
          <div className=' text-[28px] font-semibold text-[#043CA7]'>
            Modifier votre profile
          </div>
          <div className='flex w-full flex-wrap items-center justify-center gap-3 pt-2 lg:justify-between'>
            <Input
              containerProps={{ className: 'max-w-[280px]' }}
              variant='outlined'
              label='Titre'
              type='text'
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              disabled={isPending}
            />
            <Input
              containerProps={{ className: 'max-w-[280px]' }}
              variant='outlined'
              label='Téléphone'
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            <Input
              containerProps={{ className: 'max-w-[280px]' }}
              variant='outlined'
              label='Site web'
              value={siteWeb}
              onChange={(e) => setSiteWeb(e.target.value)}
            />
            <Input
              containerProps={{ className: 'max-w-[280px]' }}
              variant='outlined'
              label='Adresse'
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
          <div className='pt-3'>
            <Textarea
              color='blue'
              label='Résumé'
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-4 pt-4'>
            <h2 className='text-xl font-bold text-[#043CA7]'>Éducation</h2>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              {education.map((edu, index) => (
                <div
                  className='flex w-full flex-wrap justify-between gap-3'
                  key={index}
                >
                  <label>
                    <Input
                      variant='outlined'
                      label='Établissement'
                      value={edu.etablissement}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          'etablissement',
                          e.target.value,
                        )
                      }
                    />
                  </label>
                  <label>
                    <Input
                      variant='outlined'
                      label='Domaine'
                      value={edu.domaine}
                      onChange={(e) =>
                        handleEducationChange(index, 'domaine', e.target.value)
                      }
                    />
                  </label>
                  <label>
                    <Input
                      variant='outlined'
                      label='Diplôme'
                      value={edu.diplome}
                      onChange={(e) =>
                        handleEducationChange(index, 'diplome', e.target.value)
                      }
                    />
                  </label>
                  <label>
                    <Input
                      type='date'
                      label='Date Début'
                      value={edu.dateDebut}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          'dateDebut',
                          e.target.value,
                        )
                      }
                    />
                  </label>
                  <label>
                    <Input
                      type='date'
                      label='Date Fin'
                      value={edu.dateFin}
                      onChange={(e) =>
                        handleEducationChange(index, 'dateFin', e.target.value)
                      }
                    />
                  </label>
                  <IconButton
                    className='rounded-full text-3xl'
                    onClick={() => handleDeleteEducation(index)}
                    color='red'
                  >
                    <AiOutlineCloseCircle />
                  </IconButton>
                </div>
              ))}
            </div>
            <button
              type='button'
              className='mx-auto w-fit rounded-full bg-cyan-900'
              onClick={handleAddEducation}
            >
              <AiFillPlusCircle color='white' size='3rem' />
            </button>
          </div>

          <div className='flex flex-col gap-5'>
            <h2 className='text-xl font-bold text-[#043CA7]'>Expérience</h2>
            {experience.map((exp, index) => (
              <div
                className='flex w-full flex-wrap justify-between gap-2'
                key={index}
              >
                <Input
                  containerProps={{ className: 'max-w-[280px]' }}
                  variant='outlined'
                  label='Entreprise'
                  value={exp.entreprise}
                  onChange={(e) =>
                    handleExperienceChange(index, 'entreprise', e.target.value)
                  }
                />
                <Input
                  containerProps={{ className: 'max-w-[280px]' }}
                  variant='outlined'
                  label='Poste'
                  value={exp.poste}
                  onChange={(e) =>
                    handleExperienceChange(index, 'poste', e.target.value)
                  }
                />
                <Input
                  containerProps={{ className: 'max-w-[280px]' }}
                  variant='outlined'
                  label='Description'
                  value={exp.description}
                  onChange={(e) =>
                    handleExperienceChange(index, 'description', e.target.value)
                  }
                />
                <Input
                  containerProps={{ className: 'max-w-[180px]' }}
                  variant='outlined'
                  label='Date Debut'
                  type='date'
                  value={exp.dateDebut}
                  onChange={(e) =>
                    handleExperienceChange(index, 'dateDebut', e.target.value)
                  }
                />
                <Input
                  containerProps={{ className: 'max-w-[180px]' }}
                  variant='outlined'
                  label='Date Fin'
                  type='date'
                  value={exp.dateFin}
                  onChange={(e) =>
                    handleExperienceChange(index, 'dateFin', e.target.value)
                  }
                />
                <IconButton
                  className='rounded-full text-3xl'
                  onClick={() => handleDeleteExperience(index)}
                  color='red'
                >
                  <AiOutlineCloseCircle />
                </IconButton>
              </div>
            ))}
            <button
              type='button'
              className='mx-auto w-fit rounded-full bg-cyan-900'
              onClick={handleAddExperience}
            >
              <AiFillPlusCircle color='white' size='3rem' />
            </button>
            <h2 className='text-xl font-bold text-[#043CA7]'>Compétences</h2>
            <div className='flex w-full flex-wrap gap-10'>
              {competences.map((comp, index) => (
                <div
                  className='flex w-1/5 items-center justify-between'
                  key={index}
                >
                  <label>
                    <Input
                      containerProps={{ className: 'max-w-[100px]' }}
                      variant='outlined'
                      label='Compétence'
                      value={comp.nom}
                      onChange={(e) =>
                        handleCompetenceChange(index, 'nom', e.target.value)
                      }
                    />
                  </label>
                  <IconButton
                    className='w-full rounded-full text-2xl text-red-500'
                    onClick={() => handleDeleteCompetence(index)}
                    variant='text'
                    size='sm'
                  >
                    <AiOutlineCloseCircle />
                  </IconButton>
                </div>
              ))}
            </div>
            <button
              type='button'
              className='mx-auto w-fit rounded-full bg-cyan-900'
              onClick={handleAddCompetence}
            >
              <AiFillPlusCircle color='white' size='3rem' />
            </button>
            <button
              type='submit'
              className='rounded-xl bg-cyan-900 px-4  py-2 font-bold text-white'
            >
              Modifier
            </button>
          </div>
        </form>
        <Toaster />
      </>
    )
  }
}
