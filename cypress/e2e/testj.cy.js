describe('Simple Cypress Test', () => {
  it('Visits the example site and checks navigation', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Querying').click({ force: true })

    cy.url().should('include', '/commands/querying')

    cy.get('h1').should('contain', 'Querying')
  })
})
