export default async function AllOffers({ offer }) {
  return (
    <div className='flex gap-5 py-2'>
      <div className='offre bg-gray-500'>
        <div className='title'>{offer.title}</div>
        <div className='content'>{offer.content}</div>
        <div className='author-name'>{offer.author.name}</div>
      </div>
    </div>
  )
}
