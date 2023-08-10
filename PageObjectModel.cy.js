/// <reference types="cypress"/>

import { LoginPage} from "./pages/LoginPage.cy"
var loginPage=new LoginPage()

describe('All Login Tests',function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')


    })
    it('Login with Valid Credentials',()=>{
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('My Info').click()
    })
    
    it('Login with Invalid Credentials',()=>{
        loginPage.enterUsername('Admin@3')
        loginPage.enterPassword('admin123456')
        loginPage.clickLogin()
        cy.contains('My Info').click()
    })

    it('Login with Invalid Password',()=>{
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('adminn456')
        loginPage.clickLogin()
        cy.contains('My Info').click()
    })


})
