describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="email"]').type("jose@jose.com")
    cy.get('input[name="password"]').type("123456")
    cy.get('button[name="butao"]').click()
    cy.get('#my_courses_button').click({ multiple: false })
    cy.get(".go_somewhere").first().click()
    cy.get("#course_completed").check()
    cy.get('button[name="certificate"]').click()
    cy.get('#export_button').click()
  })
})