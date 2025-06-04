import fastify from "fastify";
import { env } from "./env/env";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt"

const app = fastify()


app.register(jwt, {secret: env.JWT_SECRET})

app.register(authRoutes, {prefix: '/auth'})

app.listen({port: env.WEB_SERVER_PORT, host: "0.0.0.0"}, ()=>{console.log(`Server running on port ${env.WEB_SERVER_PORT}`)})