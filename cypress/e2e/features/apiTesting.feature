#language: pt

Funcionalidade: AdvantageDemo.com

  Cenario: Procure por um produto (GET):
    Dado que foi passado o endpoint para testar
    Quando rodar a requisição
    E verificar que a lista exibe somente o produto pesquisado
    Entao o statuscode deve ser 200 OK

  Cenario: Atualize a imagem de um produto (PUT)
    Dado que loguei via API
    E rodo a requisição
    E verificar se o produto foi atualizado
    Entao o statuscode deve ser 200