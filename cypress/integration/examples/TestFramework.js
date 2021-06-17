/// <reference types="Cypress" />
import 'cypress-iframe'
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe('My first cypress test Test3 file',function()
{

    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) //we have resolve promise for fixture
        {
            this.data=data //makes this keyword access this variable globally
        })
      })

it('My first TC in Test3 file',function(){

   const homepage = new HomePage()//creating a object for class
   const productpage =new ProductPage()
   

    cy.visit(Cypress.env('url')) //declaring url in cypress.json and 
    //cy.get(":nth-child(1) > .form-control").type(this.data.name)
    homepage.getEditBox().type(this.data.name)
    //cy.get('select').select(this.data.gender)
    homepage.select(this.data.gender)
    //cy.pause()
    //cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name) //verify if same text entered in two waydata binding example
    homepage.twowaydatabinding().should('have.value',this.data.name)
    homepage.getEditBox().should('have.attr','minlength','2')
    //cy.get(":nth-child(1) > .form-control").should('have.attr','minlength','2') //asset min length is 2.We can do this using .prop() method too.

    //cy.get('#inlineRadio3').should('be.disabled') //assert check box is not checked
    homepage.getEntrepreneur().should('be.disabled')
    //cy.get("a[href='/angularpractice/shop']").click()
    homepage.getshop().click()

    this.data.productName.forEach(function(element)
    {
        cy.selectProduct(element) //this is resuable method and we are parametrizing it.
    })
   //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
   
   

   productpage.checkOutButton().click()
   var sum=0
   cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{
    cy.log($e1.text())
    const actualtext= $e1.text()
    var res = actualtext.split(" ")
       res = res[1].trim()
       sum= Number(sum)+Number(res) //convert string into number
       cy.log(sum)
})

  cy.get('h3 strong').then(function(element)
  {
    const amount=element.text()
    var res= amount.split(" ")
   var total= res[1].trim()
   expect(Number(total)).to.equal(sum)
  })
   cy.contains('Checkout').click()
   Cypress.config('defaultCommandTimeout',8000) //element explicitely specifying timeoout specific to element.this will override global timeout specified in cypress.json file
   cy.get('#country').type('India')
   cy.get('.suggestions > ul > li > a').click()
   cy.get("label[for = 'checkbox2']").click()

   cy.get("input[type='submit']").click()
   //cy.get('.alert').should('Success! Thank you! Your order will be delivered in next few weeks :-).')
   cy.get('.alert').then(function(element)
  {
     const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true
  })
    


})

})