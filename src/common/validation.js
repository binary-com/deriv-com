import { localize } from 'components/localization'

const validation_regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
}

const validation = {
    // Validation will return a string for error message
    email: (input) => {
        if (!input) {
            return localize('Email is required')
        } else if (!validation_regex.email.test(input)) {
            return localize('Invalid email address')
        } else {
            return null
        }
    },
}

export default validation
