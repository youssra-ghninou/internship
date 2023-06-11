'use client'
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from '@material-tailwind/react'

const TABLE_HEAD = ['Étudiant', 'Titre', 'Status', 'Année d’Étude', '']

const TABLE_ROWS = [
  {
    img: 'https://internship-hazel.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtfDW5UMMpJ83azX3k6CPbNGybJzjFk-pHh3MHMa%3Ds400-c&w=128&q=75',
    name: 'Ghninou Youssra',
    email: 'ghninou.youssra@enim.ac.ma',
    job: 'Élève Ingénieur',
    org: 'ENIM',
    status: 'Accepté',
    anneetude: '1 ere année',
  },
  {
    img: 'https://internship-hazel.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtczWCyC9IOL4_e1C1BjjVh7gSq-uAakDSa4506W%3Ds400-c&w=128&q=75',
    name: 'Anouar Aimade',
    email: 'anouar.aimade@gmail.com',
    job: 'Élève Ingénieur',
    org: 'ENIM',
    status: 'Rejeté',
    anneetude: '1 ere année',
  },
  {
    img: 'https://internship-hazel.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtfDW5UMMpJ83azX3k6CPbNGybJzjFk-pHh3MHMa%3Ds400-c&w=128&q=75',
    name: 'Doulfoukar Nada',
    email: 'doulfoukar.nada@enim.ac.ma',
    job: 'Élève Ingénieur',
    org: 'ENIM',
    status: 'Rejete',
    anneetude: '2 eme année',
  },
  {
    img: 'https://internship-hazel.vercel.app/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtfDW5UMMpJ83azX3k6CPbNGybJzjFk-pHh3MHMa%3Ds400-c&w=128&q=75',
    name: 'Chichaoui Hamza',
    email: 'chichaoui.hamza@enim.ac.ma',
    job: 'Élève Ingénieur',
    org: 'ENIM',
    status: 'Accepté',
    anneetude: '3 eme année',
  },
]
export default function SingleOffers({ offer }) {
  return (
    <Card className='h-full w-full'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='mb-8 flex items-center justify-between gap-8'>
          <div>
            <Typography variant='h5' color='blue-gray'>
              Liste des candidats
            </Typography>
            <Typography color='gray' className='mt-1 font-normal'>
              Ici vous trouvez les candidats qui ont postulé à cet offre
            </Typography>
          </div>
          <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
            <Button className='flex items-center gap-3' color='blue' size='sm'>
              <UserPlusIcon strokeWidth={2} className='h-4 w-4' /> Sélectionner
              candidat
            </Button>
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
                    {head}{' '}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, job, org, status, anneetude }, index) => {
                const isLast = index === TABLE_ROWS.length - 1
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50'

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Avatar src={img} alt={name} size='sm' />
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
                          {job}
                        </Typography>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal opacity-70'
                        >
                          {org}
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
                        {anneetude}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content='Edit User'>
                        <IconButton variant='text' color='blue-gray'>
                          <PencilIcon className='h-4 w-4' />
                        </IconButton>
                      </Tooltip>
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
