
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {firstName: 'Michael', lastName: 'Coons', priorOccupation: 'Director of IT', homeTown: 'Bloomington, IN'},
        {firstName: 'Ben',  lastName: 'Austin', priorOccupation: 'Social Work', homeTown: 'Denver'},
        {firstName: 'Natalie', lastName: 'Todd', priorOccupation: 'Recruiter', homeTown: 'Anchorage'}      
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE game_id_seq RESTART WITH 4;")
    });
};
