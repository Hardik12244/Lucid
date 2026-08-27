import "dotenv/config";

const port = Number(process.env.PORT);

if (!port || Number.isNaN(port)) {
  throw new Error("PORT must be a valid number");
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port,
};