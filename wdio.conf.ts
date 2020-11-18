import { Config } from "@wdio/sync";

// https://webdriver.io/docs/configurationfile.html
export const config: Config = {
    runner: 'local',
    specs: [
        './test/createAccount.ts'
        //'./async-demo/async/1_callbacks.js'
        //'./async-demo/async/2_promises.js'
        //'./async-demo/async/3_async_await.js'
    ],
    hostname: process.env.SELENIUM_HUB_HOST ?? 'localhost',
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
}
