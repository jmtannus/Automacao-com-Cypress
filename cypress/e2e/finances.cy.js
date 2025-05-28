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
        cy.get('[type=date]').type('2025-05-28') //atributos - formato YYYY-MM-DD
        cy.get('button').contains('Salvar').click() //tipo e valor

        // Verificações
        cy.get('table tbody tr').should('have.length', 1) // Verifica se foi criada uma linha na tabela
        cy.get('td.description').should('have.text', 'Mesada') // Verifica a descrição
        cy.get('td.income').should('have.text', 'R$ 12,00') // Verifica o valor formatado
    });
    // Cadastrar saídas
    //Remover entradas e saídas
}); 