const Crypto = require('../services/crypto');
const Passive = require('../models/Passive');
const PassiveResult = require('../models/PassiveResult');
const EloRank = require('elo-rank');
const elo = new EloRank(32);

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

      await PassiveResult
        .build({
          winner_id: chosenId,
          loser_id: otherId,
          unique_vote: ballot,
        })
        .save();

      const { winnerElo, loserElo } = this.calculateElo({
        scoreWinner: chosenItem.elo_rating,
        scoreLoser: otherItem.elo_rating
      });

      chosenItem.elo_rating = winnerElo;
      otherItem.elo_rating = loserElo;
      chosenItem.vote_count++;
      otherItem.vote_count++;

      await chosenItem.save();
      await otherItem.save();

      console.log('vote computed successfully');
    } catch (e) {
      console.error(`vote not computed - ${e.message}`);
      return;
    }

  }

  static getBallotInfo(ballot) {
    const vote = Crypto.decrypt(ballot);
    return vote.split('::');
  }

  static calculateElo(scores) {
    const { scoreWinner, scoreLoser } = scores;
    const expectedScoreWinner = elo.getExpected(scoreWinner, scoreLoser);
    const expectedScoreLoser = elo.getExpected(scoreLoser, scoreWinner);
    return {
      winnerElo: elo.updateRating(expectedScoreWinner, 1, scoreWinner),
      loserElo: elo.updateRating(expectedScoreLoser, 0, scoreLoser)
    };
  }
}

module.exports = Rating;