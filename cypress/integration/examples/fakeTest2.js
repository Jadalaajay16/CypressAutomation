/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=>
    {
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra" //we are trying to modify the url

    req.continue((res)=>
    {
       // expect(res.statusCode).to.equal(403) //we are doing secruity testing here
    })
 }
 ).as("dummyUrl")

 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@dummyUrl')


     //length of the response array = rows of the table


})

})





