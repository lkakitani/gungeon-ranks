const Item = require('../models/Item');
const Gun = require('../models/Gun');
const Crypto = require('../services/crypto');
const Rating = require('../services/rating');

const getOptions = async (req, res) => {

  let voteOptions;
  if (Math.random() < process.env.ITEM_PROBABILITY) {
    voteOptions = await Item.getCandidates();
  } else {
    voteOptions = await Gun.getCandidates();
  }
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

const getItemRanking = async (req, res) => {
  const rankings = await Item.getRankings();
  res.json(rankings);
}

const getGunRanking = async (req, res) => {
  const rankings = await Gun.getRankings();
  res.json(rankings);
}

const buildBallot = (chosenOption, otherOption) => {
  const type = (chosenOption instanceof Gun) ? 'gun' : 'item';
  const vote = `${chosenOption.id}::${otherOption.id}::${type}::${Date.now()}`;
  return Crypto.encrypt(vote);
}

const buildVoteInfo = (option) => {
  const { id, name, quality, quote, wiki_page } = option;
  return { id, name, quality, quote, wiki_page };
}

module.exports = {
  getOptions, castVote, getItemRanking, getGunRanking
}