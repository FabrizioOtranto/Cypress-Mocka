/// <reference types="cypress" />

export class ShoesPage{

    

    validateTitle(){
        const label = cy.get('h1').contains("Nike Floral Roshe Customized Running Shoes")
        label.should("have.text", "Nike Floral Roshe Customized Running Shoes")
    }

    selectSize(size){
        cy.get('#product_attribute_6').select(size)
    }

    selectColor(color){
        cy.get('#product_attribute_7').select(color)
    }

    selectImage(image){
        cy.get(`#image-squares-8 li:nth-child(${image})`).click()
    }

    productQuantiy(quantity){
        cy.get("#product_enteredQuantity_24").type("{backspace}" + quantity + '{enter}')
    }

    addtoCarBtn(){
        cy.get('#add-to-cart-button-24').click()
    }

    addtoWishlist(){
        cy.get('#add-to-wishlist-button-24').click()
    }
}