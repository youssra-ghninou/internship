'use client'
export default function SingleOffers({ offer }) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
      <div className='p-6'>
        <h2 className='mb-2 text-2xl font-bold text-gray-900'>{offer.title}</h2>
        <p className='mb-4 text-base text-gray-700'>{offer.description}</p>
        <div className='flex items-center justify-between text-sm text-gray-500'>
          <div className='flex items-center space-x-4'>
            <div>
              <p className='font-semibold text-gray-900'>
                {offer.company.name}
              </p>
              <p>{offer.author ? offer.author.name : 'ENIM'}</p>
            </div>
          </div>
          <div>
            <span className='mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
              {offer.status}
            </span>
            <span className='text-sm text-gray-600'>
              End Date:
              {new Date(offer.endDate).toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-200 bg-gray-100 px-6 py-4'>
        <p className='text-sm text-gray-600'>
          Start Date:{' '}
          {new Date(offer.startDate).toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>
      <div className='border-t border-gray-200 bg-gray-200 px-6 py-4'>
        <a
          href='#'
          className='inline-block rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600'
        >
          Apply Now
        </a>
      </div>
    </div>
  )
}
