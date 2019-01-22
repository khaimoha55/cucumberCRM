$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sameena fatima/eclipse-workspace/cumtest/src/main/java/features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free crm creat contacts",
  "description": "",
  "id": "free-crm-creat-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free crm create a new contact scenario",
  "description": "",
  "id": "free-crm-creat-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "contactsLabel is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "username is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "free-crm-creat-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "companyy"
      ],
      "line": 22,
      "id": "free-crm-creat-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "mohammadk",
        "Sameena55",
        "tom",
        "peter",
        "Manager"
      ],
      "line": 23,
      "id": "free-crm-creat-contacts;free-crm-create-a-new-contact-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Free crm create a new contact scenario",
  "description": "",
  "id": "free-crm-creat-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"mohammadk\" and \"Sameena55\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "contactsLabel is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "username is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters contact details \"tom\" and \"peter\" and \"\u003ccompany\u003e\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11776269107,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 31376783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohammadk",
      "offset": 13
    },
    {
      "val": "Sameena55",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1681789016,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5573476744,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 24917694,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Then_user_click_on_contacts_link()"
});
formatter.result({
  "duration": 1926764813,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Then_contactsLabel_is_displayed()"
});
formatter.result({
  "duration": 960166,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tflag1 cannot be resolved to a variable\n\r\n\tat step_def.LoginStepDefinition.Then_contactsLabel_is_displayed(LoginStepDefinition.java:72)\r\n\tat ✽.Then contactsLabel is displayed(C:/Users/sameena fatima/eclipse-workspace/cumtest/src/main/java/features/contacts.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.Then_username_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 29
    },
    {
      "val": "peter",
      "offset": 39
    },
    {
      "val": "\u003ccompany\u003e",
      "offset": 51
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});