describe('Transações financeiras', () => {
    beforeEach(() => {
        cy.viewport(411, 823)
        cy.visit('https://devfinance-agilizei.netlify.app/')
        
        // Aguarda a tabela estar visível e então limpa se necessário
        cy.get('#data-table').should('be.visible').then(() => {
            cy.get('body').then($body => {
                if ($body.find('#data-table tbody tr').length) {
                    cy.get('#data-table tbody tr img[onclick*=remove]')
                        .each($btn => {
                            cy.wrap($btn).click()
                        })
                }
            })
        })
    })
  
    it('Deve adicionar uma entrada', () => {
        cy.get('#transaction .button').click()
        cy.get('#description').type('Salário')
        cy.get('[name=amount]').type('5000')
        cy.get('[type=date]').type('2025-05-28')
        cy.contains('button', 'Salvar').click()
  
        cy.get('#data-table tbody tr').should('have.length', 1)
        cy.get('#data-table tbody tr td.description').should('contain', 'Salário')
        cy.get('#totalDisplay').should('be.visible').and('contain', 'R$ 5.000,00')
    })
  
    it('Deve adicionar uma saída', () => {
        cy.get('#transaction .button').click()
        cy.get('#description').type('Aluguel')
        cy.get('[name=amount]').type('-1500')
        cy.get('[type=date]').type('2025-05-28')
        cy.contains('button', 'Salvar').click()
  
        cy.get('#data-table tbody tr').should('have.length', 1)
        cy.get('#data-table tbody tr td.description').should('contain', 'Aluguel')
        cy.get('#totalDisplay').should('be.visible').and('contain', 'R$ -1.500,00')
    })
  
    it('Deve remover uma transação', () => {
        // Primeiro adiciona uma transação
        cy.get('#transaction .button').click()
        cy.get('#description').type('Para Remover')
        cy.get('[name=amount]').type('100')
        cy.get('[type=date]').type('2025-05-28')
        cy.contains('button', 'Salvar').click()
        
        // Então remove
        cy.get('#data-table tbody tr').should('have.length', 1)
        cy.get('#data-table tbody tr').first().find('img[onclick*=remove]').click()
        cy.get('#data-table tbody tr').should('have.length', 0)
        cy.get('#totalDisplay').should('be.visible').and('contain', 'R$ 0,00')
    })
  
    it('Deve validar o total com entradas e saídas', () => {
        // Adiciona uma entrada
        cy.get('#transaction .button').click()
        cy.get('#description').type('Entrada')
        cy.get('[name=amount]').type('2000')
        cy.get('[type=date]').type('2025-05-28')
        cy.contains('button', 'Salvar').click()

        // Verifica se a primeira transação foi adicionada
        cy.get('#data-table tbody tr').should('have.length', 1)
        cy.get('#totalDisplay').should('be.visible').and('contain', 'R$ 2.000,00')

        // Adiciona uma saída
        cy.get('#transaction .button').click()
        cy.get('#description').type('Saída')
        cy.get('[name=amount]').type('-500')
        cy.get('[type=date]').type('2025-05-28')
        cy.contains('button', 'Salvar').click()

        // Verifica se a segunda transação foi adicionada
        cy.get('#data-table tbody tr').should('have.length', 2)

        // Valida o total final
        cy.get('#totalDisplay')
            .should('be.visible')
            .and('not.contain', 'R$ 2.000,00') // Garante que o valor anterior mudou
            .and('contain', 'R$ 1.500,00')
    })
})
  