import { forInStatement } from '@babel/types'

describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the wright title', () => {
    cy.title().should('equal', 'React App')
  })
})

describe('Fragrance', () => {
  it('fragrant', () => {
    cy.get('[class^= EvaluationInput__FragrantInputWrapper]')
      .contains('Hay')
      .click()
  })
})

describe('Taste', () => {
  it('taste', () => {
    cy.get('[class^= EvaluationInput__TasteInputWrapper]')
      .contains('Spicy')
      .click()
  })
})

describe('Taste', () => {
  it('taste', () => {
    cy.get('[class^= EvaluationInput__InfoInput]')
      .first()
      .type('This is your test')
  })
})
