"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("protocols", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      serviceNotes: {
        allowNull: false,
        field: "service_notes",
        type: Sequelize.TEXT,
      },
      officerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "officer_id",
        references: {
          model: {
            tableName: "park_officers",
            key: "id",
          },
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      fineAmount: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        field: "fine_amount",
      },
      violatorFullName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "violator_full_name",
      },
      violatorPassportNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "violator_passport_number",
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
    await queryInterface.dropTable("protocols");
  },
};
