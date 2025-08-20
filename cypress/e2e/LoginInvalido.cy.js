///<reference types='cypress' />

import Login from '../support/Pages/Login/index.js'

describe('Realizar Login Invalido', function () {
  const credenciaisObj = {
    standard: "standard_user",
    locked: "locked_out_user",
    password: "12345"
  }

  beforeEach(function () {
    // Carrega fixture apenas uma vez antes de todos os testes
    cy.fixture('credenciaisFixture').then((dados) => {
      this.credenciaisExt = dados
      // 🚨 Importante: Login.acessarURL DEVE ter apenas cy.visit(url) dentro dele
      Login.acessarURL('https://www.saucedemo.com')
      cy.url().should('include', 'saucedemo')
    })
  })

  it.only("Realizar Login Invalido", function () {
    // Login via Page Object
    Login.preencherUsername(this.credenciaisExt.users.standard)
    Login.preencherPassword(this.credenciaisExt.passwords.password_invalido)
    Login.clicarEmLogin()

    Login.msgErro()
  })
})