/**
 * @jest-environment jsdom
*/

const fs = require('fs');
const PeepView = require('./peepView');
const PeepModel = require('./peepModel');
const PeepApi = require('./peepApi');

require('jest-fetch-mock').enableMocks()

describe('PeepView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays no peeps', () => {
    const api = new PeepApi();
    const model = new PeepModel();
    const view = new PeepView(model, api);
    
    view.displayPeeps();

    expect(document.querySelectorAll('.peep').length).toBe(0);
  });

  it('returns a list of peeps', () => {
    const api = new PeepApi();
    const model = new PeepModel();
    const view = new PeepView(model, api);
    
    model.addPeep( { body: 'Test peep 1', user: { handle: 'User 1' } } );
    model.addPeep( { body: 'Test peep 2', user: { handle: 'User 2' } } );
    view.displayPeeps();

    expect(document.querySelectorAll('.peep').length).toBe(2);
    expect(document.querySelector('p').textContent).toBe('Test peep 1');
  });

  it('returns a list of API peeps', () => {
    const api = new PeepApi();
    const model = new PeepModel();
    const view = new PeepView(model, api);

    fetch.mockResponseOnce(JSON.stringify([{
      id: 3,
      body: "my first peep :)",
      created_at: "2018-06-23T13:21:23.317Z",
      updated_at: "2018-06-23T13:21:23.317Z",
      user: {
        id: 1,
        handle: "kay"
      },
      likes: [{
        user: {
          id: 1,
          handle: "kay"
        }
      }]
    }]));

    expect(document.querySelector(".peep")).toBeNull();

    view.displayPeepsFromApi(() => {
      expect(document.querySelector('.peep').length).toBe(50);
      expect(document.querySelector('p').textContent).toBe('my first peep :)');
    });
  });
});



//  it(‘creates a user’,() => {
//   const mockApi = {
//     loadPeeps: (callback) => {callback([this.peepData])},
//     addUser: (user, password, callback) => {callback({“id”:2000,“user”:“yak”})}
//   }