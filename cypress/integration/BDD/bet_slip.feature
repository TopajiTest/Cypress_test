Feature: Background Section
  
   Background:
    Given the user landed on website

Scenario: added to the bet slip
     When the user select match and click on button to add
     Then the match should added to the bet slip

Scenario: remove from the bet slip
     When the user select match and click on button to add
     When the user click on the delete icon next to items in betslip
     Then the match should from the bet slip