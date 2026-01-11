"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("park_officers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        field: "full_name",
        type: Sequelize.STRING,
        allowNull: false,
      },
      badgeNumber: {
        field: "badge_name",
        type: Sequelize.STRING,
        allowNull: false,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isWorked: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        field: 'is_worked',
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("park_officers");
  },
};
