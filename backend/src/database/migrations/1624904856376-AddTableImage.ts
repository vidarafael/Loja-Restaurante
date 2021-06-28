import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddTableImage1624904856376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "foods",
            new TableColumn({
                name: "imagem",
                type: "varchar",
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("foods", "imagem")
    }

}
