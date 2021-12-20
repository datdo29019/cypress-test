/**


  -
**/
context('Settings', () => {
    beforeEach(() => {

        cy.visit('https://va-test.vnlp.ai/')

    })

    // https://on.cypress.io/interacting-with-elements

    it('.type() - Settings. DOM element', () => {
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
        cy.wait(1500)
        //Chuyển EN
        cy.contains(' EN ').click()
        cy.wait(1000)
        cy.contains('English', { timeout: 2000 }).click()


        cy.contains('Faker').click({ timeout: 10000 })
        cy.wait(4500)
        //API
        cy.intercept('/bots').as('bots')
        cy.get('.tutorial.ng-star-inserted > .vnlp-icon',{timeout:8000}).click().should('be.visible')
        cy.get('.m-0').should('have.contain','Settings')
        cy.get('.note-title').should($el => {expect($el[0].textContent).to.contain('Home / Settings')})
        cy.get('ul.p-tabview-nav')
        .find('li').should('have.length', 5)
        // 1 cái bị ẩn

        cy.get('li.ng-star-inserted > a.p-ripple')
        .eq(0)
        .should('have.contain', 'General')
        cy.get('li.ng-star-inserted > a.p-ripple')
        .eq(1)
        .should('have.contain',' FLOW - Confidence Interval ')
        cy.get('li.ng-star-inserted > a.p-ripple')
        .eq(2)
        .should('have.contain',' FAQ - Confidence Interval ')
        cy.get('li.ng-star-inserted > a.p-ripple')
        .eq(3)
        .should('have.contain',' KB - Confidence Interval ')
        // p-drop. đầu tiên có tên Basic, tiếp theo là Bot Viewer

        cy.get('.note-title').eq(1).should('have.contain','App ID')
        cy.get('.note-title').eq(2).should('have.contain','App Secret')
        cy.get('.note-title').eq(3).should('have.contain','Access token')
        cy.get('.note-title').eq(4).should('have.contain','Webhook')

        cy.get('.btn-import').should('be.enabled')
        cy.get('.btn-import').eq(0).should($el => {expect($el[0].textContent).to.contain('Copy')})
        cy.get('.btn-import').eq(1).should($el => {expect($el[0].textContent).to.contain('Copy')})
        cy.get('.btn-import').eq(2).should($el => {expect($el[0].textContent).to.contain('Reset')})
        cy.get('.btn-import').eq(3).should($el => {expect($el[0].textContent).to.contain('Copy')})
        cy.get('.btn-import').eq(4).should($el => {expect($el[0].textContent).to.contain('Reset')})
        cy.get('.btn-import').eq(5).should($el => {expect($el[0].textContent).to.contain('Save')})


        cy.get('#p-tabpanel-0 > :nth-child(1) > .ng-pristine').should('have.attr', 'readonly')
        cy.get('#p-tabpanel-0 > :nth-child(2) > .ng-untouched').should('have.attr', 'readonly')
        cy.get(':nth-child(3) > .ng-untouched').should('have.attr', 'readonly')
        cy.get('#p-tabpanel-0 > :nth-child(4) > .mb-2')
    })
})