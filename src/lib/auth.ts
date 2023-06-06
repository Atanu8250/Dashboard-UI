import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
     throw new Error(
          "please provide process.env.GOOGLE_CLIENT_ID & process.env.GOOGLE_CLIENT_SECRET environment variable!"
     );
}

export const authOptions: NextAuthOptions = {
     session: {
          strategy: "jwt",
     },
     providers: [
          GoogleProvider({
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
     ],
     secret: process.env.JWT_SECRET
};
