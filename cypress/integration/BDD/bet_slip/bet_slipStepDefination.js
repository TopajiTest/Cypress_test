///<reference types = "cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user landed on website",() => {
    cy.visit("https://www.pokerstarssports.uk")
  })

When("the user select match and click on button to add", () => {
    cy.get('a[id="sportList__link__tennis"]').contains('Tennis').click({force: true})
    cy.get('.featuredOutright__selection a').eq(1).click({force: true})
  })

Then("the match should added to the bet slip", () => {
    cy.get('.singleBetsCounter').contains('1')
  })
// Remove selections from the betslip  
When("the user click on the delete icon next to items in betslip", () => {
    cy.get('.icon-remove').eq(1).click({force: true})
    
  })

Then("the match should be removed from the bet slip", () => {
    cy.get('.singleBetsCounter').contains('0')
  })