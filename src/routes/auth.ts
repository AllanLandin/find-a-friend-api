import { FastifyInstance } from "fastify";
import { registerOrg } from "../controllers/register-org";
import { authenticateOrg } from "../controllers/authenticate-org";

export async function authRoutes(app: FastifyInstance) {
    app.post("/org/register", registerOrg)
    app.post("/org/login", authenticateOrg)
}