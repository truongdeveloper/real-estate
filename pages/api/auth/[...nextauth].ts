import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosService from "../../../Common/api/AxiosServices";
import { LOGIN } from "../../../Common/api/apiEndPoints";
import { BASE_URL } from "../../../Common/api/config";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const res = await fetch(LOGIN.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tenTK: email,
            matKhau: password,
          }),
        });
        const user = await res.json();
        if (res.status == 200) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};

export default NextAuth(authOptions);
