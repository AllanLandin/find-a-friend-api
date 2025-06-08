import fastify from "fastify";
import { env } from "./env/env";
import { authRoutes } from "./http/routes/auth";
import jwt from "@fastify/jwt";
import { authMiddleware } from "./middlewares/auth";
import { petsRoutes } from "./http/routes/pets";

export const app = fastify();

app.decorate("authenticate", authMiddleware);
app.register(jwt, { secret: env.JWT_SECRET });
app.register(authRoutes, { prefix: "/auth" });
app.register(petsRoutes, { prefix: "/pets" });
