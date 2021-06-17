/// <reference types="Cypress" />

describe('My first cypress test',function()
{

it('My first TC',function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca') //get
    cy.wait(2000)
    //cy.get('.product:visible').should('have.length',4) //assertion
    //:visible helps to see only visible elements in jquery.
    cy.get('.products').as('productlocator') //using aliasing like a variable
    cy.get('@productlocator').find('.product').should('have.length',4) //CSS selector for parent child
    //click on add to cart of 2nd option
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click() 
    //eq helps to retrieve indexed element.Index starts from zero
   
    //now we are writing a loop with each condition to select Cashews
    cy.get('.products').find('.product').each(($e1, index, $list) => {
        const textveg= $e1.find('h4.product-name').text()
        if(textveg.includes('Cashews'))
        {
            $e1.find('button').click()
        }
        
    })

    cy.get('.brand').should('have.text','GREENKART')
    console.log('Ajay')
    //Manually handling promises
cy.get('.brand').then(function(logoelement)

{cy.log(logoelement.text())})
//cy.get('.brand').text() this will not work as text() method is jquery method

cy.get('.cart-icon>img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

})




})
