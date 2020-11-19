"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = exports.CreateAccountPO = void 0;
class CreateAccountPO {
    get registrationForm() {
        return $('#box-create-account');
    }
    confirmRegistration() {
        this.registrationForm.$('button[name="create_account"]').click();
    }
    open() {
        browser.url('/create_account');
    }
    fillWith(options) {
        this.registrationForm.$('input[name="company"]').setValue(options.companyname);
        this.registrationForm.$('input[name="firstname"]').setValue(options.firstname);
        this.registrationForm.$('input[name="lastname"]').setValue(options.lastnama);
        const countrySelect = this.registrationForm.$('select[name="country_code"]');
        countrySelect.selectByVisibleText(options.countryname);
        this.registrationForm.$('input[name="email"]').click;
        browser.pause(50);
        this.registrationForm.$('input[name="email"]').setValue(options.email);
        this.registrationForm.$('input[name="password"]').setValue(options.password);
        this.registrationForm.$('input[name="confirmed_password"]').setValue(options.confirmPassword);
    }
}
exports.CreateAccountPO = CreateAccountPO;
exports.CreateAccount = new CreateAccountPO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWNjb3VudC5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS9jcmVhdGVBY2NvdW50LnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBYSxlQUFlO0lBRXhCLElBQVcsZ0JBQWdCO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELG1CQUFtQjtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsSUFBSTtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQXFKO1FBQzFKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUM3RSxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckQsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRyxDQUFDO0NBRUo7QUExQkQsMENBMEJDO0FBRVksUUFBQSxhQUFhLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9