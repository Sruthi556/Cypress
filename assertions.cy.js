/// <reference types="cypress"/>
it('Assertions',() => {
    cy.visit("https://example.cypress.io")
    cy.contains('root').click()
    cy.get('#query-btn')
    .should('contain','Button')
    .and('have.class','query-btn')
    .and('be.visible')
    .and('be.enabled')

    expect(true).to.be.true
    assert.equal(4,4,'EQUAL')
    assert.notEqual(4,23,'NOT EQUAL')
    assert.strictEqual(4,'4','EQUAL')
})