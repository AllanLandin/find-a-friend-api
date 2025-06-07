import bcrypt from "bcryptjs";
import { InvalidCredentialsError } from "../errors/invalid-credentials";
import { OrgsRepositoryInterface } from "../repositorys/orgs-repository-interface";

interface AuthParams{
    email: string
    password: string
}

export class AuthenticateOrgUseCase{
    constructor(private orgsRepository: OrgsRepositoryInterface){}

    async execute({email, password}: AuthParams){
        const org = await this.orgsRepository.findByEmail(email)
        
        if(!org){
            throw new InvalidCredentialsError();
        }
        
        const passwordMatches = await bcrypt.compare(password, org.password)
        
        if(!passwordMatches){
            throw new InvalidCredentialsError();
        }
        
        return {org}
    }
}