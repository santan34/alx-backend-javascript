/**
 * inheritance
 */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
    * the @new class for @see {@link SkyHighBuilding}
    * @param {Number} sqft  - the len
    * @param {Number} floors - the floors
    */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
