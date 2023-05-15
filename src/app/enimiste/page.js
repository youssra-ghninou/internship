import SignOutButton from '@/components/common/SignOutButton'
import Link from 'next/link'

export default async function Enimiste() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='flex gap-2'>
        <Link className='btn-active btn' href='/enimiste/profile'>
          profile
        </Link>
        <SignOutButton />
      </div>
      <Link className='btn-active btn' href='offers'>
        Voir les offres
      </Link>
    </div>
  )
}
