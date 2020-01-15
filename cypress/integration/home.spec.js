describe('Action Log', function () {
    before(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win) => {
            win.sessionStorage.clear();
        });
    });
   
    it('Login Page', function () {
        cy.visit('http://localhost:4200/');
    });
    
});