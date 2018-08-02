
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', (students) => {
        students.increments('id'),
        students.text('firstName'),
        students.text('lastName'),
        students.text('priorOccupation'),
        students.text('homeTown')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
