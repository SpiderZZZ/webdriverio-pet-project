import { CreateAccount } from "../page/createAccount.page";
import { Home } from "../page/home.page";
import { createNewUserAndLogin } from "../utils/createUser";

describe('User',() => //describe - аналог сьюта 
{
    const cryptoRandomString = require('crypto-random-string');
    it('can register', () =>
    {
        console.time("Test 'can register' took")        
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
        console.timeEnd("Test 'can register' took")
    });

    it('register user thru HTTP', () => 
    {
        const user = createNewUserAndLogin()
    });
})