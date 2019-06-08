const Sequelize = require('sequelize');
const db = require('../db');

const Gun = db.define('gun', {
  name: Sequelize.STRING,
  icon_path: Sequelize.STRING,
  quote: Sequelize.STRING,
  quality: Sequelize.STRING,
  wiki_page: Sequelize.STRING,
  boss_rating: Sequelize.INTEGER,
  room_rating: Sequelize.INTEGER,
  vote_count: Sequelize.INTEGER
});

module.exports = Gun;
