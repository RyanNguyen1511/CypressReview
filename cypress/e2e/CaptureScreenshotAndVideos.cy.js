describe("Capture screenshot and videos",()=>{

	it("Capture screenshots & Videos",()=>{
		cy.visit("https://demo.opencart.com")
		// cy.screenshot("homepage");
		// cy.wait(5000);
		// cy.get("img[title='Your Store']").screenshot("logo");


		// Automatically capture screenshot & video on failure - only when you execute through CLI

		cy.get(':nth-child(7) > .nav-link').click();
		cy.get("div[id='content'] h2").should('have.text',"Tablest")
	})
})