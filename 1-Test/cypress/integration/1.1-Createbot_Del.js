context('Login-Del-Update', () => {
    beforeEach(() => {
  
      cy.visit('https://va-test.vnlp.ai/')
      cy.title().should('eq', 'sign_in - VNLP Virtual Agent')
      //Check title
  
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('LOGIN', () => {
  cy.wait(3000)
  
      //API
      cy.intercept('/auth/login').as('login')
      cy.get('#username')

      // Delay each keypress by 0.2 sec
      .type('dat.do1')
      .should('have.value', 'dat.do1')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')


    //28 > 34 Check Text
    cy.get('.btn').click()
    cy.get('.new-content').click()
    cy.contains('Create bot').should('have.text','Create bot')
    cy.get('#p-dialog-3-label > .ng-tns-c21-5 > .ng-star-inserted').should('have.text',' Create bot ')


//UPDATE BOT
    cy.contains('Bot Name').should('have.text','Bot Name')
    cy.contains('Type').should('have.text','Type')
    cy.contains('Description').should('have.text','Description')
    cy.contains('Cancel').should('have.text','Cancel')
    cy.contains('Save').should('have.text','Save')

    //Default Type bot is Smart
    cy.get('.p-dropdown-label > .ng-star-inserted').should('have.text','smart')
    //Check button Cancel enabled
    cy.get('.btn-common').should('be.enabled')
    //Check button Save disabled
    cy.get('.btn-vnlp').should('be.disabled')

    cy.get(':nth-child(1) > .ng-untouched').focus()
      .type('Test')
      cy.get('.btn-vnlp').click()
      cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
      .then((text)=>{
        const toastText = text;
        expect(toastText).to.equal("Notificationbot_name_existed"); //notifica.... tên thông báo hiển thị
        //Check noti when save Fail
       })
       //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
       cy.get('.p-dropdown-label > .ng-star-inserted', { delay: 500 }).click()
       cy.contains('auto_call').click()
       cy.get('.btn-vnlp').click()
       cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
       .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal("Notificationbot_name_existed"); //notifica.... tên thông báo hiển thị
         //Check noti when save Fail
        })
        //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
        cy.get('.p-dropdown-label > .ng-star-inserted', { delay: 800 }).click()
        cy.get(':nth-child(3) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('.btn-vnlp').click()
        cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
        .then((text)=>{
          const toastText = text;
          expect(toastText).to.equal("Notificationbot_name_existed"); //notifica.... tên thông báo hiển thị
          //Check noti when save Fail
         })

    cy.get('.p-toast-icon-close-icon').click()         //Tắt nút X khi thông báo 

        //Create bot Type Voice
    cy.get(':nth-child(1) > .ng-valid').focus()
      .type('{del}{selectall}{backspace}JDK3').should('have.value','JDK3')
      cy.get('.btn-vnlp').click()
      cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
      .then((text)=>{
        const toastText = text;
        expect(toastText).to.equal("NotificationCreate Successfully"); //notifica.... tên thông báo hiển thị
        //Check noti when save fail Responses
       })

      cy.get('.p-toast-icon-close-icon').click()         //Tắt X thông báo 
      cy.wait(500)
      //Update
      cy.get(':nth-child(2) > .bot-card > .action > .action-icon > .js-link-action > .vnlp-icon').click({ force: true })
      cy.get(':nth-child(2) > .bot-card > .action > .action-icon > .js-dropdown > :nth-child(1) > a > span').click()
      cy.get(':nth-child(1) > .ng-valid').focus()
         .type('{del}{selectall}{backspace}v').should('have.value','v')
    //cy.get('.p-dropdown-label > .ng-star-inserted').should('be.disabled') //Không đổi được Type bot
      cy.get(':nth-child(3) > .mb-3').focus().type('Voice').should('have.value','Voice')//input được.
    
      cy.get('.btn-vnlp').should('be.enabled')
      cy.get('.btn-vnlp').click()
      cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
      .then((text)=>{
        const toastText = text;
        expect(toastText).to.equal("NotificationUpdate successfully"); //notifica.... tên thông báo hiển thị
       })
        //Tắt nút X khi thông báo Successfully
        cy.get('.p-toast-icon-close-icon').click()

//ADD SUB BOT
cy.get(':nth-child(3) > .bot-card > .action > .action-icon > .js-link-action > .vnlp-icon').click()
cy.get(':nth-child(3) > .bot-card > .action > .action-icon > .js-dropdown > :nth-child(2) > a').click()
cy.get('#p-dialog-3-label > .ng-tns-c21-5 > .ng-star-inserted').should('have.text',' Add sub bot v ')
cy.contains('Bot Name').should('have.text','Bot Name')
cy.contains('Type').should('have.text','Type')
cy.contains('Description').should('have.text','Description')
cy.contains('Cancel').should('have.text','Cancel')
cy.contains('Save').should('have.text','Save')

//Default Type bot is Smart
cy.get('.p-dropdown-label > .ng-star-inserted').should('have.text','smart')
//Check button Cancel enabled
cy.get('.btn-common').should('be.enabled')
//Check button Save disabled
cy.get('.btn-vnlp').should('be.disabled')

    })
  })  
  
  