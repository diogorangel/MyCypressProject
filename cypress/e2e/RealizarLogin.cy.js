///<reference types='cypress' />
//import { before } from 'mocha'

import Login from '../support/Pages/Login'
import Produtos from '../support/Pages/Produtos'
import { criarDestinatario } from '../support/Factories/destinatario.js'

describe('Realizar Login', function () {
  const credenciaisObj = {
    standard: "standard_user",
    locked: "locked_out_user",
    password: "secret_sauce"
  }

  before(function () {
    // Carrega fixture apenas uma vez antes de todos os testes
    cy.fixture('credenciaisFixture').then((dados) => {
      this.credenciaisExt = dados
    })
  })

  beforeEach(function () {
    // 🚨 Importante: Login.acessarURL DEVE ter apenas cy.visit(url) dentro dele
    Login.acessarURL('https://www.saucedemo.com')
    cy.url().should('include', 'saucedemo')
  })

  it.only("Realizar Login com sucesso", function () {
    // Login via Page Object
    Login.preencherUsername(this.credenciaisExt.users.standard)
    Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
    Login.clicarEmLogin()

    Produtos.validarLabelProdutos()
  })

  it("Realizar Login sem informar a senha", function () {
    Login.preencherUsername(credenciaisObj.standard)
    Login.clicarEmLogin()
    Login.validarMensagemDeErro('Epic sadface: Password is required')
    Login.validarComContains('Password is required')
  })

  it("Realizar Login sem informar o usuario", function () {
    Login.preencherPassword(credenciaisObj.password)
    Login.clicarEmLogin()
    Login.validarMensagemDeErro('Epic sadface: Username is required')
    Login.validarComContains('Username is required')
  })

  const destinatarioFaker = criarDestinatario()

  it("Realizar compra com sucesso", function () {
    Login.preencherUsername(this.credenciaisExt.users.standard)
    Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
    Login.clicarEmLogin()
    Produtos.validarLabelProdutos()

    // Selecionar item aleatório
    const elIndex = Cypress._.random(0, 5)
    cy.log(`Número sorteado: ${elIndex}`)
    cy.get('button.btn_primary.btn_inventory').eq(elIndex).click()

    // Carrinho
    cy.get('a.shopping_cart_link').click()
    cy.validarCSS('div.subheader', 'color', 'rgb(255, 255, 255)')
    cy.validarCSS('a.btn_action.checkout_button', 'background-color', 'rgb(226, 35, 26)')
    cy.get('a.btn_action.checkout_button').click()

    // Dados do destinatário
    cy.informarDestinatario(
      destinatarioFaker.firstName,
      destinatarioFaker.lastName,
      destinatarioFaker.zipCode
    )

    cy.get('input.btn_primary.cart_button').click()
    cy.get('a.btn_action.cart_button').click()
    cy.get('h2.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  })
})
