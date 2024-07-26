/**
 * Primitive symbol
 */
export default class HolbertonClass {
  /**
    * creates a @new class @see {@link HolbertonClass}
    * @param {*} size - the size
    * @param {*} location - thelocation
    */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](dtyp) {
    if (dtyp === 'number') {
      return this.size;
    }
    if (dtyp === 'string') {
      return this.location;
    }
    return this;
  }
}
