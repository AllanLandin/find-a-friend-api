import { PetsRepositoryInterface } from "../repositorys/pets-repository-interface";
import { OrgsRepositoryInterface } from "../repositorys/orgs-repository-interface";
import { OrgNotFoundError } from "../errors/org-not-found";

interface PetsCreationParams {
  name: string
  about: string
  age: number
  size: string
  energy_level: string
  environment: string
  org_id: string
}

export class CreatePetUseCase{
    constructor(private orgsRepository: OrgsRepositoryInterface, private petsRepository: PetsRepositoryInterface){}

    async execute(data: PetsCreationParams){
        const org = await this.orgsRepository.findById(data.org_id)
        
        if(!org) {
            throw new OrgNotFoundError()
        }

       const pet = await this.petsRepository.create({
            name: data.name, 
            about: data.about,
            age: data.age,
            size: data.size,
            energy_level: data.energy_level,
            environment: data.environment,
            orgId: data.org_id
        })

        return pet;
    }

}