export default class Curreny {
  /**
   * creatse a @new currency class @see {@link Curreny}
   * @param {string} code - the string code
   * @param {string} name - the name of the currecny
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * set the code
   */
  set code(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * set the name
   */
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * get the code
   */
  get code() {
    return this._code;
  }

  /**
   * get the name
   */
  get name() {
    return this._name;
  }

  /**
   * @returns this(code)
   */
  displayFullCurrency() {
    return `${this.name}(${this.code})`;
  }
}
