import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/pages/loginPage";
import homePage from "../../support/pages/homePage";

Given(/^que o usuário esteja logado no sistema$/, () => {
  homePage.entrarSite();
  loginPage.clicarBtnLogin();
  loginPage.inserirUsername();
  loginPage.inserirPassword();
  loginPage.logarSistema();
  loginPage.validarLogin();
});

