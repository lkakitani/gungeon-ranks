const Sequelize = require('sequelize');
const db = require('../db');

const Passive = db.define('passive', {
  name: Sequelize.STRING,
  icon_path: Sequelize.STRING,
  quote: Sequelize.STRING,
  quality: Sequelize.STRING,
  wiki_page: Sequelize.STRING,
  elo_rating: Sequelize.INTEGER,
  vote_count: Sequelize.INTEGER
});

Passive.getCandidates = function () {
  return this.findAll({
    limit: 2,
    order: Sequelize.fn('RANDOM')
  });
}

module.exports = Passive;
