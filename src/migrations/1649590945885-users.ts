import {MigrationInterface, QueryRunner} from "typeorm";

export class users1649590945885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE dbname.users (
                id INT NOT NULL AUTO_INCREMENT, 
                email TEXT NOT NULL, 
                password VARCHAR(255) NOT NULL, 
                name VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL, 
                role ENUM('admin', 'member') NOT NULL DEFAULT 'member', 
                status TINYINT NOT NULL DEFAULT '1', 
                created_by INT NULL, 
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
                updated_by INT NULL, 
                updated_at TIMESTAMP on update CURRENT_TIMESTAMP NULL, 
                PRIMARY KEY (id), 
                UNIQUE (email), 
                INDEX (email), 
                INDEX (role), 
                INDEX (status), 
                INDEX (created_by), 
                INDEX (created_at), 
                INDEX (updated_by), 
                INDEX (updated_at)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users `);
    }

}
