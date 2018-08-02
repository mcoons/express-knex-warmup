const database = require('./database-connection');

module.exports = {
    list(){
        return database('students').select();
    },
    read(id){
        return database('students').where('id','=',id).first();
    },
    create(resolution){
        return  database('students').insert(resolution).returning('*').then( record => record[0]);
    },
    update(id, resolution){
        return database('students').where('id','=',id).returning('id').update(resolution);
    },
    delete(id){
        return database('students').where('id','=',id).delete();
    }
};