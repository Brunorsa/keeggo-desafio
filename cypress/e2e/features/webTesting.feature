#language: pt

Funcionalidade: AdvantageDemo.com

  Cenario: Realize a busca de um produto
    Dado que o usuário está na página inicial da aplicação
    E o usuário clica no ícone da lupa
    Quando digitar o nome do produto deseja
    Entao o sistema deve exibir em uma modal os itens correspondentes ao que foi 	digitado


  Cenario: Incluir produto no carrinho
    Dado que o usuário está na página inicial da aplicação
    E o usuário pesquisou o produto que deseja
    Quando o usuário clicar no produto escolhido
    E clicar no botão “Add to cart”
    Então deve exibir uma modal no canto superior direito informando que o produto foi adicionado ao carrinho

  Cenario: Validar os produtos incluídos no carrinho na tela de pagamento
    Dado que o usuário esteja logado no sistema
    E tenha adicionado os itens no carrinho
    E clicar em “Checkout”
    Quando clicar no botão “Next”
    Então deve ir para a tela de Método de pagamento exibindo as formas de pagamento junto 	com resumo do pedido