// Верификация, но у студента ещё нет роли
describe('Verification, but user doesn`t have role', () => {
    it ('None-selected role', () => {
        cy.fixture('verificationTests').then(data => {
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

//Верификация, но у студента уже имеется роль

describe('Verification, user have role', () => {
    it ('Verification, user have role, none-existing institution ', () => {
        cy.fixture('verificationTests').then(data => {
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

            cy.log('Клик по кнопке "Пройти верификацию"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.message-student > button')
                .click()

            cy.log('Ввод несуществующего образовательного учреждения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.choose-institution > div > div > div > div > input')
                .type(data.none_existent_institution)

        })
    })

    it ('Verification, user have role, existing institution ', () => {
        cy.fixture('verificationTests').then(data => {
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

            cy.log('Клик по кнопке "Пройти верификацию"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.message-student > button')
                .click()

            cy.log('Ввод существующего образовательного учреждения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.choose-institution > div > div > div > div > input')
                .type(data.institution)

            cy.log('Выбор нужного ОУ')
            cy.get('div[class="search-input__wrapper-result"')
                .contains(data.institution)
                .click()

        })
    })

    it ('Verification, user have role, none-existing specialization', () => {
        cy.fixture('verificationTests').then(data => {
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

            cy.log('Клик по кнопке "Пройти верификацию"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.message-student > button')
                .click()

            cy.log('Ввод существующего образовательного учреждения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.choose-institution > div > div > div > div > input')
                .type(data.institution)

            cy.log('Выбор нужного ОУ')
            cy.get('div[class="search-input__wrapper-result"')
                .contains(data.institution)
                .click()

            cy.log('Ввод несуществующей специальности')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.choose-specialty > div > div > div > input')
                .type(data.none_existent_specialization)

        })
    })

    it ('Verification, user have role, existing specialization', () => {
        cy.fixture('verificationTests').then(data => {
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

            cy.log('Клик по кнопке "Пройти верификацию"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.message-student > button')
                .click()

            cy.log('Ввод существующего образовательного учреждения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.choose-institution > div > div > div > div > input')
                .type(data.institution)

            cy.log('Выбор нужного ОУ из выпадающего списка')
            cy.get('div[class="search-input__wrapper-result"')
                .contains(data.institution)
                .click()

            cy.log('Ввод существующей специальности')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.choose-specialty > div > div > div > input')
                .type(data.specialization)

            cy.log('Выбор нужной специальности')
            cy.get('div[class="search-input__wrapper-result"')
                .contains(data.specialization)
                .click()

        })
    })

    it ('Verification, user have role, none-existing year begin', () => {
        cy.fixture('verificationTests').then(data => {
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

            cy.log('Клик по кнопке "Пройти верификацию"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.message-student > button')
                .click()

            cy.log('Ввод существующего образовательного учреждения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.choose-institution > div > div > div > div > input')
                .type(data.institution)

            cy.log('Выбор нужного ОУ из выпадающего списка')
            cy.get('div[class="search-input__wrapper-result"')
                .contains(data.institution)
                .click()

            cy.log('Ввод существующей специальности')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.choose-specialty > div > div > div > input')
                .type(data.specialization)

            cy.log('Выбор нужной специальности')
            cy.get('div[class="search-input__wrapper-result"')
                .contains(data.specialization)
                .click()



            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')


        })
    })
})