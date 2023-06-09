'use client'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { Button } from '@material-tailwind/react'
import { ErrorMessage, Field, Formik } from 'formik'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import * as Yup from 'yup'

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState(null)

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .email('Invalid email address')
            .required('Please enter your email'),
          password: Yup.string().required('Please enter your password'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
          })
          if (res?.error) {
            setError(res.error)
          } else {
            setError(null)
          }
          if (res) {
            startTransition(() => {
              router.refresh()
            })
          }
          setSubmitting(false)
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <section className='flex h-screen flex-col items-center md:flex-row'>
              <div className='hidden h-screen w-full bg-white md:block md:w-1/2 xl:w-1/2'>
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  src='/51.svg'
                  alt='Login image'
                  className='object-fit h-full w-full'
                />
              </div>

              <div className='flex h-screen w-full items-center justify-center bg-white px-6 md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full lg:px-6 xl:w-1/2 xl:px-12'>
                <div className='h-100 w-full'>
                  <h1 className='mt-12 text-xl font-bold leading-tight md:text-2xl'>
                    Veuillez vous connecter
                  </h1>
                  <div>
                    <div className='text-md rounded p-2 text-center text-red-400'>
                      {error}
                    </div>
                    <label className='block text-gray-700'>Email Address</label>
                    <Field
                      name='email'
                      aria-label='enter your email'
                      aria-required='true'
                      type='text'
                      className='mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none'
                    />
                    <div className='text-sm text-red-600'>
                      <ErrorMessage name='email' />
                    </div>
                  </div>
                  <div className='mt-4'>
                    <label className='block text-gray-700'>Password</label>

                    <Field
                      name='password'
                      aria-label='enter your password'
                      aria-required='true'
                      type='password'
                      className='mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500
                focus:bg-white focus:outline-none'
                    />
                    <div className='text-sm text-red-600'>
                      <ErrorMessage name='password' />
                    </div>
                  </div>
                  <Button
                    type='submit'
                    className='mx-auto mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-indigo-500 px-4 py-3 text-base font-bold text-white hover:bg-indigo-400 focus:bg-indigo-400'
                  >
                    <ArrowRightOnRectangleIcon
                      strokeWidth={2}
                      className='h-7 w-7'
                    />
                    {formik.isSubmitting
                      ? 'Veuillez patienter...'
                      : 'Connexion'}
                  </Button>
                  <hr className='my-6 w-full border-gray-300' />
                  <Button
                    onClick={() => signIn('google')}
                    className='mx-auto mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base font-bold text-gray-900 hover:bg-gray-100 focus:bg-gray-100'
                  >
                    <FcGoogle strokeWidth={2} className='h-7 w-7' />
                    Google
                  </Button>
                </div>
              </div>
            </section>
          </form>
        )}
      </Formik>
    </>
  )
}
