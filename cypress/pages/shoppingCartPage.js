/// <reference types="cypress" />

export class ShoppingCartPage{

    validateTitle(){
        const label  = cy.get('h1').contains("Shopping cart")
        label.should("have.text", "Shopping cart")
    }

    productQuantity(quantity){
        cy.get(".qty-input").type('{backspace}' + quantity)
    }

    updateBtn(){
        cy.get('.update-cart-button').click()
    }

    continueShoppingBtn(){
        cy.get('.continue-shopping-button').click()
    }

    estimateBtn(){
        cy.get('#open-estimate-shipping-popup').click()
    }

    productPrice(price){
        const label = cy.get('.product-unit-price')
        label.should("have.text", price)
    }

    subtotal(subtotal){
        const label  = cy.get('.product-subtotal').contains(subtotal)
        label.should("have.text", subtotal)
    }

    termsBtn(){
        cy.get('#termsofservice').click()
    }

    checkoutBtn(){
        cy.get('#checkout').click()
    }

}