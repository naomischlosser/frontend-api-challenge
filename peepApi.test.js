const PeepApi = require('./peepApi');

require('jest-fetch-mock').enableMocks()

describe('PeepApi', () => {
  it('returns the fetched API', () => {
    const api = new PeepApi();

    fetch.mockResponseOnce(JSON.stringify({
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
    }));

    api.loadPeeps((returnedPeepsFromApi) => {
      expect(returnedPeepsFromApi.id).toBe(3);
      expect(returnedPeepsFromApi.user.handle).toBe("kay");
      expect(returnedPeepsFromApi.likes[0].user.id).toBe(1);
    });
  });
});