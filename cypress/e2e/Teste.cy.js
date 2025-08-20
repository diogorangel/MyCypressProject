

describe('Teste - Formulário', () => {
  it('Preencher campos com sucesso', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.contains('Automation Testing Practice').should('be.visible')
    cy.get('#name').type('Teste')
    cy.get('input[placeholder="Enter EMail"]').type('teste@gmail.com')
    cy.get('#phone').type('83988744525')
    cy.get('input[value="female"]').click()
    cy.get('input[type="checkbox"]').check('sunday')
    cy.get('#country').select('Canada')
    cy.get('#colors').select('Red')
    cy.get('#datepicker').click()
    cy.get('a[data-date="24"]').click()
    cy.get('#datepicker').should('have.value','07/24/2025')
    cy.get('#singleFileInput').selectFile('cypress\\fixtures\\imgTest.png')
    cy.get('#singleFileInput').should('have.value','C:\\fakepath\\cypress\\fixtures\\imgTest.png')
    
  })

  it('Validar botão Enter', () =>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('button[name="start"]').click()
    cy.get('button[name="stop"]').should('be.visible')
    cy.contains('STOP').should('be.visible')
    cy.contains('button','STOP').click()
  })

  it('seleção de elementos do tipo checkbox', () =>{
    cy.viewport('ipad-mini', 'landscape')
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('input[type="checkbox"][class="form-check-input"]').each(($check)=>{
        const valueText = $check.attr('value')
        if(valueText.startsWith('t')){
          cy.wrap($check).check()
        }
    })
  })

  // Xit('Links que abrem em uma nova aba', () =>{
  //   cy.visit('https://testautomationpractice.blogspot.com/')
  //   cy.get('button[onclick="myFunction()"]').invoke('removeAttr', 'onclick').click()
  // })

})