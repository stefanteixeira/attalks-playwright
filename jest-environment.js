const fse = require('fs-extra')
const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment')
  .default

class CustomEnvironment extends PlaywrightEnvironment {
  async setup() {
    await super.setup()
    await this.global.page.setDefaultTimeout(30000)
  }

  async teardown() {
    await this.global.page.waitForTimeout(2000)
    await super.teardown()
  }

  async handleTestEvent(event) {
    if (event.name === 'test_done' && event.test.errors.length > 0) {
      const testDescription = event.test.parent.name.replace(/\W/g, '-')
      const testName = event.test.name.replace(/\W/g, '-')

      await fse.ensureDir('screenshots')
      await this.global.page.screenshot({
        path: `screenshots/${testDescription}_${testName}.png`
      })
    }
  }
}

module.exports = CustomEnvironment
