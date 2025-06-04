import { Org, Prisma } from "@prisma/client";

export interface IOrgsRepository{
    registerNewOrg: (data: Prisma.OrgCreateInput)=>Promise<Org>
    findByEmail: (email: string) => Promise<Org | null>
}