class PeepModel {
  constructor() {
    this.peeps = []
  };

  getPeeps() {
    return this.peeps;
  };

  addPeep(peep) {
    this.peeps.push(peep);
  };

  resetPeeps() {
    this.peeps = [];
  };
};

module.exports = PeepModel;