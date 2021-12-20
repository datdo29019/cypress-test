context('Livechat-LOGIN', () => {
    beforeEach(() => {
  
      cy.visit('https://livechat-test.vnlp.ai/')
    })
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('#username',{timeout:8000})
  
        // Delay each keypress by 0.2 sec
        .type('dat.do')
        .should('have.value', 'dat.do')
  
      cy.get('#password')
        .type('taonemay123').should('have.value', 'taonemay123')
  
      cy.get('.btn').click()
  
  //API
   cy.intercept('/auth/login').as('login')
  //API
   cy.intercept('/profile').as('profile')

   cy.get(':nth-child(1) > .bot-card > .bot-card--main',{timeout:8000}).click()
  
  
  
  
  
  
      })
    }) 