'use client'
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  Typography,
} from '@material-tailwind/react'
import ViewProfilePopUp from '../dialogs/ViewProfilePopUp'
const currentYear = new Date().getFullYear()

const TABLE_HEAD = [
  'Étudiant',
  'Titre',
  'Status',
  'Année d’Étude',
  'Changer Status',
]

export default function SingleOffers({ allCandidats }) {
  return (
    <Card className='h-full w-full'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='mb-8 flex items-center justify-between gap-8'>
          <div>
            <Typography variant='h5' color='blue-gray'>
              Liste des candidats pour l’offre : {allCandidats[0]?.offer.title}
            </Typography>
            <Typography color='gray' className='mt-1 font-normal'>
              Ici vous trouvez les candidats qui ont postulé à cet offre
            </Typography>
          </div>
          <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
            <Chip
              variant='ghost'
              size='sm'
              value={
                allCandidats[0]?.offer.status === 'ACTIVE'
                  ? 'Statut de l’offre : Active'
                  : 'Statut de l’offre : Archivé'
              }
              color={
                allCandidats[0]?.offer.status === 'ACTIVE' ? 'green' : 'red'
              }
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='w-full md:w-72'>
            <Input
              label='Rechercher'
              icon={<MagnifyingGlassIcon className='h-5 w-5' />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className='overflow-scroll px-0'>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'
                >
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
                  >
                    {head}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allCandidats.map(
              (
                { student: { name, image, role, profile }, status, email, id },
                index,
              ) => {
                const isLast = index === allCandidats.length - 1
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50'

                return (
                  <tr className='uppercase' key={name}>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Avatar src={image} alt={name} size='sm' />
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal opacity-70'
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='flex w-max flex-col'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {profile.titre}
                        </Typography>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal opacity-70'
                        >
                          ENSMR
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='max-w-fit text-center'>
                        <Chip
                          variant='ghost'
                          size='sm'
                          value={
                            status === 'Rejeté'
                              ? 'Rejeté'
                              : status === 'Accepté'
                              ? status
                              : 'En cours de traitement'
                          }
                          color={
                            status === 'Rejeté'
                              ? 'red'
                              : status === 'Accepté'
                              ? 'green'
                              : 'yellow'
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {currentYear}-{currentYear - 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <ViewProfilePopUp candidatureId={id} profile={profile} />
                    </td>
                  </tr>
                )
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Typography variant='small' color='blue-gray' className='font-normal'>
          Page 1
        </Typography>
        <div className='flex gap-2'>
          <Button variant='outlined' color='blue-gray' size='sm'>
            Précédent
          </Button>
          <Button variant='outlined' color='blue-gray' size='sm'>
            Suivant
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
