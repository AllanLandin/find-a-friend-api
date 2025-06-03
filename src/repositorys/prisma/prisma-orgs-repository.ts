import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class PrismaOrgsRepository{
    async create(data: Prisma.OrgCreateInput){
        const org = await prisma.org.create({data})
        return org;
    }
}