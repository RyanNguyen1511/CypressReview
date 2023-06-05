describe('Authentication',()=>{


	it("Basic Authentication",()=>{
		cy.request({
			method: 'GET',
			url: 'https://postman-echo.com/basic-auth',
			auth:{
				user:'postman',
				pass:'password'
			}
		})
		.then((response)=>{
			expect(response.status).to.eq(200);
			expect(response.body.authenticated).to.eq(true);

		})
	}) //it block closed

	it("Digest Authentication",()=>{
		cy.request({
			method: 'GET',
			url: 'https://postman-echo.com/basic-auth',
			auth:{
				user:'postman',
				pass:'password',
				method:'degest'
			}
		})
		.then((response)=>{
			expect(response.status).to.eq(200);
			expect(response.body.authenticated).to.eq(true);

		})
	}) //it block closed

	const valid_token='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';
    const Invalid_token='xyz';

    it.only('Bearer Token Authentication', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.github.com/user/repos',
        headers: {
          Authorization: 'Bearer '+valid_token
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    }) //it block closed

	 //https://openweathermap.org/api
    it('API Key  Authentication', () => {
      cy.request({
        method: 'GET',
        url: 'api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
        qs:{
          appid:'fe9c5cddb7e01d747b4611c3fc9eaf2c' //API Key & value
            }
        }).then((response) => {
        expect(response.status).to.eq(200)
      })
    }) //it block closed

})