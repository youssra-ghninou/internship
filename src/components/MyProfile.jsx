import Image from 'next/image'

export default function Profile({ data }) {
  return (
    <div className='w-fit bg-red-100 py-6'>
      <div className='user'>
        <div className='image'>
          <Image
            priority
            height={100}
            width={100}
            src={data.image}
            alt={data.name + "'s profile picture"}
          />
        </div>
        <div className='name'>{data.name}</div>
        <div className='email'>{data.email}</div>
        <div className='id'>{data.id}</div>
      </div>
    </div>
  )
}
