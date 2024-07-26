/**
 * Add some pricing
 */

import Currency from './3-currency';

export default class Pricing {
  /**
    * creates a @new class @see {@link Pricing}
    * @param {Number} amount  - the amount to be paid
    * @param {Currency} currency - the currency used
    */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * get the amount
   */
  get amount() {
    return this._amount;
  }

  /**
   * set the amount
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * get the  Currency
   */
  get currency() {
    return this._currency;
  }

  /**
   * sets the currency
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  /**
   *
   * @returns display the price
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * @param {Number} amount - the amount
   * @param {Number} conversionRate - the rate
   * @returns the new currency
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
