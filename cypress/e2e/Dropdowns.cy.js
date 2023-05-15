describe('handle Dropdowns', () =>{
	beforeEach(() => {
		
	 });
	
	it('Dropdown with select', () =>{
		cy.visit("https://www.zoho.com/commerce/free-demo.html");
		cy.get('#zcf_address_country')
		.select('Italy')
		.should('have.value','Italy')

	})


	it('Auto suggest dropdown',() =>{

		cy.visit('https://www.wikipedia.org')
		cy.get('#searchInput').type('lionel messi')
		cy.get('.suggestion-title').contains('Lionel Messi').click()
	})

	it('Dynamic dropdown',() =>{

		cy.visit('https://www.google.com/')
		cy.wait(3000)
		cy.get("textarea[name='q']").type('Cypress automation')

		cy.wait(3000)
		cy.get('div.wM6W7d>span').should('have.length',12)

		cy.get('div.wM6W7d>span').each(($el, index,$list)=>{
				if($el.text() == 'cypress automation tutorial'){
					cy.wrap($el).click()
				}
		});

		cy.get("input[name='q']").should('have.value','cypress automation tutorial')
	})

})