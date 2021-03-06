import NextAuth from "next-auth/next";
import GithubProviders from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProviders({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
