context('Train NLP', () => {
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
    cy.intercept('/api/v1/intents/train').as('train')


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
    cy.wait(3500)  
//API
 cy.intercept('/bots').as('bots')

    cy.get(':nth-child(3) > .js-panel-title').click() //Open Conversations
  
  cy.get('.side-left > :nth-child(4) > a').click()
  cy.get(':nth-child(1) > .table-quick-action > .btn').click()
  cy.get('.p-dialog-content > :nth-child(4) > .btn-vnlp').click()


  cy.wait(5000)
  cy.get('.progressbar-training > .ng-star-inserted').invoke('text')
      .then((text)=>{
       const toastText = text;

       expect(toastText).to.equal("Restore successfully");
       //Check Text show
       })
  cy.wait(400)
  cy.get('.ml-2 > .vnlp-icon').click()

  cy.get('.side-left > :nth-child(2) > .js-single-menu > a').click()
  cy.get('[routerlink="../../../conversation/samples"] > .content-box > :nth-child(2)')
cy.wait('@bots')
cy.wait(1400)
   cy.get('[routerlink="../../../conversation/samples"] > .content-box > :nth-child(2)')
      .invoke('text')
      .then((text)=>{
       const toastText = text;

       expect(toastText).to.equal("23"); //TOTAL SAMPLES
       //Check Text show
       })

  cy.get('[routerlink="../../../contexts"] > .content-box > :nth-child(2)')
    .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal("17"); //TOTAL INTENTS
           //Check Text show
           })

  cy.get('[routerlink="../../../conversation/entity-types"] > .content-box > :nth-child(2)')
    .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal("1"); //TOTAL ENTITY TYPES
           //Check Text show
           })
  cy.get('[joyridestep="step2"] > .d-block > .vnlp-icon').click()
  cy.get('.btn-vnlp').click()
  cy.wait('@train')

  cy.get('.progressbar-training > div',{ timeout: 60000 })
        .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal("Training Successfully"),{ timeout: 40000 }; //Training
           //Check Text show
           })
  cy.get('.ml-2 > .vnlp-icon').click()
  cy.get('#vnlp-chat-icon').click()
  cy.get('#vnlp-chat-input').focus()
    .type('Sym').should('have.value','Sym')
    .type('{enter}')
  cy.get(':nth-child(2) > .vnlp-message-content')
    .should('have.contain','Xin lỗi, Virtual Agent không tìm thấy thông tin, vui lòng thử lại sau.')

  cy.get('#vnlp-chat-input').focus()
    .type('button').should('have.value','button')
    .type('{enter}')
  cy.get('.text')
    .should('have.contain','Con người là giá trị chắc chắn nhất của IMG, chúng tôi là một tập thể gắn kết với đội ngũ nhân viên năng động và thế hệ lãnh đạo nhiều kinh nghiệm.')
  cy.get('.vnlp-buttons > :nth-child(1)')
    .should('have.contain','CÔNG TY CỔ PHẦN ĐẦU TƯ IMG')
  cy.get('.vnlp-buttons > :nth-child(2)')
    .should('have.contain','Tầm nhìn & Sứ mệnh')
  cy.get('.vnlp-buttons > :nth-child(3)')
    .should('have.contain','Thế hệ lãnh đạo nhiều kinh nghiệm')


  cy.get('.vnlp-buttons > :nth-child(1)').click()
  cy.get(':nth-child(5) > .vnlp-message-content')
    .should('have.contain','CÔNG TY CỔ PHẦN ĐẦU TƯ IMG')

  cy.get(':nth-child(6) > .vnlp-message-content')
    .should('have.contain','Button1')

  cy.get('.vnlp-buttons > :nth-child(2)').click()
  cy.get(':nth-child(7) > .vnlp-message-content')
    .should('have.contain','Tầm nhìn & Sứ mệnh')

  cy.get(':nth-child(8) > .vnlp-message-content')
    .should('have.contain','Button2')

  cy.get('.vnlp-buttons > :nth-child(3)').click()
  cy.get(':nth-child(9) > .vnlp-message-content')
    .should('have.contain','Thế hệ lãnh đạo nhiều kinh nghiệm')
  
  cy.get(':nth-child(10) > .vnlp-message-content')
    .should('have.contain','Button3')


 cy.get('#vnlp-chat-input').focus()
    .type('img').should('have.value','img')
    .type('{enter}')
  cy.get('.vnlp-image > img').should('be.visible')

  cy.get('#vnlp-chat-input').focus()
    .type('hello').should('have.value','hello')
    .type('{enter}')
  cy.get(':nth-child(14) > .vnlp-message-content').should('have.contain','Hii mann ^^').and('be.visible')

  cy.get('#vnlp-chat-input').focus()
    .type('card').should('have.value','card')
    .type('{enter}')
  cy.get('.vnlp-card-title > p').should('have.contain','CÔNG TY CỔ PHẦN ĐẦU TƯ IMG')
  cy.get('.vnlp-card-description > p')
    .should('have.contain','Con người là giá trị chắc chắn nhất của IMG, chúng tôi là một tập thể gắn kết với đội ngũ nhân viên năng động và thế hệ lãnh đạo nhiều kinh nghiệm.')
  cy.get('.vnlp-card-button').should('have.contain','Tầm nhìn & Sứ mệnh')
  cy.get('.vnlp-card-button').click()
  cy.get(':nth-child(17) > .vnlp-message-content').should('have.contain','Tầm nhìn & Sứ mệnh')
  cy.get(':nth-child(18) > .vnlp-message-content').should('have.contain','Xin lỗi, Virtual Agent không tìm thấy thông tin, vui lòng thử lại sau.')

    cy.get('#vnlp-chat-input').focus() //Chat Quick
    .type('Quick').should('have.value','Quick')
    .type('{enter}')
    
    cy.get(':nth-child(20) > .vnlp-message > .vnlp-message-content')
      .should('have.contain','Quick-Quick-Quick-Quick-Quick')


    cy.get('#vnlp-quick-replies > :nth-child(1)').should('have.contain','Quick1')
    cy.get('#vnlp-quick-replies > :nth-child(2)').should('have.contain','Quick2')
    cy.get('#vnlp-quick-replies > :nth-child(3)').should('have.contain','Quick3')

    cy.get('#vnlp-quick-replies > :nth-child(2)').click()
    cy.get(':nth-child(21) > .vnlp-message-content').should('have.contain','Quick2')
    cy.get(':nth-child(22) > .vnlp-message-content').should('have.contain','Quick2')
 
    cy.get('#vnlp-chat-input').focus() //Chat Quick
      .type('tôi sẽ đi đà nẵng').should('have.value','tôi sẽ đi đà nẵng')
      .type('{enter}')    
    cy.get(':nth-child(24) > .vnlp-message-content')
      .should('have.contain','Ok đúng rồi System')

    cy.get('#vnlp-chat-input').focus() //Chat Quick
      .type('start').should('have.value','start')
      .type('{enter}')    
    cy.get(':nth-child(26) > .vnlp-message-content',{ timeout: 7000 })
      .should('have.contain','ok Start')

      cy.get('#vnlp-chat-input').focus() //Chat Quick
      .type('delay').should('have.value','delay')
      .type('{enter}')    
    cy.get(':nth-child(28) > .vnlp-message-content',{ timeout: 7000 })
 
    cy.get(':nth-child(28) > .vnlp-message-content',{ timeout: 7000 })
      .should('have.contain','2')


    cy.get(':nth-child(29) > .vnlp-message-content',{ timeout: 7000 })
      .should('have.contain','3')




  })
})