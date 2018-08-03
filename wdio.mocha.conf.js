const timeout = 30000

exports.config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    /**
     * server configurations
     */
    host: 'ondemand.saucelabs.com',
    port: 80,
    // local selenium settings:
    // host: '0.0.0.0',
    // port: 4444,

    services: ['sauce'],

    /**
     * specify test files
     */
    specs: [
        './test/mocha.test.js'
    ],
    // exclude: [
    //     'test/spec/multibrowser/**',
    //     'test/spec/mobile/**'
    // ],

    /**
     * capabilities
     */
    capabilities: [{
      browserName: 'chrome', platform: 'Windows 10', tunnelIdentifier: 'turner_tunnel'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'https://www.tbs.com/',
    waitforTimeout: timeout,
    framework: 'mocha',

    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd',
        // https://github.com/webdriverio/webdriverio/issues/1172
        timeout: timeout,
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('let\'s go');
    },
    onComplete: function() {
        console.log('that\'s it');
    }
};


