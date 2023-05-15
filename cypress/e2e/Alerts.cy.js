
describe('Alerts',()=>{
	it('JS alerts',()=>{
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
		cy.get("button[onclick='jsAlert()']").click()


		cy.on('window:alert',(t)=>{
			expect(t).to.contain('I am a JS Alert')
		})
		
		// alert window automatically closed by cypress
		cy.get("#result").should('have.text','You successfully clicked an alert')

	})


	it('JS Confirm alert',()=>{
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
		cy.get("button[onclick='jsConfirm()']").click()


		cy.on('window:confirm',(t)=>{
			expect(t).to.contain('I am a JS Confirm')
		})
		
		// alert window automatically closed by cypress using OOK button
		cy.get("#result").should('have.text','You clicked: Ok')
		
	})

	it('JS Confirm alert: cancel',()=>{
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
		cy.get("button[onclick='jsConfirm()']").click()


		cy.on('window:confirm',(t)=>{
			expect(t).to.contain('I am a JS Confirm')
		})
		
		cy.on('window:confirm',()=>false)
		// alert window automatically closed by cypress using OOK button
		cy.get("#result").should('have.text','You clicked: Cancel')
		
	})

	it('JS prompt alert',()=>{
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
	
		cy.window().then((win)=>{
			cy.stub(win,'prompt').returns('welcome');

		})
		cy.get("button[onclick='jsPrompt()']").click()
		

		//cypress will automatically close prompted alert - it will use OK button - by default
		cy.get("#result").should('have.text','You entered: welcome')

	})



	it.only('Authentication alert',()=>{
		//cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username: "admin",password:"admin"}})
		cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
		//cypress will automatically close prompted alert - it will use OK button - by default
		cy.get("div[class='example'] p").should('have.contain',
		'Congratulations'
	 )

	})
})