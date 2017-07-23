const flights = require('../models').flights;

module.exports.all = (ctx, next) => new Promise((resolve) => {
  if (ctx.method !== 'GET') return next;
  ctx.body = flights;
  return resolve();
});
