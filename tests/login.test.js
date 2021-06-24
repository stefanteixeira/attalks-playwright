import { getDataTestIdSelector } from '../lib/helpers'

describe('Login', () => {
  beforeEach(async () => {
    await page.goto(BASE_URL)
  })

  it('shows error message when password is not set', async () => {
    await page.type(getDataTestIdSelector('email'), 'alguem@agiletesters.com.br')
    await page.click(getDataTestIdSelector('entrar'))

    await expect(page).toHaveSelector('.alert-secondary')
  })

  it('successful login', async () => {
    await page.type(getDataTestIdSelector('email'), 'someuser@gmail.com')
    await page.type(getDataTestIdSelector('senha'), 'somepass')
    await page.click(getDataTestIdSelector('entrar'))

    await page.waitForSelector(getDataTestIdSelector('logout'))

    const url = await page.url()
    expect(url).toContain('/admin/home')
  })
})
