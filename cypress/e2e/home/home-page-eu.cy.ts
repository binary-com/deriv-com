describe('EU Language pop up in the navigation', () => {
    //before every check visit base url
    beforeEach(() => {
        cy.visit(`${Cypress.env('base_url_eu') || 'https://eu.deriv.com'}`)
    })
    it('language popup opens perfectly in eu', () => {
        cy.get('#radix-4').click()
    })

    it('EU Language popup Should contain all language items in the dropdown', () => {
        // Visit the webpage or navigate to the relevant page

        cy.get('#radix-4').click()

        const languagesArray = Cypress.env('languages')
        const languageArrayLength = languagesArray.length

        // Get all the options within the dropdown
        cy.get('#radix-6 [role=menuitem]').should('have.length', languageArrayLength)
    })

    it('EU - Should visit eu.deriv.com on each language', () => {
        const baseUrl = Cypress.env('base_url_eu') || 'https://eu.deriv.com'
        Cypress.env('languages').forEach((language) => {
            const url = `${baseUrl}/${language}/`
            cy.visit(url)
        })
    })
})
