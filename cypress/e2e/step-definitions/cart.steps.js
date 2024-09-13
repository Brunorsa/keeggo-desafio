import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cartPage from "../../support/pages/cartPage";
import homePage from "../../support/pages/homePage";


Given(/^que o usuário está na página inicial da aplicação$/, () => {
  homePage.entrarSite()
});

When(/^o usuário clica no ícone da lupa$/, () => {
  cartPage.clicarLupa()
});

When(/^digitar o nome do produto deseja$/, () => {
  cartPage.digitarProduto()
});

When(/^o usuário pesquisou o produto que deseja$/, () => {
  cartPage.clicarLupa()
  cartPage.digitarProduto()
});

When(/^o usuário clicar no produto escolhido$/, () => {
  cy.wait(2000)
  cartPage.fecharModal();
  cartPage.clicarProduto();
});

When(/^clicar no botão “Add to cart”$/, () => {
  cy.wait(1000)
  cartPage.clicarBtnCarrinho()
});

Then(/^deve exibir uma modal no canto superior direito informando que o produto foi adicionado ao carrinho$/, () => {
  cartPage.validarPopup()
});

Then(/^o sistema deve exibir em uma modal os itens correspondentes ao que foi 	digitado$/, () => {
  cartPage.validarResultados();
});

When(/^tenha adicionado os itens no carrinho$/, () => {
  cartPage.clicarLupa()
  cartPage.digitarProduto()
  cartPage.fecharModal();
  cartPage.clicarProduto();
  cy.wait(1000)
  cartPage.clicarBtnCarrinho()
  cartPage.clicarCarrinhoPreenchido()
});

When(/^clicar em “Checkout”$/, () => {
  cartPage.clicarCheckout();
});

When(/^clicar no botão “Next”$/, () => {
  cartPage.clicarProximo();
});

Then(/deve ir para a tela de Método de pagamento exibindo as formas de pagamento junto 	com resumo do pedido$/, () => {
  cartPage.validarResumoCarrinhoPgt();
});
