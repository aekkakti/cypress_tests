describe('None-existent authorization', () => {
    it('None-existent login test', () => {
        cy.fixture('authTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url + 'login/')

            cy.log('Ввод несуществующего логина')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.none_existent_login)

            cy.log('Ввод существующего пароля')
            cy.get('input[class="form-input--password form-input"]')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.button__background-color-green')
                .click()
            cy.wait(2500)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')
        })
    })

    it('None-existent password test', () => {
        cy.fixture('authTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url + 'login/')

            cy.log('Ввод существующего логина')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.login)

            cy.log('Ввод несуществующего пароля')
            cy.get('input[class="form-input--password form-input"]')
                .type(data.none_existent_password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.button__background-color-green')
                .click()
            cy.wait(2500)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')
        })
    })

    it('None-existent login and password test', () => {
        cy.fixture('authTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url + 'login/')

            cy.log('Ввод несуществующего логина')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.none_existent_login)

            cy.log('Ввод несуществующего пароля')
            cy.get('input[class="form-input--password form-input"]')
                .type(data.none_existent_password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.button__background-color-green')
                .click()
            cy.wait(2500)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')
        })
    })
})
describe('Existent authorization', () => {
    it ('Existent password and login', () => {
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
        })
    })
})
