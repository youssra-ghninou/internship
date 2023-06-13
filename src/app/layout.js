import AuthProvider from '@/providers/authProvider'
import './globals.css'

export const metadata = {
  title: 'E-Internship',
  description: 'ENSMR official internship platform',
  icons: {
    icon: '/logo.png',
  },
}

export default async function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className='bg-gray-100'>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
