import { FastifyReply, FastifyRequest } from "fastify";

export async function authMiddleware(req: FastifyRequest, reply: FastifyReply){
    try{
        await req.jwtVerify()
    } catch(error){
        reply.status(401).send({message: "Unauthorized"})
    }
}