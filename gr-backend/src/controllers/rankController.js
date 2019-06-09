const Passive = require('../models/Passive');
const Crypto = require('../services/crypto');
const Rating = require('../services/rating');

const getOptions = async (req, res) => {
  const voteOptions = await Passive.getCandidates();
  const left = voteOptions[0];
  const right = voteOptions[1];

  res.json({
    ballotLeft: buildBallot(left, right),
    ballotRight: buildBallot(right, left),
    left: buildVoteInfo(left),
    right: buildVoteInfo(right)
  });
}

const castVote = async (req, res) => {
  const ballot = req.body.ballot;
  if (!ballot) {
    res
      .status(400)
      .json({ error: 'invalid post' });
  }

  Rating.computeVote(ballot);
  res.json({ status: 'ok' });
}

const getRanking = async (req, res) => {
  const rankings = await Passive.getRankings();
  res.json(rankings);
}

const buildBallot = (chosenOption, otherOption) => {
  const vote = `${chosenOption.id}::${otherOption.id}::${Date.now()}`;
  return Crypto.encrypt(vote);
}

const buildVoteInfo = (option) => {
  const { id, name, quality, quote, icon_path, wiki_page } = option;
  return { id, name, quality, quote, icon_path, wiki_page };
}

module.exports = {
  getOptions, castVote, getRanking
}