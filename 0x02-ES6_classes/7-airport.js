/**
* str??
*/
export default class Airport {
  /**
    * Airport a @new class @see {@link Airport}
    * @param {*} name - the name
    * @param {*} code - the code
    */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
