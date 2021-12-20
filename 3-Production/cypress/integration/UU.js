describe('Advanced', function () {

    it('LOGIN', function () {
        cy.visit('https://va.vnlp.ai/')
        cy.get('#username')
            .type('dat.do')
            .should('have.value', 'dat.do')
        cy.get('#password')
            .type('taonemay123').should('have.value', 'taonemay123')
        cy.get('.btn').click()
    })

    it('Go Home > Conver > Respon', function () {
        //Get Home
        cy.visit('https://va.vnlp.ai/#/bots')
        cy.contains('Faker').click()
        cy.wait(3000)

        cy.contains(' Conversations ', { timeout: 10000 }).click() //Open Conversations
        cy.wait(1500)
        cy.contains('Response', { timeout: 10000 }).click()
    })

    it('IMG', function () {
        // cy.visit('https://va.vnlp.ai/')
        console.log("chicken")
        //Create Responses type "IMG"
        cy.contains('Create').click()	//Create Responses
        cy.get('.col.mb-3 > .ng-untouched').eq(0).click()
            .type('MixiGaming').should('have.value', 'MixiGaming')

        cy.get('.p-dropdown-label').click()
        cy.get(':nth-child(2) > .p-dropdown-item').click()

        cy.get('.error').focus()
            .type('https://img.vn/uploads/thuvien/viber-image-2019-08-06-10-40-38-jpg-20190807145944LO3qbinQdG.jpg')
        cy.get('.text-right > .btn').click()
    })

    it('BUTTON', function () {
        //
        //Create Responses type "Button"
        cy.get(':nth-child(1) > .btn').click()	//Create Responses
        cy.wait('@respon')
        cy.get('.col.mb-3 > .ng-untouched').eq(0).click()
            .type('Easyhion-Button').should('have.value', 'Easyhion-Button')

        cy.get('.p-dropdown-label').click()
        cy.get(':nth-child(3) > .p-dropdown-item').click()

        cy.get('.position-relative > .ng-untouched').focus()
            .type('Button').should('have.value', 'Button')


        cy.get('.content-card > .text-right > .btn').click()
        cy.get('.content-card > :nth-child(3) > .ng-untouched').focus()
            .type('Easyhion').should('have.value', 'Easyhion', { delay: 300 })
        cy.get(':nth-child(3) > .remove-text > .vnlp-icon', { delay: 300 }).click()

        cy.get('.new-button-card > input.ng-untouched').focus() //Enter button title 1...
            .type('Enter button title 1...').should('have.value', 'Enter button title 1...')

        cy.get('.ng-untouched > .p-dropdown > .p-dropdown-label').click()
        cy.get(':nth-child(1) > .p-dropdown-item').click()

        cy.get('.add-button > .btn').click()
        cy.get('input.ng-untouched').focus()
            .type('Enter button title 2...').should('have.value', 'Enter button title 2...', { delay: 300 })

        cy.get('.ng-untouched > .p-dropdown > .p-dropdown-label').click()
        cy.get(':nth-child(1) > .p-dropdown-item').click()

        cy.get('.vnlp-icon.vnlp-icon-close-black', { delay: 500 }).then(ele => {
            ele[1].click() //Click cái thứ 2 Ele1 là từ 0-1
        })


        cy.get('.text-right > .btn').then(ele => {
            ele[1].click() // 2Button Submit if choose [1] = Button 2 - [0] = Button 1
        })

        cy.get('.p-toast-message-content').invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal("NotificationSaved successfully");
                //Check noti when save successfully
            })
        //Tắt nút X khi thông báo Successfully
        cy.get('.p-toast-icon-close-icon').click()
    })



})