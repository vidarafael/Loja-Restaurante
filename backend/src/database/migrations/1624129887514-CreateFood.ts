import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFood1624129887514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "foods",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "valor",
                        type: "float"
                    },
                    {
                        name: "tipo",
                        type: "varchar"
                    },
                    {
                        name: "quantidade",
                        type: "int",
                        default: 1
                    }
                ]
            })
        )
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("foods")
    }

}
