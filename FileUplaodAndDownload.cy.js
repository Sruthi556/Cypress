/// <reference types="cypress-downloadfile"/>

it('File Upload Test',function(){
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('Sruthi.jpg')
})

it('File Downlaod Test',function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg','MyCustomAgentName')

})