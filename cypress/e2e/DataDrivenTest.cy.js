
describe('Handling Data Driven Testing',()=>{

	it('Data Driven Test',()=>{
		cy.fixture("orangehrm2.json").then((data)=>{

			cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

			data.forEach((userdata) => {
				cy.get("input[placeholder='Username']").type(userdata.username);
				cy.get("input[placeholder='Password']").type(userdata.password);
				cy.get("button[type='submit']").click();
				cy.wait(4000);

				if(userdata.username == "Admin"&& userdata.password=="admin123"){
					cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)
					cy.get('.oxd-userdropdown-img').click();
					cy.get(':nth-child(4) > .oxd-userdropdown-link').click()



				}else{
					cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('be.visible');
					cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userdata.expected);

				}
				
			});
			
				
		})
	})


})