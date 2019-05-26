const db = require('../db');
const Passive = require('../models/Passive');

const getOptions = async (req, res) => {
  const voteOptions = await Passive.findAll({
    limit: 2,
    order: ['vote_count']
  });
  console.log('voteOptions: ', voteOptions);
  res.json({ teste: 'ok get' });
}

const castVote = async (req, res) => {
  res.json({ teste: 'ok post' });
}

module.exports = {
  getOptions, castVote
}