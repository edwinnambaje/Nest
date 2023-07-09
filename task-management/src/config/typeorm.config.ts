import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from 'dotenv';
import { Task } from "src/tasks/tasks.entity";

config();
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.HOST,
    port: 5502,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [Task],
    synchronize: true
}