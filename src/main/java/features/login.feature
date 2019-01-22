Feature: Free crm 


#Scenario: free crm test 
#
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "mohammadk" and "Sameena55"
#Then user clicks on login button
#Then user is on home page 
#Then  Close the browser



#With example keyword

Scenario Outline: free crm test 

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page 
Then Close the browser 

Examples:

| username | password |
| mohammadk| Sameena55|
| naveenk  | test@123 |