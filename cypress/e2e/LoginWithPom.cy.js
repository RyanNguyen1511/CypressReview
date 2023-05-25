import Login from "../PageObjects/LoginPage2.js"

describe("POM",()=>{
	it('LoginTest', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
		cy.get("input[placeholder='Username']").type('Admin');
		cy.get("input[placeholder='Password']").type('admin123');
		cy.get("button[type='submit']").click();
		cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',"Dashboard");

	});

	it.only('LoginTest', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


		cy.fixture('orangehrm.json').then((data)=>{
			const ln =new Login();
			ln.setUserName(data.username);
			ln.setPassword(data.password)
			ln.clickSubmit();
			ln.verifyLogin();
		})

		
		
	});
})