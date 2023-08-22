describe('Signup page is functional for staging', () => {
  it('allows user to signup', () => {
    cy.visit(`https://staging.deriv.com/signup`)
    cy.get('input#email_address').type('test@example.com')
    cy.get('input#terms_and_conditions').click()
    cy.contains('button', 'Create demo account').click()
    cy.url().should('include', '/signup-success?email=test@example.com') 
  })
})
