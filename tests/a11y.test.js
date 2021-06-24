import { injectAxe, checkA11y, configureAxe } from 'axe-playwright'

xdescribe('Accessibility', () => {
  beforeEach(async () => {
    await page.goto(BASE_URL)
  })

  it('checks a11y', async () => {
    await injectAxe(page)
    await configureAxe(page)

    await checkA11y(page, '.form', {
      detailedReport: true
    })
  })
})
