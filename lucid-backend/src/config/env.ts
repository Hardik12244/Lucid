import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(5001),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  DATABASE_URL: z.string().url(),

  BETTER_AUTH_SECRET: z.string().min(1),

  BETTER_AUTH_URL: z.string().url(),

  RESEND_API_KEY: z.string().min(1),

  EMAIL_FROM: z.string().min(1),
  
  REDIS_URL: z.string(),

  GEMINI_API_KEY: z.string().min(1),
});

const env = envSchema.parse(process.env);

export default env;