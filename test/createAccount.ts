describe('User',() => //describe - аналог сьюта 
{
    it('can register', () =>
    {
        browser.url('/create_account');     
        const registrationForm = $('#box-create-account');
        registrationForm.$('input[name="company"]').setValue('Название компании');
        registrationForm.$('input[name="firstname"]').setValue('Иван');
        registrationForm.$('input[name="lastname"]').setValue('Иванов');
        const countrySelect = registrationForm.$('select[name="country_code"]');
        countrySelect.selectByVisibleText("Russian Federation");
        const randomEmail = `test${new Date().getTime()/1000}@mail.ru`
        registrationForm.$('input[name="email"]').setValue(randomEmail);
        registrationForm.$('input[name="password"]').setValue('testtest');
        registrationForm.$('input[name="confirmed_password"]').setValue('testtest');
        registrationForm.$('button[name="create_account"]').click();
    
        const expectedText = 'Your customer account has been created.'
        const alert = $('#notices .alert-success')
        expect(alert).toHaveTextContaining(expectedText)
    })
})