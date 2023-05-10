'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import toast, { Toaster } from 'react-hot-toast'

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
        titre != '' &&
        adresse != '' &&
        telephone != '' &&
        siteWeb != '' &&
        resume != ''
      ) {
        await fetch(
          '/api/createprofile',
          {
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
          },
          toast.loading('Waiting...'),
        )
        toast.success('Successfully created!')
      } else {
        toast.error('This field can not be blank')
      }
    } catch (error) {
      toast.error('There was an error!' + error)
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
        <form className='gap-5 p-2' onSubmit={handleSubmit}>
          <h2 className='text-xl font-bold'>Personal DATA</h2>
          <div className='flex flex-wrap items-center justify-between gap-5'>
            <label>
              Titre:
              <input
                className='border border-red-500 bg-gray-100'
                type='text'
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                disabled={isPending}
              />
            </label>
            <label>
              Adresse:
              <input
                className='border border-red-500 bg-gray-100'
                type='text'
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
              />
            </label>
            <label>
              Téléphone:
              <input
                className='border border-red-500 bg-gray-100'
                type='tel'
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </label>
            <label>
              Site web:
              <input
                className='border border-red-500 bg-gray-100'
                type='url'
                value={siteWeb}
                onChange={(e) => setSiteWeb(e.target.value)}
              />
            </label>
          </div>
          <label>
            Résumé:
            <textarea
              className='flex h-[100px] w-full border border-red-500 bg-gray-100'
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            />
          </label>

          <h2 className='text-xl font-bold'>Education</h2>
          <div className='flex flex-col'>
            {education.map((edu, index) => (
              <div key={index}>
                <label>
                  Établissement:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='text'
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
                  Diplôme:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='text'
                    value={edu.diplome}
                    onChange={(e) =>
                      handleEducationChange(index, 'diplome', e.target.value)
                    }
                  />
                </label>
                <label>
                  Domaine:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='text'
                    value={edu.domaine}
                    onChange={(e) =>
                      handleEducationChange(index, 'domaine', e.target.value)
                    }
                  />
                </label>
                <label>
                  Date Debut:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='date'
                    value={edu.dateDebut}
                    onChange={(e) =>
                      handleEducationChange(index, 'dateDebut', e.target.value)
                    }
                  />
                </label>
                <label>
                  Date Fin :
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='date'
                    value={edu.dateFin}
                    onChange={(e) =>
                      handleEducationChange(index, 'dateFin', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <button type='button' onClick={handleAddEducation}>
              Ajouter une éducation
            </button>
            <h2 className='text-xl font-bold'>Expérience</h2>
            {experience.map((exp, index) => (
              <div key={index}>
                <label>
                  Entreprise:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='text'
                    value={exp.entreprise}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        'entreprise',
                        e.target.value,
                      )
                    }
                  />
                </label>
                <label>
                  Poste:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='text'
                    value={exp.poste}
                    onChange={(e) =>
                      handleExperienceChange(index, 'poste', e.target.value)
                    }
                  />
                </label>
                <label>
                  Description:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='text'
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        'description',
                        e.target.value,
                      )
                    }
                  />
                </label>
                <label>
                  Date Debut:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='date'
                    value={exp.dateDebut}
                    onChange={(e) =>
                      handleExperienceChange(index, 'dateDebut', e.target.value)
                    }
                  />
                </label>
                <label>
                  Date Fin :
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='date'
                    value={exp.dateFin}
                    onChange={(e) =>
                      handleExperienceChange(index, 'dateFin', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <button type='button' onClick={handleAddExperience}>
              Ajouter une expérience
            </button>
            <h2 className='text-xl font-bold'>Compétences</h2>
            {competences.map((comp, index) => (
              <div key={index}>
                <label>
                  Nom:
                  <input
                    className='border border-red-500 bg-gray-100'
                    type='text'
                    value={comp.nom}
                    onChange={(e) =>
                      handleCompetenceChange(index, 'nom', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <button type='button' onClick={handleAddCompetence}>
              Ajouter une compétence
            </button>
          </div>

          <button
            type='submit'
            className='rounded-full bg-green-500 p-2 font-bold text-white'
          >
            Envoyer
          </button>
        </form>
        <Toaster />
      </>
    )
  }
}
