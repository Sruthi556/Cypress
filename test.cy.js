/// <reference types="cypress"/>

it('Google Search',()=> {
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type('Automation Step by Step{Enter}')
    //cy.contains('Google Search').click()
    cy.wait(3000)
    cy.contains('Videos').click()
})