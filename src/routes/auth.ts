import { FastifyInstance } from "fastify";

import { authenticateOrg } from "../controllers/authenticate-org";
import { createOrg } from "../controllers/create-org";

export async function authRoutes(app: FastifyInstance) {
    app.post("/org/register", createOrg)
    app.post("/org/login", authenticateOrg)
}