///<reference types = "cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user landed on website",() => {
    cy.visit("https://www.pokerstarssports.uk")
  })

When("the user change the odds format", () => {
    cy.get('a[id="sportList__link__tennis"]').contains('Tennis').click({force: true})
    cy.get('.featuredOutright__selection a').eq(1).contains('/')
    cy.get('a[id="Fraction"]').click({force: true})
    cy.get('a[id="Decimal"]').click({force: true})
  })

Then("user should see change in the format", () => {
    cy.get('.featuredOutright__selection a').eq(1).contains('.')
  })