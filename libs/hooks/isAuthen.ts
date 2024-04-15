"use client";

import { getSession } from "next-auth/react";

const isAuthen = async () => {
  const session: any = await getSession();
  console.log(session);

  if (session?.status === "loading" || session?.status === "unauthenticated") {
    return false;
  }

  return session;
};

export default isAuthen;
