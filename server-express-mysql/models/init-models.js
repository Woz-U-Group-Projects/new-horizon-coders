var DataTypes = require("sequelize").DataTypes;
var _Signups = require("./Signups");

function initModels(sequelize) {
  var Signups = _Signups(sequelize, DataTypes);


  return {
    Signups,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
