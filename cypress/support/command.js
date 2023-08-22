Cypress.Commands.add('fillSignupForm', (email, name) => {
    cy.get('#email').type(email)
    cy.get('#name').type(name)
    // fill other fields
  })
  
  Cypress.Commands.add('submitSignup', () => {
    cy.contains('button', 'Create free account').click() 
})