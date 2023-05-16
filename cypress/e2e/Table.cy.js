

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

	it('Check cell data from specific row & column',()=>{	
		cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('princytrainings4@gmail.com');

	})

	it('Read all the rows & columns data in the first page',()=>{	

		cy.get("table[class='table table-bordered table-hover']>tbody>tr")
		.each(($row,index,$rows)=>{

			cy.wrap($row).within(()=>{

				cy.get('td').each(($col,index,$cols)=>{
					cy.log($col.text()); // show Showing 1 to 10 of 12749 (1275 Pages)
					

				})

			})


		});
	})

	it.only('Pagination',()=>{	
		// find total number of page

		// cy.get(".col-sm-6.text-end").then((e)=>{
		// 	let mytext = e.text();
		// 	let totalpage = mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1)
		// 	cy.log(' Total number of pages: '+ totalpage);

		// })
		let totalPages =5;

		for (let i = 1; i<=totalPages;i++){
			if(totalPages>1){
				cy.log(' Active page is ==> '+i)
				cy.get("ul[class='pagination']>li:nth-child("+i+")").click()
				cy.wait(3000)
				cy.get("table[class='table table-bordered table-hover']>tbody>tr")
				.each(($row,index,$rows)=>{

					cy.wrap($row).within(()=>{

						cy.get('td').each(($col,index,$cols)=>{
							cy.log($col.text()); // show Showing 1 to 10 of 12749 (1275 Pages)
							

						})

					})


				});
				
			}
		}



	})

})