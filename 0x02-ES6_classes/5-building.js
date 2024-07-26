/**
 * a building class
 */
export default class Building {
  /**
    * create a @new class @see {@link Building}
    * @param {Number} sqft - the len
    */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== 'Building') {
      if (typeof (this.evacuationWarningMessage) !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  set sqft(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Sqft is not a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
