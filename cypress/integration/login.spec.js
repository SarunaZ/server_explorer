describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  })

  it('focuses on load', () => {
    cy.focused()
      .should('have.class', 'Login__input')
  })

  it('accepts correct inputs',() => {
    const correctUsername = Cypress.env('tesonet_username');
    const correctPassword = Cypress.env('tesonet_password');

    cy.getCookies().should('be.empty')
    cy.get('.Login__input[name="username"]')
      .type(correctUsername)
      .should('have.value', correctUsername);

    cy.get('.Login__input[name="password"]')
      .type(correctPassword)
      .should('have.value', correctPassword);

    cy.get('.Login__button')
      .type('{enter}')
      .url().should('eq', 'http://localhost:3000/')

    cy.getCookie('sessionToken')
      .should('exist')
  })

  it('rejects incorrect inputs',() => {
    const wrongUsername = "test";
    const wrongPassword = "test";

    cy.on ('window:alert', alertText => {
      expect(alertText.message).eq('Unauthorized');
    })

    cy.get('.Login__input[name="username"]')
      .type(wrongUsername)
      .should('have.value', wrongUsername);

    cy.get('.Login__input[name="password"]')
      .type(wrongPassword)
      .should('have.value', wrongPassword);

    cy.get('.Login__button')
      .type('{enter}')
  })
})