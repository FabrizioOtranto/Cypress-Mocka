/// <reference types="cypress" />

import * as utils from '../pages/functions/utils'
import { ShoesPage } from '../pages/shoesPage'

describe("Buy shoes", () =>{

    const shoesPage = new ShoesPage
    const dataSet = require("../data/products/shoes/shoesData.json")

    beforeEach(() =>{
        utils.navigate("https://demo.nopcommerce.com/nike-floral-roshe-customized-running-shoes")
    })

    it('assert title', () =>{
        shoesPage.validateTitle()

    })

dataSet.forEach(data=>{
    it('buy shoes selecting size, color and image',() =>{
    shoesPage.selectSize(data.size)
    shoesPage.selectColor(data.color)
    shoesPage.selectImage(data.image)
    shoesPage.productQuantiy(data.quantity)
    shoesPage.addtoCarBtn()
    utils.shoppingCartText(data.product)
    shoesPage.addtoWishlist()
    utils.wishListText(data.product)
    cy.screenshot()
})
})
})




