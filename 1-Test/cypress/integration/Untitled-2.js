context('Proactive messages', () => {
    beforeEach(() => {
  
      cy.visit('https://va-test.vnlp.ai/')
  
    })
  
   // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
  
      //API
      cy.intercept('/auth/login').as('login')
      //API
       cy.intercept('/bots').as('bots')
  
  
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
      cy.get(':nth-child(2) > .bot-card > .bot-card--main').click()
      cy.wait('@bots')
      cy.wait(3500)
  
      cy.contains('VA Models').click()
      cy.wait(1000)
      cy.get(':nth-child(1) > .table-quick-action > .btn').click() //Click Restore
      cy.get('.p-dialog-content > :nth-child(4) > .btn-vnlp').click() // Click Confirm restore
      cy.wait(5000) //Wait time restore
  
   
  
  
      cy.contains('Proactive messages').click()
      cy.get('.justify-content-between > .btn').click()
  
  
  //Create fail when empty value
      cy.get('.text-right > .btn').click({ force: true })
      cy.get('.p-toast-message-content').invoke('text')
        .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal("Notificationcreate_message_fail");
         //Check noti when save Fail
        })
      //Tắt nút X khi thông báo Fail
      cy.get('.p-toast-icon-close-icon').click()
  

      cy.get('.content > .content-name')
        .contains('3')
        .trigger('mousedown', { which: 1, pageX: 60, pageY: 60 })
        .trigger('mousemove', { which: 1, clientX: 120, clientY: 120 });

 
   
      
  
  
     })
  })
  
  
  
  
  