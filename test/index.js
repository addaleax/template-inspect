'use strict';

const i = require('../');
const assert = require('assert');

describe('i', function() {
  it('inspects stuff', function() {
    assert.strictEqual(
      i `The i function looks like ${i}.`,
      'The i function looks like { [Function: templateInspect] ' +
      'forOptions: [Function: forOptions] }.'
      );
  });
});
