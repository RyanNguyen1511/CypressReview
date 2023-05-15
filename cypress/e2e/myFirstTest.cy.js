describe('My first Test',()=>{
	it ('test1 Title-positive',()=> ()=>{
		cy.visit("https://www.youtube.com");
		cy.title().should('eq','YouTube');
	
	})
	it ('test2 Title-negative test', ()=>{
		cy.visit("https://www.youtube.com");
		cy.get('input[id="search"]').type('Vietcetera')
		cy.get('button[id="search-icon-legacy"]').click();
		// cy.get('span[id="title"]').should('have.value','Latest from Vietcetera');
		cy.xpath('//div[@id="title-container"]//span[@id="title"]').should('have.value','Latest from Vietcetera');
	})
})