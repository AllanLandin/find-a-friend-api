import bcrypt from "bcryptjs";
import { OrgAlreadyExistsError } from "../errors/org-already-exists";
import { IOrgsRepository } from "../repositorys/interfaces/orgs-repository-interface";

interface IOrgCreationInput{
    id?: string;
    name: string;
    description?: string | null;
    email: string;
    password: string;
    whatsapp: string;
    author_name: string;
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    latitude: number;
    longitude: number;
}

export class RegisterOrgUseCase{
    constructor(private orgRepository: IOrgsRepository){}

    async execute(data: IOrgCreationInput){
        const orgWithSameEmail = await this.orgRepository.findByEmail(data.email)
        
        if(orgWithSameEmail){
            throw new OrgAlreadyExistsError();
        }

        const hashedPassword = await bcrypt.hash(data.password, 6)

        const newOrg = await this.orgRepository.registerNewOrg({...data, password: hashedPassword})
        return newOrg;
    }
}