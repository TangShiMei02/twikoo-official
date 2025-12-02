// api/twikoo.js —— 正式版，兼容 Vercel + Node.js 22
const twikoo = require('twikoo');

module.exports = (req, res) => {
  return twikoo(req, res);
};