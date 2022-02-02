import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open HeliumDoc page', () => {
  cy.visit('/')
})