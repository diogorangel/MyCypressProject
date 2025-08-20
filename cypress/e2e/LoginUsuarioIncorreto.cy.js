/// <reference types='cypress' />

import Login from '../support/Pages/Login/index.js'

describe('Realizar Login Inválido', () => { // Usando arrow function no 'describe'
  const credenciaisObj = {
    standard: "standard_user",
    locked: "locked_out_user",
    password: "12345"
  }

  beforeEach(function () {
    cy.fixture('credenciaisFixture').then((dados) => { 
      this.credenciaisExt = dados;
    })
    Login.acessarURL('https://www.saucedemo.com')
    cy.url().should('include', 'saucedemo')
  })

  it('Validando login com nome de usuário incorreto', () => {
    cy.login_teste('incorreto', 'secret_sauce');
    cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    Login.msgErro()
  })
})