/// <reference types="cypress" />

describe('my website Search Test', () => {
    it('Searches for  and checks results', () => {
        // פתיחת אתר 
        cy.visit('../../public/index.html');



        // בדיקה שהדף החדש מכיל אלמנט עם 
        // id "current-date"
        // וגם ביצוע פעולה נוספת עליו - 
        //  למשל קריאת הטקסט שעליו והדפסתו ללוג
        cy.get('#current-date')
            .should('exist').then((element) => {
                // הדפסת הטקסט של האלמנט
                cy.log(element.text());
            });

        cy.screenshot();



    });
});
