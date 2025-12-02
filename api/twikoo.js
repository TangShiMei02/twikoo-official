// ✅ 纯 CommonJS 写法，Vercel 最兼容
const twikoo = require('twikoo');

module.exports = (req, res) => {
  return twikoo(req, res);
};