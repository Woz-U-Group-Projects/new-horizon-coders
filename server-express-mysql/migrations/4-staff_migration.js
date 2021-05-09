'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "staff", deps: []
 * addIndex "PRIMARY" to table "staff"
 *
 **/

var info = {
    "revision": 4,
    "name": "staff_migration",
    "created": "2021-05-08T22:41:39.749Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "staff",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "staff",
            [{
                "name": "staff_Id"
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
