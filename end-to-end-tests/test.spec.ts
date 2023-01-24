import {test } from '@playwright/test'
import RegisterPage from './pages/register';

const email = "test@gmail.com"
test('login test demo', async ({page, baseURL}) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}/signup`);
    await page.waitForLoadState();
    // await page.waitForTimeout(10000)
    await register.enterEmail(email);
    await register.CheckTermsAndConditions();
    await register.clickRegisterButton();

    await page.waitForTimeout(5000)
})
