// 临时调试版本 —— 直接返回环境变量
module.exports = (req, res) => {
  res.json({
    MONGODB_URI: process.env.MONGODB_URI || 'NOT_SET',
    TWIKOO_ADMIN_EMAIL: process.env.TWIKOO_ADMIN_EMAIL || 'NOT_SET'
  });
};