class loginElements {
  btnLogin() {
    return cy.get('#menuUserLink')
  }

  inputUsername() {
    return cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine')
  }

  inputPassword() {
    return cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine')
  }

  btnSignIn() {
    return cy.get('#sign_in_btn')
  }
}

export default new loginElements()