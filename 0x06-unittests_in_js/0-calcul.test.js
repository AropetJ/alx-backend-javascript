const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });
  it('should return 6', () => {
    assert.strictEqual(calculateNumber(3, 3), 6);
  });
  it('should return 3', () => {
    assert.strictEqual(calculateNumber(1.4, 1.5), 3);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1.4, 1.4), 3);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.1, 0.6), 1);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.1, 0.4), 0);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.6, 0.4), 1);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.6, 0.6), 1);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 1);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.4, 0.5), 1);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.5, 0.4), 1);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.4, 0.6), 1);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0.6, 0.5), 1);
  });
});
