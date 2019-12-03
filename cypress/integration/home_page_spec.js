describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the wright title', () => {
    cy.title().should('equal', 'React App')
  })
})
