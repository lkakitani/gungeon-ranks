const Sequelize = require('sequelize');
const db = require('../db');

const ItemResult = db.define('items_result', {
  winner_id: Sequelize.INTEGER,
  loser_id: Sequelize.INTEGER,
  unique_vote: Sequelize.STRING,
});

module.exports = ItemResult;
