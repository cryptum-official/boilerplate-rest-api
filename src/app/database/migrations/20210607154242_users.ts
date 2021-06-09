import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').notNullable().primary();
    table.string('name').notNullable();
    table.dateTime('created_at').notNullable();
    table.dateTime('updated_at').notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}

