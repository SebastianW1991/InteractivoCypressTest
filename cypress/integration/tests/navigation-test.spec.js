describe('Interactivo-webpage-navigation-test', () => {
  beforeEach(() => {
    cy.visit('https://interactivo.pl/')
    cy.viewport(1200,895)
  })
it('Visits Interactivo.pl "O Nas" subpage', () => {
  
 
  cy.xpath('/html/body/header/div/div/div/nav/ul/li[1]/a').click()
  cy.url().should('eq', 'https://interactivo.pl/o-nas')

})
it('Visits Interactivo.pl "Oferta" subpage',()=>{
  cy.xpath('/html/body/header/div/div/div/nav/ul/li[2]/a').click()
  cy.url().should('eq', 'https://interactivo.pl/oferta')

})
it('Visits Interactivo.pl "Realizacje" subpage',()=>{
  cy.xpath('/html/body/header/div/div/div/nav/ul/li[3]/a').click()
  cy.url().should('eq', 'https://interactivo.pl/realizacje')

})
it('Visits Interactivo.pl "Klienci" subpage',()=>{
  cy.xpath('/html/body/header/div/div/div/nav/ul/li[4]/a').click()
  cy.url().should('eq', 'https://interactivo.pl/klienci')

})
it('Visits Interactivo.pl "Kariera" subpage',()=>{
  cy.xpath('/html/body/header/div/div/div/nav/ul/li[5]/a').click()
  cy.url().should('eq', 'https://interactivo.pl/kariera')

})
it('Visits Interactivo.pl "Kontakt" subpage',()=>{
  cy.xpath('/html/body/header/div/div/div/nav/ul/li[6]/a').click()
  cy.url().should('eq', 'https://interactivo.pl/kontakt')

})
it('Visits Interactivo.pl "Wyceń projekt" subpage',()=>{
  cy.xpath('/html/body/header/div/div/div/a/span').click()
  cy.url().should('eq', 'https://interactivo.pl/kontakt')

})
})