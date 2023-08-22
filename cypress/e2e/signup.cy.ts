describe('Signup page is functional for staging', () => {
  it('allows user to signup', () => {
    let url = Cypress.env('base_url') || 'https://staging.deriv.com';
    cy.visit(`${url}/signup`)
    cy.get('input#email_address').type('test@example.com')
    cy.get('input#terms_and_conditions').click()
    cy.contains('button', 'Create demo account').click()
    cy.url().should('include', '/signup-success?email=test@example.com') 
  })
})
