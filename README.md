# Cypress_test
CypressFirstTest
Scenarios from Task-1
I have created 2 sencarios in cypress and cucumber to automate: 

1.Add and remove thigns from bet slip
For this test i have created 2 things
- Step definition file under folder called Odds format. 
- .Feature where you can see cucumber BDD scenarios. 

2.Changing the odd format
For this test i have created 2 things
- Step definition file under folder called Odds format. 
- .Feature where you can see cucumber BDD scenarios. 

Steps to run the cypress:
You can run cypreess using the command in terminal : npx cypress open > choose the test you want to run from cypress window 

OR

You can run the test in cypress individually by using these commands 
npx cypress run --spec cypress/integration/BDD/bet_slip.feature --browser chrome
npx cypress run --spec cypress/integration/BDD/OddsFormat.feature --browser chrome
