import { Page, expect, chromium } from '@playwright/test';

export default class OnboardingFlow {
    readonly page: Page;
    readonly email: string;
    private signupPage: Page | null;

    constructor(page: Page) {
        const randomString = new Date().getTime();
        this.page = page;
        this.email = `deriv-fe-e2e-${randomString}@deriv.com`;
        this.signupPage = null;
    }


    async updateServerURLAndAppIDInLocalStorage() {
        const server = process.env.ENDPOINT;
        const app_id = process.env.APPID;
        await this?.signupPage?.evaluate(`localStorage.setItem('config.server_url', '${server}');`);
        await this?.signupPage?.evaluate(`localStorage.setItem('config.app_id', '${app_id}');`);
        await this?.signupPage?.evaluate(`window.location.reload();`);
        const server_url = await this?.signupPage?.evaluate(() => {
            const result = localStorage.getItem('config.server_url');
            return Promise.resolve(result);
        });
        expect(server_url).toBe(process.env.ENDPOINT);
        await this.page.waitForTimeout(10000);
    }
    async demoWizardHandler() {
        await this.page.locator('.static-dashboard-wrapper__header > h2', { hasText: 'CFDs' });
        await this.page.locator('.static-dashboard-wrapper__header > h2', { hasText: 'Multipliers' });
        await this.page.locator('button[type="submit"]', { hasText: 'Next' }).click();
        await this.page.locator('button[type="submit"]', { hasText: 'Next' }).click();
        await this.page.locator('button[type="submit"]', { hasText: 'Next' }).click();
        await this.page.locator('button[type="submit"]', { hasText: 'Next' }).click();
    }
    async cookieDialogHandler() {
        if (this.page.locator('.cookie-banner'))
            await this.page.locator('.cookie-banner > button[type=submit]', { hasText: /Accept/ }).click();
    }
    async signUp() {
        await this.page.goto("http://localhost:8000");
        await this.page.waitForSelector('#dm-hero-signup');
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'), // get `context` by destructuring with `page` in the test params; 'page' is a built-in event, and **you must wait for this like this,**, or `newPage` will just be the response object, rather than an actual Playwright page object.
            await this.page.click('#dm-hero-signup'),
        ]);
        this.signupPage = newPage;
        await this.page.waitForTimeout(10000);
        await this.updateServerURLAndAppIDInLocalStorage();
        await this.signupPage.waitForLoadState();
        await this.signupPage.locator('input[name=email]#dm-email-input').isVisible();
        await this.signupPage.locator('input[name=email]#dm-email-input').type(this.email);
        process.env.email = this.email;
        await this.signupPage.waitForSelector(
            '.signup__Form-sc-1bdbun8-1 > ._signup-new__SignupContent-sc-1f1r3le-0 > label > .checkbox__CheckboxContainer-sc-r1zf4m-0 > .checkbox__StyledCheckbox-sc-r1zf4m-3'
        );
        await this.signupPage.click(
            '.signup__Form-sc-1bdbun8-1 > ._signup-new__SignupContent-sc-1f1r3le-0 > label > .checkbox__CheckboxContainer-sc-r1zf4m-0 > .checkbox__StyledCheckbox-sc-r1zf4m-3'
        );
        await this.signupPage.waitForSelector('#dm-new-signup');
        await this.signupPage.click('#dm-new-signup');
        const browser = await chromium.launch();
        const mailPage = await browser.newPage({
            ignoreHTTPSErrors: true,
            httpCredentials: {
                username: `${process.env.QA_EMAIL_INBOX_USER_NAME}`,
                password: `${process.env.QA_EMAIL_INBOX_PASSWORD}`,
            },
        });
        await mailPage.goto(`https://${process.env.ENDPOINT!}/events`);
        let hrefs = await mailPage.evaluate(() => {
            return Array.from(document.links).map(item => item.href);
        });
        hrefs = hrefs.slice().reverse();
        // TODO need to find a better approach instead of this
        // eslint-disable-next-line no-restricted-syntax
        for await (const item of hrefs) {
            await mailPage.goto(item);
            if (await mailPage.getByText(this.email).isVisible()) {
                const element = await mailPage.locator('a', { hasText: 'signup' });
                const val = await element.getAttribute('href');
                if (val) await this.page.goto(val);
                await mailPage.close();
                await this.signupPage.close();
                break;
            }
        }
        await this.page.waitForSelector('#dt_core_set-residence-form_signup-residence-select');
        await this.page.click('#dt_core_set-residence-form_signup-residence-select');
        await expect(this.page.getByText(process.env.ACCOUNT_RESIDENCE!)).toBeVisible();
        await this.page.getByText(process.env.ACCOUNT_RESIDENCE!).click();
        await this.page.getByRole('dialog').getByRole('button', { name: 'Next' }).click();
        await expect(this.page.getByText(/Citizenship/)).toBeVisible();
        await expect(this.page.getByText(/Are you a citizen of/)).toBeVisible();
        await this.page.getByText(/Yes/).click();
        await expect(this.page.getByText(/Keep your account secure/)).toBeVisible();
        await this.page.locator('#dt_core_account-signup-modal_account-signup-password-field');
        await expect(this.page.getByText(/Start trading/)).toBeDisabled();
        await this.page.locator('#dt_core_account-signup-modal_account-signup-password-field').type('Abcd2134');
        await expect(this.page.getByText(/Start trading/)).toBeEnabled();
        await this.page.getByText(/Start trading/).click();
        if (this.page.url().includes('onboarding')) await this.demoWizardHandler();
    }
}
