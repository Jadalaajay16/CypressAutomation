//this will load before every test
beforeEach(()=>
{
    cy.fixture('example').then(function(data)
    {
this.data=data
    })
});