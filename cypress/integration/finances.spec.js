//testar site https://devfinance-agilizei.netlify.app/
/// <reference types="cypress" />

context('Dev Finances Agilizei', () => {
    it('Cadastrar entradas', () => {
        //- entender o fluxo manualmente
        //- mapear os elementos que vamos interagir
        //- descrever as interações com o cypress
        //- adicionar as asserções necessárias
        cy.visit('https://devfinance-agilizei.netlify.app/')

        cy.get('#transaction .button').click() //id + classe
        cy.get('#description').type('Mesada') //id
        cy.get('[name=amount]').type('12') //name
        cy.get('[type=date]').type('28/05/2025') //atributos
        cy.get('button').contains('Salvar').click() //tipo e valor
    });
    // Cadastrar saídas
    //Remover entradas e saídas
});