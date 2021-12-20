
context('Keywords', () => {
  beforeEach(() => {

    cy.visit('https://va.vnlp.ai/')

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
    //Get Home
    cy.contains('Faker').click()
cy.wait(4000)
    cy.contains(' Conversations ').click() //Open Conversations
    cy.wait(2500)
    

    cy.contains('Entity list').click()
    cy.get('.flex-wrap > .btn-vnlp').click()
    cy.get(':nth-child(1) > .ng-untouched').focus()
      .type('Key').should('have.value','Key')

    cy.get('.p-chips-input-token > input').focus()
      .type('Sym').should('have.value','Sym')
      .type('{enter}')
      .type('Sym').should('have.value','Sym')
      .type('{enter}')
    

    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationduplicated_synonym");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)
    cy.get('.p-chips-input-token > input').focus()
      .type('EasyHoon').should('have.value','EasyHoon')
      .type('{enter}') 
      .type('EasyHoon').should('have.value','EasyHoon')
      .type('{enter}')  

    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationduplicated_synonym");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)  


    cy.get('.p-chips-input-token > input').focus()
      .type('Easy').should('have.value','Easy')
      .type('{enter}') 
      .type('Easy').should('have.value','Easy')
      .type('{enter}')  

    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationduplicated_synonym");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)



    cy.contains('Save').click()
      cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationEntitytype required");
       //Check noti when save successfully
      })

//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

      cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(1) > .p-dropdown-item').click()
      
      cy.contains('Save').click()
      	cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCreated successfully");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)   

//Create
     cy.get('.flex-wrap > .btn-vnlp').click()
        cy.get(':nth-child(1) > .ng-valid').focus()
          .type('Key').should('have.value','Key')

        cy.get('.p-chips-input-token > input').focus()
          .type('Sym').should('have.value','Sym')
          .type('{enter}')

          /**           cy.get('.p-toast-message-content').invoke('text')
     .then((text)=>{
      const toastText = text;
       expect(toastText).to.equal("Notificationduplicated_synonym");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()      */


    cy.wait(1000)
    cy.get('.p-chips-input-token > input').focus().click()  
          .type('Create2').should('have.value','Create2')
          .type('{enter}')

          cy.contains('Save').click()
      cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationEntitytype required");
       //Check noti when save successfully
      })

//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(1) > .p-dropdown-item').click()
      
      cy.contains('Save').click()
        cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationKeyword is existed"); //Trùng Keyword
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(1) > .p-dropdown-item').click()

      cy.contains('Save').click()
        cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationKeyword is existed"); //Trùng Keyword
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)

    cy.get(':nth-child(1) > .ng-valid').focus()
      .type('11').should('have.value','Key11')
      cy.contains('Save').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCreated successfully");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)   


//Create
    cy.get('.flex-wrap > .btn-vnlp').click()
     cy.get(':nth-child(1) > .ng-valid').focus()
      .type('Number3').should('have.value','Number3')

    cy.get('.p-chips-input-token > input').focus()
      .type('333').should('have.value','333')
      .type('{enter}')
      .type('444').should('have.value','444')
      .type('{enter}')

    cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(1) > .p-dropdown-item').click()

      cy.contains('Save').click()
        cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCreated successfully"); //Trùng Keyword
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

    cy.get(':nth-child(1) > .table-quick-action > .ng-star-inserted > .vnlp-icon').click()
    cy.get(':nth-child(4) > .btn-vnlp').click()
        cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDeleted successfully"); //Trùng Keyword
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

//Delete all > Cancer
    cy.get('p-tableheadercheckbox > .p-checkbox > .p-checkbox-box').click()
    cy.get('.choose-all').click()
    cy.get('.table-header-main > div.ng-star-inserted > span.ng-star-inserted')
      .should('have.contain','All 2 sample sentences on this page have been selected Cancel')


  cy.get('.cancel-all').click({ force: true },{delay:700}).then(e => {
    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').should('be.exist').and('have.contain','Key11')
    cy.get('.p-datatable-tbody > :nth-child(2) > :nth-child(2)').should('be.exist').and('have.contain','Key')
  }) //Khi bấm Save. check class .erro-validate. //

//Delete all > Cancer
    cy.get('p-tableheadercheckbox > .p-checkbox > .p-checkbox-box').click()
    cy.get('div.ng-star-inserted > .btn').click()
    cy.get(':nth-child(4) > .btn-vnlp').click()
        cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDeleted successfully"); //Trùng Keyword
       //Check noti when save successfully
      })
    cy.get('.p-paginator-page').click()
    cy.wait(1000)
    cy.get('td > .m-0').should('have.contain','No data available')
    cy.get('.p-paginator-current').should('have.contain','Showing 0 to 0 of 0 entries')

  })   
}) 
