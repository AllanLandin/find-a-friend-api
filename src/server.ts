import { app } from "./app";
import { env } from "./env/env";

app.listen({ port: env.WEB_SERVER_PORT, host: "0.0.0.0" }).then(() => {
  console.log(`Server running on port ${env.WEB_SERVER_PORT}`);
});
