// cypress/e2e/LoginUsuarioIncorreto.cy.js

import HomePage from '../support/Pages/CreateAccount/HomePage';
import LoginPage from '../support/Pages/CreateAccount/LoginPage';

describe('Test Case 3: Login User with incorrect email and password', () => {

  it('should display an error message for incorrect credentials', () => {
    
    // Passos 1 e 2: Lançar o navegador e navegar para a URL
    cy.visit(HomePage.getUrl());

    // Passo 3: Verificar que a página inicial é visível
    cy.url().should('include', '/');

    // Passo 4: Clicar no botão 'Signup / Login'
    HomePage.getSignupLoginButton().click();

    // Passo 5: Verificar 'Login to your account' é visível
    LoginPage.getLoginToYourAccountTitle().should('be.visible');

    // Passo 6 e 7: Inserir email e senha incorretos e clicar em 'login'
    LoginPage.fillLoginForm('invalid@email.com', 'wrongpassword');

    // Passo 8: Verificar que a mensagem de erro é visível
    LoginPage.getIncorrectLoginError().should('be.visible')
      .and('contain.text', 'Your email or password is incorrect!');
      
  });
});