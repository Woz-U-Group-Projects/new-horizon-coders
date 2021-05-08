const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    store_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    manager_staff_Id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "store_Id" },
        ]
      },
    ]
  });
};
