# Find a Friend API 🐶
Uma aplicação em nodeJS que simula o controle de pets em adoção de diferentes orgs.

# Conceitos abordados 📘
- SOLID
- Repository Pattern
- Factory Pattern
- Testes E2E (Em desenvolvimento 🪫)
- Containers (Docker)

# Tecnologias utilizadas 👨‍💻
- Typescript
- Prisma ORM
- Docker
- Fastify

# Como rodar o projeto ❔

## Localmente 💻

1 - Para rodar a aplicação localmente, comece baixando o repositório com o seguinte comando:

`git clone https://github.com/AllanLandin/find-a-friend-api.git`

2 - Instale as dependências necessárias com `npm i`

3 - Depois, defina as variáveis de ambiente conforme o arquivo `.env.example` e retire a extensão `.example` do arquivo

4 - Depois, rode o comando `docker compose up -d`. Esse comando irá rodar o container especificado no arquivo `dockercompose.yml`

5 - Rode as migrations do banco de dados com `npm run migrate:dev`

6 - Por fim, execute a aplicação com `npm run dev`!

# Rotas 🚋

### 🟢 POST /auth/org/register
- Registra uma org no banco de dados
- É importante enviar o body conforme abaixo:
  - "email": `string`, "password": `string`, "name": `string`, "description": `string`, "whatsapp": `string`, "author_name": `string`, "cep": `string`, "state": `string`, "city": `string`, "neighborhood": `string`, "street": `string`, "latitude": `number` "longitude": `number`

### 🟢 POST /auth/org/login
- Autentica uma org, retornando um token `JWT` que deverá ser incluído no `Authorization header` das rotas privadas
- É importante enviar o body conforme abaixo:
  - "email": `string`, "password": `string`

### 🟢 POST /pets/create
- Cria um pet
- "name": `string`, "about": `string`, "age": `string`, "size": `string`, "breed": `string`, "energy_level": `string`, "environment": `string`, "org_id": `number`

### 🟢 POST /pets
- Procura um ou mais pets que correpondem aos querys params passados pela URL.
- Os parâmetros são os seguintes:
  - "city": `string`, "age": `number`, "size": `string`, "energy_level": `string`, "environment": `string`
  - O único parâmetro obrigatório é o parâmetro `city`

### 🟢 POST /pets/:id
- Retorna um pet pelo ID dele
- O `id` deve ser informado no parâmetro da URL



