import { FastifyInstance } from "fastify";
import { createOrg } from "../controllers/orgs/create-org";
import { authenticateOrg } from "../controllers/orgs/authenticate-org";

export async function authRoutes(app: FastifyInstance) {
  app.post("/org/register", createOrg);
  app.post("/org/login", authenticateOrg);
}
