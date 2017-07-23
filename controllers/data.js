const flights = require('../models').flights;

module.exports.all = (ctx, next) => new Promise((resolve, reject) => {
  if ('GET' != ctx.method) return next;
    ctx.body = flights;
    resolve();
});