
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_table', table => {
    table.increments()
    table.string("email").notNullable()
    table.string("password").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_table')
}
