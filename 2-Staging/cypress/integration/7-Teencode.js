context('Teen codes', () => {
  beforeEach(() => {

    cy.visit('https://va-staging.vnlp.ai/')

  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {

    //API
    cy.intercept('/auth/login').as('login')
    //API


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
    
    //API
    cy.intercept('/bots').as('bots')

    cy.contains(' Conversations ').click({ timeout: 10000 })//Open Conversations
    cy.contains('Teen Codes',{ timeout: 10000 }).click()
    cy.wait(1500)

    cy.get('td > .m-0')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal(" No data available ");
        //Check Text show
      })


    cy.get('.p-paginator-current',{ timeout: 10000 })
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("Showing 0 to 0 of 0 entries");
        //Check Text show
      })
    cy.wait('@bots')
    cy.get('.justify-content-between > .btn').click()
    cy.get('.height-33px').focus()
      .type('Hà Nội').should('have.value', 'Hà Nội')

    cy.get('.p-inputtext')
      .type('Ha noi').type('{enter}')
      .type('Ha noi').type('{enter}') //Check xem trùng lặp 2 'hông' được k

      .type('hà nậu').type('{enter}')
      .type('hà nậu').type('{enter}') //Check xem trùng lặp 2 'hok' được k


    cy.get('.p-inputtext',{ timeout: 10000 })
      .should($el => {
        expect($el[0].textContent).to.contain('Ha noihà nậu')
      })

    cy.get('.btn-vnlp',{ timeout: 10000 })
      .then(ele => {
        ele[1].click() //Click cái thứ 2 Ele1 là từ 0-1
      })

    cy.get('.p-toast-message-content',{ timeout: 10000 }).invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("NotificationCreate Successfully");
        //Check noti when save successfully
      })

    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

    cy.get('.p-dialog-content > :nth-child(1) > .height-33px').focus()
    .type('Hà Nội').should('have.value', 'Hà Nội')

    cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext > .p-chips-input-token',{ timeout: 10000 })
    .type('Ha noi').type('{enter}')
    .type('Ha noi').type('{enter}') //Check xem trùng lặp 2 'hông' được k

    .type('hà nậu').type('{enter}')
    .type('hà nậu').type('{enter}') //Check xem trùng lặp 2 'hok' được k


 
    cy.get('.p-inputtext',{ timeout: 10000 })
      .should($el => {
        expect($el[0].textContent).to.contain('')
      })

    cy.get('.btn-vnlp')
      .then(ele => {
        ele[1].click() //Click cái thứ 2 Ele1 là từ 0-1
      }) //Button 'Add'

    cy.get('.error-validate')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal(" Required codes");
        //Check Text show
      })

    cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext > .p-chips-input-token').click()
      .type('Hà Nội').type('{enter}')
  
    cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext',{ timeout: 10000 })
      .should($el => {
        expect($el[0].textContent).to.contain('Hà Nội')
      })

    cy.get('.btn-vnlp')
      .then(ele => {
        ele[1].click() //Click cái thứ 2 Ele1 là từ 0-1
      })

    cy.get('.error-validate')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal(" existed_value");
        //Check Text show
      })

    cy.get('.p-dialog-content > :nth-child(1) > .height-33px').focus()
      .type('{del}{selectall}{backspace}')
      .type('Có').should('have.value', 'Có')

    cy.get('[style=""] > .p-chips-token-icon').click()
    cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext > .p-chips-input-token').click()
      .type('cok').type('{enter}')
      .type('cok').type('{enter}')
   
    cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext',{ timeout: 10000 })
      .should($el => {
        expect($el[0].textContent).to.contain('cok')
      })


    cy.get('.btn-vnlp')
      .then(ele => {
        ele[1].click() //Click cái thứ 2 Ele1 là từ 0-1
      })
    cy.get('.p-toast-message-content').invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("NotificationCreate Successfully");
        //Check noti when save successfully
      })

    //Check Search
    cy.get('.btn-common').click()
    cy.get('.input-search > .ng-untouched').focus()
      .type('Check')
  
    cy.get('td > .m-0',{ timeout: 10000 })
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal(" No data available ");
        //Check Text show
      })
  

    cy.get('.p-paginator-current',{ timeout: 10000 })
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("Showing 0 to 0 of 0 entries");
        //Check Text show
      })

    cy.get('.input-search > .ng-untouched').focus()
      .type('{del}{selectall}{backspace}')
 

    cy.get(':nth-child(1) > :nth-child(1) > .input-field-focus > .height-33px',{ timeout: 10000 }).should('have.value', 'Hà Nội')
    cy.get(':nth-child(2) > :nth-child(1) > .input-field-focus > .height-33px',{ timeout: 10000 }).should('have.value', 'Có')
    cy.get('.p-paginator-current',{ timeout: 10000 })
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("Showing 1 to 2 of 2 entries");
        //Check Text show
      })

    cy.get('.input-search > .ng-untouched').focus()
      .type('có')
    cy.get('.height-33px').should('have.value', 'Có')
    cy.get('.p-paginator-current')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("Showing 1 to 1 of 1 entries");
        //Check Text show
      })

    cy.get('.input-search > .ng-untouched').focus()
      .type('{del}{selectall}{backspace}Hà Nội')
    cy.get('.height-33px').should('have.value', 'Hà Nội')
    cy.get('.p-paginator-current')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("Showing 1 to 1 of 1 entries");
        //Check Text show
      })

    cy.get('.p-paginator-first').should('be.disabled')
    cy.get('.p-paginator-prev').should('be.disabled')
    cy.get('.p-paginator-page').should('be.enabled')
    cy.get('.p-paginator-next').should('be.disabled')
    cy.get('.p-paginator-last').should('be.disabled')

    cy.get('.input-search > .ng-untouched').click()
      .type('{del}{selectall}{backspace}').should('have.text', '')
    cy.get(':nth-child(1) > :nth-child(3) > .ng-star-inserted > .vnlp-icon').click()
    cy.get('.p-dialog-content > .font-weight-bold').should('have.text', 'Confirmation')
    cy.get('.pt-2').should('have.text', 'Are you sure you want to delete the Teen Code')
    cy.get('.btn-common').should('be.enabled')
    cy.get('.btn-common').should($el => { expect($el[0].textContent).to.contain('Cancel') })
    cy.get(':nth-child(4) > .btn-vnlp').should('be.enabled')
    cy.get(':nth-child(4) > .btn-vnlp').should($el => { expect($el[0].textContent).to.contain('OK') })



//Del Function
  cy.contains('OK').click()
  cy.get('.p-toast-message-content').invoke('text')
  .then((text) => {
    const toastText = text;
    expect(toastText).to.equal("NotificationDeleted successfully");
    //Check noti when save successfully
  })

    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)
    cy.get('.p-paginator-current')
    .invoke('text')
    .then((text) => {
      const toastText = text;
      expect(toastText).to.equal("Showing 1 to 1 of 1 entries");
      //Check Text show
    })

  cy.get('tr.ng-star-inserted > :nth-child(3) > .ng-star-inserted > .vnlp-icon').click()
  cy.contains('OK').click()
  cy.get('.p-toast-message-content').invoke('text')
  .then((text) => {
    const toastText = text;
    expect(toastText).to.equal("NotificationDeleted successfully");
    //Check noti when save successfully
  })

    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.wait(1000)
    cy.get('.p-paginator-current')
    .invoke('text')
    .then((text) => {
      const toastText = text;
      expect(toastText).to.equal("Showing 0 to 0 of 0 entries");
      //Check Text show
    })


  })
})
