import { IncompletePayload } from "../errors/incomplete-payload";
import { OrgsRepositoryInterface } from "../repositorys/orgs-repository-interface";
import {
  FindAllParams,
  PetsRepositoryInterface,
} from "../repositorys/pets-repository-interface";

export class FindPetsUseCase {
  constructor(private petsRepository: PetsRepositoryInterface) {}

  async execute(data: FindAllParams) {
    if (!data.city) {
      throw new IncompletePayload();
    }

    const pets = await this.petsRepository.findAllByParams(data);

    return pets;
  }
}
