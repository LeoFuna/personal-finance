import { FirebaseUserRepo } from '@/repository/user/FirebaseUserRepo';
import { UserService } from '@/services/user';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const ONE_DAY = 24 * 60 * 60;

export const authOptions: NextAuthOptions = {
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
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ user }) {
      const userService = new UserService(new FirebaseUserRepo());
      if (user.email) {
        try {
          await userService.getUnique(user.email);
          return true;
        } catch (error: any) {
          if (error.statusCode === 404) {
            await userService.create(user.email, { currentDate: new Date() });
            return true;
          } else {
            console.log('Erro Genérico');
            return '/signin';
          }
        }
      }
      return '/signin';
    },
  },
  secret: process.env.JWT_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
