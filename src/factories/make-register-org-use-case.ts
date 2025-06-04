import { PrismaOrgsRepository } from "../repositorys/prisma/prisma-orgs-repository";
import { RegisterOrgUseCase } from "../use-cases/register-org-use-case";

export function makeRegisterOrgUseCase(){
    const orgRepository = new PrismaOrgsRepository()
    const registerOrgUseCase = new RegisterOrgUseCase(orgRepository)
    return registerOrgUseCase
}