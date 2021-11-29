describe('/patients', () => {
  before(() => {
    cy.visit('http://localhost:4200/login')
    cy.get('#email').type('test@wp.pl');
    cy.get('#password').type('objectivity');
    cy.get('form').contains('Log in').click();
    cy.visit('http://localhost:4200/home/patients')
  })

  it('should display dashboard page and request groups.json', () => {
    cy.get('#filterInput').type('Robert');
  })


})
