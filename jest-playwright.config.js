module.exports = {
  browsers: ['chromium'],
  launchOptions: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-gpu',
      '--disable-dev-shm-usage'
    ],
    headless: true
  }
}
