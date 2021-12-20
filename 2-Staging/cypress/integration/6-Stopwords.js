context('Stopwords', () => {
  beforeEach(() => {

    cy.visit('https://va-staging.vnlp.ai/')

  })

  // https://on.cypress.io/interacting-with-elements

  it('Check validate Stop Words', () => {
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
    
    //API
    cy.intercept('/bots').as('bot')
    cy.wait(5500)
    cy.contains(' Conversations ').click() //Open Conversations
cy.wait(1500)
    cy.contains('Stop Words').click()

    cy.get('.p-inputtext')
      .type('a').type('{enter}')
      .type('a').type('{enter}')  //Check xem trùng lặp 2 a được k
      .type('aa').type('{enter}')
      .type('aa').type('{enter}') //Check xem trùng lặp 2 aa được k
      .type('1@^&').type('{enter}')
      .type('1@^&').type('{enter}') //Check xem trùng lặp 2 1@^& được k
      .type('End').type('{enter}')
      .type('End').type('{enter}')  //Check xem trùng lặp 2 End được k
      .should($el => {
        expect($el[0].textContent).to.contain('aaa1@^&End')
      })

    cy.get('.text-left > .btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("NotificationUpdate Success");
        //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()


    cy.get(':nth-child(1) > .p-chips-token-icon').click()
    cy.get(':nth-child(1) > .p-chips-token-icon').click()
    cy.get(':nth-child(1) > .p-chips-token-icon').click()
    cy.get(':nth-child(1) > .p-chips-token-icon').click()

    cy.get('.text-left > .btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("NotificationUpdate Success");
        //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()


    cy.get('.p-inputtext')
      .should($el => {
        expect($el[0].textContent).to.contain('')
      })
    cy.get('.text-left > .btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("NotificationUpdate Success");
        //Check noti when save successfully
      })
  })



  it('EN - VI ', () => {
    cy.get('#username')
      .type('dat.do')
      .should('have.value', 'dat.do')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')

    cy.get('.btn').click()
    cy.get(':nth-child(2) > .bot-card > .bot-card--main').click()
    cy.wait(5500)
    cy.get(':nth-child(3) > .js-panel-title').click() //Open Conversations
    cy.wait(1500)
    cy.contains('Stop Words').click()

    cy.get(':nth-child(2) > .js-is-select').click()
    cy.get('.js-dropdown > :nth-child(1) > a').click()

    //Check Text EN  
    cy.get('.m-0').should('have.contain', 'Stop Words')
    cy.get('.note-title').should($el => { expect($el[0].textContent).to.contain('Home / Conversations / Stop Words ') })
    cy.get('.text-left > .btn').should($el => { expect($el[0].textContent).to.contain('Save') })

    //Check Text VI
    cy.get(':nth-child(2) > .js-is-select').click()
    cy.get('.js-dropdown > :nth-child(2) > a').click()
    cy.get('.m-0').should('have.contain', 'Stop Words')
    cy.get('.note-title').should($el => { expect($el[0].textContent).to.contain('Trang chủ / Hội thoại / Stop Words ') })
    cy.get('.text-left > .btn').should($el => { expect($el[0].textContent).to.contain('Lưu') })


    //Trả lại trạng thái EN
    cy.get(':nth-child(2) > .js-is-select').click()
    cy.get('.js-dropdown > :nth-child(1) > a').click()
  })

})
