const { getOptions, castVote, getRanking } = require('../controllers/rankController');

const routes = (app) => {
  app.route('/vote')
    .get(getOptions)
    .post(castVote);

  app.route('/ranks')
    .get(getRanking);
}

module.exports = routes;