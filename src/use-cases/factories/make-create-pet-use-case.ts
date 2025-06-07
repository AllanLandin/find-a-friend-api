import { PrismaOrgsRepository } from "../../repositorys/prisma/prisma-orgs-repository"
import { PrismaPetsRepository } from "../../repositorys/prisma/prisma-pets-repository"
import { CreatePetUseCase } from "../create-pet-use-case"


export function makeCreatePetUseCase(){
    const petsRepository = new PrismaPetsRepository()
    const orgsRepository = new PrismaOrgsRepository()
    
    const createPetUseCase = new CreatePetUseCase(orgsRepository, petsRepository)
    
    return createPetUseCase
}