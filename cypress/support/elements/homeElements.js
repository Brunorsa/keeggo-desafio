class homeElements {
  urlAplicacao() {
    return cy.visit('/#/');
  }
}

export default new homeElements()