const momonet = require('moment');
const tz = require('moment-timezone');

module.exports = (req, res, next) => {
  const time = momonet().tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss');
  console.log(`${time} | ${req.method} from ${req.url}`)
  next();
}