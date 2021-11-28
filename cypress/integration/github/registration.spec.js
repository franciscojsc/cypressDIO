/// <reference types="cypress" />

beforeEach(() => {});

describe('Registration', () => {
  it('Username', () => {
    cy.visit('https://github.com/join');
    cy.get('#user_login')
      .type('teste12346789')
      .should('have.value', 'teste12346789');
  });

  it('Email', () => {
    cy.visit('https://github.com/join');
    cy.get('#user_email')
      .type('teste12346789@gmail.com')
      .should('have.value', 'teste12346789@gmail.com');
  });

  it('Password', () => {
    cy.visit('https://github.com/join');
    cy.get('#user_password')
      .type('!@#$1234teste')
      .should('have.value', '!@#$1234teste');
  });

  describe('Checkbox', () => {
    it('descrição', () => {
      cy.visit('https://github.com/join');
      cy.get('#all_emails').click();
    });
  });
});
