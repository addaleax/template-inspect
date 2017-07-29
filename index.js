'use strict';

var assert = require('assert');
var util = require('util');

function forOptions(options) {
  function templateInspect(strings) {
    assert.strictEqual(strings.length, arguments.length);
    var r = [];
    for (var i = 0; i < strings.length - 1; i++) {
      r.push(strings[i]);
      r.push(util.inspect(arguments[i+1], options));
    }
    r.push(strings[strings.length-1]);

    return r.join('');
  }

  return templateInspect;
}

module.exports = forOptions();
module.exports.forOptions = forOptions;
