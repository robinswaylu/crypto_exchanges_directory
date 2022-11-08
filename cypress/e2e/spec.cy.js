/* eslint-disable */
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('#exchangesList')
      .find('a')
      .should(($a) => {
        expect($a).to.have.length(10);
      });
    cy.get('.exchangeLink')
      .eq(Math.floor(Math.random() * 9) + 1)
      .click()
      .url()
      .should('contain', 'exchange');
    cy.get('.exchangeName').should('be.visible');
    cy.get('.trustScoreRank').should('be.visible');
    cy.get('.errorMessage').should('not.exist');
  });
});
