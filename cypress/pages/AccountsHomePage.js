import { button } from "cypress/components/Button";
import { cookies } from "cypress/components/Cookies";

class AccountsHomePage {

    const = {
        titleText: "Nice to see you!",
        subTitleText: "Start by creating an organization! You can create more than one.",        
    }

    elements = {
        logginButton: () => button.get("Login"),
        title: () => cy.get('h2'),
        subTitle: () => cy.get('h5'),
        createOrgBtn: () => button.get('Create organization'),
    }

    validate() {
        cy.wait(2000);
        cookies.clickDeny();
        this.elements.title().contains(this.const.titleText);
        this.elements.subTitle().contains(this.const.subTitleText);
        this.elements.createOrgBtn().should('contain.text', 'Create organization')
    }

}

export const accountsHomePage = new AccountsHomePage();