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
Cypress.Commands.add('realizarLogin', (user, password) => {
    cy.get('#user-name').type(user)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('validarCSS', (seletor, atributo, valor)=>{
    cy.get(seletor).should('have.css', atributo, valor)
})

Cypress.Commands.add('informarDestinatario', (firstName, lastName, zipCode)=>{
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#postal-code').type(zipCode)
})

Cypress.Commands.overwrite('visit', (url, urlValidate)=>{
    cy.visit(url)
    cy.url().should('include', urlValidate)
})
