import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given(/^que foi passado o endpoint para testar$/, () => {
  return true;
});

When(/^rodar a requisição$/, () => {
  cy.request('/catalog/api/v1/products/search?name=hp%20elite').as('buscaProduto')
});

When(/^verificar que a lista exibe somente o produto pesquisado$/, () => {
  cy.get('@buscaProduto').then((resp) => {
    const quantidadeProduto = resp.body[0].products.length;
    cy.log('Quantidade: ' + quantidadeProduto);
    expect(quantidadeProduto).to.have.eq(2);
  })
});

Then(/^o statuscode deve ser 200 OK$/, () => {
  cy.get('@buscaProduto').then((resp) => {
    expect(resp.status).to.eq(200)
  })
});

Given(/^que loguei via API$/, () => {
  return true;
});

When(/^rodo a requisição$/, () => {
  return true;
});

When(/^verificar se o produto foi atualizado$/, () => {
  return true;
});

Then(/^o statuscode deve ser 201 Created$/, () => {
  return true;
});


