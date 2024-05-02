describe('None-selected role', () => {
    it ('None-selected role', () => {
        cy.fixture('authTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url + 'login/')

            cy.log('Ввод существующего логина')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.button__background-color-green')
                .click()

            cy.wait(2500)

            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button').eq(0)
                .click()

            cy.log('Клик по кнопке "Я являюсь студентом"')
            cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(3)')
                .click()

            cy.wait(2500)
        })
    })
})

describe('Selected role', () => {
    it('Selected role', () => {
        cy.fixture('authTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url + 'login/')

            cy.log('Ввод существующего логина')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.button__background-color-green')
                .click()

            cy.wait(2500)
        })
    })
})