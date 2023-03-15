import Image from 'next/image'
import { getUsers } from '../../lib/queries'

export default async function Profile() {
  const users = await getUsers()
  return (
    <div className='w-fit bg-red-100 py-6'>
      {users.map((user) => (
        <div key={user.id} className='user'>
          <div className='image'>
            <Image
              priority
              height={100}
              width={100}
              src={user.image}
              alt={user.name + "'s profile picture"}
            />
          </div>
          <div className='name'>{user.name}</div>
          <div className='email'>{user.email}</div>
          <div className='id'>{user.id}</div>
        </div>
      ))}
    </div>
  )
}
