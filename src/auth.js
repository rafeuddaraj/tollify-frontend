import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { loginAction } from "./actions";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credential) {
        const email = credential.email;
        const password = credential.password;
        const data = { email, password };
        const loginResp = await loginAction(data);
        if (loginResp) {
          return loginResp?.data;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, profile }) {
      return { ...token, ...user, ...profile };
    },
    session({ token, session }) {
      return { user: { ...token, ...session } };
    },
  },
});
