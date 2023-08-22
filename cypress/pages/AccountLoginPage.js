import { button } from "cypress/components/Button";

class AccountsLoginPage {

    elements = {
        logginButton: () => button.get("Login"),
    }

    clickLogin() {
        this.elements.logginButton().click();
    }

}

export const accountLoginPage = new AccountsLoginPage();