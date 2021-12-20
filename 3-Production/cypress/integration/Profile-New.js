/**
*Test Profile:
  - Xóa filter Name: Yêu cầu button Save phải disabled, hiển thị text yêu cầu "Required field"
   + Ghi lại vào trường Name xem text lỗi, button có enabled lại không.
  - Và các button Email - Phone Number - Adress cũng tương tự như trên.
  - Bấm Save thì phải có hiển thị thông báo "NotificationUpdate successfully"
*Check language EN-VI
  - Chuyển qua language EN thì tất cả các text có trong Profile phải chuyển sang EN và ngược lại VI cũng vậy.
  - Check khi chọn EN thì hiện dấu Tick ở khung EN và VI cũng vậy.
  - Check fil User name và Org là disabled(không thể input hay click)
  - Check Button Edit - Save có thể click được
  - Check Button Edit - Save có thể đổi EN - VI
**/

context('Profile', () => {
    beforeEach(() => {
  
      cy.visit('https://va.vnlp.ai/')
  
    })
  
    it('Login - Join my profile - Check validate - Disabled-Enabled', () => {
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
   cy.intercept('/users/profile').as('profile')
  
  
      cy.get(':nth-child(3) > .js-is-select',{ timeout: 10000 }).click()
      cy.get(':nth-child(3) > .js-dropdown > :nth-child(1) > a',{ timeout: 10000 }).click()
  
          cy.get(':nth-child(4) > .ng-untouched',{ timeout: 10000 }).click() //Name
        .type('{del}{selectall}{backspace}')
      cy.get('.footer-info > .btn').should('be.disabled') //Check button Disabled
  
      cy.get('.error-validate')
       .invoke('text')
        .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal(" Required ");
         //Check Text show
         })
      cy.get('.error').focus()
        .type('Quốc Đạt').should('have.value','Quốc Đạt')
  
  
  
      cy.get(':nth-child(5) > .ng-untouched').click() //Email
        .type('{del}{selectall}{backspace}')
      cy.get('.footer-info > .btn').should('be.disabled') //Check button Disabled
  
      cy.get('.error-validate')
       .invoke('text')
        .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal(" Required ");
         //Check Text show
         })
      cy.get(':nth-child(5) > .ng-dirty').focus()
        .type('dat.do@emandai.net').should('have.value','dat.do@emandai.net')
  
  
      cy.get(':nth-child(6) > .ng-untouched').click()
        .type('{del}{selectall}{backspace}')
      cy.get('.footer-info > .btn').should('be.disabled') //Check button Disabled
  
      cy.get('.error-validate')
       .invoke('text')
        .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal(" Required ");
         //Check Text show
         })
      cy.get('.error').focus()
        .type('dat.do@emandai.net').should('have.value','')
  
      cy.get('.error-validate')
       .invoke('text')
        .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal(" Required ");
         //Check Text show
         })
  
      cy.get('.error').focus()  //Phone Number
        .type('0769632239').should('have.value','0769632239')
  
  
      cy.get(':nth-child(7) > .ng-untouched').click()
        .type('{del}{selectall}{backspace}')
      cy.get('.footer-info > .btn').should('be.disabled') //Check button Disabled
  
      cy.get('.error-validate') //Address
       .invoke('text')
        .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal(" Required ");
         //Check Text show
         })
  
      cy.get('.error').focus()
        .type('127 Nguyễn Thị Thập, Liên Chiểu, Đà Nẵng').should('have.value','127 Nguyễn Thị Thập, Liên Chiểu, Đà Nẵng')
  
  cy.get('form.ng-dirty > :nth-child(2) > .ng-untouched')
    .should('be.disabled')
  cy.get(':nth-child(3) > input')
    .should('be.disabled')
  
      cy.get('.footer-info > .btn',{ timeout: 10000 }).click()
      cy.wait('@profile')
      cy.get('.p-toast-message-content').invoke('text')
        .then((text)=>{
         const toastText = text;
         expect(toastText).to.equal("NotificationUpdate successfully");
         //Check noti when save successfully
        })
  
  })
  
  
   it('Check EN-VI', () => {
    cy.get('#username')
  
        // Delay each keypress by 0.2 sec
        .type('dat.do')
        .should('have.value', 'dat.do')
  
      cy.get('#password')
        .type('taonemay123').should('have.value', 'taonemay123')
  
      cy.get('.btn').click() 
   cy.get(':nth-child(3) > .js-is-select',{ timeout: 10000 }).click()
      cy.get(':nth-child(3) > .js-dropdown > :nth-child(1) > a').click()
  cy.wait(1000)
  cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 }).click()
  cy.wait(1000)
  cy.get('.js-dropdown > :nth-child(1) > a').should('have.contain','English')
  cy.wait(1000)
  cy.get('.js-dropdown > :nth-child(2) > a').should('have.contain','Tiếng Việt')
  cy.wait(1000)
    cy.get('.js-dropdown > :nth-child(1) > a',{ timeout: 10000 },{ force: true }).click()
  
  
  
    cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 }).click()
    cy.get('.js-dropdown > :nth-child(1) > a > .vnlp-icon',{ timeout: 10000 }).should('be.visible')
    //Check click "English tick"
  
    cy.get('.js-dropdown > :nth-child(2) > a',{ timeout: 10000 }).click()
    cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 }).click()
    cy.get(':nth-child(2) > a > .vnlp-icon',{ timeout: 10000 }).should('be.visible')
    //Check click "Tiếng việt tick"
  
    cy.get('.js-dropdown > :nth-child(1) > a',{ timeout: 10000 },{ force: true }).click()
    //Trả lại EN như vị trí ban đầu
  
  
    //Check Text EN  
  
    cy.get('.button-input-file').should($el => {expect($el[0].textContent).to.contain(' Edit ')})
    cy.get('.btn > input').should('be.enabled')
    cy.get(':nth-child(2) > label').should('have.contain','Username')
    cy.get('form.ng-untouched > :nth-child(2) > .ng-untouched').should('be.disabled')
    cy.get(':nth-child(3) > label').should('have.contain','Organizations')
    cy.get(':nth-child(3) > input').should('be.disabled')
    cy.get(':nth-child(4) > label').should('have.contain','Name *')
    cy.get(':nth-child(4) > .ng-pristine').should('be.enabled')
    cy.get(':nth-child(5) > label').should('have.contain','Email *')
    cy.get(':nth-child(5) > .ng-untouched').should('be.enabled')
    cy.get(':nth-child(6) > label').should('have.contain','Phone number *')
    cy.get(':nth-child(6) > .ng-untouched').should('be.enabled')
    cy.get(':nth-child(7) > label').should('have.contain','Address *')
    cy.get(':nth-child(7) > .ng-untouched').should('be.enabled')
    cy.get('.min-width-200').should('have.contain','Two-factor authentication')
    cy.get('.footer-info > .btn').should('be.enabled')
    cy.get('.footer-info > .btn').should($el => {expect($el[0].textContent).to.contain('Save')})
  
    //Check Text VI
    cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 }).click()
    cy.get('.js-dropdown > :nth-child(2) > a',{ timeout: 10000 }).click()
  
    cy.get('.button-input-file').should($el => {expect($el[0].textContent).to.contain(' Chỉnh sửa ')})
    cy.get('.btn > input').should('be.enabled')
    cy.get(':nth-child(2) > label').should('have.contain','Tài khoản')
    cy.get('form.ng-untouched > :nth-child(2) > .ng-untouched').should('be.disabled')
    cy.get(':nth-child(3) > label').should('have.contain','Tổ chức')
    cy.get(':nth-child(3) > input').should('be.disabled')
    cy.get(':nth-child(4) > label').should('have.contain','Tên *')
    cy.get(':nth-child(4) > .ng-pristine').should('be.enabled')
    cy.get(':nth-child(5) > label').should('have.contain','Email *')
    cy.get(':nth-child(5) > .ng-untouched').should('be.enabled')
    cy.get(':nth-child(6) > label').should('have.contain','Số điện thoại *')
    cy.get(':nth-child(6) > .ng-untouched').should('be.enabled')
    cy.get(':nth-child(7) > label').should('have.contain','Địa chỉ *')
    cy.get(':nth-child(7) > .ng-untouched').should('be.enabled')
    cy.get('.min-width-200').should('have.contain','Bảo mật 2 lớp')
    cy.get('.footer-info > .btn').should('be.enabled')
    cy.get('.p-inputswitch-slider')
    cy.get('.footer-info > .btn').should($el => {expect($el[0].textContent).to.contain('Lưu')})
  
    cy.get(':nth-child(2) > .js-is-select',{ timeout: 10000 }).click()
    cy.get('.js-dropdown > :nth-child(1) > a',{ timeout: 10000 }).click()
    //Trả lại EN như vị trí ban đầu
    })
  
  })