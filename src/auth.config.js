import NextAuth from "next-auth";

export const authConfig = NextAuth({
  providers: [],
  trustHost: true,
  session: { strategy: "jwt" },
});
