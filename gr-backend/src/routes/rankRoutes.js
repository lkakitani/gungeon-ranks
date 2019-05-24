const { testGet, testPost } = require('../controllers/rankController');

const routes = (app) => {
  app.route('/test')
    .get(testGet)
    .post(testPost);

  // app.route('/download/:id')
  //   .get(getDownload)
  //   .put(updateDownload)
  //   .delete(deleteDownload)
}

module.exports = routes;