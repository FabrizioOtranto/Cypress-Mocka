/// <reference types="cypress" />


export class CamerasPage {
    addToCar(product){
        cy.get(`:nth-child(${product}) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button`).click()
    }
}