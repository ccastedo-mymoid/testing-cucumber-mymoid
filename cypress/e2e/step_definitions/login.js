import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';
import {accountLoginPage} from '@pages/AccountLoginPage';
import { accountsHomePage } from "@pages/AccountsHomePage";

Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/");
});

Given("A web browser is at Accounts", () => {
  cy.visit("https://accounts.mymoid.com/")
})

When("We login with username {string} and password {string}", (username, password) => {
  accountLoginPage.clickLogin();
  loginPage.login(username, password);
})

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});


Then("We are in the Accounts main page", () => {
  accountsHomePage.validate()
});

Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
