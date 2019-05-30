const Sequelize = require('sequelize');
const db = require('../db');

const PassiveResult = db.define('passives_result', {
  left_item_id: Sequelize.INTEGER,
  right_item_id: Sequelize.INTEGER,
  winner_id: Sequelize.INTEGER,
  loser_id: Sequelize.INTEGER,
  unique_vote: Sequelize.STRING,
});

module.exports = PassiveResult;
