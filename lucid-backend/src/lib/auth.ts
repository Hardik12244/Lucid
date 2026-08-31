import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import prisma from "./prisma.js";
import env from "../config/env.js";

export const auth = betterAuth({
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL,

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
