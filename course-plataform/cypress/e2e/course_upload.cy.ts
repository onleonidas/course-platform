describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/login')
      cy.get('input[name="email"]').type("professor2@gmail.com")
      cy.get('input[name="password"]').type("123456")
      cy.get('label[name="isprof"]').click()
      cy.get('button[name="butao"]').click()
      cy.get('.uploadcourse').click()
      cy.get('input[name="nomecurso"]').type("curso teste")
      cy.get('input[name="precocurso"]').type("25")
      cy.get('input[name="linkcurso"]').type("https://www.youtube.com/embed/PuyZAUyZYDI")
      cy.get('input[name="desc"]').type("curso teste descrição")
      cy.get('input[name="imglink"]').type("https://3.bp.blogspot.com/-SYrKgXwRHTI/VaWmcy76CwI/AAAAAAAANXk/xNqIqG70UJY/s1600/html-css.jpg")
      cy.get('button[name="cadastracurso"]').click()
  
    })
  })