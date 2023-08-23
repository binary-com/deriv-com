describe('Footer', () => {
    it('footer exists for deriv.com', () => {
        let url = Cypress.env('base_url') || 'https://staging.deriv.com'
        cy.visit(url)
        cy.get('footer').should('exist')
    })

    it('footer exists for eu.deriv.com', () => {
        let url = Cypress.env('base_url_eu') || 'https://staging-eu.deriv.com'
        cy.visit(url)
        cy.get('footer').should('exist')
    })
})
