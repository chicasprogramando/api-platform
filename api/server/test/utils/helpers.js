const models = require("../../models");

const cleanDB = async () => {
  return await Promise.all(
    Object.keys(models).map(key => {
      // only destroy our tables data, not sequelize
      if (["sequelize", "Sequelize"].includes(key)) return null;
      return models[key].destroy({ where: {}, force: true });
    })
  );
};

module.exports = {
  cleanDB
};
