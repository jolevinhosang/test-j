// cypress/e2e/simple_test.cy.js

describe('Simple Cypress Test', () => {
  it('Visits the example site and checks navigation', () => {
    // Visit the homepage
    cy.visit('https://example.cypress.io')

    // Click on the "Querying" link in the Commands menu
    cy.contains('Querying').click()

    // Verify the URL includes '/commands/querying'
    cy.url().should('include', '/commands/querying')

    // Assert that the page contains the correct heading
    cy.get('h1').should('contain', 'Querying')
  })
})
