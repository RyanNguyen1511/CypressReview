

describe('handle Tables',()=>{
	beforeEach('Login',()=>{
		cy.visit('https://demo.opencart.com/admin/index.php')
		cy.get('#input-username').type('demo')
		cy.get('#input-password').type('demo')
		cy.get("button[type='submit']").click()

		cy.get('.btn-close').click()
		// Customer

	})

	it('Check number of row and Column',()=>{	

	})

	it('Check cell data from specific row & column',()=>{	
		
	})

	it('Read all the rows & columns data in the first page',()=>{	
		
	})

	it('Pagination',()=>{	
		
	})

})