import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { IOrgsRepository } from "../interfaces/orgs-repository-interface";

export class PrismaOrgsRepository implements IOrgsRepository{
    
    async registerNewOrg(data: Prisma.OrgCreateInput){
        const org = await prisma.org.create({data})
        return org;
    }

    async findByEmail(email: string) {
        const org = await prisma.org.findUnique({where:{email: email}})
        return org;
    }


}