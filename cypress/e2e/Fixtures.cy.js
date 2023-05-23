
describe('My Test Suite',()=>{


	// it("Fixture Demo Test",()=>{
	// 	cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

	// 	cy.fixture('orangehrm.json').then((data)=>{
	// 		cy.get("input[placeholder='Username']").type(data.username);
	// 		cy.get("input[placeholder='Password']").type(data.password);
	// 		cy.get("button[type='submit']").click();


	// 		cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.experted)
	// 	})
	// })

	// Access through Hook - For multiple it blocks
	let userdata;

	before(()=>{
		cy.fixture("orangehrm").then((data)=>{
			userdata = data;

		})
	})
	it.only("Fixture Demo Test - work with Hook",()=>{
		cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

			cy.get("input[placeholder='Username']").type(userdata.username);
			cy.get("input[placeholder='Password']").type(userdata.password);
			cy.get("button[type='submit']").click();


			cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.experted)
	})



})