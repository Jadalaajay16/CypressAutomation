/// <reference types="Cypress" />

describe('My first cypress test Test2 file',function()
{

it('My first TC in Test2 file',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //CHECKBOXES
    //cy.get('#checkBoxOption1').click() we can use click but most reliable one is check() method
    cy.get('#checkBoxOption1').as('box').check().should('be.checked').and('have.value','option1') //to check
    cy.get('@box').uncheck().should('not.be.checked')  //to uncheck

    cy.get('input[type="checkbox"]').check(['option2','option3'])//to select multiple checkboxes.We can pass array in check method.

    //STATICDROPDOWN
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2') //we have to pass value attribute from DOM

    //DYNAMIC DROPDOWNS
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
        if($e1.text()==="India")
        {
            $e1.click()
        }
     
     
    })

    cy.get('#autocomplete').should('have.value','India') //validating if india is selected
    //VISIBLE INVISIBLE
 
    
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')


    cy.get('[value="radio2"]').check().should('be.checked')
   
})

})