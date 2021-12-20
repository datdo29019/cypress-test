context('Retrain data', () => {
  beforeEach(() => {

    cy.visit('https://va-test.vnlp.ai/')

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
    cy.wait(3500)
    //API
    cy.intercept('/bots').as('bot')

    cy.contains(' Conversations ').click() //Open Conversations

    cy.contains('Retrain data').click()

    cy.get('.pt-3').should('have.contain', 'Retrain data')

    cy.get('.note-title')
      .should($el => {
        expect($el[0].textContent).to.contain('Home / Conversations / Retrain data ')
      })

    cy.get('th.ng-star-inserted')
      .first()
      .should('have.contain', ' Message ')
      .next()
      .should('have.contain', ' Old intent ')
      .next()
      .should('have.contain', ' New intent ')
      .next()
      .should('have.contain', ' Entities ')
      .next()
      .should('have.contain', ' Responses ')



    cy.get('.p-dropdown-label').click()
    cy.wait(200)
    cy.get(':nth-child(1) > .p-dropdown-item').click()
      .should('have.contain', ' All data ')
    cy.get('td > .m-0').should('have.contain', 'No data available')
    cy.get('.p-paginator-current').should('have.contain', 'Showing 0 to 0 of 0 entries')
    cy.get('.p-paginator-page').click()
    cy.get('td > .m-0').should('have.contain', 'No data available')
    cy.get('.p-paginator-page').click()
    cy.get('td > .m-0').should('have.contain', 'No data available')


    cy.get('.p-dropdown-label').click()
    cy.wait(200)
    cy.get(':nth-child(2) > .p-dropdown-item').click()
      .should('have.contain', ' Not added ')
    cy.get('td > .m-0').should('have.contain', 'No data available')
    cy.get('.p-paginator-current').should('have.contain', 'Showing 0 to 0 of 0 entries')
    cy.get('.p-paginator-page').click()
    cy.get('td > .m-0').should('have.contain', 'No data available')
    cy.get('.p-paginator-page').click()
    cy.get('td > .m-0').should('have.contain', 'No data available')


    cy.get('.p-dropdown-label').click()
    cy.wait(200)
    cy.get(':nth-child(3) > .p-dropdown-item').click()
      .should('have.contain', ' Added ')
    cy.get('td > .m-0').should('have.contain', 'No data available')
    cy.get('.p-paginator-current').should('have.contain', 'Showing 0 to 0 of 0 entries')
    cy.get('.p-paginator-page').click()
    cy.get('td > .m-0').should('have.contain', 'No data available')
    cy.get('.p-paginator-page').click()
    cy.get('td > .m-0').should('have.contain', 'No data available')


  })
})