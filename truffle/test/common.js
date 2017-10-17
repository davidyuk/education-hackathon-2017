/* global assert */

module.exports = {
  assertError: error =>
    assert.include(error.message, 'VM Exception while processing transaction'),
};
