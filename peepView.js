class PeepView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.peepInput = document.querySelector('#peep-input');
    this.addPeepButton = document.querySelector('#add-peep-button');

    // add-peep-button
    this.addPeepButton.addEventListener('click', () => {
      this.addPeep();
      this.displayPeeps;
    });
  };

  displayPeeps() {
    const peeps = this.model.getPeeps();

    peeps.forEach((peep) => {
      let peepEl = document.createElement('div');
      let peepHeaderEl = document.createElement('h3');
      let peepContentEl = document.createElement('p')
     
      peepEl.className = 'peep';
      peepHeaderEl.textContent = peep.user.handle;
      peepContentEl.textContent = peep.body;
      
      this.mainContainerEl.append(peepEl);
      peepEl.append(peepHeaderEl);
      peepEl.append(peepContentEl);
    });
  };

  displayPeepsFromApi() {
    this.api.loadPeeps((data) => {
      this.model.setPeeps(data);
      this.displayPeeps;
    });
  };

  // addPeep() {
  //   this.model.addPeep(peepInput.value);
  // };
};

module.exports = PeepView;