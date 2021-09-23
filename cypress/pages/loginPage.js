/// <reference types="cypress" />

export class LogInPage{
    
    validateTitle(){
    const label = cy.get("h1").contains("Welcome, Please Sign In!")
    label.should("have.text", "Welcome, Please Sign In!")
    }

    emailTxt(email){
        cy.get("#Email").type(email)
    }

    passwordTxt(password){
        cy.get("#Password").type(password)
    }

    logInBtn(){
        cy.get('form > .buttons > .button-1').click()
    }

    errorMessage(){
        const label = cy.get('.message-error').contains("Login was unsuccessful. Please correct the errors and try again.")

        label.should("have.text","Login was unsuccessful. Please correct the errors and try again.No customer account found\n")
    }

    forgotPasswordBtn(){
        cy.get("a").contains("Forgot password?").click()
    }

    recoverBtn(){
        cy.get("button[name='send-email']").click()
    }

    recoverMesage(){
        const label = cy.get('.result')
        
        label.should('have.text', "\nEmail with instructions has been sent to you.\n")
    }

    rememberBtn(){
        cy.get("#RememberMe").click()

    }
    
}