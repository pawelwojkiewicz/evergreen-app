describe('/login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login')
  })

  it('should has logo image', () => {
    cy.get('.login__container')
      .find('img')
      .should('have.class', 'login__logo')
      .should('have.attr', 'alt', 'Evergreen life logo')
  })

  it('should has "Log in as a health professional" header', () => {
    cy.contains('h1', 'Log in as a health professional');
  })

  it('should have error messages after click Log In when inputs are empty', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)

    cy.get('form').contains('Log in').click();

    cy.get('.invalid-feedback')
      .eq(0)
      .should('contain.text', 'Please put correct e-mail.')

    cy.get('.invalid-feedback')
      .eq(1)
      .should('contain.text', 'The password is too short.')

    cy.get('form').contains('Log in').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('wrong password! Password is "objectivity"')
    })
  });

  it('should show 2 invalid messages and alert popup after click Log In when password is wrong', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)

    cy.get('#email').type('test@wp.pl');
    cy.get('#password').type('objectivityyy');
    cy.get('form').contains('Log in').click();

    cy.get('.invalid-feedback')
      .eq(0)
      .should('contain.text', 'The password is too short.')
    cy.get('.invalid-feedback')
      .eq(1)
      .should('contain.text', 'Sorry, objectivityyy is wrong!')
    cy.get('form').contains('Log in').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('wrong password! Password is "objectivity"')
    })
  });

  it('should redirect to dashaboard page when username and password is correct', () => {
    cy.get('#email').type('test@wp.pl');
    cy.get('#password').type('objectivity');
    cy.get('form').contains('Log in').click();

    cy.url().should('equal', 'http://localhost:4200/home/dashboard');
  });




})
