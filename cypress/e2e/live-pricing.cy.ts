describe('Live pricing spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/')
  })
  it('should have 5 markets and all of them are clickable', () => {
    cy.get('[data-cy="market"]').should("have.length", 5).each((item)=> {
      cy.wrap(item).click()
    }).then((items) => {
      items[0].click()
    })
  });

  it("should have right amount of instrument for ROW", () => {
    cy.get('[data-cy="market"]').each(item => {
      cy.wrap(item).click();
      cy.get('[data-cy="live-price-table"] tbody tr td:first-of-type').should("have.length", 5)
    })
  })

  it("should have right amount of instrument for EU", () => {
    cy.visit('http://localhost:8000?region=de')
    cy.get('[data-cy="market"]').each((item, index) => {
      cy.wrap(item).click();

      const itemLength = index === 1 ? 4 : 5;
      cy.get('[data-cy="live-price-table"] tbody tr td:first-of-type').should("have.length", itemLength)
    })
  })

  it("should have correct view all link", () => {
    
  })
})