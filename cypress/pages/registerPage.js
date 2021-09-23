/// <reference types="cypress" />

export class RegisterPage{

    gender(gender){
        cy.get(`#gender-${gender}`).click()
    }
   
    firstnameTxt(firstname){
        cy.get('#FirstName').type(firstname)
    }

    lastnameTxt(lastname){
        cy.get('#LastName').type(lastname)
    }

    birthDay(day){
     cy.get("select[name='DateOfBirthDay']").select(day)

    }

    birthMonth(month){
        cy.get("select[name='DateOfBirthMonth']").select(month)
   
       }

       birthYear(year){
        cy.get("select[name='DateOfBirthYear']").select(year)
   
       }

       emailTxt(email){
        cy.get('#Email').type(email)
       }

       passwordTxt(password){
        cy.get('#Password').type(password)
       }

       confirmPasswordTxt(password){
        cy.get('#ConfirmPassword').type(password)
       }

       registerBtn(){
        cy.get('#register-button').click()
       }

       validateRegistration(){
        const label = cy.get('.result')
        
        label.should("have.text", "Your registration completed")
       }

}