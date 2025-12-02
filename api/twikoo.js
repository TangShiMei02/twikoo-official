module.exports = (req, res) => {
  res.json({
    MONGODB_URI: process.env.MONGODB_URI ? '✅ 已设置' : '❌ 未设置',
    TWIKOO_ADMIN_EMAIL: process.env.TWIKOO_ADMIN_EMAIL || '未设置'
  });
};