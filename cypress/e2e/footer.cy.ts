describe('Footer', () => {
    it('has expected content on deriv.com', () => {
        let url = Cypress.env('base_url') || 'https://staging.deriv.com'
        cy.visit(url)
        cy.get('footer').should('exist')
    })

    it('has expected content on eu.deriv.com', () => {
        let url = Cypress.env('base_url_eu') || 'https://staging-eu.deriv.com'
        cy.visit(url)
        cy.get('footer').should('exist')
    })
})
