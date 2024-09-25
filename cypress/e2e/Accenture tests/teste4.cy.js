/// <reference types="cypress" />

//No tempo dado, não consegui desenvolver um script para validar o valor dinamico da porcentagem entre 1% e 25%


//Função para gerar uma porcentagem aleatória através do tempo de carregamento, sendo 2460ms o tempo máximo para atingir os 25%.
function generateRandomWaitTime() {
    return Math.floor(Math.random() * 2460);
}

describe('Teste Progress Bar', () => {
    it('Deve controlar a progress bar', () => {

        // Acessar a pagina Progress Bar
        cy.visit('https://demoqa.com/');
        cy.get('.category-cards > :nth-child(4)').click();
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-4').click();

        // Clicar no botão "Start" esperar até que o valor da barra seja menor ou igual a 25%
        cy.get('#startStopButton').click();
        cy.wait(generateRandomWaitTime());

        // Parar o progresso e aguardar alguns segundos
        cy.get('#startStopButton').click();
        cy.wait(4000)
         
        // Reiniciar o carregamento e aguartar a conclusão
        cy.get('#startStopButton').click();
        cy.wait(12000);

        //Validar a conclusão e aguardar para resetar
        cy.get('.progress-bar').should('contain.text', "100%");
        cy.wait(1000)

        //Resetar Progress Bar
        cy.get('#resetButton').click()
     
    });
});