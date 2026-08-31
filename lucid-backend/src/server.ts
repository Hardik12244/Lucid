import "dotenv/config";
import app from "./app.js";
import env from "./config/env.js";


const server = app.listen(env.PORT, () => {
  console.log(`Lucid API running on port ${env.PORT}`);
});

server.on("error", (error) => {
  console.error("Server failed to start:", error);
  process.exit(1);
});