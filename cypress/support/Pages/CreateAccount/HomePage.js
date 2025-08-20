// cypress/support/Pages/CreateAccount/HomePage.js

class HomePage {

  getUrl() {
    return 'http://automationexercise.com';
  }

  getSignupLoginButton() {
    return cy.get('.shop-menu a[href="/login"]');
  }

  getLoggedInAs() {
    return cy.get('li:contains("Logged in as")');
  }

   // Novo seletor para o botão de Logout
  getLogoutButton() {
    return cy.get('.shop-menu a[href="/logout"]');
  }

  getDeleteAccountButton() {
    return cy.get('.shop-menu a[href="/delete_account"]');
  }
}

export default new HomePage();