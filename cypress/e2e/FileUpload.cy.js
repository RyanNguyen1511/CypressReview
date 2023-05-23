import 'cypress-file-upload';

describe('File Uploads', (() => {
	it("Single File Upload", () => {
		cy.visit('https://the-internet.herokuapp.com/upload');
		cy.get("#file-upload").attachFile('test 1.pdf');
		cy.get("#file-submit").click();
		cy.wait(5000);

		cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

	})
	it("File Upload - Rename", () => {
		cy.visit('https://the-internet.herokuapp.com/upload');
		cy.get("#file-upload").attachFile({ filePath: 'test 1.pdf', fileName: 'myfile 1.pdf' });
		cy.get("#file-submit").click();
		cy.wait(5000);

		cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
		cy.get('#uploaded-files').contains("myfile.pdf")

	})
	it("File upload - Drag and drop", () => {
		cy.visit('https://the-internet.herokuapp.com/upload');
		cy.get("#drag-drop-upload").attachFile('test 1.pdf', { subjectType: 'drag-n-drop' });

		cy.wait(5000);
		cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").contains('test 1.pdf')

	})
	it("Multiple files upload", () => {
		cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
		cy.get("#filesToUpload").attachFile(['test 1.pdf', 'test 2.pdf']);
		cy.wait(5000);

		cy.get("#fileList").should('not.contain.text', 'No Files Selected')


	})
	it.only("File upload - Shadow Dom", () => {
		cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
		cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile('test 1.pdf')
		cy.wait(5000);


		cy.get('.smart-item-name', { includeShadowDom: true }).contains('test 1.pdf')




	})


}))