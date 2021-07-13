'use strict';

class Cache {
  constructor() {
    this.cache = new Map();
  }
  has(key) {
    return this.cache.has(key);
  }
  get(key) {
    return this.cache.get(key);
  }
  set(key, value) {
    this.cache.set(key, value);
  }
  keys() {
    return this.cache.keys();
  }
}
module.exports = Cache;
