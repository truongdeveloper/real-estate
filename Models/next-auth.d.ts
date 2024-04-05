import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      token: string;
      type: string;
      tenTK: string;
      name: string;
      quyen: string;
    };
  }
}
