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

  // 1st approach of view all button testing
  it.only("should have correct view all link (1st approach)", () => {

    const items = ["markets/forex/", "markets/synthetic/", "markets/stock/", "markets/cryptocurrencies/", "markets/commodities/"]

    cy.get('[data-cy="market"]').each(($item, $index) => {
      cy.wrap($item).click();
      cy.get('[data-cy="view-all"] a').invoke('attr', 'href').should("include", items[$index]);
    })
  })

  // 2nd approach of view all button testing
  it.only("should have correct view all link (2nd approach)", () => {
    cy.get('[data-cy="market"]').eq(0).click();
    cy.get('[data-cy="view-all"]').click();
    cy.url().should("contain", "markets/forex/")
    cy.visit("http://localhost:8000/")


    cy.get('[data-cy="market"]').eq(1).click();
    cy.get('[data-cy="view-all"]').click();
    cy.url().should("contain", "markets/synthetic/")
    cy.visit("http://localhost:8000/")


    cy.get('[data-cy="market"]').eq(2).click();
    cy.get('[data-cy="view-all"]').click();
    cy.url().should("contain", "markets/stock/")
    cy.visit("http://localhost:8000/")


    cy.get('[data-cy="market"]').eq(3).click();
    cy.get('[data-cy="view-all"]').click();
    cy.url().should("contain", "markets/cryptocurrencies/")
    cy.visit("http://localhost:8000/")


    cy.get('[data-cy="market"]').eq(4).click();
    cy.get('[data-cy="view-all"]').click();
    cy.url().should("contain", "markets/commodities/")
    cy.visit("http://localhost:8000/")
  })
})
