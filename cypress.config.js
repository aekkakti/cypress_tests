const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    spec: "cypress_tests/cypress/e2e/**/*.js"
  },
  chromeWebSecurity: false,

});
