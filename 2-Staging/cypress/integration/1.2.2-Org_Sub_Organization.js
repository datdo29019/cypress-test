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
context('Sub_Organization', () => {
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

    cy.get(':nth-child(3) > .js-is-select',{ timeout: 10000 }).click()
    cy.wait(2000)
    cy.contains('My Organization',{ timeout: 10000 },{ force: true }).click()
    cy.wait(2000)
    //Chuyển EN
    cy.get(':nth-child(2) > .js-is-select', { timeout: 3000 }).click()
    cy.wait(2000)
    cy.contains('English', { timeout: 2000 }).click()
    cy.wait(2000)
    cy.contains(' Sub organization ',{ timeout: 10000 }).click()

    cy.get('.justify-content-between > .btn').should($el => { expect($el[0].textContent).to.contain('Create') })
    cy.get('.input-search > input').should('have.attr', 'placeholder', 'Search sub organization')

    cy.get('.p-datatable-thead')
      .find('tr').find('th').find('p').should('have.length', 7)
    /**Check class .p tìm thẻ tr > th trong thẻ th có 7 thẻ p
    Ở Sub có 7 thẻ tại vì lấy luôn 3 thẻ ở:
           Member = Username + Name + Roles
           Sub org = Name + Email + Phone number + Address 
           = 7        **/

    const titles = [
      "Organization Name *",
      "Description",
      "Email",
      "Phone Number",
      "Address",];
    cy.get('.justify-content-between > .btn').click()
    cy.get('.p-dialog-content label').each((e, index) => {
      expect(e).to.contain.text(titles[index])
    })


    cy.get('.mb-3 > :nth-child(1) input')
      .focus()
      .type('1977')
      .should('have.value', '1977')
    cy.get('.ng-tns-c21-12 > .btn-vnlp').should('be.enabled')


    cy.get('.mb-3 > :nth-child(2) > .ng-untouched')
      .focus()
      .type('Hide on Bush - Faker - Easyhoon')
      .should('have.value', 'Hide on Bush - Faker - Easyhoon')


    cy.get('.mb-3 > :nth-child(3) > .ng-untouched')
      .focus()
      .type('123')
      .should('have.value', '123')
    cy.get('.mb-3 > :nth-child(3) > .error-validate').should('be.visible').and('have.text', 'Invalid email')
    cy.get('.ng-tns-c21-12 > .btn-vnlp').should('be.disabled')
    cy.get('.mb-3 > :nth-child(3) > .ng-valid').type('{del}{selectall}{backspace}bigamebig@gmail.com')
    cy.get('.mb-3 > :nth-child(3) > .error-validate').should('not.exist')
    //Khi ghi đúng format thì thông báo error mất nên là not.exist
    cy.get('.ng-tns-c21-12 > .btn-vnlp').should('be.enabled')


    cy.get('.mb-3 > :nth-child(4) > .ng-untouched')
      .focus()
      .type('Check phone')
      .should('have.value', 'Check phone')
    cy.get('.ng-tns-c21-12 > .btn-vnlp').should('be.disabled')
    cy.get('.mb-3 > :nth-child(4) > .error-validate').should('be.visible').and('have.text', 'Invalid phone')
    cy.get('.mb-3 > :nth-child(4) > .ng-valid').type('{del}{selectall}{backspace}0769632239')
    cy.get('.mb-3 > :nth-child(4) > .error-validate').should('not.exist')
    cy.get('.ng-tns-c21-12 > .btn-vnlp').should('be.enabled')


    cy.get('.mb-3 > :nth-child(5) > .ng-untouched')
      .focus()
      .type('127 Nguyễn Thị Thập, Liên Chiểu, Đà Nẵng')
      .should('have.value', '127 Nguyễn Thị Thập, Liên Chiểu, Đà Nẵng')


      cy.get('.btn-common').should('be.enabled').and('be.visible')
      cy.get('.btn-common').should($el => {expect($el[0].textContent).to.contain('Cancel')})
      cy.get('.btn-vnlp').should('be.enabled').and('be.visible')
      cy.get('.btn-vnlp').should($el => {expect($el[3].textContent).to.contain('Create')})

      cy.get('.btn-vnlp').eq(3).click()
      cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDuplicated Organization Name");
       //Check noti when save
      })
      cy.get('.btn-common').click()
      cy.get('.ng-trigger').should('not.exist')

      cy.get('.justify-content-between > .btn').click()
      cy.get('.p-dialog-header-close-icon').click()
      cy.get('.ng-trigger').should('not.exist')
  })
})