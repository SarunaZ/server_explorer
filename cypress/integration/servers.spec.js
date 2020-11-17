describe('Login', () => {
  beforeEach(() => {
    cy.setCookie('sessionToken', Cypress.env('tesonet_session_token'));
    cy.visit('http://localhost:3000/');
  })

  it('Access the server page',() => {
    cy.get('.Server-list li')
      .should('have.length', 30);
  })

  it('Sorting list (Ascend/descend)', () => {
    cy.contains('.Server-list__header', 'Name')
      .wait(1000)
      .click()
    cy.get('[data-sort="asc"]')

    cy.contains('.Server-list__header', 'Name')
      .wait(1000)
      .click()
    cy.get('[data-sort="desc"]')

    cy.contains('.Server-list__header', 'Distance')
      .wait(1000)
      .click()
    cy.get('[data-sort="asc"]')

    cy.contains('.Server-list__header', 'Distance')
      .wait(1000)
      .click()
    cy.get('[data-sort="desc"]')
  })
})