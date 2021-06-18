module.exports = {
  name: 'e2e',
  displayName: 'e2e',
  globals: {
    BASE_URL: 'https://front.serverest.dev'
  },
  globalSetup: 'jest-playwright-preset/setup',
  globalTeardown: 'jest-playwright-preset/teardown',
  setupFilesAfterEnv: [
    './jest.setup.js',
    'expect-playwright',
    'jest-extended',
    'jest-playwright-preset/lib/extends.js'
  ],
  testEnvironment: './jest-environment.js',
  runner: 'jest-playwright-preset/runner',
  testRunner: 'jest-circus/runner',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        filename: 'jest-report-e2e.html',
        publicPath: './reports'
      }
    ]
  ]
}
