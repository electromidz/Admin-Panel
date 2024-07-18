import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { connectDB } from "./app/lib/DB";
import { User } from "./app/lib/DB/models/user";
import bcrypt from "bcrypt";

type TCredentioals = {
  username: string;
  password: string;
};

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

const login = async (credentials: TCredentioals) => {
  try {
    connectDB();
    console.log("credentials", credentials);
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password,
    );
    if (!isPasswordCorrect) throw new Error("Wrong credentials");

    return user;
  } catch (error) {
    throw new InvalidLoginError();
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: { type: "password" },
      },
      async authorize(credentials: any) {
        try {
          return await login(credentials);
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }: any) {
  //     if (user) {
  //       token.username = user.username;
  //       token.img = user.img;
  //     }
  //     return user;
  //   },
  //   async session({ session, token }: any) {
  //     if (token) {
  //       session.user.username = token.username;
  //       session.user.img = token.img;
  //     }
  //     return session;
  //   },
  // },
});
