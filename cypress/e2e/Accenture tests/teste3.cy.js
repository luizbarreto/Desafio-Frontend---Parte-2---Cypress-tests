/// <reference types="cypress" />

describe('Teste de Web Tables', () => {
    it('Deve criar, editar e deletar um registro', () => {

        // Acessar a pagina Web Tables
        cy.visit('https://demoqa.com/');
        cy.get('.category-cards > :nth-child(1)').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();

        // Criar um novo registro
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Test Name'); 
        cy.get('#lastName').type('Test LastName'); 
        cy.get('#userEmail').type('test@example.com'); 
        cy.get('#age').type('30'); 
        cy.get('#salary').type('50000'); 
        cy.get('#department').type('IT');
        cy.get('#submit').click(); 
        cy.wait(500)

        // Editar o novo registro criado
        cy.get('#edit-record-4 > svg > path').click(); 
        cy.wait(500)
        cy.get('#salary').clear().type('60000');
        cy.get('#submit').click();

        // Deletar regisro
        cy.get('#delete-record-4 > svg > path').click();

    });
});