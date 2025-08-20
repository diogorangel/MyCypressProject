const el = require('./elements').ELEMENTS
class Login {

    acessarURL(url){
        cy.visit(url)
        ///cy.get(el.imgSwagLabs).should('be.visible')
    }

    preencherUsername(username){
        cy.get(el.campoUsername).type(username)
    }

    preencherPassword(password){
        cy.get(el.campoPassword).type(password)
    }

    clicarEmLogin(){
        cy.get(el.botaoLogin).click()
    }

    validarMensagemDeErro(erro){
        cy.get(el.msgErro).should('have.text',erro)
    }

    validarComContains(erro){
        cy.contains(erro).should('be.visible')
    }

}
export default new Login()