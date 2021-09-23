/// <reference types="cypress" />

export function navigate(url){
    cy.visit(url)
}

export function listOpcion(option){
    cy.get(option)
}

export function shopingcartLink(){
    cy.get('.cart-label').click()
    
}

export function shoppingCartText(quantity){
    const label = cy.get(".cart-qty")
    label.should('have.text',`${quantity}`)
}

export function wishListText(quantity){
    const label = cy.get(".wishlist-qty")
    label.should('have.text',`${quantity}`)
}
