import { FastifyInstance } from "fastify";
import { createPet } from "../controllers/create-pet";

export async function petsRoutes(app: FastifyInstance) {
    app.post("/create", createPet)
}