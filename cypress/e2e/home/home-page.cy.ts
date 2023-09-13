describe('ROW Language pop up in the navigation', () => {
    it('language popup opens perfectly in row', () => {
        const url = Cypress.env('base_url') || 'https://deriv.com'
        // You can only use cy commands inside the it block
        cy.visit(`${url}/`)
        cy.get('#radix-4').click()
    })

    it('ROW Language popup Should contain all language items in the dropdown', () => {
        // Visit the webpage or navigate to the relevant page
        const url = Cypress.env('base_url') || 'https://deriv.com'
        cy.visit(`${url}/`)
        cy.get('#radix-4').click()

        const languagesArray = Cypress.env('languages')
        const languageArrayLength = languagesArray.length

        // Get all the options within the dropdown
        cy.get('#radix-6 div').should('have.length', languageArrayLength)
    })

    it('ROW - Should visit deriv.com on each language', () => {
        const baseUrl = Cypress.env('base_url') || 'https://deriv.com'
        Cypress.env('languages').forEach((language) => {
            const url = `${baseUrl}/${language}/`
            cy.visit(url)
            // cy.get('#dm-hero-signup').should('exist')
        })
    })
})
