import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671021001846 implements MigrationInterface {
    name = 'default1671021001846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbrifa\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(100) NOT NULL, \`name\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`phone\` varchar(20) NOT NULL, \`cpf\` varchar(20) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tbrifa\``);
    }

}
