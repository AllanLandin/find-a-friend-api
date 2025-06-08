import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeFindPetsUseCase } from "../../../use-cases/factories/make-find-pets-use-case";
import { IncompletePayload } from "../../../errors/incomplete-payload";

export async function findPets(req: FastifyRequest, reply: FastifyReply) {
  const requestQuerySchema = z.object({
    city: z.string(),
    age: z.number().optional(),
    size: z.string().optional(),
    energy_level: z.string().optional(),
    environment: z.string().optional(),
  });

  try {
    const dataRequest = requestQuerySchema.parse(req.query);

    const findPetsUseCase = makeFindPetsUseCase();

    const pets = await findPetsUseCase.execute(dataRequest);

    return reply.status(200).send(pets);
  } catch (error) {
    if (error instanceof IncompletePayload) {
      return reply.status(400).send({ message: error.message });
    }

    throw new Error(error.message);
  }
}
