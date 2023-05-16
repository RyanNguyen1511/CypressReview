

describe('handle Tables',()=>{
	beforeEach('Login',()=>{
		cy.visit('https://demo.opencart.com/admin/index.php');
		cy.get('#input-username').type('demo');
		cy.get('#input-password').type('demo');
		cy.get("button[type='submit']").click();

		cy.get('.btn-close').click();
		// Customer --> customer

		cy.get('#menu-customer>a').click();
		cy.get('#menu-customer>ul>li:first-child').click();
		




	})

	it('Check number of row and Column',()=>{	
		
		cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
		cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
	})

	it.only('Check cell data from specific row & column',()=>{	
		cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('princytrainings4@gmail.com');

	})

	it('Read all the rows & columns data in the first page',()=>{	
		
	})

	it('Pagination',()=>{	
		
	})

})