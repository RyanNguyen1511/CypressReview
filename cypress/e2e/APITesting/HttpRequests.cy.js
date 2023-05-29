
describe (" HTTP Requests",()=>{
	
	it(" GET Call",()=>{
		cy.request({
			method: 'Get',
			url: 'https://jsonplaceholder.typicode.com/posts/1',
			headers: { 'Accept-Language': 'en-us', },
		}).its('status')
		.should('eq',200)
	})

	it('Post Call', () => {
		cy.request({
			method: 'Post',
			url: 'https://jsonplaceholder.typicode.com/posts/',
			body:{
				title:"Test post",
				body:"This is post call",
				userId:1
			},
		})
		.its('status')
		.should('eq',201)
	});

	it('Put call', () => {
		cy.request({
			method: 'Put',
			url: 'https://jsonplaceholder.typicode.com/posts/1',
			body:{
				title:"Test post - Update",
				body:"This is put call",
				userId:1,
				id:1
			}
		})
		.its('status')
		.should('eq',200)
	});
	it('Delete Call', () => {
		cy.request({
			method: 'Delete',
			url: 'https://jsonplaceholder.typicode.com/posts/1'
		})
		.its('status')
		.should('eq',200)
	});


})