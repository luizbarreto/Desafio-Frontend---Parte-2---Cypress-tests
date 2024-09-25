/// <reference types="cypress" />


describe('Teste de Preenchimento de Formulário', () => {
  it('Deve preencher o formulário com valores aleatórios, submeter e fechar o modal', () => {

    //Acessar página Practice Form
    cy.visit('https://demoqa.com/');
    cy.get('.category-cards > :nth-child(2)').click();
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();

    //Preencher Formulário
    cy.get('#firstName').type('test');
    cy.get('#lastName').type('test');
    cy.get('#userEmail').type('test@test.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get(':nth-child(2) > .react-datepicker__day--012').click();
    cy.get('.subjects-auto-complete__value-container').type('Computer');
    cy.get('.subjects-auto-complete__menu').should('be.visible');
    cy.get('.subjects-auto-complete__menu').contains('Computer Science').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#uploadPicture').click().selectFile("cypress//example.txt");
    cy.get('#currentAddress').type('Av Paulista, 123');
    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-4-option-0').click();

    //Submeter
    cy.get('#submit').click();

    //Checar modal e fechar
    cy.get('#example-modal-sizes-title-lg').should('be.visible');
    cy.get('#closeLargeModal').click({force: true});

  });
});
  