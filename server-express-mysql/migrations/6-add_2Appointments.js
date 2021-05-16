'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Signups", deps: []
 * addIndex "PRIMARY" to table "Signups"
 *
 **/

var info = {
    "revision": 6,
    "name": "add_2Appointments",
    "created": "2021-05-13T06:26:24.353Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Signups",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Signups",
            [{
                "name": "id"
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
