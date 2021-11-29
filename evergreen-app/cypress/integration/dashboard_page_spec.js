describe('/dashboard', () => {
  before(() => {
    cy.visit('http://localhost:4200/login')

    cy.get('#email').type('test@wp.pl');
    cy.get('#password').type('objectivity');
    cy.get('form').contains('Log in').click();
  })

  it('should display dashboard page and request groups.json', () => {
    cy.url().should('equal', 'http://localhost:4200/home/dashboard');
    cy.request('assets/groups.json')
  })

  it('should has "Dashboard" header', () => {
    cy.contains('h1', 'Dashboard');
  })

  it('should has "Last visited patients" sub header', () => {
    cy.get('.section__subtitle')
      .eq(0)
      .should('contain.text', 'Last visited patients')
  })

  it('should display only 2 patients card', () => {
    cy.get('app-patient-card')
      .should('have.length', '2')
  })

  it('should redirect to patients when See all patients button is clicked', () => {
    cy.get('#seeAllPatients')
      .should('contain.text', 'See all patients').click();

    cy.url().should('equal', 'http://localhost:4200/home/patients');
  })
})
