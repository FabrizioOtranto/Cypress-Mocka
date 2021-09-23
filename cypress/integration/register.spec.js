/// <reference types="cypress" />
import * as utils from "../pages/functions/utils"
import { RegisterPage } from "../pages/registerPage"


describe('register a new user', () =>{
    const registerPage = new RegisterPage()
    const randonNumber = Math.floor(Math.random() * 1000000)
    const dataSet = require("../data/register/registerData.json")
    
    
    dataSet.forEach(data =>{

        const email = data.email+randonNumber+'@gmail.com'
    it("register a new user",() =>{
    utils.navigate("https://demo.nopcommerce.com/register?returnUrl=%2F")
    registerPage.gender(data.gender)
    registerPage.firstnameTxt(data.firstname)
    registerPage.lastnameTxt(data.lastname)
    registerPage.birthDay(data.birthday)
    registerPage.birthMonth(data.birtmonth)
    registerPage.birthYear(data.birthyear)
    registerPage.emailTxt(email)
    registerPage.passwordTxt(data.password)
    registerPage.confirmPasswordTxt(data.password)
    registerPage.registerBtn()
    registerPage.validateRegistration()
    cy.get('.result').screenshot()
    cy.screenshot()
    })
})
})