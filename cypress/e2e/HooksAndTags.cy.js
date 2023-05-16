//HOOK
// - before
// - after
// - beforeEach
// - afterEach



describe('My Test Suite',()=>{
	before(()=>{
		cy.log('*******   Launch app    *******')
	})

	after(()=>{
		cy.log('*******   Close app    *******')
	})

	beforeEach(()=>{
		cy.log('*******   Login   *******')
	})

	afterEach(()=>{
		cy.log('*******   Logout   *******')
	})

	it('Search',()=>{	
		cy.log('*******   Searching    *******')
	})

	it('Advanced search',()=>{	
		cy.log('*******   Advanced Searching    *******')
	})

	it('Listting Products',()=>{	
		cy.log('*******   Listting Products    *******')
	})


})