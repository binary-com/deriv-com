describe('Signup page is functional for staging', () => {
  it('allows user to signup at non-EU Website', () => {
    const url = Cypress.env('base_url') || 'https://staging.deriv.com';
    const email = Cypress.env('email')
    cy.visit(`${url}/signup`)
    cy.get('input#email_address').type(email)
    cy.get('input#terms_and_conditions').click()
    cy.contains('button', 'Create demo account').click()
    cy.url().should('include', `/signup-success?email=${email}`) 
  })

  it('allows user to signup at EU website', () => {
    const url = Cypress.env('base_url_eu') || 'https://staging-eu.deriv.com';
    const email = Cypress.env('email')
    cy.visit(`${url}/signup`)
    cy.get('input#email_address').type(email)
    cy.get('input#terms_and_conditions').click()
    cy.contains('button', 'Create demo account').click()
    cy.url().should('include', `/signup-success?email=${email}`) 
  })
})
