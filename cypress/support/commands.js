// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// <reference type="Cypress" />
// <reference type="cypress-xpath" />

Cypress.Commands.add('getIframe',(iframe)=>{	
	return cy.get("#mce_0_ifr")
		.its('0.contentDocument.body')
		.should('be.visible')
		.then(cy.wrap);
})

import 'cypress-file-upload';

// Custom command for clicking on link using label
Cypress.Commands.add("ClickLink",(label)=>{
	cy.get("a").contains(label).click();
});


// Overwrite contains()

// Cypress.Commands.overwrite("contains",(originalFn, subject, filter, text, options ={})=>{
// 	if(typeof text =="object"){
// 		options = text
// 		text = filter
// 		filter = undefined
// 	}
// 	options.matchCase = false
// 	return originalFn(subject,filter,text,options)
// })

// custom command for login
Cypress.Commands.add("LogInApp",(email,password)=>{
	cy.get('');


	cy.visit("#Email").type(email);
	cy.visit('#Password').type(password);
	cy.visit("button[class='button-1 login-button']").click();
})