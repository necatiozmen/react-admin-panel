/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

Cypress.on("uncaught:exception", () => {
    return false;
});

describe("base-antd", () => {
    const BASE_URL = "http://localhost:5173";

    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();

        cy.interceptGETPosts();
        cy.visit(BASE_URL);
    });

    it("should list resource", () => {
        cy.resourceList();
    });

    it("should create resource", () => {
        cy.resourceCreate({
            ui: "antd",
        });
    });

    it("should edit resource", () => {
        cy.resourceEdit({ ui: "antd" });
    });

    it("should show resource", () => {
        cy.resourceShow();
    });

    it("should delete resource", () => {
        cy.resourceDelete({ ui: "antd" });
    });
});
