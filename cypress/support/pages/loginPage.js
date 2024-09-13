import loginElements from "../../support/elements/loginElements";

class loginPage {
  clicarBtnLogin() {
    loginElements.btnLogin().click();
  }

  inserirUsername() {
    loginElements.inputUsername().type('teste2')
  }

  inserirPassword() {
    loginElements.inputPassword().type('Teste1')
  }

  logarSistema() {
    loginElements.btnSignIn().click()
  }

  validarLogin(){
    loginElements.btnLogin().should('contain', 'teste2')
  }
}

export default new loginPage()