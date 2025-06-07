import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { OrgsRepositoryInterface } from "../orgs-repository-interface";

export class PrismaOrgsRepository implements OrgsRepositoryInterface{
    
    async create(data: Prisma.OrgUncheckedCreateInput){
        const org = await prisma.org.create({data})

        return org;
    }

    async findByEmail(email: string) {
        const org = await prisma.org.findUnique({where:{email: email}})

        return org;
    }

    async findById(id: string){
        const org = await prisma.org.findUnique({where: {id: id}})
        
        return org;
    }


}