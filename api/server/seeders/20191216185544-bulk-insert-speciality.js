"use strict";
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Specialty",
      [
        {
          
          id: uuidv4(),
          description: "Front End",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Back End",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "QA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "DevOps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Data Base Engineer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "UI Designer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "UX Designer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Android Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "iOS Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Product Management",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Full Stack Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Game Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Embedded Engineer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Data Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          description: "Machine Learning",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Specialty", null, {});
  }
};
