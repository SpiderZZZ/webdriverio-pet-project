"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickLogin = exports.createNewUser = exports.createNewUserAndLogin = void 0;
const request = require("request-promise-native");
const faker = require("faker");
const cheerio = require("cheerio");
function createNewUserAndLogin() {
    console.time('Create and login user took');
    const credentials = createNewUser();
    const result = quickLogin(credentials);
    console.timeEnd('Create and login user took');
    return result;
}
exports.createNewUserAndLogin = createNewUserAndLogin;
function createNewUser() {
    return browser.call(createNewUserAsync);
}
exports.createNewUser = createNewUser;
async function createNewUserAsync() {
    const j = request.jar();
    const req = request.defaults({
        jar: j,
        resolveWithFullResponse: true,
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,ru-UA;q=0.6",
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    const tokenRespone = await req.get("http://ip-5236.sunline.net.ua:38015/create_account");
    const $ = cheerio.load(tokenRespone.body);
    const token = $('form[name="customer_form"] input[name="token"]').attr("value");
    const uuid = faker.random.uuid().replace(/-/gm, "");
    const email = `${uuid}@mail.com`;
    const password = "123456";
    const formData = {
        token: token,
        company: null,
        tax_id: null,
        firstname: "test",
        lastname: "test",
        address1: null,
        address2: null,
        postcode: null,
        city: null,
        country_code: "RU",
        email: email,
        password: password,
        confirmed_password: password,
        create_account: "Create Account"
    };
    await req.post("http://ip-5236.sunline.net.ua:38015/create_account", {
        form: formData
    }).catch((err) => { });
    return { email: email, password: password };
}
function quickLogin(credentials) {
    console.log("Doing login for user: ", credentials);
    const cookieWithSessionID = browser.call(function () {
        return quickLoginAsync(credentials);
    });
    browser.url('/');
    browser.setCookies({
        name: cookieWithSessionID.key,
        value: cookieWithSessionID.value
    });
    browser.refresh();
    return {
        credentials: credentials,
        cookieWithSessionID: cookieWithSessionID
    };
}
exports.quickLogin = quickLogin;
async function quickLoginAsync(credentials) {
    const j = request.jar();
    const tokenResponse = await request.get("http://ip-5236.sunline.net.ua:38015/login", {
        jar: j,
        resolveWithFullResponse: true,
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml",
            "Content-Type": "text/html; charset=UTF-8"
        }
    });
    const $ = cheerio.load(tokenResponse.body);
    const token = $('#box-login form[name="login_form"] input[name="token"]').attr("value");
    const formData = {
        token: token,
        redirect_url: null,
        email: credentials.email,
        password: credentials.password,
        login: 'Sign In'
    };
    await request.post("http://ip-5236.sunline.net.ua:38015/login", {
        form: formData,
        jar: j,
        resolveWithFullResponse: true,
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,ru-UA;q=0.6",
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(null, (err) => { });
    const cookies = j.getCookies('http://ip-5236.sunline.net.ua:38015');
    return cookies.find((cookie) => cookie['key'] == "LCSESSID");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL2NyZWF0ZVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUE7QUFDakQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQzlCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUVsQyxTQUFnQixxQkFBcUI7SUFFakMsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQzFDLE1BQU0sV0FBVyxHQUFHLGFBQWEsRUFBRSxDQUFBO0lBQ25DLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN0QyxPQUFPLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUE7SUFDN0MsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQztBQVBELHNEQU9DO0FBRUQsU0FBZ0IsYUFBYTtJQUN6QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUMzQyxDQUFDO0FBRkQsc0NBRUM7QUFFRCxLQUFLLFVBQVUsa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3pCLEdBQUcsRUFBRSxDQUFDO1FBQ04sdUJBQXVCLEVBQUUsSUFBSTtRQUM3QixPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQ04sd0hBQXdIO1lBQ3hILGlCQUFpQixFQUFFLGlEQUFpRDtZQUNwRSxjQUFjLEVBQUUsbUNBQW1DO1NBQ3REO0tBQ0osQ0FBQyxDQUFDO0lBQ0gsTUFBTSxZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUE7SUFFeEYs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