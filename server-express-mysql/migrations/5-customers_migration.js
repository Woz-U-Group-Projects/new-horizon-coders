'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "customers", deps: []
 * addIndex "password_Id" to table "customers"
 * addIndex "email" to table "customers"
 * addIndex "PRIMARY" to table "customers"
 *
 **/

var info = {
    "revision": 5,
    "name": "customers_migration",
    "created": "2021-05-08T22:48:54.766Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "customers",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "customers",
            [{
                "name": "password_Id"
            }],
            {
                "indexName": "password_Id",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "customers",
            [{
                "name": "email"
            }],
            {
                "indexName": "email",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "customers",
            [{
                "name": "customer_Id"
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
