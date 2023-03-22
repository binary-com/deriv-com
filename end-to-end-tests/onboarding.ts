import { config } from 'dotenv'
import { Page, expect, chromium } from '@playwright/test'

config({ path: `.env.development` })

export default class OnboardingFlow {
    readonly page: Page
    readonly email: string
    constructor(page: Page) {
        const randomString = new Date().getTime()
        this.page = page
        this.email = `deriv-com-e2e-${randomString}@deriv.com`
    }
    async changeEndpoint() {
        await this.page.goto(`${process.env.TRADING_APP_URL!}/endpoint`)

        await this.page.waitForSelector(
            '#app_contents > .dc-themed-scrollbars > form > .dc-input:nth-child(2) > .dc-input__field',
        )
        await this.page.click(
            '#app_contents > .dc-themed-scrollbars > form > .dc-input:nth-child(2) > .dc-input__field',
        )

        await this.page.waitForSelector(
            '#app_contents > .dc-themed-scrollbars > form > .dc-input:nth-child(2) > .dc-input__field',
        )
        await this.page.click(
            '#app_contents > .dc-themed-scrollbars > form > .dc-input:nth-child(2) > .dc-input__field',
        )

        await this.page.waitForSelector(
            '#app_contents > .dc-themed-scrollbars > form > .dc-input:nth-child(2) > .dc-input__field',
        )
        const first_input_selector =
            '#app_contents > .dc-themed-scrollbars > form > .dc-input:nth-child(2) > .dc-input__field'
        await this.page.click(first_input_selector, { clickCount: 3 })
        await this.page.keyboard.press('Backspace')

        await this.page.click(first_input_selector)

        await this.page.type(first_input_selector, process.env.ENDPOINT!)
        const second_input_selector =
            '#app_contents > .dc-themed-scrollbars > form > .dc-input:nth-child(3) > .dc-input__field'
        await this.page.click(second_input_selector, { clickCount: 3 })
        await this.page.keyboard.press('Backspace')
        await this.page.type(second_input_selector, process.env.APPID!)
        if (
            !(await this.page.locator("input[name='is_appstore_enabled']").isChecked()) &&
            process.env.ENDPOINT_PAGE_APP_STORE === 'true'
        ) {
            await this.page.click(
                '.dc-themed-scrollbars > form > div:nth-child(4) > .dc-checkbox > .dc-checkbox__box',
            )
        }
        if (
            !(await this.page.locator("input[name='show_dbot_dashboard']").isChecked()) &&
            process.env.ENDPOINT_PAGE_DBOT_DASHBOARD === 'true'
        ) {
            await this.page.click(
                '.dc-themed-scrollbars > form > div:nth-child(5) > .dc-checkbox > .dc-checkbox__box',
            )
        }
        if (
            !(await this.page
                .locator("input[name='is_debug_service_worker_enabled']")
                .isChecked()) &&
            process.env.ENDPOINT_PAGE_DEBUG_SERVICE_WORKER === 'true'
        ) {
            await this.page.click(
                '.dc-themed-scrollbars > form > div:nth-child(6) > .dc-checkbox > .dc-checkbox__box',
            )
        }

        await this.page.waitForSelector(
            '#deriv_app > #app_contents > .dc-themed-scrollbars > form > .dc-btn--primary',
        )
        await this.page.click(
            '#deriv_app > #app_contents > .dc-themed-scrollbars > form > .dc-btn--primary',
        )
    }
    async updateServerURLAndAppIDInLocalStorage() {
        const server = process.env.ENDPOINT!
        const app_id = process.env.APPID!
        await this?.page?.evaluate(`localStorage.setItem('config.server_url', '${server}');`)
        await this?.page?.evaluate(`localStorage.setItem('config.app_id', '${app_id}');`)
        await this?.page?.evaluate(`window.location.reload();`)
        const server_url = await this?.page?.evaluate(() => {
            const result = localStorage.getItem('config.server_url')
            return Promise.resolve(result)
        })
        expect(server_url).toBe(process.env.ENDPOINT!)
    }
    async demoWizardHandler() {
        await this.page.locator('button[type="submit"]', { hasText: 'Next' }).click()
        await this.page.locator('button[type="submit"]', { hasText: 'Next' }).click()
        await this.page.locator('button[type="submit"]', { hasText: 'Next' }).click()
        await this.page.locator('button[type="submit"]', { hasText: 'Next' }).click()
    }
    async cookieDialogHandler() {
        const dialog = this.page.getByTestId('cookie-dialog')
        if (dialog) {
            await dialog.locator('button', { hasText: /Accept/ }).click()
        }
    }
    async derivAppcookieDialogHandler() {
        if (this.page.locator('.cookie-banner'))
            await this.page.locator('.cookie-banner > button[type=submit]', { hasText: /Accept/ }).click();
    }
    async signUp() {
        await this.page.goto(process.env.APP_URL!)
        if (await this.page.url().includes('eu.'))
            await this.cookieDialogHandler()
        await this.page.waitForSelector('#dm-hero-signup')
        await this.page.click('#dm-hero-signup')
        await this.page.waitForTimeout(5000)
        await this.updateServerURLAndAppIDInLocalStorage()
        await this.page.waitForLoadState()
        await this.page.locator('input[name=email]#dm-email-input').isVisible()
        await this.page.locator('input[name=email]#dm-email-input').type(this.email)
        process.env.email = this.email
        await this.page.waitForSelector('text=I agree to the')
        await this.page.click('text=I agree to the')
        await this.page.waitForSelector('#dm-new-signup')
        await this.page.click('#dm-new-signup')
        const browser = await chromium.launch()
        const mailPage = await browser.newPage({
            ignoreHTTPSErrors: true,
            httpCredentials: {
                username: `${process.env.QA_EMAIL_INBOX_USER_NAME}`,
                password: `${process.env.QA_EMAIL_INBOX_PASSWORD}`,
            },
        })
        await mailPage.goto(`https://${process.env.ENDPOINT!}/events`)
        let hrefs = await mailPage.evaluate(() => {
            return Array.from(document.links).map((item) => item.href)
        })
        hrefs = hrefs.slice().reverse()
        // TODO need to find a better approach instead of this
        // eslint-disable-next-line no-restricted-syntax
        for await (const item of hrefs) {
            await mailPage.goto(item)
            if (await mailPage.getByText(this.email).isVisible()) {
                const element = await mailPage.locator('td > p', { hasText: `dafsdf` })
                console.log(element.innerHTML)

                // await expect(mailPage.locator('p', { hasText: `/${this.email}/` }).nth(0)).toHaveText("xxx")
                await mailPage.close()
                break
            }
        }


    }
}
