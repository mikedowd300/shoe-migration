
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resource_table').del()
    .then(function () {
        var resources = [
        {
          description: 'Sam',
          user_id: 1,
          created_at: new Date()
        },
        {
          description: 'John',
          user_id: 2,
          created_at: new Date()
        },
        {
          description: 'Max',
          user_id: 3,
          created_at: new Date()
        },
        {
          description: 'Bob',
          user_id: 4,
          created_at: new Date()
        },
        {
          description: 'Meg',
          user_id: 5,
          created_at: new Date()
        }
      ];
      return knex('resource_table').insert(resources);
    });
};
