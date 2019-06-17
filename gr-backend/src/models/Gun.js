const Sequelize = require('sequelize');
const db = require('../db');

const Gun = db.define('gun', {
  name: Sequelize.STRING,
  quote: Sequelize.STRING,
  quality: Sequelize.STRING,
  wiki_page: Sequelize.STRING,
  elo_rating: Sequelize.INTEGER,
  vote_count: Sequelize.INTEGER
});

Gun.getCandidates = function () {
  return this.findAll({
    limit: 2,
    order: Sequelize.fn('RANDOM')
  });
}

Gun.getRankings = function () {
  return this.findAll({
    order: [['elo_rating', 'DESC']]
  });
}

module.exports = Gun;
