import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from 'dotenv';

config();
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.HOST,
    port: 5502,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true
}