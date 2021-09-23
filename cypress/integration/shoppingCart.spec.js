/// <reference types="cypress" />
import { CamerasPage } from "../pages/camerasPage"
import * as utils from "../pages/functions/utils"
import { ShoppingCartPage } from "../pages/shoppingCartPage"
import { LogInPage } from "../pages/loginPage"

describe("shopping cart", () =>{
    const cameraPage = new CamerasPage()
    const shoppingCart = new ShoppingCartPage()
    const loginPage = new LogInPage()
    const dataSet = require('../data/products/cameras/cameras.json')

    beforeEach(() =>{
        utils.navigate("https://demo.nopcommerce.com/camera-photo")
        cameraPage.addToCar(2)
        utils.shopingcartLink()

    })

    it('assert title',() =>{
        shoppingCart.validateTitle()
    })

    dataSet.forEach(data => {
    it("assert total and subtotal",() =>{
        shoppingCart.productQuantity(data.quantity)
        shoppingCart.updateBtn()
        shoppingCart.productPrice(data.individualPrice)
        shoppingCart.subtotal(data.subtotal)
        cy.screenshot()

    })

})
it("checkout product",() =>{
    shoppingCart.termsBtn()
    shoppingCart.checkoutBtn()
    loginPage.validateTitle()

})

})