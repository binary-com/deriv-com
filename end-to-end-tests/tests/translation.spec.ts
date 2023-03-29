import {test, expect} from '@playwright/test'

test('change language to arabic', async ({page}) => {
    await page.goto(process.env.APP_URL!);
    if (await page.url().includes('eu.')) {
        const dialog = page.getByTestId('cookie-dialog')
        if (dialog)
            await dialog.locator('button', { hasText: /Accept/ }).click()
    }
    const right_menu = await page.locator('nav > div > div > div').nth(1)
    await right_menu.locator('p[color=white]',{
        hasText: /EN/
    }).click()

    await right_menu.locator('p[color=black]',{
        hasText: /العربية/
    }).click()
    await page.waitForNavigation()
    await expect(page).toHaveTitle('منصة التداول عبر الإنترنت | تداول العملات الأجنبية والسلع والمؤشرات الاصطناعية والأسهم ومؤشرات الأسهم | Deriv')
})
