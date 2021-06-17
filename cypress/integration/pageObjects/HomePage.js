class HomePage
{
    getEditBox()
    {
        return cy.get(":nth-child(1) > .form-control")
    }


    twowaydatabinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    select()
    {
        return cy.get('select')
    }
    getEntrepreneur()
    {
       return cy.get('#inlineRadio3')
    }
    getshop()
    {
        return  cy.get("a[href='/angularpractice/shop']")
    }
}
export default HomePage //export enables this class to be available for all files