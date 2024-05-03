function authorization() {
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
}

describe('Verification, user have role', () => {
    it ('Verification, user have role, none-existing institution ', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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
            authorization();

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
            authorization();

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
            authorization();

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

    it ('Verification, user have role, none-existing qualification', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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

            cy.log('Не указана квалификация')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div:nth-child(3) > div > input')
                .should('have.length.at.least', 0);
        })
    })

    it ('Verification, user have role, existing qualification', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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

            cy.log('Ввод квалификации')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div:nth-child(3) > div > input')
                .type(data.qualification)
        })
    })

    it ('Verification, user have role, none-existing course', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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

            cy.log('Ввод квалификации')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div:nth-child(3) > div > input')
                .type(data.qualification)

            cy.log('Не введён курс обучения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__courses > div > div.course-item.course-item--chosen')
                .should("not.exist")
        })
    })


    it ('Verification, user have role, existing course', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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

            cy.log('Ввод квалификации')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div:nth-child(3) > div > input')
                .type(data.qualification)

            cy.log('Выбор нужного курса')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__courses > div > div:nth-child(1)')
                .click()

        })
    })

    it ('Verification, user have role, none-existing year begin', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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

            cy.log('Ввод квалификации')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div:nth-child(3) > div > input')
                .type(data.qualification)

            cy.log('Выбор нужного курса')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__courses > div > div:nth-child(1)')
                .click()

            cy.log('Ввод некорректного года начала обучения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__years > div:nth-child(1) > div.form-control--max.form-control > input')
                .type(data.none_existent_year_begin)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__years > div:nth-child(1) > div.student-form__error > div > span')
                .should('exist')
        })
    })


    it ('Verification, user have role, existing year begin', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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

            cy.log('Ввод квалификации')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div:nth-child(3) > div > input')
                .type(data.qualification)

            cy.log('Выбор нужного курса')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__courses > div > div:nth-child(1)')
                .click()

            cy.log('Ввод корректного года начала обучения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__years > div:nth-child(1) > div.form-control--max.form-control > input')
                .type(data.year_begin)
        })
    })

    it ('Verification, user have role, none-existing year end', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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

            cy.log('Ввод квалификации')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div:nth-child(3) > div > input')
                .type(data.qualification)

            cy.log('Выбор нужного курса')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__courses > div > div:nth-child(1)')
                .click()

            cy.log('Ввод корректного года начала обучения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__years > div:nth-child(1) > div.form-control--max.form-control > input')
                .type(data.year_begin)

            cy.log('Ввод некорректного года окончания обучения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__years > div:nth-child(2) > div.form-control--max.form-control > input')
                .type(data.none_existent_year_end)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__years > div:nth-child(2) > div.student-form__error > div > span')
                .should('exist')
        })
    })

    it ('Verification, user have role, existing year end and send form', () => {
        cy.fixture('verificationTests').then(data => {
            authorization();

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

            cy.log('Ввод квалификации')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div:nth-child(3) > div > input')
                .type(data.qualification)

            cy.log('Выбор нужного курса')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__courses > div > div:nth-child(1)')
                .click()

            cy.log('Ввод корректного года начала обучения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__years > div:nth-child(1) > div.form-control--max.form-control > input')
                .type(data.year_begin)

            cy.log('Ввод корректного года окончания обучения')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > div.student-form__years > div:nth-child(2) > div.form-control--max.form-control > input')
                .type(data.year_end)

            cy.log('Отправка формы')
            cy.get('body > div:nth-child(8) > div.desktop-modal > div > div.student-form > button')
                .click()

        })
    })

})