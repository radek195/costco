///<reference types="cypress" />

describe('Playground', () => {

    beforeEach('Visit page', () => {
        cy.visit('/')
    })

    it('Test', () => {
        cy.get('h1').then(header => {
            cy.wrap(header).find('a').should('contain', 'Costco')
        })

    })
})