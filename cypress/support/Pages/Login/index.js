class Login {
  acessarURL(url) {
    cy.visit(url) // apenas isso!
  }

  preencherUsername(username) {
    cy.get('[data-test="username"]').type(username)
  }

  preencherPassword(password) {
    cy.get('[data-test="password"]').type(password)
  }

  clicarEmLogin() {
    cy.get('[data-test="login-button"]').click()
  }

  msgErro() {
    cy.get('[data-test="error"]').should('be.visible')
  }
}

export default new Login()
