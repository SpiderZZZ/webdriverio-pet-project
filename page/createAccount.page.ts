
export class CreateAccountPO {
    
    public get registrationForm() {
        return $('#box-create-account')
    }

    confirmRegistration() {
        this.registrationForm.$('button[name="create_account"]').click();
    }
    open() {
        browser.url('/create_account');
    }
    
    fillWith(options: { companyname: string; firstname: string; lastnama: string; countryname: string; email: string; password: string; confirmPassword: string; }) {        
        this.registrationForm.$('input[name="company"]').setValue(options.companyname);
        this.registrationForm.$('input[name="firstname"]').setValue(options.firstname);
        this.registrationForm.$('input[name="lastname"]').setValue(options.lastnama);
        const countrySelect = this.registrationForm.$('select[name="country_code"]');
        countrySelect.selectByVisibleText(options.countryname);
        this.registrationForm.$('input[name="email"]').setValue(options.email);
        this.registrationForm.$('input[name="password"]').setValue(options.password);
        this.registrationForm.$('input[name="confirmed_password"]').setValue(options.confirmPassword);
    }

}

export const CreateAccount = new CreateAccountPO();