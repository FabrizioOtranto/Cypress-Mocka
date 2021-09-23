/// <reference types="cypress" />
import * as utils from "../pages/functions/utils"
import { HomePage } from "../pages/homePage"
import { LogInPage } from "../pages/loginPage"

describe("Log in as a returning customer with valid and invalid data", () =>{
    const loginPage = new LogInPage()
    const homePage = new HomePage()
    const dataSet = require("../data/login/positives/loginData.json")
    const dataSetFail = require("../data/login/negatives/loginData.json")
    var picture1 = false
    var picture2 = false
    var i = 0



beforeEach(() =>{
    utils.navigate("https://demo.nopcommerce.com/login?returnUrl=%2F")
    cy.eyesOpen({
        appName: 'NopComeerce-Cucumber-Project-Login',
        batchName: 'NopComeerce-Cucumber-Project-Login',
    })
})
afterEach(() => cy.eyesClose())

    dataSet.forEach(data =>{
    it("Log in succesfully with valid credentials",() =>{
        var chance = Math.random()
        console.log(chance)
        loginPage.emailTxt(data.email)
        loginPage.passwordTxt(data.password)
        loginPage.rememberBtn()
        if((chance <= 0.33 && !picture1) || (!picture2 && i == dataSet.length -1)){
            cy.eyesCheckWindow()
            picture1 = true
        }

        loginPage.logInBtn()
        homePage.validateTitle()
        if((chance <= 0.33 && !picture2) || (!picture2 && i == dataSet.length -1)){
            cy.eyesCheckWindow()
            picture2 = true
        }
        i++
    })
})


dataSetFail.forEach(data =>{
    it.skip("try log in with invalid username and/or password", () =>{

        loginPage.emailTxt(data.email)
        loginPage.passwordTxt(data.password)
        loginPage.logInBtn()
        loginPage.errorMessage()

        cy.eyesCheckWindow()
    })
})

it("try to log in without email", () =>{

    loginPage.passwordTxt("password")
    loginPage.logInBtn()

    cy.eyesCheckWindow()
})

it("try to log in without password", () =>{

    loginPage.emailTxt("testing@gmail.com")
    loginPage.logInBtn()

    cy.eyesCheckWindow()
})

it('recover password',()=>{
    loginPage.forgotPasswordBtn()
    loginPage.emailTxt("testing123@gmail.com")
    loginPage.recoverBtn()
    loginPage.recoverMesage()

    cy.eyesCheckWindow()
})
})