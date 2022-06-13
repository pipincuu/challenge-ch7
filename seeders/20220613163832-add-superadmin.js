"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Superadmins", [
      {
        username: "superadmin",
        password: await bcrypt.hash("adminkece", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "superman",
        password: await bcrypt.hash("supermancute", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete("Superadmins", {
      [Op.or]: [{ username: "superadmin" }, { username: "superman" }],
    });
  },
};