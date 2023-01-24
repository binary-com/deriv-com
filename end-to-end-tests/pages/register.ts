import {Page} from '@playwright/test'

export default class RegisterPage {
    constructor (public page: Page) {
    }

    async enterEmail(email: string){
        // await this.page.waitForSelector('#dm-email-input')
        await this.page.locator('#dm-email-input').type(email)
    }

    async CheckTermsAndConditions(){
        // await this.page.waitForSelector('form > div > label > div > div');
        await this.page.click('form > div > label > div > div');
    }

    async clickRegisterButton(){
        await this.page.locator('#dm-new-signup').click();
    }

}