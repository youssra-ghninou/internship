import prisma from '@@/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account.provider === 'google') {
        return profile.email_verified && profile.email.endsWith('@enim.ac.ma')
      } else return true
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 3000,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'mot de passe',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!user || user.password !== credentials.password) {
          throw new Error('Invalid email or password')
        }

        // Return user object if authentication is successful
        return user
      },
    }),
  ],
}

export default NextAuth(authOptions)
