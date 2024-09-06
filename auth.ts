import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const { handlers, auth } = NextAuth({
  providers: [google],
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/api/auth/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allow relative URLs to be used in redirect
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allow URLs on the same origin to be used
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig);
