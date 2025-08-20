/// <reference types='cypress' />

import CartPage from "../support/pages/CartPage";
import CheckoutPage from "../support/pages/CheckoutPage";
import LoginPage from "../support/pages/LoginPage";
import ProductsPage from "../support/pages/ProductsPage";

describe('Realizar compras de produtos', () => {

  before(() => {
    cy.log('Iniciar compra de produtos');
  });

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  afterEach(() => {
    cy.log('Limpar E finalizar testes');
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  after(() => {
    cy.log('Resultados Esperados Obtidos com Sucesso.');
  });

  it('Escolher produtos', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    ProductsPage.verifyPageLoaded();
    ProductsPage.sortByPriceLowToHigh();

    cy.get(':nth-child(1) > [data-test="inventory-item-description"]')
      .should('contain', 'Sauce Labs Onesie');
    cy.get(':nth-child(2) > [data-test="inventory-item-description"]')
      .should('contain', 'Sauce Labs Bike Light');
    cy.get(':nth-child(3) > [data-test="inventory-item-description"]')
      .should('contain', 'Sauce Labs Bolt T-Shirt');

    ProductsPage.addProductToCart('Sauce Labs Onesie');
    ProductsPage.addProductToCart('Sauce Labs Bike Light');
    ProductsPage.addProductToCart('Sauce Labs Bolt T-Shirt');

    ProductsPage.verifyProductInCart();

    cy.get('[data-test="shopping-cart-link"]').click();
    CartPage.verifyProductsInCart();

    CartPage.proceedToCheckout();
    CheckoutPage.fillCheckoutForm('Primeiro Nome', 'Ultimo Nome', '45698720');

    CheckoutPage.verifyCheckoutTotal();
    CheckoutPage.completePurchase();
  });

  it('Exibir erro de credenciais inválidas', () => {
    LoginPage.login('usuario_invalido', 'senha_errada');

    // Validação da mensagem de erro
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});