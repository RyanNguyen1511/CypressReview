

describe('CSSlocators', () =>{
	it("csslocators",() =>{
		cy.visit("https://www.youtube.com/")
		cy.viewport(1920,1080);
		cy.xpath('//div[@id="search-input"]//input[@id="search"]').type('vietcetera');
		cy.get('#search-icon-legacy').click();
		cy.wait(500);
		cy.get('[id="title"][class="style-scope ytd-shelf-renderer"]').contains('Latest from Vietcetera');
	})
})