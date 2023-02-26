import {test, expect} from '@playwright/test'

test('navigate to who we are page', async ({page}) => {
    await page.goto(process.env.APP_URL!);
    const dialog = page.getByTestId('cookie-dialog')
    if (dialog) {
        await dialog.locator('button', { hasText: /Accept/ }).click()
    }
    await page.locator('nav > div > div > ul > li:nth-child(3) > span').click();
    await page.locator('nav').getByRole('link', { name: 'Who we are' }).click()

    await expect(page).toHaveTitle('Who we are | An Online Trading Platform | Deriv.com')
})
