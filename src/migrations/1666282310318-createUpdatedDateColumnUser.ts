import { MigrationInterface, QueryRunner } from "typeorm";

export class createUpdatedDateColumnUser1666282310318 implements MigrationInterface {
    name = 'createUpdatedDateColumnUser1666282310318'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
