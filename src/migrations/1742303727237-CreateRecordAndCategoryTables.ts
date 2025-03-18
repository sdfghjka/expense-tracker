import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateRecordAndCategoryTables1742303727237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "category",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "name", type: "varchar", length: "255", isNullable: false }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "record",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "name", type: "varchar", length: "255", isNullable: false },
                { name: "date", type: "date", isNullable: false },
                { name: "amount", type: "int", isNullable: false },
                { name: "userId", type: "int", isNullable: false },
                { name: "categoryId", type: "int", isNullable: false }
            ]
        }), true);

        await queryRunner.createForeignKey("record", new TableForeignKey({
            columnNames: ["categoryId"],
            referencedColumnNames: ["id"],
            referencedTableName: "category",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("record");
        await queryRunner.dropTable("category");
    }

}
