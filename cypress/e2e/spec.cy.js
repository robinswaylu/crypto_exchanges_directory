/* eslint-disable */
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('#exchangesList')
      .find('a')
      .should(($a) => {
        expect($a).to.have.length(10);
      });

    cy.get('a')
      .eq(Math.floor(Math.random() * 8) + 4)
      .click()
      .url()
      .should('contain', 'exchange');
  });
});
