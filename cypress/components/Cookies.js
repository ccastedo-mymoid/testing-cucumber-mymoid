const { button } = require("./Button");

class Cookies {
    elements = {
        denyBtn: () => button.get('Deny'),
        allowBtn: () => button.get('Allow'),
    }

    clickDeny() {
        this.elements.denyBtn().click();
    }

    clickAllow() {
        this.elements.allowBtn().click();
    }
}

export const cookies = new Cookies();