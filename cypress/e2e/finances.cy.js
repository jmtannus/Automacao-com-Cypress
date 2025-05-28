//testar site https://devfinance-agilizei.netlify.app/
/// <reference types="cypress" />

context('Dev Finances Agilizei', () => {
    it('Cadastrar entradas', () => {
        //- entender o fluxo manualmente
        //- mapear os elementos que vamos interagir
        //- descrever as interações com o cypress
        //- adicionar as asserções necessárias
        cy.visit('https://devfinance-agilizei.netlify.app/')

        // Abre o modal de nova transação
        cy.get('#transaction .button').click() 

        // Preenche os campos do formulário
        cy.get('#description').type('Mesada')
        cy.get('[name=amount]').type('12')
        cy.get('[type=date]').type('2025-05-28')

        // Salva o formulário
        cy.contains('button', 'Salvar').click()

        // Aguarda a tabela ser atualizada
        cy.get('#data-table').should('be.visible')

        // Verificações
        cy.get('#data-table tbody tr').should('have.length.at.least', 1)
        cy.contains('#data-table tbody tr', 'Mesada').within(() => {
            cy.get('td.description').should('have.text', 'Mesada')
            cy.get('td.amount').should('contain', '12')
        })
    });
    // Cadastrar saídas
    //Remover entradas e saídas
}); 