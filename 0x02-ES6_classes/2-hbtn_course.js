/**
 * A holberton course
 */
export default class HolbertonCourse {
  /**
    *Creates a new @see {@link HolbertonCourse}
    *
    * @param {String} name - the name of the course
    * @param {Number} length - the length of the course
    * @param {String[]} students - the students in the course
    */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * set the name of the course
   */
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * set the length
   */
  set length(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * sets the students of the course
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }

  /**
   * gets the name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * gets the length of the course
   */
  get length() {
    return this._length;
  }

  /**
   * gets the students of the course
   */
  get students() {
    return this._students;
  }
}
