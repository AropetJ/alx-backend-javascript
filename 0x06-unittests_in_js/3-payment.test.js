const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const payMe = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(payMe.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(payMe.calculateNumber.callCount).to.be.equal(1);
    payMe.calculateNumber.restore();
  });
});
