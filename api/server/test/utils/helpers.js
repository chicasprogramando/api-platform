const models = require("../../models");

/** None of these tables should be truncated before test calls !!!
  * Specialty model corresponds to a table with constant values, used inside Profile tests and MOCK
    if we delete it we don't have values to use in those tests and the MOCK will have wrong values
  * Sequelize tables should never be cleared as well.
  * If other tables are being seeded with constant values, go ahead and add the models to the array,
    otherwise you should start with fresh empty tables for testing purposes.
*/
const specialTables = ["sequelize", "Sequelize", "Specialty", "Skill"];

const cleanDB = async (done) => {
   await Promise.all(
    Object.keys(models).map((key) => {
      // only destroy our tables data, not sequelize
      if (specialTables.includes(key)) return null;
      return models[key].destroy({ where: {}, force: true });
    })
  );
   done()
};

module.exports = {
  cleanDB,
};
