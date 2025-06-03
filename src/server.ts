import fastify from "fastify";
import { env } from "./env/env";

const app = fastify()


app.listen({port: env.WEB_SERVER_PORT, host: "0.0.0.0"}, ()=>{console.log(`Server running on port ${env.WEB_SERVER_PORT}`)})