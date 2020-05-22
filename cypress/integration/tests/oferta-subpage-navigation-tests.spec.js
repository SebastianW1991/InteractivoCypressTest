describe('Interactivo-oferta-subpage-navigation-test', () => {
    beforeEach(() => {
      cy.visit('https://interactivo.pl/oferta')
      cy.viewport(1200,895)
    })

  it('Visits Interactivo.pl "Web Development" subpage',()=>{
    cy.xpath('/html/body/section[1]/div[2]/div/div[1]/a').click()
    cy.url().should('eq', 'https://interactivo.pl/oferta/web-development')

  })
  it('Visits Interactivo.pl "Mobile Development" subpage',()=>{
    cy.xpath('/html/body/section[1]/div[2]/div/div[2]/a').click()
    cy.url().should('eq', 'https://interactivo.pl/oferta/mobile-development')

  })
  it('Visits Interactivo.pl "Design & Usability" subpage',()=>{
    cy.xpath('/html/body/section[1]/div[2]/div/div[3]/a').click()
    cy.url().should('eq', 'https://interactivo.pl/oferta/design-usability')

  })
  it('Visits Interactivo.pl "Optymalizacja" subpage',()=>{
    cy.xpath('/html/body/section[1]/div[2]/div/div[4]/a').click()
    cy.url().should('eq', 'https://interactivo.pl/oferta/optymalizacja')

  })

})