import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const ONE_DAY = 24 * 60 * 60;

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: ONE_DAY,
  },
  session: {
    maxAge: ONE_DAY,
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.JWT_SECRET as string,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }