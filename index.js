const PeepApi = require('./peepApi');
const PeepModel = require('./peepModel');
const PeepView = require('./peepView');

api = new PeepApi();
model = new PeepModel();
view = new PeepView(model, api);

console.log('Chitter is running')

// // Display API peeps
api.loadPeeps((data) => {
  model.setPeeps(data);
  view.displayPeeps();
});