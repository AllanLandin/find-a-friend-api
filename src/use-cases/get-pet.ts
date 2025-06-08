import { PetNotFound } from "../errors/pet-not-found";
import { PetsRepositoryInterface } from "../repositorys/pets-repository-interface";

interface GetPetRequestUseCase {
  id: string;
}

export class GetPetUseCase {
  constructor(private petsRepository: PetsRepositoryInterface) {}

  async execute({ id }: GetPetRequestUseCase) {
    const pet = await this.petsRepository.findPetById(id);

    if (!pet) {
      throw new PetNotFound();
    }

    return pet;
  }
}
