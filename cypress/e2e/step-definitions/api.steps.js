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
  cy.request('POST', '/accountservice/accountrest/api/v1/login', {
    email: "teste@gmail.com",
    loginPassword: "Teste1",
    loginUser: "teste2"
  }).then((resp) => {
    let token = resp.body.statusMessage.token
    
    expect(resp.status).to.eq(200)
  })
});

When(/^rodo a requisição$/, () => {
  cy.fixture("teste.jpg", 'binary').then((image) => {
    const blob = Cypress.Blob.binaryStringToBlob(image, 'teste/jpg')
    const formData = new FormData()
    formData.append('file', blob, 'teste.jpg')

    cy.request({
      method: 'POST',
      url: '/catalog/api/v1/product/image/265682574/1?product_id=16',
      body: formData,
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjoyNjU2ODI1NzQsInN1YiI6InRlc3RlMiIsInJvbGUiOiJBRE1JTiJ9.qxyQnadFii3szUIQCehh2pnyRNlxPWq6WCxqzKdi8fc`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    })
  })
});

When(/^verificar se o produto foi atualizado$/, () => {
  return true;
});

Then(/^o statuscode deve ser 200$/, () => {
  return true;
});


