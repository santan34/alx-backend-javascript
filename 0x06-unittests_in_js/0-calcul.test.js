const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('Testing a function to add two rounded numbers', function () {
  it('should give the correct sum of ints', function () {
    assert.strictEqual(calculateNumber(2, 88), 90);
  });

  it('should give the correct sum of whole numbers', function () {
    assert.strictEqual(calculateNumber(2.0, 8.0), 10);
  });

  it('should give the correct down rounds', function () {
    assert.strictEqual(calculateNumber(2.4, 8.1), 10);
  });

  it('should give the correct up rounds', function () {
    assert.strictEqual(calculateNumber(2.7, 8.8), 12);
  });

  it('should give the correct sum of downs and ups', function () {
    assert.strictEqual(calculateNumber(2.5, 8.1), 11);
  });

  it('should give the correct sum far rounds', function () {
    assert.strictEqual(calculateNumber(2.07, 8.6666666665), 11);
  });

  it('should give the correct with trailing 99999999', function () {
    assert.strictEqual(calculateNumber(2.999999999, 9.0999999999999999), 12);
  });
});
