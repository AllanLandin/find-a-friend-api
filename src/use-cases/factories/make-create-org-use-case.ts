import { PrismaOrgsRepository } from "../../repositorys/prisma/prisma-orgs-repository"
import { CreateOrgUseCase } from "../create-org-use-case"

export function makeCreateOrgUseCase(){
    const orgsRepository = new PrismaOrgsRepository()

    const makeCreateOrgUseCase = new CreateOrgUseCase(orgsRepository)
    
    return makeCreateOrgUseCase
}