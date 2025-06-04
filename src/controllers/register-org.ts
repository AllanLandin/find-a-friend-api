import { FastifyReply, FastifyRequest } from "fastify";
import { makeRegisterOrgUseCase } from "../factories/make-register-org-use-case";
import { z } from "zod";
import { OrgAlreadyExistsError } from "../errors/org-already-exists";

export async function registerOrg(req: FastifyRequest, reply: FastifyReply){
    const registerOrgRequestSchema = z.object({
        email: z.string(),
        password: z.string(),
        name: z.string(),
        description: z.string().nullable(),
        whatsapp: z.string(),
        author_name: z.string(),
        cep: z.string(),
        state: z.string(),
        city: z.string(),
        neighborhood: z.string(),
        street: z.string(),
        latitude: z.number(),
        longitude: z.number ()
    })

    const resultParse = registerOrgRequestSchema.safeParse(req.body) 

    if (resultParse.error) return reply.status(400).send({message: 'Missing information!'})

    const org = resultParse.data
    
    try{
        const registerOrgUseCase = makeRegisterOrgUseCase()
        await registerOrgUseCase.execute(org)

        return reply.status(201).send({message: "Org registered successfully."})
    } catch (error){
        if(error instanceof OrgAlreadyExistsError) return reply.status(409).send({message: error.message})
        
        throw new Error(error.message)
    }
}