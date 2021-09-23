/// <reference types="cypress" />

export class HomePage{

    validateTitle(){
        const label = cy.get('h2').contains("Welcome to our store")
        label.should('have.text', "Welcome to our store")
    }
}