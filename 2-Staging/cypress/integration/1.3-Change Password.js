context('Change password', () => {
  beforeEach(() => {

    cy.visit('https://va-staging.vnlp.ai/')

  })

 // https://on.cypress.io/interacting-with-elements

  it( 'Change password', () => {
    // https://on.cypress.io/type
    //API
cy.intercept('/organizations/statistic').as('statistic')

    cy.get('#username')
      // Delay each keypress by 0.2 sec
      .type('dat.do')
      .should('have.value', 'dat.do')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')

    cy.get('.btn').click()
    cy.wait('@statistic')
//API
 cy.intercept('/auth/login').as('login')
//API
 cy.intercept('/auth/change-password').as('change-password')



    cy.get(':nth-child(3) > .js-is-select').click()
    cy.contains('Change password',{force:true}).click()


    cy.get('form.ng-untouched > :nth-child(1) > .ng-untouched').focus()
      .type('Nhap-sai-pass').should('have.value','Nhap-sai-pass')
    cy.get('.btn').should('be.disabled') //Check button Disabled


	cy.get(':nth-child(2) > .ng-untouched').focus()
		.type('taonemay1233').should('have.value','taonemay1233')
    cy.get('.btn').should('be.disabled') //Check button Disabled

	
	cy.get('.mb-3 > .ng-untouched').focus()
		.type('taonemay1233').should('have.value','taonemay1233')
    cy.get('.btn').should('be.enabled') //Check button Disabled

    cy.get('.btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationOld Password Not Correct");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

    cy.get('form.ng-dirty > :nth-child(1) > .ng-dirty').focus()
 	  .type('{del}{selectall}{backspace}')
      .type('taonemay123').should('have.value','taonemay123')


    cy.get(':nth-child(2) > .ng-dirty').focus()
      .type('{del}{selectall}{backspace}')
      .type('taonemay').should('have.value','taonemay')


    cy.get('.mb-3 > .ng-dirty').focus()
      .type('{del}{selectall}{backspace}')
      .type('taonemay111').should('have.value','taonemay111')    

    cy.get('.btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationPassword does not match");
       //Check noti when save successfully
      })

    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

cy.get('form.ng-dirty > :nth-child(1) > .ng-dirty').focus()
 	  .type('{del}{selectall}{backspace}')
      .type('taonemay123').should('have.value','taonemay123')


    cy.get(':nth-child(2) > .ng-dirty').focus()
      .type('{del}{selectall}{backspace}')
      .type('taonemay123').should('have.value','taonemay123')


    cy.get('.mb-3 > .ng-dirty').focus()
      .type('{del}{selectall}{backspace}')
      .type('taonemay123').should('have.value','taonemay123')    
cy.wait('@change-password')
    cy.get('.btn').click()
cy.wait('@change-password')
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationUpdate successfully");
       //Check noti when save successfully
      }) 

  })

  it('Check EN-VI Change password', () => {
  	cy.get('#username')
      .type('dat.do')
      .should('have.value', 'dat.do')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')

    cy.get('.btn').click() 
//API
 cy.intercept('/auth/login').as('login')
//API
 cy.intercept('/change-password').as('change-password')

cy.wait(2000)

    cy.get(':nth-child(3) > .js-is-select',{ timeout: 10000 }).click()
    cy.contains('Change password',{force:true}).click()
cy.wait(2000)
 
  cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 },{ force: true }).click()
  cy.wait(1000)
  cy.get('.js-dropdown > :nth-child(1) > a').click()

cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 }).click()
cy.get('.js-dropdown > :nth-child(1) > a').should('have.contain','English')
cy.get('.js-dropdown > :nth-child(2) > a').should('have.contain','Tiếng Việt')

  cy.get('.js-dropdown > :nth-child(1) > a').click()

  cy.get(':nth-child(2) > .js-is-select').click()
  cy.get('.js-dropdown > :nth-child(1) > a > .vnlp-icon').should('be.visible')
  //Check click "English tick"

  cy.get('.js-dropdown > :nth-child(2) > a').click()
  cy.get(':nth-child(2) > .js-is-select').click()
  cy.get(':nth-child(2) > a > .vnlp-icon').should('be.visible')
  //Check click "Tiếng việt tick"

  cy.get('.js-dropdown > :nth-child(1) > a').click()
  //Trả lại EN như vị trí ban đầu

  //Check Text EN  
  cy.get('.m-0').should('have.contain','Change password')
  cy.get('.note-title').should($el => {expect($el[0].textContent).to.contain('profile / Change password')})
  cy.get(':nth-child(1) > label').should('have.contain','Old Password')
  cy.get('form.ng-untouched > :nth-child(1) > .ng-untouched').should('have.attr', 'placeholder', 'Old Password')

  cy.get(':nth-child(2) > label').should('have.contain','New password')
  cy.get(':nth-child(2) > .ng-untouched').should('have.attr', 'placeholder', 'New password')

  cy.get(':nth-child(3) > label').should('have.contain','Retype password')
  cy.get('.mb-3 > .ng-untouched').should('have.attr', 'placeholder', 'Retype password')

  cy.get('.btn').should($el => {expect($el[0].textContent).to.contain('Save')})


   //Check Text VI
   cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 }).click()
   cy.get('.js-dropdown > :nth-child(2) > a',{ timeout: 10000 }).click()

  cy.get('.m-0').should('have.contain','Đổi mật khẩu')
  cy.get('.note-title').should($el => {expect($el[0].textContent).to.contain('profile / Đổi mật khẩu')})
  cy.get(':nth-child(1) > label').should('have.contain','Mật khẩu cũ')
  cy.get('form.ng-untouched > :nth-child(1) > .ng-untouched').should('have.attr', 'placeholder', 'Mật khẩu cũ')

  cy.get(':nth-child(2) > label').should('have.contain','Mật khẩu mới')
  cy.get(':nth-child(2) > .ng-untouched').should('have.attr', 'placeholder', 'Mật khẩu mới')

  cy.get(':nth-child(3) > label').should('have.contain','Nhập lại mật khẩu')
  cy.get('.mb-3 > .ng-untouched').should('have.attr', 'placeholder', 'Nhập lại mật khẩu')

  cy.get('.btn').should($el => {expect($el[0].textContent).to.contain('Lưu')})

//Trả lại language EN
cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 }).click()
cy.get('.js-dropdown > :nth-child(1) > a').click()
  })
})

