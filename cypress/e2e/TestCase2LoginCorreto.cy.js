// cypress/e2e/LoginUsuarioCorreto.cy.js
// Importa as classes de página
import HomePage from '../support/Pages/CreateAccount/HomePage';
import LoginPage from '../support/Pages/CreateAccount/LoginPage';

// O bloco describe define o seu suite de testes
describe('Test Case 2: Login User with correct email and password', () => {

  // O bloco it define o seu caso de teste específico
  it('should login with a valid user and delete the account', () => {

    // Passos 1 e 2: Lançar o navegador e navegar para a URL
    cy.visit(HomePage.getUrl());

    // Passo 3: Verificar que a página inicial é visível
    cy.url().should('include', '/');

    // Passo 4: Clicar no botão 'Signup / Login'
    HomePage.getSignupLoginButton().click();

    // Passo 5: Verificar 'Login to your account' é visível
    LoginPage.getLoginToYourAccountTitle().should('be.visible');

    // Passo 6 e 7: Inserir email e senha corretos e clicar em 'login'
    LoginPage.fillLoginForm('test@example.com', '12345');

    // Passo 8: Verificar que 'Logged in as username' é visível
    HomePage.getLoggedInAs().should('be.visible');

    // Passo 9: Clicar no botão 'Delete Account'
    HomePage.getDeleteAccountButton().click();

    // Passo 10: Verificar que 'ACCOUNT DELETED!' é visível
    cy.get('b').should('contain', 'ACCOUNT DELETED!');

    // Nota: É uma boa prática usar um 'fixture' (arquivo JSON)
    // para armazenar credenciais de login e outros dados de teste.
    // Ex: cy.fixture('user.json').then((user) => {
    //   LoginPage.fillLoginForm(user.email, user.password);
    // });
  });
});