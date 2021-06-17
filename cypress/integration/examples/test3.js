/// <reference types="Cypress" />

describe('My first cypress test Test3 file',function()
{

it('My first TC in Test3 file',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    //Cypress accepts automatically the alerts
    //cypress have ability to listens to window events
    //manually triggering alert event.but we will not see anything in browser.this happens internally
    cy.on('window:alert',(str)=>
    {
        //mocha assertion to compare two strings
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    }) 

    cy.on('window:confirm',(str)=>
    {
        //mocha assertion to compare two strings
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    }) 

    //HANDLING CHILD TABS-by manipulating the dom
    cy.get('#opentab').invoke('removeAttr','target').click()
 
    cy.url().should('include','https://www.rahulshettyacademy.com/#/index')
    
    //BROWSER NAVIGATION
    cy.go('back') //to go back to previous page
 
   
})

})