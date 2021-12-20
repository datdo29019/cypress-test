context('Entity type', () => {
  beforeEach(() => {

    cy.visit('https://va-staging.vnlp.ai/')

  })

 // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('#username')

      // Delay each keypress by 0.2 sec
      .type('dat.do')
      .should('have.value', 'dat.do')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')

    cy.get('.btn').click()

//API
 cy.intercept('/auth/login').as('login')
 //API
 cy.intercept('/api/entity-types').as('entity-types')
    //Get Home
    cy.contains('Faker').click()
cy.wait(4000)
    cy.contains(' Conversations ').click() //Open Conversations


    cy.contains('Entity types').click()

    
    cy.get('.vertical-align-flex > .btn').click()

    cy.get(':nth-child(1) > .ng-untouched').focus()
      .type('Entity1').should('have.value','Entity1')

    cy.get(':nth-child(2) > .ng-untouched').focus()
      .type('Entity1-Description').should('have.value','Entity1-Description')

    cy.get('.p-dropdown-label').should('have.text','NORMAL')
    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(2) > .p-dropdown-item').click()
      cy.get('.p-dropdown-label').should('have.text','COMPOSITE')
    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(3) > .p-dropdown-item').click()
      cy.get('.p-dropdown-label').should('have.text','REGEX')
    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(1) > .p-dropdown-item').click()

    cy.get('.side-right-footer > .btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text')
     .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCreated successfully");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()



    cy.get('.vertical-align-flex > .btn').click()

    cy.get(':nth-child(1) > .ng-valid').focus()
      .type('Entity1').should('have.value','Entity1')

    cy.get(':nth-child(2) > .ng-valid').focus()
      .type('Entity1-Description').should('have.value','Entity1-Description')


    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(2) > .p-dropdown-item').click()
    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(3) > .p-dropdown-item').click()
    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(1) > .p-dropdown-item').click()


//Check trùng Entity
    cy.get('.side-right-footer > .btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text')
     .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationEntity type is existed");
       //Check noti
      })

//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()


    cy.get(':nth-child(1) > .ng-valid').focus()
      .type('1').should('have.value','Entity11')

    cy.get('.side-right-footer > .btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCreated successfully");
       //Check noti when save successfully
      })

//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

//Search
    cy.get('.input-search > input').focus()
      .type('Entity11').should('have.value','Entity11')


    cy.get('.p-paginator-left-content')
      .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" Showing 1 to 1 of 1 entries ");
       //Check Text show
       })

//Search
    cy.get('.input-search > input').focus()
      .type('{del}{selectall}{backspace}')
      .type('Entity111').should('have.value','Entity111')


    cy.get('.p-paginator-left-content')
      .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" Showing 0 to 0 of 0 entries ");
       //Check Text show
       })

    cy.get('.input-search > input').click()
      .type('{del}{selectall}{backspace}')
      cy.wait(1000)
    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').click()
    cy.get(':nth-child(1) > .ng-valid').focus()
      .type('{del}{selectall}{backspace}')
      .type('Entity2').should('have.value','Entity2')

    cy.get(':nth-child(2) > .ng-valid').focus()
      .type('{del}{selectall}{backspace}')
      .type('Victor Nilsson-Lindelof').should('have.value','Victor Nilsson-Lindelof')
    cy.get('.p-dropdown-label').click()
    cy.get(':nth-child(2) > .p-dropdown-item').click()
    cy.get('.side-right-footer > .btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationSaved successfully");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)

cy.get(':nth-child(1) > .table-quick-action > .ng-star-inserted > .vnlp-icon').click()
  cy.get(':nth-child(4) > .btn-vnlp').click()
  cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDeleted successfully");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)

  cy.get(':nth-child(1) > .table-quick-action > .ng-star-inserted > .vnlp-icon').click()
  cy.wait(1000)
  cy.get(':nth-child(4) > .btn-vnlp').click()
  cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDeleted successfully");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
  })   
}) 
