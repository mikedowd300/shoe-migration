
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_table').del()
    .then(function () {
        var users = [
        {
          email: 'Sam@example.com',
          password: '123456',
        },
        {
          email: 'john@example.com',
          password: '123456',
        },
        {
          email: 'max@example.com',
          password: '123456',
        },
        {
          email: 'bob@example.com',
          password: '123456',
        },
        {
          email: 'Meg@example.com',
          password: '123456',
        }
      ];
      return knex('user_table').insert(users);
    });
};
