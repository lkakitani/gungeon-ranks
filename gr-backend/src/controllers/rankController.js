const Passive = require('../models/Passive');
const Crypto = require('../services/crypto');

const getOptions = async (req, res) => {
  const voteOptions = await Passive.findAll({
    limit: 2,
    order: ['vote_count']
  });
  const left = voteOptions[0];
  const right = voteOptions[1];

  res.json({
    ballotLeft: buildBallot(left, right),
    ballotRight: buildBallot(right, left),
    left,
    right
  });
}

const castVote = async (req, res) => {
  res.json({ teste: 'ok post' });
}

const buildBallot = (chosenOption, otherOption) => {
  const vote = `${chosenOption.id}::${otherOption.id}::${Date.now()}`;
  return Crypto.encrypt(vote);
}

module.exports = {
  getOptions, castVote
}