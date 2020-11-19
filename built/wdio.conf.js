"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// https://webdriver.io/docs/configurationfile.html
exports.config = {
    runner: 'local',
    specs: [
        './test/createAccount.ts'
        //'./async-demo/async/1_callbacks.js'
        //'./async-demo/async/2_promises.js'
        //'./async-demo/async/3_async_await.js'
    ],
    hostname: (_a = process.env.SELENIUM_HUB_HOST) !== null && _a !== void 0 ? _a : 'localhost',
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [{
            browserName: 'chrome'
        }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    baseUrl: 'http://ip-5236.sunline.net.ua:38015/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', ['allure', {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: (test, context, { error, result, duration, passed, retries }) => {
        if (error) {
            browser.takeScreenshot();
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Rpby5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vd2Rpby5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxtREFBbUQ7QUFDdEMsUUFBQSxNQUFNLEdBQVc7SUFDMUIsTUFBTSxFQUFFLE9BQU87SUFDZixLQUFLLEVBQUU7UUFDSCx5QkFBeUI7UUFDekIscUNBQXFDO1FBQ3JDLG9DQUFvQztRQUNwQyx1Q0FBdUM7S0FDMUM7SUFDRCxRQUFRLFFBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsbUNBQUksV0FBVztJQUN0RCxJQUFJLEVBQUUsU0FBUztJQUNmLFlBQVksRUFBRSxDQUFDO0lBQ2YsWUFBWSxFQUFFLENBQUM7WUFDWCxXQUFXLEVBQUUsUUFBUTtTQUN4QixDQUFDO0lBQ0YsMkVBQTJFO0lBQzNFLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLE9BQU8sRUFBRSxzQ0FBc0M7SUFDL0MsY0FBYyxFQUFFLEtBQUs7SUFDckIsc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsOEJBQThCLEVBQUUsSUFBSTtnQkFDcEMsb0NBQW9DLEVBQUUsS0FBSzthQUM5QyxDQUFDLENBQUM7SUFDSCxTQUFTLEVBQUU7UUFDUCxFQUFFLEVBQUUsS0FBSztRQUNULE9BQU8sRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1FBQ3ZFLElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ1AsQ0FBQztDQUNKLENBQUEifQ==