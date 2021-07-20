/// <reference types="cypress" />

it('loads the homepage and navigates to about', () => {
    cy.visit('public/index.html')
    cy.contains('h1', 'This Page is Tested')
    cy.get('[data-test]').click()
    cy.contains('h1', 'About')
    cy.get('.load-character').click()

    cy.get('.loaded-data').within(() => {
        cy.get('.character-name', { timeout: 10000 }).should('exist').and('not.contain', 'Want to see')
        cy.get('.character-image').should('exist')
    })
})
