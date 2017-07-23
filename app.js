/* eslint-disable no-console */

const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const Koa = require('koa');
const path = require('path');

const app = new Koa();

const data = require('./controllers/data');

app.use(bodyParser());
app.use((ctx, next) => next().catch((e) => {
  ctx.status = e.status;
  ctx.body = e.data;
}));

app.use(route.get('/api/flights', data.all));

// Serve static files
if (process.argv.indexOf('--dev') !== -1) {
  console.log('Running in DEV mode');
  app.use(serve(path.join(__dirname, 'front/dev')));
  app.use(logger());
} else {
  console.log('Running in PROD mode');
  app.use(serve(path.join(__dirname, 'front/prod')));
  app.use(compress());
}

if (!module.parent) {
  app.listen(1333);
  console.log('Listening on port :1333');
}

module.exports = app;
