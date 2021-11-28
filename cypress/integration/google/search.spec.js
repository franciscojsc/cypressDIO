/// <reference types="cypress" />

before(() => {});

describe('Google Search', () => {
  it('Search Francisco Chaves', () => {
    cy.visit({ url: 'https://www.google.com', method: 'GET' });
    cy.get('.gLFyf').type('Francisco Chaves').type('{enter}');
  });
});
