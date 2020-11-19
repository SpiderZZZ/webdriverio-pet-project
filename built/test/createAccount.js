"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAccount_page_1 = require("../page/createAccount.page");
const home_page_1 = require("../page/home.page");
const createUser_1 = require("../utils/createUser");
describe('User', () => //describe - аналог сьюта 
 {
    const cryptoRandomString = require('crypto-random-string');
    it('can register', () => {
        console.time("Test 'can register' took");
        createAccount_page_1.CreateAccount.open();
        createAccount_page_1.CreateAccount.fillWith({
            companyname: 'Название компании',
            firstname: 'Иван',
            lastnama: 'Иванов',
            countryname: 'Russian Federation',
            email: `${cryptoRandomString({ length: 15 })}@mail.ru`,
            password: 'testtest',
            confirmPassword: 'testtest'
        });
        createAccount_page_1.CreateAccount.confirmRegistration();
        const expectedText = 'Your customer account has been created.';
        expect(home_page_1.Home.successAlert).toBeDisplayed();
        expect(home_page_1.Home.successAlert).toHaveTextContaining(expectedText);
        console.timeEnd("Test 'can register' took");
    });
    it('register user thru HTTP', () => {
        const user = createUser_1.createNewUserAndLogin();
    });
    it('custom commands', () => {
        browser.addCommand("waitAndClick", function () {
            this.waitForDisplayed();
            this.click();
        }, true);
        browser.overwriteCommand('click', function (clickOrig) {
            console.log(`### doing click`);
            clickOrig();
        }, true);
        browser.url('/create_account');
        createAccount_page_1.CreateAccount.open();
        createAccount_page_1.CreateAccount.fillWith({
            companyname: 'Название компании',
            firstname: 'Иван',
            lastnama: 'Иванов',
            countryname: 'Russian Federation',
            email: `${cryptoRandomString({ length: 15 })}@mail.ru`,
            password: 'testtest',
            confirmPassword: 'testtest'
        });
        createAccount_page_1.CreateAccount.confirmRegistration();
        const expectedText = 'Your customer account has been created.';
        expect(home_page_1.Home.successAlert).toBeDisplayed();
        expect(home_page_1.Home.successAlert).toHaveTextContaining(expectedText);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvY3JlYXRlQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1FQUEyRDtBQUMzRCxpREFBeUM7QUFDekMsb0RBQTREO0FBRTVELFFBQVEsQ0FBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCOztJQUU1QyxNQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzNELEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1FBRXBCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUN4QyxrQ0FBYSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3BCLGtDQUFhLENBQUMsUUFBUSxDQUFDO1lBQ25CLFdBQVcsRUFBRyxtQkFBbUI7WUFDakMsU0FBUyxFQUFHLE1BQU07WUFDbEIsUUFBUSxFQUFHLFFBQVE7WUFDbkIsV0FBVyxFQUFHLG9CQUFvQjtZQUNsQyxLQUFLLEVBQUcsR0FBRyxrQkFBa0IsQ0FBQyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQyxVQUFVO1lBQ3JELFFBQVEsRUFBRyxVQUFVO1lBQ3JCLGVBQWUsRUFBRyxVQUFVO1NBQy9CLENBQUMsQ0FBQTtRQUNGLGtDQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUVuQyxNQUFNLFlBQVksR0FBRyx5Q0FBeUMsQ0FBQTtRQUM5RCxNQUFNLENBQUMsZ0JBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN6QyxNQUFNLENBQUMsZ0JBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1RCxPQUFPLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO1FBRS9CLE1BQU0sSUFBSSxHQUFHLGtDQUFxQixFQUFFLENBQUE7SUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO1FBRXZCLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNoQixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFFUixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVMsU0FBUztZQUVoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDOUIsU0FBUyxFQUFFLENBQUE7UUFDZixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFFOUIsa0NBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwQixrQ0FBYSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUcsbUJBQW1CO1lBQ2pDLFNBQVMsRUFBRyxNQUFNO1lBQ2xCLFFBQVEsRUFBRyxRQUFRO1lBQ25CLFdBQVcsRUFBRyxvQkFBb0I7WUFDbEMsS0FBSyxFQUFHLEdBQUcsa0JBQWtCLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUMsVUFBVTtZQUNyRCxRQUFRLEVBQUcsVUFBVTtZQUNyQixlQUFlLEVBQUcsVUFBVTtTQUMvQixDQUFDLENBQUE7UUFDRixrQ0FBYSxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFDbkMsTUFBTSxZQUFZLEdBQUcseUNBQXlDLENBQUE7UUFDOUQsTUFBTSxDQUFDLGdCQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDekMsTUFBTSxDQUFDLGdCQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQSJ9