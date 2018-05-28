exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://localhost:4723/wd/hub',
  ignoreUncaughtExceptions: true,
  baseUrl: 'http://10.0.2.2:8000',
  specs: ['features/*.feature'],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'features/step_definitions/*.steps.js',
    tags: ['@Mobile'],
    format: ['json:results.json'],
    profile: false,
    ignoreUndefinedDefinitions: true,
    'no-source': true
  },
  capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '7.0',
    deviceName: 'Android Emulator'
  }
}
