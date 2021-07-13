'use strict';

const Cache = require('./app/lib/cache');

module.exports = app => {
  app.cache = new Cache();
};
