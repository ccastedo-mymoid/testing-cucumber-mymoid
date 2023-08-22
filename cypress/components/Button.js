class Button {

    get(text) {
        return cy.get('button').contains(text);
    }

}

export const button = new Button();