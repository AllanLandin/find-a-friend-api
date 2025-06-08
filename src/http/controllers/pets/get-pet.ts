import { FastifyReply, FastifyRequest } from "fastify";
import { string, z } from "zod";
import { makeGetPetUseCase } from "../../../use-cases/factories/make-get-pet-use-case";
import { PetNotFound } from "../../../errors/pet-not-found";

export async function getPet(req: FastifyRequest, reply: FastifyReply) {
  const getPetParams = z.object({
    id: z.string(),
  });

  const { id } = getPetParams.parse(req.params);

  const getPetUseCase = makeGetPetUseCase();

  try {
    const pet = await getPetUseCase.execute({ id });
    return reply.status(200).send(pet);
  } catch (error) {
    if (error instanceof PetNotFound) {
      return reply.status(404).send({ message: error.message });
    }
    throw Error(error.message);
  }
}
