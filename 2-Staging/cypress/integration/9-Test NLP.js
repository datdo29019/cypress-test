context('Test NLP', () => {
  beforeEach(() => {
    //Phải dùng data to
    cy.visit('https://va-staging.vnlp.ai/')

  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - Check', () => {

    //API
    cy.intercept('/auth/login').as('login')
    //API
    cy.intercept('/restore').as('restore')
    //API
    cy.intercept('/train').as('train')


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
    cy.get(':nth-child(2) > .bot-card > .bot-card--main').click()
    cy.wait(7500)
    //API
    cy.intercept('/bots').as('bot')

    cy.get('[joyridestep="step3"] > .d-block > .vnlp-icon').click()
    cy.get('.mb-3').focus()
      .type('hello').should('have.value', 'hello')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Bonjurrrrr')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)').should('have.contain', '[{"value":"hello","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('helloert').should('have.value', 'helloert')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'other')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)')
      .should('have.contain', '[{"value":"helloert","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')

    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Bonjur').should('have.value', 'Bonjur')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Bonjurrrrr')

    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('img').should('have.value', 'img')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Anh-IMG')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)')
      .should('have.contain', '[{"value":"img","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')

    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('imgqưt').should('have.value', 'imgqưt')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'other')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)')
      .should('have.contain', '[{"value":"imgqưt","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('image').should('have.value', 'image')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Anh-IMG')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)')
      .should('have.contain', '[{"value":"image","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('but').should('have.value', 'but')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Button')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)')
      .should('have.contain', '[{"value":"but","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('button').should('have.value', 'button')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Button')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)')
      .should('have.contain', '[{"value":"button","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')

    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('cac').should('have.value', 'cac')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Card')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)')
      .should('have.contain', '[{"value":"cac","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Card').should('have.value', 'Card')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Card')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Delay').should('have.value', 'Delay')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Delay')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Khó chịu thật').should('have.value', 'Khó chịu thật')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Grrrrr')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Bực quá').should('have.value', 'Bực quá')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Grrrrr')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Quick').should('have.value', 'Quick')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Quick')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Tôi muốn đi Đà nẵng').should('have.value', 'Tôi muốn đi Đà nẵng')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'S-City-System')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Tôi muốn đi Hà Nội').should('have.value', 'Tôi muốn đi Hà Nội')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'S-City-System')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Tôi muốn đi Cần Thơ').should('have.value', 'Tôi muốn đi Cần Thơ')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'S-City-System')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Tôi muốn ăn bún mắm').should('have.value', 'Tôi muốn ăn bún mắm')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'SSfood')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Tôi muốn ăn cơm chiên').should('have.value', 'Tôi muốn ăn cơm chiên')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'SSfood')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Start').should('have.value', 'Start')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Start')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('Start').should('have.value', 'Start')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'Start')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.mb-3').focus()
      .type('{del}{selectall}{backspace}')
      .type('@$#Ư%Ẻgert').should('have.value', '@$#Ư%Ẻgert')
    cy.get('.btn-vnlp').click()
    cy.get(':nth-child(4) > tbody > .ng-star-inserted > :nth-child(1)')
      .should('have.contain', 'other')
    cy.get('.word-break > :nth-child(4) > :nth-child(2)').should('have.contain', '[{"value":"@$#ư%ẻgert","confidence":100}]')
    cy.get('.ng-star-inserted > tr > :nth-child(2)').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(1) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(2) > td').should('have.contain', 'N/A')
    cy.get(':nth-child(7) > :nth-child(3) > td').should('have.contain', 'N/A')


    cy.get('.btn-common').click()

  })
})