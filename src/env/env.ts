import {z} from "zod"
import "dotenv/config"

const schema = z.object({
    DATABASE_URL: z.string(),
    WEB_SERVER_PORT: z.coerce.number().default(3333),
    JWT_SECRET: z.string()
})

export const env = schema.parse(process.env)
