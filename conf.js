exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  ignoreUncaughtExceptions: true,
  baseUrl: 'http://localhost:8000',
  specs: ['features/*.feature'],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'features/step_definitions/*.steps.js',
    tags: ['~@notImplemented'],
    format: ['json:results.json'],
    profile: false,
    ignoreUndefinedDefinitions: true,
    'no-source': true
  }
}
