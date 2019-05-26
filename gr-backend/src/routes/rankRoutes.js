const { getOptions, castVote } = require('../controllers/rankController');

const routes = (app) => {
  app.route('/vote')
    .get(getOptions)
    .post(castVote);
}

module.exports = routes;