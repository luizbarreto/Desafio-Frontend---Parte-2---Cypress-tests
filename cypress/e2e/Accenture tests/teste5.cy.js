/// <reference types="cypress" />

//Os itens já estão por padrão em ordem crescente, colocarei em ordem decrescente para fins de avaliação.

describe('Teste de Ordenação - Sortable', () => {
    it('Colocar os itens na ordem decrescente usando drag and drop', () => {

      //Visitar página Sortable
      cy.visit('https://demoqa.com/');
      cy.get('.category-cards > :nth-child(5)').click();
      cy.get(':nth-child(5) > .element-list > .menu-list > #item-0').click();

      //reposicionar itens em ordem decrescente
      cy.get('.vertical-list-container > :nth-child(1)').drag('.vertical-list-container > :nth-child(6)', {force: true});
      cy.get('.vertical-list-container > :nth-child(1)').drag('.vertical-list-container > :nth-child(5)', {force: true});
      cy.get('.vertical-list-container > :nth-child(1)').drag('.vertical-list-container > :nth-child(4)', {force: true});
      cy.get('.vertical-list-container > :nth-child(1)').drag('.vertical-list-container > :nth-child(3)', {force: true});
      cy.get('.vertical-list-container > :nth-child(1)').drag('.vertical-list-container > :nth-child(2)', {force: true});
      cy.scrollTo(0, 400);
      
     
  
    });
  });
    