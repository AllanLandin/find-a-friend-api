import bcrypt from "bcryptjs";
import { OrgAlreadyExistsError } from "../errors/org-already-exists";
import { OrgsRepositoryInterface } from "../repositorys/orgs-repository-interface";

interface OrgCreationParams {
  id?: string;
  name: string;
  description?: string;
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

export class CreateOrgUseCase {
  constructor(private orgRepository: OrgsRepositoryInterface) {}

  async execute(data: OrgCreationParams) {
    const orgWithSameEmail = await this.orgRepository.findByEmail(data.email);

    if (orgWithSameEmail) {
      throw new OrgAlreadyExistsError();
    }

    const hashedPassword = await bcrypt.hash(data.password, 6);

    const newOrg = await this.orgRepository.create({
      ...data,
      password: hashedPassword,
    });
    return newOrg;
  }
}
