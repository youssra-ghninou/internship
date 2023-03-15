import GoBackButton from '@/components/GoBackButton'
import MyProfile from '@/components/MyProfile'
export default function Profile() {
  return (
    <div className='flex flex-col gap-2 py-2'>
      <GoBackButton />
      <MyProfile />
    </div>
  )
}
