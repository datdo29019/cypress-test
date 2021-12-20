context('Histories-Testing history', () => {
  beforeEach(() => {

    cy.visit('https://va.vnlp.ai/')

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
    cy.contains('Faker').click({ timeout: 10000 })
    cy.wait(3500)  
    cy.contains(' Histories ').click()
    cy.wait(1000)
    cy.get('.js-collapsed.active > .js-panel-body > :nth-child(1) > a').click()
    cy.get('.pt-3').should('have.contain','Inference histories')
    cy.get('.breadcrumb-description')
      .should($el => {
      expect($el[0].textContent).to.contain('Home / Histories / Inference histories')
      })
      cy.get('[placeholder="0"]').should('be.enabled')
      cy.get('[placeholder="100"]').should('be.enabled')
      cy.get('.ml-2 > .btn').should('be.enabled')


      cy.get('.input-search > .ng-untouched').should('be.enabled') //Search

      cy.get('label.note-title').eq(0).should('have.text','Confidence from:')
      cy.get('label.note-title').eq(1).should('have.text','Confidence to:')

cy.wait(2000)
      const titles = [
        " Content ",
        " Detected Intent ",
        " User Intent ",
        " Confidence ",
        " Request time",
        "",];
  
      cy.get('.p-datatable-thead tr th').each((e, index) => {
        expect(e).to.contain.text(titles[index])
      })
  



    })
  })