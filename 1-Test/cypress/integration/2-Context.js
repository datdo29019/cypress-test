context('Context', () => {
  beforeEach(() => {

    cy.visit('https://va-test.vnlp.ai/')

  })

// https://on.cypress.io/interacting-with-elements

it('.type() - type into a DOM element', () => {

  //API
  cy.intercept('/auth/login').as('login')
 //API
  cy.intercept('/restore').as('restore')
 //API
  cy.intercept('/train').as('train')


  // https://on.cypress.io/type
  cy.get('#username')

    // Delay each keypress by 0.2 sec
    .type('dat.do')
    .should('have.value', 'dat.do')

  cy.get('#password')
    .type('taonemay123').should('have.value', 'taonemay123')

  cy.get('.btn').click()

cy.wait('@login')

      //Get Home
      cy.contains('Faker').click()
cy.wait(5000)
      cy.contains(' Conversations ', { timeout: 10000 },{ force: true }).click()
 cy.wait(3000) 
      cy.contains('Context', { timeout: 10000 }).click()
  
      cy.get(':nth-child(1) > .btn', { timeout: 10000 }).eq(0).click()

  cy.wait(2000)
      cy.get('#p-accordiontab-0-content > .p-accordion-content > :nth-child(2) > .ng-pristine')
        .type('Hello').should('have.value', 'Hello')
  
      cy.get('.p-accordion-content > :nth-child(3) > .ng-untouched')
        .type('Xin chao').should('have.value','Xin chao')
  
      cy.get('.p-accordion-header-text').then(ele => {
      ele[1].click() //Click cái thứ 2 Ele1 là từ 0-1
     })
      cy.get('.justify-content-between > :nth-child(1) > .btn').click()
  
  
  
          cy.get('#autoSuggestion')
        .type('Hello').should($el => {
          expect($el[0].textContent).to.contain('Hello')
        })
      cy.get('.text-right > .btn').then(ele => {
      ele[0].click() //Click cái thứ 2 Ele1 là từ 0-1
     })
  //Tắt nút X khi thông báo Successfully
      cy.get('.p-toast-icon-close-icon').click()
      cy.get('#autoSuggestion')
        .type('Hi').should($el => {
          expect($el[0].textContent).to.contain('Hi')
        })
          
        cy.get('.text-right > .btn').then(ele => {
      ele[0].click() //Click cái thứ 2 Ele1 là từ 0-1
     })
  //Tắt nút X khi thông báo Successfully
      cy.get('.p-toast-icon-close-icon').click()
  
      cy.get('#autoSuggestion')
        .type('Bonjur').should($el => {
          expect($el[0].textContent).to.contain('Bonjur')
        })
          cy.get('.text-right > .btn').then(ele => {
      ele[0].click() //Click cái thứ 2 Ele1 là từ 0-1
     })
  //Tắt nút X khi thông báo Successfully
      cy.get('.p-toast-icon-close-icon').click()
  
  
      cy.get('.p-dialog-header-close-icon').click()
  
  
          cy.get('.p-accordion-header-text').then(ele => {
      ele[8].click() //Click cái thứ 2 Ele1 là từ 0-1
     })
      cy.get('.btn-common-small').click()
      cy.get('.col.mb-3 > .ng-untouched').eq(0).click()
        .type('Text').should('have.value','Text')
  
        cy.get(':nth-child(3) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label').click()
        cy.get(':nth-child(1) > .p-dropdown-item').click()
  
  
      cy.get('.position-relative > .mb-3 > .ng-untouched').click()
        .type('Hello.What do you want me to do?').should('have.value','Hello.What do you want me to do?')
  
      cy.get('app-response-create > .middle-content > .section-main > .text-right.mt-3 > .btn').click()
      // cy.wait(500)
      cy.get('.p-toast-message-content', { timeout: 3000 }).invoke('text')
       .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal("NotificationSaved successfully");
         //Check noti when save successfully Responses
        })
  //Tắt nút X khi thông báo Successfully
      cy.get('.p-toast-icon-close-icon').click()
      
      cy.get('.p-dialog-header-icon').click() //Nút X
 //Thêm s đợi để đỡ conflict khi click quá nhanh 
 cy.wait(2000)
      cy.get('.text-right > .btn').click()
      cy.get('.p-toast-message-content', { timeout: 8000 }).invoke('text')
       .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal("NotificationSaved successfully");
         //Check noti when save successfully
        })
  //Tắt nút X khi thông báo Successfully
      cy.get('.p-toast-icon-close-icon', { timeout: 3000 }).click()
  
       
       

       cy.get('i.vnlp-icon.vnlp-icon-delete-black', { timeout: 10000 }).then(ele => {
          ele[1].click() // 2Button Submit if choose [1] = Button 2 - [0] = Button 1
          })
  
       cy.get(':nth-child(4) > .btn-vnlp').click()
  
       cy.get('.p-toast-message-content').invoke('text')
         .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal("NotificationDeleted successfully");
         //Check noti when Deleted successfully
        })
  
      cy.get('.js-collapsed.active > .js-panel-body > :nth-child(3) > a').click()
cy.wait(2000)
      cy.get('.table-quick-action > .ng-star-inserted > .vnlp-icon', { timeout: 10000 },{ force: true }).click()
      cy.wait(1000)
      cy.get(':nth-child(4) > .btn-vnlp', { timeout: 10000 }).click()
        cy.get('.p-toast-message-content').invoke('text')
         .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal("NotificationDeleted successfully");
         //Check noti when Deleted successfully
        })
  
  
  
    })
  })  
  
  