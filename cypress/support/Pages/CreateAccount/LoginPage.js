// cypress/support/Pages/LoginPage.js

class LoginPage {
  
  // ... (código existente para a seção de login) ...

  getLoginToYourAccountTitle() {
    return cy.get('h2').contains('Login to your account');
  }

  // Seção para o formulário de Cadastro (Signup)
  getNewUserSignupTitle() {
    return cy.get('.signup-form h2').contains('New User Signup!');
  }

  getSignupNameInput() {
    return cy.get('input[data-qa="signup-name"]');
  }

  getSignupEmailInput() {
    return cy.get('input[data-qa="signup-email"]');
  }

  getSignupButton() {
    return cy.get('button[data-qa="signup-button"]');
  }
  
  // Novo seletor para a mensagem de erro de e-mail já existente
  getEmailAlreadyExistError() {
    return cy.get('.signup-form p');
  }

  fillSignupForm(name, email) {
    this.getSignupNameInput().type(name);
    this.getSignupEmailInput().type(email);
    this.getSignupButton().click();
  }

  // ... (código existente para a seção de login) ...
}

export default new LoginPage();