import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeAuthenticateOrgUseCase } from "../factories/make-register-org-use-case copy";
import { InvalidCredentialsError } from "../errors/invalid-credentials";

export async function authenticateOrg(req: FastifyRequest, reply: FastifyReply){
    const registerOrgRequestSchema = z.object({
        email: z.string(),
        password: z.string(),
    })

    const resultParse = registerOrgRequestSchema.safeParse(req.body) 

    if (resultParse.error) return reply.status(400).send({message: 'Missing information!'})

    const {email, password} = resultParse.data
    
    try{
        const authenticateUseCase = makeAuthenticateOrgUseCase()
        const {org} = await authenticateUseCase.execute({email, password})

        const token = await reply.jwtSign({sub: org.id})

        return reply.status(200).send({token})
    } catch (error){
        if(error instanceof InvalidCredentialsError) return reply.status(403).send({message: error.message})
        
        throw new Error(error.message)
    }
}