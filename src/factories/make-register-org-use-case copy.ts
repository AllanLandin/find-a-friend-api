import { PrismaOrgsRepository } from "../repositorys/prisma/prisma-orgs-repository";
import { AuthenticateOrgUseCase } from "../use-cases/authenticate-org-use-case";

export function makeAuthenticateOrgUseCase(){
    const orgRepository = new PrismaOrgsRepository()
    const authenticateOrgUseCase = new AuthenticateOrgUseCase(orgRepository)
    return authenticateOrgUseCase
}