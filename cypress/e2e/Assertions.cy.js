
describe('Assertions', () =>{
	
	it("Implicit Assertions",() =>{
		cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

		cy.url().should('include','orangehrmlive.com')
		.and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
		.and('contain','orangehrmlive.com')
		.and('not.contain','greenlive');

		cy.xpath('//a').should('have.length','5')
	})	

	it("explicit Assertions",()=>{
		cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
	})
})