const Crypto = require('../services/crypto');
const Passive = require('../models/Passive');
const PassiveResult = require('../models/PassiveResult');

class Rating {

  static async computeVote(ballot) {
    try {
      const [chosenId, otherId, timestamp] = this.getBallotInfo(ballot);

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

      await PassiveResult
        .build({
          winner_id: chosenId,
          loser_id: otherId,
          unique_vote: ballot,
        })
        .save();
      console.log('vote computed');
    } catch (e) {
      console.error(`vote not computed - ${e.message}`);
      return;
    }

  }

  static getBallotInfo(ballot) {
    const vote = Crypto.decrypt(ballot);
    return vote.split('::');
  }
}

module.exports = Rating;