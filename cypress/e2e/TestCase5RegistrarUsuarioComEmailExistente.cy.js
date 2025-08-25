// cypress/e2e/RegisterUserWithExistingEmail.cy.js

import HomePage from '../support/Pages/CreateAccount/HomePage';
import LoginPage from '../support/Pages/CreateAccount/LoginPage';

describe('Test Case 5: Register User with existing email', () => {

  it('should not allow registration with an already existing email address', () => {
    
    // Passos 1 e 2: Lançar o navegador e navegar para a URL
    cy.visit(HomePage.getUrl());

    // Passo 3: Verificar que a página inicial é visível
    cy.url().should('include', '/');

    // Passo 4: Clicar no botão 'Signup / Login'
    HomePage.getSignupLoginButton().click();

    // Passo 5: Verificar 'New User Signup!' é visível
    LoginPage.getNewUserSignupTitle().should('be.visible');

    // Passo 6 e 7: Inserir nome e e-mail já registrado e clicar em 'Signup'
    // Nota: Substitua 'existing@example.com' por um e-mail que você sabe que já está registrado no sistema.
    LoginPage.fillSignupForm('Test User', 'test@example.com');

    // Passo 8: Verificar que a mensagem de erro 'Email Address already exist!' é visível
    LoginPage.getEmailAlreadyExistError().should('be.visible')
      .and('contain.text', 'Email Address already exist!');
  });
});