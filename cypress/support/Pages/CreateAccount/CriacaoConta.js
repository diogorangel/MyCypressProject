class CreateAccountPage {
  // Selectors
  accountCreatedTitle = '[data-qa="account-created"] h2 b';
  continueButton = '[data-qa="continue-button"]';
  deleteAccountButton = '[data-qa="delete-account"]';
  accountDeletedTitle = '[data-qa="account-deleted"] h2 b';

  // Actions
  preencherDetalhesDaConta(gender, password, day, month, year) {
    // 9. Preencher detalhes: Título, Senha, Data de Nascimento
    if (gender === 'Male') {
      cy.get('#id_gender1').check();
    } else {
      cy.get('#id_gender2').check();
    }
    cy.get('#password').type(password);
    cy.get('#days').select(day);
    cy.get('#months').select(month);
    cy.get('#years').select(year);
  }

  marcarCheckboxes() {
    // 10. Selecionar checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').check();
    // 11. Selecionar checkbox 'Receive special offers from our partners!'
    cy.get('#optin').check();
  }

  preencherDetalhesDoEndereco(firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber) {
    // 12. Preencher detalhes: Nome, Sobrenome, Empresa, etc.
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="company"]').type(company);
    cy.get('[data-qa="address"]').type(address1);
    cy.get('[data-qa="address2"]').type(address2);
    cy.get('[data-qa="country"]').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipcode);
    cy.get('[data-qa="mobile_number"]').type(mobileNumber);
  }

  clicarCriarConta() {
    // 13. Clicar em 'Create Account button'
    cy.get('[data-qa="create-account"]').click();
  }

  clicarContinuar() {
    // 15. Clicar em 'Continue' button
    cy.get(this.continueButton).click();
  }

  clicarDeletarConta() {
    // 17. Clicar em 'Delete Account' button
    cy.get(this.deleteAccountButton).click();
  }
}