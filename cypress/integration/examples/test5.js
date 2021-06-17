/// <reference types="Cypress" />

describe('My first cypress test Test3 file',function()
{

it('My first TC in Test3 file',function(){
    //MOUSEHOVER
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //cy.get('div.mouse-hover-content').invoke('show') //show is jquery function
    
  //cy.contains('Top').click()
   cy.contains('Top').click({force:true}) //by setting force we can handle even hidden elements.
   cy.url().should('include','top')

})

})