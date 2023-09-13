describe('ROW Language pop up in the navigation', () => {
    //before every check visit base url
    beforeEach(() => {
        cy.visit(`${Cypress.env('base_url') || 'https://deriv.com'}`)
    })
    it('language popup opens perfectly in row', () => {
        // You can only use cy commands inside the it block
        cy.get('#radix-4').click()
    })

    it('ROW Language popup Should contain all language items in the dropdown', () => {
        // Visit the webpage or navigate to the relevant page
        cy.get('#radix-4').click()

        const languagesArray = Cypress.env('languages')
        const languageArrayLength = languagesArray.length

        // Get all the options within the dropdown
        cy.get('#radix-6 [role=menuitem]').should('have.length', languageArrayLength)
    })

    it('ROW - Should visit deriv.com on each language', () => {
        const baseUrl = Cypress.env('base_url') || 'https://deriv.com'
        Cypress.env('languages').forEach((language) => {
            const url = `${baseUrl}/${language}/`
            cy.visit(url)
        })
    })
})
