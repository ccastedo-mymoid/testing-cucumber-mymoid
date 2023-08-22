import { button } from "cypress/components/Button";

class LoginPage {
  
  elements = {
    title: () => cy.get('h1'),
    email: () => cy.get('input[id="username"]'),
    password: () => cy.get('input[id="password"]'),
    continueBtn: () => cy.get('button').eq(2),
  }

  typeEmail(email) {
    this.elements.email().type(email);
  }

  typePassword(password) {
    this.elements.password().type(password);
  }

  clickContinueButton() {
    this.elements.continueBtn().click();
  }

  login(email, password) {
    this.typeEmail(email);
    this.typePassword(password);
    this.clickContinueButton();
  }

}

export const loginPage = new LoginPage();
