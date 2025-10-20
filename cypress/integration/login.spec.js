describe('Login Flow', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display error for invalid email', () => {
      cy.get('input[type="email"]').type('invalid-email');
      cy.get('input[type="password"]').type('Password123!');
      cy.get('button[type="submit"]').click();
      cy.contains('Invalid email format').should('be.visible');
    });
  
    it('should display error for short password', () => {
      cy.get('input[type="email"]').type('user@example.com');
      cy.get('input[type="password"]').type('short');
      cy.get('button[type="submit"]').click();
      cy.contains('Password must be at least 8 characters').should('be.visible');
    });
  
    it('should login and verify MFA successfully', () => {
      cy.get('input[type="email"]').type('user@example.com');
      cy.get('input[type="password"]').type('Password123!');
      cy.get('button[type="submit"]').click();
      cy.contains('MFA Verification').should('be.visible');
      cy.get('input[type="text"]').type('123456');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible');
      cy.contains('read-write').should('be.visible');
    });
  });