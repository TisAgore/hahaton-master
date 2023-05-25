/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        userId:           {
            type:       'bigserial',
            primaryKey: true,
        },
        userFio:{
            type:'varchar(500)',
            comment:'Фио сотрудника'
        },
        userPhone:{
            type:'varchar(500)',
            comment:'Номер телефона сотрудника'
        }
    }, {
        ifNotExists: true,
        comment:'Сотрудники'
    })
};

exports.down = pgm => {
};