class SignupLoginPage {
  // Selectors
  signupLoginButton = 'a[href="/login"]';
  newUserSignupTitle = '.signup-form h2';
  signupNameInput = '[data-qa="signup-name"]';
  signupEmailInput = '[data-qa="signup-email"]';
  signupButton = '[data-qa="signup-button"]';
  accountInformationTitle = '.login-form h2 b';

  // Actions
  acessarPaginaLogin() {
    cy.visit('/');
    cy.get(this.signupLoginButton).click();
  }

  preencherFormularioSignup(name, email) {
    cy.get(this.signupNameInput).type(name);
    cy.get(this.signupEmailInput).type(email);
    cy.get(this.signupButton).click();
  }
}