import { FastifyInstance } from "fastify";
import { createPet } from "../controllers/pets/create-pet";
import { findPets } from "../controllers/pets/find-pets";
import { getPet } from "../controllers/pets/get-pet";

export async function petsRoutes(app: FastifyInstance) {
  app.post("/create", { preHandler: app.authenticate }, createPet);
  app.get("/", findPets);
  app.get("/:id", getPet);
}
