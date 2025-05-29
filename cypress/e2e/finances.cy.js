//testar site https://devfinance-agilizei.netlify.app/
/// <reference types="cypress" />

//cy.viewport
// arquivos de config
// configs por linha de comando

context('Dev Finances Agilizei', () => {

    //hooks
    //trechos que executam antes e depois do teste
    //before -> antes de todos os testes
    // beforeEach -> antes de cada teste
    //after -> depois de todos os testes
    // afterEach -> depois de cada teste

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/')
        cy.get('#data-table tbody tr').should('have.length', 0)

    it('Cadastrar entradas', () => {

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Presente') // id
        cy.get('[name=amount]').type(12) // atributos
        cy.get('[type=date]').type('2025-05-28') //atributos
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1) 
    });

    it('Cadastrar saídas', () => {

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Presente') // id
        cy.get('[name=amount]').type(-12) // atributos
        cy.get('[type=date]').type('2025-05-28') //atributos
        cy.get('button').contains('Salvar').click() // tipo e valor
        
        cy.get('#data-table tbody tr').should('have.length', 1) 
    });

    //Remover entradas e saídas
    it.only('Remover entradas e saídas', () => {
        const entrada = 'Total'
        const saida = 'KinderOvo'

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type(entrada) // id
        cy.get('[name=amount]').type(valorEntrada)
        cy.get('[type=date]').type('2025-05-28') //atributos
        cy.get('button').contains('Salvar').click() // tipo e valor


        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type(saida) // id
        cy.get('[name=amount]').type(-35)
        cy.get('[type=date]').type('2025-05-28') //atributos
        cy.get('button').contains('Salvar').click() // tipo e valor
        

    // estratégia 1: voltar para o elemento parseInt, e avançar para um td img attr

    cy.get('td.description')
        .contains(saida)
        .parent()
        .find('img[onclick*=remove')
        .click()
    
    // estratégia 2: buscar todos os irmãos, e buscar o que tem img + attr

    cy.get('td.description')
        .contains(saida)
        .parent()
        .siblings()
        .find('img[onclick*=remove')
        .click()
    });
});