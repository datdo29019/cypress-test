/**

*My organization
  - Check fil Org name khi xóa input thì Button Save disabled(Ẩn không cho click), 
    hiển thị thông báo lỗi name_required.
    + Fil ký tự đặc biệt vào > Button Save disabled, xuất hiện thông báo wrong_pattern.
    + Fil ký tự thường > Button Save Enabled, mất thông báo lỗi.

  - Fil "Description" không yêu cầu bắt buộc nên input hay empty thì cũng k ảnh hưởng.

  - Fil "Email" cũng không bắt buộc, NHƯNG nếu đã fil thì fill cho đúng "....@gmai.com""
    + Trường hợp nhập sai > Button Save disabled, xuất hiện thông báo Invalid email.
    + Trường hợp nhập đúng >  Button Save Enabled, mất thông báo lỗi.

  - Fill "Phone Number" cũng không yêu cầu bắt buộc, Nhưng nếu đã fil thì đúng định dạng là SỐ, không fill chữ.
    + Trường hợp nhập sai > Button Save disabled, xuất hiện thông báo Invalid phone.
    + Trường hợp nhập đúng >  Button Save Enabled, mất thông báo lỗi.

  - Fill "Address" không yêu cầu bắt buộc nên input hay empty thì cũng k ảnh hưởng.

  - Check thông báo khi bấm Save > NotificationUpdate successfully

*Check Language EN - VI
  -
**/
context('Organization', () => {
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
    cy.intercept('/users/language').as('language')

    cy.get(':nth-child(3) > .js-is-select', { timeout: 10000 }).click()
    cy.contains('My Organization',{ timeout: 10000 },{ force: true }).click()

    cy.wait('@language')
    //Chuyển EN
    cy.wait(500)
    cy.get(':nth-child(2) > .js-is-select', { timeout: 10000 }, { force: true }).click()
    cy.wait(500)
    cy.contains('English', { timeout: 10000 }, { force: true }).click()
    cy.wait('@language')

    cy.get(':nth-child(1) > .ng-untouched').eq(0).click()
      .type('{del}{selectall}{backspace}')
    cy.get('.mt-4 > .btn').should('be.disabled') //Check button Disabled

    cy.get('.error-validate')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("Name is required");
        //Check Text show
      })

    cy.get(':nth-child(1) > .ng-valid').eq(0).focus()
      .type('#$@#$@#').should('have.value', '#$@#$@#')

    cy.get('.error-validate')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("wrong_pattern");
        //Check Text show
      })

    cy.get(':nth-child(1) > .ng-valid').eq(0).focus() //Organization Name *
      .type('{del}{selectall}{backspace}')
      .type('Testing').should('have.value', 'Testing')
    cy.get('.mt-4 > .btn').should('be.enabled') //Check button Enabled


    cy.get(':nth-child(2) > .ng-pristine').focus() //Description
      .type('{del}{selectall}{backspace}')
      .type('Hide on Bush-Captain Jack-Captain Maclian').should('have.value', 'Hide on Bush-Captain Jack-Captain Maclian')


    cy.get(':nth-child(3) > .ng-untouched').focus() //Email
      .type('{del}{selectall}{backspace}')
      .type('ValidEmailgmail.com').should('have.value', 'ValidEmailgmail.com')
    cy.get('.mt-4 > .btn').should('be.disabled') //Check button Disabled
    cy.get('.error-validate')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("Invalid email");
        //Check Text show
      })
    cy.get(':nth-child(3) > .ng-valid').focus()
      .type('{del}{selectall}{backspace}')
      .type('ValidEmail@gmail.com').should('have.value', 'ValidEmail@gmail.com')
    cy.get('.mt-4 > .btn').should('be.enabled') //Check button Enabled



    cy.get(':nth-child(4) > .ng-valid').focus() //Phone Number
      .type('{del}{selectall}{backspace}')
      .type('PhoneNumber@gmail.com').should('have.value', 'PhoneNumber@gmail.com')

    cy.get('.mt-4 > .btn').should('be.disabled') //Check button Disabled

    cy.get('.error-validate')
      .invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("Invalid phone");
        //Check Text show
      })


    cy.get(':nth-child(4) > .ng-valid').focus() //Phone Number
      .type('{del}{selectall}{backspace}')
      .type('0769632239').should('have.value', '0769632239')
    cy.get('.mt-4 > .btn').should('be.enabled') //Check button Disabled



    cy.get(':nth-child(5) > .ng-valid').focus()
      .type('{del}{selectall}{backspace}')
      .type('Marin - Sofm - Impact - Imp - Duke - Smeb - Madlife - Dandy - Mata - Looper - Faker - Ambition - Hai')
      .should('have.value', 'Marin - Sofm - Impact - Imp - Duke - Smeb - Madlife - Dandy - Mata - Looper - Faker - Ambition - Hai')

    cy.get('.mt-4 > .btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text) => {
        const toastText = text;
        expect(toastText).to.equal("NotificationUpdate successfully");
        //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
  })



  it('Check EN-VI Organization', () => {
    cy.get('#username')
      .type('dat.do')
      .should('have.value', 'dat.do')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')

    cy.get('.btn').click()
    cy.wait(500)
    cy.get(':nth-child(3) > .js-is-select', { timeout: 10000 }).click()
    cy.wait(500)
    cy.contains('My Organization',{ timeout: 10000 },{ force: true }).click()
    cy.wait(500)
    cy.get(':nth-child(2) > .js-is-select', { timeout: 10000 }, { force: true }).click()
    cy.wait(300)
    cy.get('.js-dropdown > :nth-child(1) > a', { force: true }).click()
    cy.wait(500)
    cy.get(':nth-child(2) > .js-is-select', { timeout: 10000 }).click()
    cy.get('.js-dropdown > :nth-child(1) > a').should('have.contain', 'English')
    cy.get('.js-dropdown > :nth-child(2) > a').should('have.contain', 'Tiếng Việt')
    cy.wait(500)
    cy.get('.js-dropdown > :nth-child(1) > a').click()
    cy.wait(500)
    cy.get(':nth-child(2) > .js-is-select').click()
    cy.get('.js-dropdown > :nth-child(1) > a > .vnlp-icon').should('be.visible')
    //Check click "English tick"
    cy.wait(500)
    cy.get('.js-dropdown > :nth-child(2) > a').click()
    cy.get(':nth-child(2) > .js-is-select').click()
    cy.get(':nth-child(2) > a > .vnlp-icon').should('be.visible')
    //Check click "Tiếng việt tick"

    cy.get('.js-dropdown > :nth-child(1) > a').click()
    //Trả lại EN như vị trí ban đầu


    //Check Text EN  
    cy.get('.pt-3').should('have.contain', 'My Organization')
    cy.get('.note-title').should($el => { expect($el[0].textContent).to.contain('profile / My Organization') })
    cy.get('#p-tabpanel-0-label').should($el => { expect($el[0].textContent).to.contain(' Information ') })
    cy.get('#p-tabpanel-1-label').should($el => { expect($el[0].textContent).to.contain(' Members ') })
    cy.get('#p-tabpanel-2-label').should($el => { expect($el[0].textContent).to.contain(' Sub organization ') })

    cy.get(':nth-child(1) > label').should('have.contain', 'Organization Name *')
    cy.get(':nth-child(2) > label').should('have.contain', 'Description')
    cy.get(':nth-child(3) > label').should('have.contain', 'Email')
    cy.get(':nth-child(4) > label').should('have.contain', 'Phone Number')
    cy.get(':nth-child(5) > label').should('have.contain', 'Address')
    cy.get('.mt-4 > .btn').should($el => { expect($el[0].textContent).to.contain('Save') })

    //Check Text VI
    cy.get(':nth-child(2) > .js-is-select').click()
    cy.get('.js-dropdown > :nth-child(2) > a').click()

    cy.get('.pt-3').should('have.contain', 'Tổ chức của tôi')
    //cy.get('.note-title').should($el => {expect($el[0].textContent).to.contain('profile / My organization')})
    cy.get('#p-tabpanel-0-label').should($el => { expect($el[0].textContent).to.contain(' Thông báo ') })
    cy.get('#p-tabpanel-1-label').should($el => { expect($el[0].textContent).to.contain(' Thành viên ') })
    cy.get('#p-tabpanel-2-label').should($el => { expect($el[0].textContent).to.contain(' Tổ chức con ') })

    cy.get(':nth-child(1) > label').should('have.contain', 'Organization Name *')
    cy.get(':nth-child(2) > label').should('have.contain', 'Mô tả')
    cy.get(':nth-child(3) > label').should('have.contain', 'Email')
    cy.get(':nth-child(4) > label').should('have.contain', 'Số điện thoại')
    cy.get(':nth-child(5) > label').should('have.contain', 'Địa chỉ')
    cy.get('.mt-4 > .btn').should($el => { expect($el[0].textContent).to.contain('Lưu') })

    //Trả lại language EN
    cy.get(':nth-child(2) > .js-is-select').click()
    cy.contains('English',{ timeout: 10000 },{ force: true }).click()

  })

})