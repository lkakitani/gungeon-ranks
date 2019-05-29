const Crypto = require('../services/crypto');
const Passive = require('../models/Passive');

class Rating {

  static async computeVote(ballot) {

    let vote;
    try {
      vote = Crypto.decrypt(ballot);
    } catch (e) {
      console.error('Decrypt error: ' + e);
      return;
    }

    const [chosenId, otherId, timestamp] = vote.split('::');
    const now = Date.now();
    if (now - (parseInt(timestamp)) < process.env.MILISECONDS_INTERVAL) {
      console.log('Vote interval too short');
      return;
    }
    // other validations

    // compute vote, calculate ratings
    const chosenItem = await Passive.findByPk(chosenId);
    const otherItem = await Passive.findByPk(otherId);
    console.log('chosenItem: ' + chosenItem);


  }
}

module.exports = Rating;