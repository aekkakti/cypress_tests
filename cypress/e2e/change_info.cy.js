function goToProfile() {
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

        cy.log('Переход в профиль')
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(2) > p')
            .click()
    })
}

describe('Change info', () => {
    it('Change info, none-existing surname', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1500);

            cy.log('Очистка поля фамилии')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input')
                .clear()

            cy.log('Ввод некорректной фамилии')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input')
                .type(data.none_existing_surname)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div.form-error.form-error--.form-error--.form-error--')
                .should('exist')

        })
    })

    it('Change info, existing surname', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля фамилии')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input')
                .clear()

            cy.log('Ввод корректной фамилии')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input')
                .type(data.surname)

            cy.log('Нажатие на кнопку "Сохранить"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div.form__buttons > button')
                .click()
        })
    })

    it('Change info, none-existing name', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля имени')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
                .clear()

            cy.log('Ввод некорректного имени')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
                .type(data.none_existing_name)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div.form-error.form-error--.form-error--.form-error-- > span')
                .should('exist')
        })
    })

    it('Change info, existing name', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля имени')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
                .clear()

            cy.log('Ввод корректного имени')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
                .type(data.name)

            cy.log('Нажатие на кнопку "Сохранить"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div.form__buttons > button')
                .click()
        })
    })

    it('Change info, none-existing patronymic', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля отчества')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
                .clear()

            cy.log('Ввод некорректного отчества')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(1) > div > input')
                .type(data.none_existing_patronymic)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(1) > div.form-error.form-error--.form-error--.form-error--')
                .should('exist')
        })
    })

    it('Change info, existing patronymic', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля отчества')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
                .clear()

            cy.log('Ввод корректного отчества')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(1) > div > input')
                .type(data.patronymic)

            cy.log('Нажатие на кнопку "Сохранить"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div.form__buttons > button')
                .click()
        })
    })

    it('Change info, none-existing email', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля e-mail')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(2) > div > input')
                .clear()

            cy.log('Ввод некорректный почты')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(2) > div > input')
                .type(data.none_existing_email)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(2) > div.form-error.form-error--.form-error--.form-error-- > span')
                .should('exist')
        })
    })

    it('Change info, existing email', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля e-mail')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(2) > div > input')
                .clear()

            cy.log('Ввод корректный почты')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(2) > div > input')
                .type(data.email)

            cy.log('Нажатие на кнопку "Сохранить"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div.form__buttons > button')
                .click()
        })
    })

// данный тест выдаёт ошибку 500, так как проблема на стороне сервера
    it('Change info, none-existing about', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля о себе')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div.edit-form__about-self > div > textarea')
                .clear()

            cy.log('Ввод некорректного о себе')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div.edit-form__about-self > div.form-control.form-control-- > textarea')
                .type(data.none_existing_about)

            cy.log('Нажатие на кнопку "Сохранить"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div.form__buttons > button')
                .click()

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div.edit-form__about-self > div.form-error.form-error--.form-error--.form-error-- > span')
                .should('exist')
        })
    })

    it('Change info, existing about', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля о себе')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div.edit-form__about-self > div > textarea')
                .clear()

            cy.log('Ввод корректного о себе')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div.edit-form__about-self > div > textarea')
                .type(data.about)

            cy.log('Нажатие на кнопку "Сохранить"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div.form__buttons > button')
                .click()
        })
    })

    it('Change info, none-existing link', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля ссылки')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div.edit-form__about-self > div > textarea')
                .clear()

            cy.log('Нажатие на кнопку "Добавить ссылку"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > div:nth-child(3) > div > form > div.form__buttons > button')
                .click()

            cy.log('Ввод некорректной ссылки о себе')
            cy.get('body > div:nth-child(9) > div.desktop-modal > div > form > div:nth-child(1) > div.form__labels > div > div > div > div > input')
                .type(data.none_existing_link)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get(' body > div:nth-child(9) > div.desktop-modal > div > form > div:nth-child(1) > div.form__labels > div > div > div > div.form-error.form-error--responsive.form-error--.form-error-- > span')
                .should('exist')
        })
    })

    it('Change info, existing link', () => {
        cy.fixture('changeInfoTests').then(data => {
            goToProfile();
            cy.wait(1000);

            cy.log('Очистка поля ссылки')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > form > div:nth-child(1) > div.form__labels > div.edit-form__about-self > div > textarea')
                .clear()

            cy.log('Нажатие на кнопку "Добавить ссылку"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(2) > div > div:nth-child(3) > div > form > div.form__buttons > button')
                .click()

            cy.log('Ввод корректной ссылки о себе')
            cy.get('body > div:nth-child(9) > div.desktop-modal > div > form > div:nth-child(1) > div.form__labels > div > div > div > div > input')
                .type(data.link)

            cy.log('Нажатие на кнопку "Сохранить"')
            cy.get('body > div:nth-child(9) > div.desktop-modal > div > form > div.form__buttons > button')
                .click()
        })
    })


    it('Recovery email, none-existing email', () => {
        cy.fixture('changeInfoTests').then(data => {
            cy.log('Переход на страницу восстановления email')
            cy.visit(data.main_url + 'recover-password/')
            cy.wait(1000);

            cy.log('Ввод некорректный почты')
            cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div > div.form-control--medium.form-control > input')
                .type(data.none_existing_email)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div > div.form-error.form-error--.form-error--.form-error-- > span')
                .should('exist')

        })
    })

    it('Recovery email, existing email', () => {
        cy.fixture('changeInfoTests').then(data => {
            cy.log('Переход на страницу восстановления email')
            cy.visit(data.main_url + 'recover-password/')
            cy.wait(1000);

            cy.log('Ввод корректный почты')
            cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div > div.form-control--medium.form-control > input')
                .type(data.email)

            cy.log('Нажатие на кнопку "Восстановить"')
            cy.get('#app > div.page > div > section > form > div.form__buttons > div > button')
                .click()
        })
    })

    it('Change password, existing first_input_password', () => {
        cy.fixture('changeInfoTests').then(data => {
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

            cy.log('Ввод неверного пароля в поле "Укажите новый пароль"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.main-edit-forms > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > input')
                .type(data.none_existing_change_password)

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.main-edit-forms > form > div:nth-child(1) > div.form__labels > div:nth-child(2)')
                .should('exist')
        })
    })

    it('Change password, first_input_password other second', () => {
        cy.fixture('changeInfoTests').then(data => {
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

            cy.log('Ввод неверного пароля в поле "Укажите новый пароль"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.main-edit-forms > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > input')
                .type(data.none_existing_change_password)

            cy.log('Ввод неверного пароля в поле "Повторите новый пароль"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.main-edit-forms > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > input')
                .type(data.none_existing_change_password + "4")

            cy.log('Проверка появления элемента, сигнализирующего об ошибке')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.main-edit-forms > form > div:nth-child(1) > div.form__labels > div:nth-child(4) > span')
                .should('exist')
        })
    })

    it('Change password, existing password', () => {
        cy.fixture('changeInfoTests').then(data => {
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

            cy.log('Ввод верного пароля в поле "Укажите новый пароль"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.main-edit-forms > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > input')
                .type(data.change_password)

            cy.log('Ввод верного пароля в поле "Повторите новый пароль"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.main-edit-forms > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > input')
                .type(data.change_password)

            cy.log('Клик по кнопке "Сохранить"')
            cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(1) > div.main-edit-forms > form > div.form__buttons > div > button')
                .click()
        })
    })
})

