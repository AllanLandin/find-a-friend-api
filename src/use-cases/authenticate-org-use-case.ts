import bcrypt from "bcryptjs";
import { IOrgsRepository } from "../repositorys/interfaces/orgs-repository-interface";
import { InvalidCredentialsError } from "../errors/invalid-credentials";

interface IAuthRequest{
    email: string
    password: string
}

export class AuthenticateOrgUseCase{
    constructor(private orgRepository: IOrgsRepository){}

    async execute({email, password}: IAuthRequest){
        const org = await this.orgRepository.findByEmail(email)
        
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