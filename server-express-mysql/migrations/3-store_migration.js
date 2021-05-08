'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "store", deps: []
 * addIndex "PRIMARY" to table "store"
 *
 **/

var info = {
    "revision": 3,
    "name": "store_migration",
    "created": "2021-05-08T22:38:51.703Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "store",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "store",
            [{
                "name": "store_Id"
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
