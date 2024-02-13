'use strict';

/** @type {import('sequelize-cli').Migration} */

const {DataTypes}= require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.addColumn('Person', 'petName', {
          type: DataTypes.STRING
        }, { transaction }),
        queryInterface.addColumn('Person', 'favoriteColor', {
          type: DataTypes.STRING,
        }, { transaction })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.removeColumn('Person', 'petName', { transaction }),
        queryInterface.removeColumn('Person', 'favoriteColor', { transaction })
      ]);
    });
  }
};
