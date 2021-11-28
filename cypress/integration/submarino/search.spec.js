/// <reference types="cypress" />

// Antes de cada teste
before(() => {});

describe('Submarino', () => {
  it('Search for "Laptop"', () => {
    cy.visit('https://submarino.com.br');
    cy.wait(1000);
    // Aceitar os cookie
    cy.get('#lgpd-accept').click();
    cy.get('input[name=conteudo]').clear().type('laptop').type('{enter}');
  });
});
