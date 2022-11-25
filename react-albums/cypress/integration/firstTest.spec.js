describe("Visit websites", ()=>{
    it("Cypress is able to visit Google", ()=>{
        cy.visit("https://www.google.com")
        cy.wait(3000)
    })
    it("Cypress is able to visit Album search", ()=>{
        cy.visit("http://localhost:8002")
    })
})