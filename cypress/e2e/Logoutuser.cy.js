// cypress/e2e/LogoutUser.cy.js

import HomePage from '../support/Pages/CreateAccount/HomePage';
import LoginPage from '../support/Pages/CreateAccount/LoginPage';

describe('Test Case 4: Logout User', () => {

  it('should login and then successfully logout the user', () => {
    
    // Passos 1 e 2: Lançar o navegador e navegar para a URL
    cy.visit(HomePage.getUrl());

    // Passo 3: Verificar que a página inicial é visível
    cy.url().should('include', '/');
    cy.title().should('eq', 'Automation Exercise');

    // Passo 4: Clicar no botão 'Signup / Login'
    HomePage.getSignupLoginButton().click();

    // Passo 5: Verificar 'Login to your account' é visível
    LoginPage.getLoginToYourAccountTitle().should('be.visible');

    // Passo 6 e 7: Inserir email e senha corretos e clicar em 'login'
    LoginPage.fillLoginForm('test@example.com', '12345');

    // Passo 8: Verificar que 'Logged in as username' é visível
    HomePage.getLoggedInAs().should('be.visible');

    // Passo 9: Clicar no botão 'Logout'
    HomePage.getLogoutButton().click();

    // Passo 10: Verificar que o usuário foi navegado para a página de login
    cy.url().should('include', '/login');
  });
});