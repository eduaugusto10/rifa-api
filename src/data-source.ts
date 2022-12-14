import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm"

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "mysql",
    // port: port,
    // host: process.env.DB_HOST_DEV,
    // username: process.env.DB_USER_DEV,
    // password: process.env.DB_PASS_DEV,
    // database: process.env.DB_NAME_DEV,
    port: port,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})