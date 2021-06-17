/// <reference types="Cypress" />

describe('My first cypress test Test3 file',function()
{

it('My first TC in Test3 file',function(){
   
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').then(function(e1)
    {
        const url =e1.prop('href')
        cy.visit(url)
    })
    
})

})