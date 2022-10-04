describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="email"]').type("jose@jose.com")
    cy.get('input[name="password"]').type("123456")
    cy.get('button[name="butao"]').click()
    cy.get('a[name="gear"]').click()
    cy.get('button[name="change_status"]').click()
    cy.wait(1000)
    cy.get(".classe_not").invoke('text').then((text1) => {
      expect(text1).to.eq(' I do not want to recieve promotion notification ')
    })

  })
})