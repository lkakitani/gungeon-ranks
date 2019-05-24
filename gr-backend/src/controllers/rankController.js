const db = require('../db');
const Passive = require('../models/Passive');

const testGet = async (req, res) => {
  const all = await Passive.findAll();
  console.log(all);
  res.json({ teste: 'ok get' });
}

const testPost = (req, res) => {
  res.json({ teste: 'ok post' });
}

module.exports = {
  testGet, testPost
}