// cypress.config.js
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    viewportWidth: 700,
    viewportHeight: 450,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
