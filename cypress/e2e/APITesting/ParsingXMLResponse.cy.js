const xml2js = require('xml2js');
const parser = new xml2js.Parser({explicitArray:false});

describe("XML Parsing",()=>{
	let petid =null;
	const xmlPayload = "<Pet><id>0</id> <Category>             <id>0</id>            <name>Dog</name>        </Category>        <name>Jimmy</name>        <photoUrls>            <photoUrl>string</photoUrl>        </photoUrls>        <tags>            <Tag>                <id>0</id>                <name>string</name>            </Tag>        </tags>        <status>available</status>    </Pet>" ;


	it("creating new PET",()=>{
		cy.request({
			method: 'Post',
			url: 'https://petstore.swagger.io/v2/pet',
			body: xmlPayload,
			headers: { 'Content-Type':"application/xml",'accept':"application/xml" },
		})
		.then((response)=>{
			expect(response.status).to.eq(200);
			parser.parseString(response.body,(err,result)=>{
				petid = result.Pet.id;
			});


		})
	})

	it("Fetching Pet data-parsing xml response",()=>{
		cy.request({
			method: 'get',
			url: 'https://petstore.swagger.io/v2/pet'+petid,
			headers: {'accept':"application/xml" },
		})
		.then((response)=>{
			expect(response.status).to.eq(200);
			parser.parseString(response.body,(err,result)=>{
				expect(result.Pet.name).to.equal("jimmy");
				expect(result.Pet.id).to.equal(petid);
			});


		})
	})
})
