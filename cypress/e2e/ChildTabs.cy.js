
describe('Hadding tab',()=>{
	it('Approach 1',()=>{
		cy.visit('https://the-internet.herokuapp.com/windows')

		cy.get('.example >a').invoke('removeAttr','target').click(); // remove attribute 'Target' before click


		cy.url().should('include','https://the-internet.herokuapp.com/windows/new')


		cy.go('back') // go back to parent tab
	})

	it('Approach 2',()=>{
		cy.visit('https://the-internet.herokuapp.com/windows')

		cy.get('.example >a').then((e)=>{
			let url= e.prop('href');
			cy.visit(url)
		})


		cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

		cy.wait(5000)
		cy.go('back') // go back to parent tab
	})
})