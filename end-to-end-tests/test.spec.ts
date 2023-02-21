import {test} from '@playwright/test'
import OnboardingFlow from './onboarding'

test('login test demo', async ({page}) => {
    const register = new OnboardingFlow(page);
    await register.signUp();
})
