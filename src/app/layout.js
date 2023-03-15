import AuthProvider from '../providers/authProvider'
import './globals.css'

export const metadata = {
  title: 'E-Internship',
  description: 'ENSMR official internship platform',
  icons: {
    icon: '/logo.png',
  },
}

export const dynamicParams = false

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
