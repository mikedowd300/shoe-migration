
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource_table', table => {
    table.increments()
    table.text("description")
    table.integer("user_id").references("user_table.id").unsigned().onDelete("cascade").notNull()
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resource_table')
}
