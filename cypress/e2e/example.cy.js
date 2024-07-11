it('Open Home Page',()=>{
    cy.visit('/')
    cy.contains('Welcome')
  })
  