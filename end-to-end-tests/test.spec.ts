import {test, chromium} from '@playwright/test'
import OnboardingFlow from './onboarding'

test('register new user', async () => {
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
})
