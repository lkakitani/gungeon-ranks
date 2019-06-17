const { getOptions, castVote, getItemRanking, getGunRanking } = require('../controllers/rankController');

const routes = (app) => {
  app.route('/vote')
    .get(getOptions)
    .post(castVote);

  app.route('/item-ranks')
    .get(getItemRanking);

  app.route('/gun-ranks')
    .get(getGunRanking);
}

module.exports = routes;