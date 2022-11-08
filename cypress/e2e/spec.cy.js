/* eslint-disable */
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('#exchangesList')
      .find('a')
      .should(($a) => {
        expect($a).to.have.length(10);
      });
  });
});
