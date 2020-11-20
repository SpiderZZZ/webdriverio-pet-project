import { Config } from "@wdio/sync";

// https://webdriver.io/docs/configurationfile.html
const configObj: Config = {
    //automationProtocol: "devtools",
    runner: 'local',
    specs: [
        './test/createAccount.ts'
        //'./async-demo/async/1_callbacks.js'
        //'./async-demo/async/2_promises.js'
        //'./async-demo/async/3_async_await.js'
    ],
    hostname: process.env.SELENIUM_HUB_HOST ?? 'localhost',
    port : 4444,
    //###### options for for selenoid server ############
    //hostname: 'test:test@192.168.32.147',
    //port: 4446,
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        // ########### options for selenoid server ########
        // browserVersion: '83.0',
        // 'goog:chromeOptions': {
        //     args: ['--window-size=1920,1080', '--no-sandbox'],
        // },
        // 'selenoid:options': {
        //     enableVNC: true,
        //     enableVideo: false
        // }
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    baseUrl: 'http://ip-5236.sunline.net.ua:38015/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
    ["spec",
        {
          symbols: { passed: '[PASS]', failed: '[FAIL]' },
          // skipped set to default '-'
        }
    ]
    , 
     ['allure', {
         outputDir: 'allure-results',
         disableMochaHooks : false,
         disableWebdriverStepsReporting: true,
         disableWebdriverScreenshotsReporting: false,
     }]
],
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

if (process.env.DEBUG == '1')
{
    console.log("###### RUNING IN DEBUG MODE! #######")
    configObj.maxInstances = 1
    configObj.execArgv = ["--inspect=127.0.0.1:5858"]
    configObj.mochaOpts = {
        ui: 'bdd',
        timeout: 60000 * 5
    }
}

export const config = configObj