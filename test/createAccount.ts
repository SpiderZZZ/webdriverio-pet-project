import { CreateAccount } from "../page/createAccount.page";
import { Home } from "../page/home.page";

describe('User',() => //describe - аналог сьюта 
{
    it('can register', () =>
    {
        console.time("Test 'can register' took")        
        CreateAccount.open()
        CreateAccount.fillWith({
            companyname : 'Название компании',
            firstname : 'Иван',
            lastnama : 'Иванов',
            countryname : 'Russian Federation',
            email : `test${new Date().getTime()/1000}@mail.ru`,
            password : 'testtest',
            confirmPassword : 'testtest'
        })
        CreateAccount.confirmRegistration()
    
        const expectedText = 'Your customer account has been created.'
        expect(Home.successAlert).toBeDisplayed()
        expect(Home.successAlert).toHaveTextContaining(expectedText)
        console.timeEnd("Test 'can register' took")
    })
})