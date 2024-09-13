import cartElements from "../elements/cartElements"

class cartPage {
  clicarBtnCarrinho() {
    cartElements.btnCarrinho().click();
  }

  clicarLupa() {
    cartElements.btnLupa().click()
  }

  digitarProduto() {
    cartElements.inputBusca().type('hp elitepad{enter}');
  }

  validarResultados() {
    cartElements.resultadoEsperado().should('be.visible')
    cartElements.modalResultado().should('be.visible')
  }

  fecharModal() {
    cartElements.btnModal().click()
  }

  clicarProduto() {
    cartElements.produtoItem().click()
  }

  validarPopup() {
    cartElements.popupCarrinho().should('be.visible')
  }

  clicarCheckout() {
    cartElements.btnCheckout().click()
  }

  clicarProximo() {
    cartElements.btnProximo().click()
  }

  clicarCarrinhoPreenchido() {
    cartElements.btnCarrinhoPreenchido().click();
  }

  validarResumoCarrinhoPgt(){
    cartElements.resumoCarrinho().should('be.visible');
  }
}

export default new cartPage()