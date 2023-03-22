import {test, chromium, expect} from '@playwright/test'
import OnboardingFlow from '../onboarding'

test('register new user and login', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        ignoreHTTPSErrors: true,
        httpCredentials: {
            username: `${process.env.QA_EMAIL_INBOX_USER_NAME}`,
            password: `${process.env.QA_EMAIL_INBOX_PASSWORD}`,
        },
    });
    const onboarding = new OnboardingFlow(page);
    await onboarding.signUp();

    // await page.goto(process.env.APP_URL!)
    // await page.context().addCookies([{
    //     name: 'client_information',
    //     value: decodeURIComponent(client_information?.value!),
    //     domain: 'localhost',
    //     path: '/',
    // }]);
    // await expect(page.locator('#dm-hero-signup').nth(1)).toHaveText('Get Trading');
    await browser.close();
})
