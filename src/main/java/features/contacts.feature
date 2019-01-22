Feature: Free crm creat contacts

Scenario Outline: Free crm create a new contact scenario 

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page 
Then user click on contacts link
Then contactsLabel is displayed 
Then user move to new contact page 
Then username is displayed 
Then user enters contact details "<firstname>" and "<lastname>" and "<company>"


Then Close the browser


Examples:

| username| password | firstname | lastname | companyy |
|mohammadk| Sameena55| tom       | peter    | Manager  |