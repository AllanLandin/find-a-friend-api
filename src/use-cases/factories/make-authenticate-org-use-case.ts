import { PrismaOrgsRepository } from "../../repositorys/prisma/prisma-orgs-repository"
import { AuthenticateOrgUseCase } from "../authenticate-org-use-case"


export function makeAuthenticateOrgUseCase(){
    const orgsRepository = new PrismaOrgsRepository()
    const authenticateOrgUseCase = new AuthenticateOrgUseCase(orgsRepository)
    return authenticateOrgUseCase
}