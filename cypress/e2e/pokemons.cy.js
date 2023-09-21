
describe('Тестирование покупки нового фото для тренера', function () {
   it('Тестирование покупки нового фото для тренера', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('XXXX@yandex.ru');//свой логин
        cy.get('#password').type('XXXX'); //свой пароль
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(1) > .shop__button').click(); //в nth-child(1) указать цифру 1-12 в ависимости от нужного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('6011000000000004');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME SURNAME');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
   })
})