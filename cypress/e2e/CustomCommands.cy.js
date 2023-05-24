

describe(" Custom commands",()=>{

	it("handling links",()=>{
		cy.visit('https://demo.nopcommerce.com/');


		//direct - without sing custom command
		// cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

		// Using custom command
		cy.ClickLink("Apple MacBook Pro 13-inch");

		cy.get("div[class='product-name'] h1").should('have.text',"Apple MacBook Pro 13-inch");
	})
	it(" overwriting existing command",()=>{
		cy.visit('https://demo.nopcommerce.com/');
		// Using custom command
		cy.ClickLink("Apple MacBook Pro 13-inch");

		cy.get("div[class='product-name'] h1").should('have.text',"Apple MacBook Pro 13-inch");
	})
	it.only('Login Command', () => {
		cy.visit('https://demo.nopcommerce.com/');

		cy.ClickLink("Log in");

		cy.get('.ico-account').should('have.text',"My account");
	});

})