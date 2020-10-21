describe("User can see list of series", () => {
  beforeEach(() => {
    cy.server(),
      cy.route({
        method: "GET",
        url:
          "https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga",
        response: "fixture:series.json",
      });
    cy.visit("/");
  });

  it("visitor can see series image", () => {
    cy.get('[data-cy="series-list"]').children().should("have.length", 10);
    cy.get("#header").should("be.visible");
  });
});
