import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreatePetUseCase } from '../use-cases/factories/make-create-pet-use-case'
import { OrgNotFoundError } from '../errors/org-not-found'

export async function createPet(req: FastifyRequest, reply: FastifyReply) {
  const requestBodySchema = z.object({
    name: z.string(),
    about: z.string(),
    age: z.number(),
    size: z.string(),
    breed: z.string(),
    energy_level: z.string(),
    environment: z.string(),
    org_id: z.string(),
  })

  const petParams = requestBodySchema.parse(req.body)

  try {
    const createPetUseCase = makeCreatePetUseCase()

    await createPetUseCase.execute(petParams)

    return reply.status(201).send({ message: 'Pet created.' })
  } catch (error) {
    if (error instanceof OrgNotFoundError)
      return reply.status(400).send({ message: error.message })

    throw new Error(error.message)
  }
}
