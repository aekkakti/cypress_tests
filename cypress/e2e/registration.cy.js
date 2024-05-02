
// Не проходит регистрация
describe('None-existent registration', () => {
    it('None-existent login test', () => {
        cy.fixture('registrationTests').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод некорректного логина')
            cy.get('input[class="form-input--text form-input"]').eq(0)
                .type(data.none_existent_login_registration)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')

            cy.wait(2500)
        })
    })

    it('None-existent email test', () => {
        cy.fixture('registrationTests').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод некорректной почты')
            cy.get('input[class="form-input--email form-input"]')
                .type(data.none_existent_email_registration)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')

            cy.wait(2500)
        })
    })

    it('None-existent password test', () => {
        cy.fixture('registrationTests').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод некорректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(0)
                .type(data.none_existent_password_registration)

            cy.log('Ввод некорректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(1)
                .type(data.none_existent_password_registration)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')

            cy.wait(2500)
        })
    })
})

describe('Existent first-part registration', () => {
    it('Existent first-part registration', () => {
        cy.fixture('registrationTests').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод корректного логина')
            cy.get('input[class="form-input--text form-input"]').eq(0)
                .type(data.login_registration)

            cy.log('Ввод корректной почты')
            cy.get('input[class="form-input--email form-input"]')
                .type(data.email_registration)

            cy.log('Ввод некорректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(0)
                .type(data.password_registration)

            cy.log('Ввод некорректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(1)
                .type(data.password_registration)

            cy.log('Клик по кнопке "Далее"')
            cy.get('.button__background-color-green').eq(1)
                .click()

            cy.wait(2500)
        })
    })
})

// Первая часть регистрации проходит, но некорректны фамилия или имя

describe('Existent first-part registration, but surname or name none-existent ', () => {
    it('Existent registration, but surname none-existent', () => {
        cy.fixture('registrationTests').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод корректного логина')
            cy.get('input[class="form-input--text form-input"]').eq(0)
                .type(data.login_registration)

            cy.log('Ввод корректной почты')
            cy.get('input[class="form-input--email form-input"]')
                .type(data.email_registration)

            cy.log('Ввод корректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(0)
                .type(data.password_registration)

            cy.log('Ввод корректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(1)
                .type(data.password_registration)

            cy.log('Клик по кнопке "Далее"')
            cy.get('.button__background-color-green').eq(1)
                .click()

            cy.wait(2500)

            cy.log('Ввод некорректной фамилии')
            cy.get('input[autocomplete="family-name"]')
                .type(data.none_existent_surname_registration)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')

            cy.wait(2500)
        })
    })

    it('Existent registration, but name none-existent', () => {
        cy.fixture('registrationTests').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод корректного логина')
            cy.get('input[class="form-input--text form-input"]').eq(0)
                .type(data.login_registration)

            cy.log('Ввод корректной почты')
            cy.get('input[class="form-input--email form-input"]')
                .type(data.email_registration)

            cy.log('Ввод корректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(0)
                .type(data.password_registration)

            cy.log('Ввод корректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(1)
                .type(data.password_registration)

            cy.log('Клик по кнопке "Далее"')
            cy.get('.button__background-color-green').eq(1)
                .click()

            cy.wait(2500)

            cy.log('Ввод корректной фамилии')
            cy.get('input[autocomplete="family-name"]')
                .type(data.surname_registration)

            cy.log('Ввод корректного имени')
            cy.get('input[autocomplete="given-name"]')
                .type(data.none_existent_name_registration)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"')
                .should('exist')

            cy.wait(2500)
        })
    })
})

// Успешная регистрация

describe('Existent registration ', () => {
    it('Existent registration', () => {
        cy.fixture('registrationTests').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод корректного логина')
            cy.get('input[class="form-input--text form-input"]').eq(0)
                .type(data.login_registration)

            cy.log('Ввод корректной почты')
            cy.get('input[class="form-input--email form-input"]')
                .type(data.email_registration)

            cy.log('Ввод некорректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(0)
                .type(data.password_registration)

            cy.log('Ввод некорректного пароля')
            cy.get('input[class="form-input--password form-input"]').eq(1)
                .type(data.password_registration)

            cy.log('Клик по кнопке "Далее"')
            cy.get('.button__background-color-green').eq(1)
                .click()

            cy.wait(2500)

            cy.log('Ввод корректной фамилии')
            cy.get('input[autocomplete="family-name"]')
                .type(data.surname_registration)

            cy.log('Ввод корректного имени')
            cy.get('input[autocomplete="given-name"]')
                .type(data.name_registration)

            cy.log('Клик по кнопке "Создать аккаунт"')
            cy.get('.button__background-color-green').eq(0)
                .click()

            cy.wait(2500)
        })
    })
})