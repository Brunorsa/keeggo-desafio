class cartElements {
  btnCarrinho() {
    return cy.get('.fixedBtn > .roboto-medium')
  }

  btnCarrinhoPreenchido(){
    return cy.get('#shoppingCartLink')
  }

  btnLupa() {
    return cy.get('#search > a')
  }

  btnProximo(){
    return cy.get('.mobileBtnHandler > #next_btn')
  }

  btnCheckout(){
    return cy.get('#checkOutButton')
  }

  inputBusca(){
    return cy.get('#autoComplete')
  }

  btnModal(){
    return cy.get('.autoCompleteCover > div > img')
  }

  resultadoEsperado(){
    return cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul')
  }

  produtoItem(){
    return cy.get('.productPrice')
  }

  modalResultado(){
    return cy.get('.searchPopUp')
  }

  popupCarrinho(){
    return cy.get('#checkOutPopUp')
  }

  resumoCarrinho(){
    return cy.get('#userCart')
  }
}

export default new cartElements()