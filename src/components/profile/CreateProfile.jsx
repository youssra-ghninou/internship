'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AiFillPlusCircle } from 'react-icons/ai'

export default function CreateProfile() {
  const router = useRouter()
  const [titre, setTitre] = useState('')
  const [adresse, setAdresse] = useState('')
  const [telephone, setTelephone] = useState('')
  const [siteWeb, setSiteWeb] = useState('')
  const [resume, setResume] = useState('')
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])
  const [competences, setCompetences] = useState([])
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
        const response = await fetch('/api/createprofile', {
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
        if (response.ok) {
          toast.success('Vous avez créé votre profile!')
        } else {
          toast.error(
            'Une erreur est produite lors de la creation de votre profile, veuillez ressayer!',
          )
        }
      } else {
        toast.error('Tous les champs sont obligatoires')
      }
    } catch (error) {
      toast.error(
        'Une erreur est produite lors de la creation de votre profile, veuillez ressayer!' +
          error,
      )
    }
    startTransition(() => {
      router.refresh()
    })
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

  const handleAddCompetence = () => {
    setCompetences((prevCompetences) => [...prevCompetences, { nom: '' }])
  }

  const handleEducationChange = (index, field, value) => {
    setEducation((prevEducation) => {
      const updatedEducation = [...prevEducation]
      updatedEducation[index][field] = value
      return updatedEducation
    })
  }

  const handleExperienceChange = (index, field, value) => {
    setExperience((prevExperience) => {
      const updatedExperience = [...prevExperience]
      updatedExperience[index][field] = value
      return updatedExperience
    })
  }

  const handleCompetenceChange = (index, field, value) => {
    setCompetences((prevCompetences) => {
      const updatedCompetences = [...prevCompetences]
      updatedCompetences[index][field] = value
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
          <div className=' text-[28px] font-semibold '>Créer votre profil </div>
          <div className='flex flex-wrap items-center gap-3'>
            <label>
              <input
                className='rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                type='text'
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                disabled={isPending}
                placeholder='Titre'
              />
            </label>
            <label>
              <input
                className='rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                type='text'
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                placeholder='Adresse:'
              />
            </label>
            <label>
              <input
                className='rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                type='tel'
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder='Téléphone'
              />
            </label>
            <label>
              <input
                className='rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                type='url'
                value={siteWeb}
                onChange={(e) => setSiteWeb(e.target.value)}
                placeholder='Site web'
              />
            </label>
          </div>
          <label>
            <textarea
              className='mt-4 w-full rounded-xl border bg-gray-300 py-12 text-black hover:border-cyan-900'
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder=' Résumé'
            />
          </label>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>Éducation</h2>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              {education.map((edu, index) => (
                <div key={index}>
                  <label>
                    <input
                      className='mr-5 rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                      type='text'
                      value={edu.etablissement}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          'établissement',
                          e.target.value,
                        )
                      }
                      placeholder='Établissement'
                    />
                  </label>
                  <label>
                    <input
                      className='mr-5 rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                      type='text'
                      value={edu.domaine}
                      onChange={(e) =>
                        handleEducationChange(index, 'domaine', e.target.value)
                      }
                      placeholder='Domaine'
                    />
                  </label>
                  <label>
                    <input
                      className='mr-5 rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                      type='text'
                      placeholder='Diplôme'
                      value={edu.diplome}
                      onChange={(e) =>
                        handleEducationChange(index, 'diplome', e.target.value)
                      }
                    />
                  </label>{' '}
                  <label>
                    <input
                      className='mr-5 rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                      type='date'
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
                    <input
                      className='mr-5 rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                      type='date'
                      value={edu.dateFin}
                      onChange={(e) =>
                        handleEducationChange(index, 'dateFin', e.target.value)
                      }
                    />
                  </label>
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
          <div className='dix flex flex-col gap-5'>
            <h2 className='text-xl font-bold'>Expérience</h2>
            {experience.map((exp, index) => (
              <div key={index}>
                <label>
                  <input
                    className='mr-5 rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                    type='text'
                    value={exp.entreprise}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        'entreprise',
                        e.target.value,
                      )
                    }
                    placeholder='Entreprise'
                  />
                </label>
                <label>
                  <input
                    className='mr-5 rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                    type='text'
                    value={exp.poste}
                    onChange={(e) =>
                      handleExperienceChange(index, 'poste', e.target.value)
                    }
                    placeholder=' Poste'
                  />
                </label>
                <label>
                  <input
                    className='mr-5 rounded-xl border  bg-gray-300 p-2 text-black hover:border-cyan-900'
                    type='text'
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        'description',
                        e.target.value,
                      )
                    }
                    placeholder='Description'
                  />
                </label>
                <label>
                  <input
                    className='mr-5 rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                    type='date'
                    value={exp.dateDebut}
                    onChange={(e) =>
                      handleExperienceChange(index, 'dateDebut', e.target.value)
                    }
                  />
                </label>
                <label>
                  <input
                    className='rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                    type='date'
                    value={exp.dateFin}
                    onChange={(e) =>
                      handleExperienceChange(index, 'dateFin', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <button
              type='button'
              className='mx-auto w-fit rounded-full bg-cyan-900'
              onClick={handleAddExperience}
            >
              <AiFillPlusCircle color='white' size='3rem' />
            </button>
            <h2 className='text-xl font-bold'>Compétences</h2>
            {competences.map((comp, index) => (
              <div key={index}>
                <label>
                  <input
                    className='rounded-xl border bg-gray-300 p-2 text-black hover:border-cyan-900'
                    type='text'
                    value={comp.nom}
                    onChange={(e) =>
                      handleCompetenceChange(index, 'nom', e.target.value)
                    }
                    placeholder='Compétence'
                  />
                </label>
              </div>
            ))}
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
              Créer
            </button>
          </div>
        </form>
        <Toaster />
      </>
    )
  }
}
