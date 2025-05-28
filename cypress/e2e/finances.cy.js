//testar site https://devfinance-agilizei.netlify.app/
/// <reference types="cypress" />

context('Dev Finances Agilizei', () => {

    //hooks
    //trechos que executam antes e depois do teste
    //before -> antes de todos os testes
    // beforeEach -> antes de cada teste
    //after -> depois de todos os testes
    // afterEach -> depois de cada teste

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/')
        cy.get('#transaction .button').click() // id + classe

    it('Cadastrar entradas', () => {
        //- entender o fluxo manualmente
        //- mapear os elementos que vamos interagir
        //- descrever as interações com o cypress
        //- adicionar as asserções necessárias

        // Abre o modal de nova transação
        

        // Preenche os campos do formulário
        cy.get('#description').type('Presente') // id
        cy.get('[name=amount]').type(12)
        cy.get('[type=date]').type('2025-05-28') //atributos

        // Salva o formulário
        cy.get('button').contains('Salvar').click() // tipo e valor

        // Aguarda a tabela ser atualizada
        cy.get('#data-table tbody tr').should('have.length', 1)
        
    });
    // Cadastrar saídas
    //Remover entradas e saídas
    it.only('Cadastrar saídas', () => {
}); 