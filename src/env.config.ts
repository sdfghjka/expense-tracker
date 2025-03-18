import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { User } from './entities/User';
import { CreateUserTable1740410687836 } from './migrations/1740410687836-CreateUserTable.ts';
import { CreateRecordAndCategoryTables1742303727237 } from './migrations/1742303727237-CreateRecordAndCategoryTables';
import { SeedCategories1742310386917 } from './migrations/1742310386917-SeedCategories';
export const DbMysqlConfig: DataSourceOptions & SeederOptions = {
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306", 10),
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "accounting",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [CreateUserTable1740410687836, CreateRecordAndCategoryTables1742303727237, SeedCategories1742310386917],
}