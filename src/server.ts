import fastify from "fastify";
import { env } from "./env/env";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt"
import { authMiddleware } from "./middlewares/auth";
import { petsRoutes } from "./routes/pets";

const app = fastify()

app.decorate("authenticate", authMiddleware)
app.register(jwt, {secret: env.JWT_SECRET})
app.register(authRoutes, {prefix: '/auth'})
app.register(petsRoutes, {prefix: "/pets"})

app.listen({port: env.WEB_SERVER_PORT}, ()=>{
    console.log(`Server running on port ${env.WEB_SERVER_PORT}`)
})