export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('Size must be a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
