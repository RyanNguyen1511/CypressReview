
describe ("Header and cookies review",()=>{

	let authToken = null;
	before("Create asscess token",()=>{
		cy.request({
			method: 'Post',
			url: 'https://simple-books-api.glitch.me/api-clients',
			headers: { 'Content-Type': 'application/json', },
			body: {
				clientName : "ABC",
				clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"

			}
		})
		.then((Response)=>{
			authToken = Response.body.accessToken
		});
	});

	before("Create new order",()=>{
		cy.request({
			method: 'Post',
			url: 'https://simple-books-api.glitch.me/orders/',
			headers: { 
				'Content-Type': 'application/json',"Authorization":'Bearer '+authToken 
			},
					
			body: {
				"bookId":1,
				"customerName":"xyzabc"

			}
		})
		.then((Response)=>{
			expect(Response.status).to.eq(201);
			expect(Response.body.created).to.eq(true);

		});
	});

	it('Fetching the orders', () => {
		cy.request({
			method: 'Get',
			url: 'https://simple-books-api.glitch.me/orders/',
			headers: { 
				'Content-Type': 'application/json',"Authorization":'Bearer '+authToken },
			cookies:{
				'cookieName':'mycookie'
			}
		}).then ((Response)=>{
			expect(Response.status).to.eq(200);
			expect(Response.body).has.length(1);

		})
		
	});

})