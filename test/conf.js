exports.config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        specs: ['spec.js'],
        capabilities: {
            browserName: 'firefox'
        },

        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),

    
        onPrepare: () => {
    
            browser.ignoreSynchronization = true;
            browser.manage().window().maximize();
    
        },
        cucumberOpts: {
            compiler: "ts:ts-node/register",
            strict: true,
            //format: ['pretty'],
            require: ['test/test.ts'],
        }
      }