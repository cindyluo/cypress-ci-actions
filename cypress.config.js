const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://todo-app-barkend.herokuapp.com/',
    specPattern: 'tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
