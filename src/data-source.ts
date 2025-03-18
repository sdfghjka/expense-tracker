import { DataSource } from "typeorm";
import { DbMysqlConfig } from "./env.config";

export const DbMysql = new DataSource(DbMysqlConfig);
export const connectDatabase = async () => {
    try {
        await DbMysql.initialize();
        console.log("MySQL 資料庫連線成功");
    } catch (error) {
        console.error("資料庫連線失敗:", error);
    }
};