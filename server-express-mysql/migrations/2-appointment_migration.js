'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "appointments", deps: []
 * addIndex "PRIMARY" to table "appointments"
 *
 **/

var info = {
    "revision": 2,
    "name": "appointment_migration",
    "created": "2021-05-08T22:29:22.671Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "appointments",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "appointments",
            [{
                "name": "appointment_Id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
