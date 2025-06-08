import { randomUUID } from "node:crypto";

export function makeOrg() {
  const org = {
    email: `amigodopet@${randomUUID()}gmail.com`,
    password: `teste@${randomUUID()}`,
    name: "Amigo do pet",
    description: "A Org de pet mais amada pelos bichos.",
    whatsapp: "(19)9222-2222",
    author_name: "Allan",
    cep: "13287-222",
    state: "SP",
    city: "Vinhedo",
    neighborhood: "Nova Vinhedo",
    street: "Rua dos cocais, 80",
    latitude: -23.154418,
    longitude: -47.0402,
  };

  return org;
}
