import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCategories1742310386917 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          INSERT INTO category (name) VALUES 
          ('家居物業'),
          ('交通出行'),
          ('休閒娛樂'),
          ('餐飲食品'),
          ('其他')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          DELETE FROM category WHERE name IN 
          ('家居物業', '交通出行', '休閒娛樂', '餐飲食品', '其他')
        `);
    }
}
