const login1 = require('./login');

context('LoginM', () => {
    beforeEach(() => {
        console.log("chicken")
    })


    it('LOGIN', () => {
        cy.visit('https://va.vnlp.ai/#/bots')
        login1(cy)
    });

    it('Get bot-conver-respon',() => {
    //Get Home
    cy.contains('Faker').click()
   	cy.wait(3000)
    cy.contains(' Conversations ', { timeout: 10000 }).click() //Open Conversations
	cy.wait(1500)
    cy.contains('Response', { timeout: 10000 }).click()
    });

    it('Create IMG',() => {
        IMG(cy)
        });
})

function IMG(cy){
    cy.wait(1500)
    //Create Responses type "IMG"
    cy.get(':nth-child(1) > .btn').click()
        cy.get('.col.mb-3 > .ng-untouched').eq(0).click()
            .type('MixiGaming').should('have.value','MixiGaming')
    
        cy.get('.p-dropdown-label').click()
        cy.get(':nth-child(2) > .p-dropdown-item').click()
    
        cy.get('.error').focus()
            .type('https://img.vn/uploads/thuvien/viber-image-2019-08-06-10-40-38-jpg-20190807145944LO3qbinQdG.jpg')
        
    
        cy.get('.text-right > .btn').click()
    
        cy.get('.p-toast-message-content').invoke('text')
         .then((text)=>{
           const toastText = text;
           expect(toastText).to.equal("NotificationSaved successfully");
           //Check noti when save successfully
          })
          //Tắt nút X khi thông báo Successfully
        cy.get('.p-toast-icon-close-icon').click()
}