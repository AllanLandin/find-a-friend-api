import { PrismaPetsRepository } from "../../repositorys/prisma/prisma-pets-repository";
import { FindPetsUseCase } from "../find-pets-use-case";

export function makeFindPetsUseCase() {
  const petsRepository = new PrismaPetsRepository();
  const findPetsUseCase = new FindPetsUseCase(petsRepository);
  return findPetsUseCase;
}
