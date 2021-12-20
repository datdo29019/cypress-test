const login = require('./login');

context('Login-Del-Update', () => {
    beforeEach(() => {
        console.log("chicken")
    })
    // https://on.cypress.io/interacting-with-elements
    it('LOGIN', () => {
        cy.visit('https://va.vnlp.ai/#/bots')
        cy.title().should('eq', 'sign_in - VNLP Virtual Agent')
        
        login(cy)
    })
    it('CHECK', () => {
        check(cy);
    })

})

function check(cy) {
    cy.get('.new-content').click()
    cy.get(':nth-child(1) > .ng-untouched').type('Faker')
    cy.get(':nth-child(3) > .mb-3').type('Auto')

    cy.get('.btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
        .then((text) => {
            const toastText = text;
            expect(toastText).to.equal("Notificationbot_name_existed"); //notifica.... tên thông báo hiển thị
            //Check noti when save Fail Responses
        })

    //API
    cy.intercept('/bots').as('bot')

    cy.get('.p-toast-icon-close-icon').click()
    cy.get('.p-dialog-header-close-icon').click()
    cy.get(':nth-child(2) > .bot-card > .action').click()
    cy.get(':nth-child(2) > .bot-card > .action > .action-icon > .js-dropdown > :nth-child(1) > a').click()
    cy.get(':nth-child(1) > .ng-valid')
        .type('{del}{selectall}{backspace}', { delay: 500 })
        .type('Hide on Bush')
        .should('have.value', 'Hide on Bush')

    cy.get(':nth-child(3) > .mb-3')
        .type('{del}{selectall}{backspace}', { delay: 300 })
        .type('KOREAN_N/A')
        .should('have.value', 'KOREAN_N/A')

    cy.get('.btn-vnlp').click() //Button
    cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
        .then((text) => {
            const toastText = text;
            expect(toastText).to.equal("Notificationbot_name_existed"); //notifica.... tên thông báo hiển thị
            //Check noti when save fail Responses
        })

    cy.get('.btn-common').click()
    //API
    cy.intercept('/auth/login').as('login')
}
