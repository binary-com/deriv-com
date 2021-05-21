import { localize } from 'components/localization'

const validation_regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
    url: /^[\w|\-|.]+$/,
    alphabetic: /^[a-zA-Z]+$/,
    number: /^\d+$/,
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
    text: (input) => {
        if (!input) {
            return localize('This field is required')
        } else {
            return null
        }
    },
    url: (input) => {
        if (!validation_regex.url.test(input)) {
            return localize('Please enter a valid URL')
        } else {
            return null
        }
    },
    number: (input) => {
        if (!validation_regex.number.test(input)) {
            return localize('Please enter a valid number')
        } else {
            return null
        }
    },
    alphabetic: (input) => {
        if (!validation_regex.alphabetic.test(input)) {
            return localize('Please enter only alphabetic characters')
        } else {
            return null
        }
    },
}

export default validation
