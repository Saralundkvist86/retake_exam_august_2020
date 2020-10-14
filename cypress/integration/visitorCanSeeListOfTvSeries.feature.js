describe("User can see list of series", () => {
  beforeEach(() => {
    cy.server(),
      cy.route({
        method: "GET",
        url: "https://content.viaplay.se/pc-se/serier/samtliga",
        response: "fixture:series.json",
      });
    cy.visit("/");
  });

  it("visitor can see series image", () => {
    cy.get("#viaplay-image").should("be.visible");
    cy.get("#header").should("be.visible");
  });
});
