import { isBrowser } from './utility'

const Partner = (() => {
    const signup_url = 'https://login.binary.com/signup.php'
    const signin_url = 'https://login.binary.com/signin.php'
    const redirectToLogin = () => {
        if (isBrowser()) {
            window.open(signin_url, '_blank')
        }
    }

    const redirectToSignup = () => {
        if (isBrowser()) {
            window.open(signup_url, '_blank')
        }
    }

    return {
        redirectToLogin,
        redirectToSignup,
        signin_url,
        signup_url,
    }
})()

export default Partner
