'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dom = require('./Dom');

Object.keys(_Dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Dom[key];
    }
  });
});