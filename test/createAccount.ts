import { CreateAccount } from "../page/createAccount.page";
import { Home } from "../page/home.page";
import { createNewUserAndLogin } from "../utils/createUser";
import allureReporter from '@wdio/allure-reporter'

describe('User',() => //describe - аналог сьюта 
{
    const cryptoRandomString = require('crypto-random-string');
    it('can register', () =>
    {
        allureReporter.addFeature("Пользователь может зарегистироваться")
        allureReporter.addDescription("Тест на регистрацию пользователя", 'text')
        console.time("Test 'can register' took")
        allureReporter.addStep("Открыть страницу регистрации")
        CreateAccount.open()
        allureReporter.addStep("Заполнить страницу регистрации данным")
        CreateAccount.fillWith({
            companyname : 'Название компании',
            firstname : 'Иван',
            lastnama : 'Иванов',
            countryname : 'Russian Federation',
            email : `${cryptoRandomString({length: 15})}@mail.ru`,
            password : 'testtest',
            confirmPassword : 'testtest'
        })
        allureReporter.addStep("Нажать на кнопку зарегистрироваться")
        CreateAccount.confirmRegistration()
    
        const expectedText = 'Your customer account has been created.'
        //const expectedText = 'Ваше регистрация успешно выполнена'
        allureReporter.startStep("Проверяем, что регистрация прошла успешно")
        try
        {
            allureReporter.startStep("Проверяем, что регистрация прошла успешно")
            expect(Home.successAlert).toBeDisplayed()
            allureReporter.endStep("passed")
            allureReporter.startStep(`Проверям соответствие надписи значению: ${expectedText}`)
            expect(Home.successAlert).toHaveTextContaining(expectedText)
            allureReporter.endStep("passed")            
        }
        catch (err)
        {
            allureReporter.endStep("failed")
            throw err
        }
        console.timeEnd("Test 'can register' took")
    });

    it('register user thru HTTP', () => 
    {
        const user = createNewUserAndLogin()
    });

    it('custom commands', () =>
    {
        browser.addCommand("waitAndClick", function() {
            this.waitForDisplayed()
            this.click()
        },true);

        browser.overwriteCommand('click', function(clickOrig)
        {
            console.log(`### doing click`)
            clickOrig()
        },true);
        browser.url('/create_account')

        CreateAccount.open()
        CreateAccount.fillWith({
            companyname : 'Название компании',
            firstname : 'Иван',
            lastnama : 'Иванов',
            countryname : 'Russian Federation',
            email : `${cryptoRandomString({length: 15})}@mail.ru`,
            password : 'testtest',
            confirmPassword : 'testtest'
        })
        CreateAccount.confirmRegistration()
        const expectedText = 'Your customer account has been created.'
        expect(Home.successAlert).toBeDisplayed()
        expect(Home.successAlert).toHaveTextContaining(expectedText)
    });
})