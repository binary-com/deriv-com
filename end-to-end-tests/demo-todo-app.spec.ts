import { chromium, test, expect } from '@playwright/test'

test('login test demo', async () => {
    const browser = await chromium.launch(); //lunch the browser - we are using chromium (browser engine) based web browser like chrome , edge
    const context = await browser.newContext(); // think of context as a browser session which doesn't share its cache, cookie, sth like that with another one like new incognito tab
    const page = await context.newPage(); // we can have multiple that in a browser session

    await page.goto("http://localhost:8000");
    const trading_section = await page.locator('section').nth(2);
    const title = await trading_section.locator('h2').nth(1);

    expect(1).toBe("sss")
})
