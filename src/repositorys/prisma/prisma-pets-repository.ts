import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { FindAllParams, PetsRepositoryInterface } from "../pets-repository-interface";

export class PrismaPetsRepository implements PetsRepositoryInterface{

     async create(data: Prisma.PetUncheckedCreateInput){
        const pet = await prisma.pet.create({data: data})

        return pet;
    }

    async findPetById(id: string){
        const pet = await prisma.pet.findUnique({where: {id: id}})

        return pet;
    };

    async findAllByParams(params: FindAllParams){
        const pets = await prisma.pet.findMany({
            where:{
                age: params.age,
                size: params.size,
                energy_level: params.energy_level,
                environment: params.environment,
                org: {city: {contains: params.city, mode: "insensitive"}}
            }
        })

        return pets;
    }
}