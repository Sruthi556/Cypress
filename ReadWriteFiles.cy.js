/// <reference types="cypress"/>


before(function(){
    cy.fixture('example.json').as('test_data')

})

it('Read Files using Fixtures',function(){
    cy.fixture('example.json').then((data)=>
    {
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.name)
})

it('Read Files using ReadFile',function(){
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
    cy.log(data.name)
    })
})

it('Write files using WriteFile',function(){
    cy.writeFile('sample.txt','Hello, I am learning Cypress Course\n')

    cy.writeFile('sample.txt','Hello, I am learn through Youtube\n',{flag:'a+'})

})