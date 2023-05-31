const { constant } = require("cypress/types/lodash");

describe ("Post Calls",()=>{


	it('Approach 1-Hard coded json object', () => {
		const requestBody= {
			tourist_name:"Mike",
			tourist_email:"john1256789@gmail.com",
			tourist_location: "Paris"
		}
		cy.request({
			method: 'Post',
			url: 'http://restapi.adequateshop.com/api/Tourist',
			body: requestBody
		})
		.then((response)=>{
			expect(response.status).to.eq(201)
			expect(response.body.tourist_name).to.eq("Mike")
			expect(response.body.tourist_email).to.eq("john1256789@gmail.com")
			expect(response.body.tourist_location).to.eq("Paris")
		})
	});

	it('Approach 2-Dynamically generation json object', () => {
		const requestBody= {
			tourist_name:Math.random().toString(5).substring(2),
			tourist_email:Math.random().toString(5).substring(2)+"gmail.com",
			tourist_location: "Paris"
		}
		cy.request({
			method: 'Post',
			url: 'http://restapi.adequateshop.com/api/Tourist',
			body: requestBody
		})
		.then((response)=>{
			expect(response.status).to.eq(201)
			expect(response.body.tourist_name).to.eq(requestBody.tourist_email)
			expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
			expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
		})
	});


	it('Approach 3-Use fixture', () => {
		cy.fixture('tourist').then((data)=>{
			const requestBody = data;
		})
		cy.request({
			method: 'Post',
			url: 'http://restapi.adequateshop.com/api/Tourist',
			body: requestBody
		})
		.then((response)=>{
			expect(response.status).to.eq(201)
			expect(response.body.tourist_name).to.eq(requestBody.tourist_email)
			expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
			expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

			expect(response.body).has.property('tourist_email',requestBody.tourist_email)
			expect(response.body).to.have.property('tourist_email',requestBody.tourist_email)
		})
	});


})