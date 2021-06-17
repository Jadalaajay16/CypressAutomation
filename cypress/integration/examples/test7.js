/// <reference types="Cypress" />
import 'cypress-iframe'
describe('My first cypress test Test3 file',function()
{

it('My first TC in Test3 file',function(){
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href="#/mentorship"]').eq(0).click()
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
})

})