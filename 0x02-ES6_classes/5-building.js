export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be an integer');
    } else {
      this._sqft = sqft;
    }
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('sqft must be an integer');
    } else {
      this._sqft = newSqft;
    }
  }
}
