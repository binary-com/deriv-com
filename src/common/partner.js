import { isBrowser } from './utility'

const Partner = (() => {
    const redirectToLogin = () => {
        if (isBrowser()) {
            window.open('https://login.binary.com/signin.php', '_blank')
        }
    }

    const redirectToSignup = () => {
        if (isBrowser()) {
            window.open('https://login.binary.com/signup.php', '_blank')
        }
    }

    return {
        redirectToLogin,
        redirectToSignup,
    }
})()

export default Partner
