import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import db from "@/app/utils/DbConnect";
import { getUser } from "./DataBase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    // Credentials Provider
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("In credentials provider");
          await db(); // Ensure the database connection
          const username = credentials.username;

          const user = await User.findOne({ username });
          if (!user) {
            throw new Error("User not found");
          }
          return user;
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),

    // GitHub Provider
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // Discord Provider
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
  ],

  pages: {
    signIn: "/Auth/signup",
  },

  callbacks: {
    signIn: async ({ user, account }) => {
      console.log("Account Provider:", account.provider);

      if (["github", "google", "discord"].includes(account.provider)) {
        let email = user.email
        const existingUser = await getUser({email});
        const avatar = user.image;
        const username = user.name;
        const provider = account.provider;
        email = user.email;

        console.log({ user: existingUser });

        if (!existingUser) {
          try {
            console.log("Creating a new user");
            const newUser = await User.create({
              username,
              email,
              provider,
              profile: avatar,
            });
            return newUser;
          } catch (err) {
            console.error("Error creating user:", err);
            return false;
          }
        }

        console.log("Existing User Found");
        return existingUser;
      }

      if (account.provider === "credentials") {
        return { message: `User ${user.name} Login successfully`, success: true };
      }
      return false;
    },
  },
});
