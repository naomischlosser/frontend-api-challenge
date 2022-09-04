const PeepModel = require('./peepModel');

describe('PeepModel', () => {
  it('returns an empty list of peeps', () => {
    const model = new PeepModel();
    expect(model.getPeeps()).toEqual([]);
  });

  it('returns a list of peeps', () => {
    const model = new PeepModel();
    model.addPeep('Test peep 1');
    model.addPeep('Test peep 2');
    
    expect(model.getPeeps()).toEqual(['Test peep 1', 'Test peep 2'])
  });

  it('returns an empty list of peeps after resetting all peeps', () => {
    const model = new PeepModel();
    model.addPeep('Test peep 1');
    model.addPeep('Test peep 2');
    model.resetPeeps();

    expect(model.getPeeps()).toEqual([])
  });
});