import { Pet, Prisma } from "@prisma/client";

export interface FindAllParams {
  city: string;
  age?: number;
  size?: string;
  energy_level?: string;
  environment?: string;
}

export interface PetsRepositoryInterface {
  create: (data: Prisma.PetUncheckedCreateInput) => Promise<Pet>;
  findPetById: (id: string) => Promise<Pet | null>;
  findAllByParams: (params: FindAllParams) => Promise<Pet[]>;
}
