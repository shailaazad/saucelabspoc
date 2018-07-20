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
      browserName: 'chrome', platform: 'Windows 10'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'https://www.tbs.com/',
    waitforTimeout: 10000,
    framework: 'mocha',

    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd'
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
