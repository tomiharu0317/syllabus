import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  // pages: {
  //   signIn: '/',
  // },
})

// const options = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? '',
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
//     }),
//   ],
// }

// export default (req: any, res: any) => NextAuth(req, res, options)
