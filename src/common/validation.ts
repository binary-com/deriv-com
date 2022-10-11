import { localize } from 'components/localization'

const validation_regex = {
    email: /^[^@]+@[^@]+\.[^@.]{2,}$/,
    url: /^[\w|\-|.]+$/,
    alphabetic: /^[a-zA-Z]+$/,
    number: /^\d+$/,
}

const validation = {
    // Validation will return a string for error message
    email: (input, message) => {
        if (!validation_regex.email.test(input)) {
            return message ? message : localize('Email is required')
        } else {
            return null
        }
    },
    name: (input, message) => {
        if (!input) {
            return message ? message : localize('Name is required')
        } else {
            return null
        }
    },
    required: (input, message) => {
        if (!input) {
            return message ? message : localize('This field is required')
        } else {
            return null
        }
    },
    url: (input, message) => {
        if (!validation_regex.url.test(input)) {
            return message ? message : localize('Please enter a valid URL format')
        } else {
            return null
        }
    },
    number: (input, message) => {
        if (!validation_regex.number.test(input)) {
            return message ? message : localize('Please enter a valid number')
        } else {
            return null
        }
    },
    alphabetic: (input, message) => {
        if (!validation_regex.alphabetic.test(input)) {
            return message ? message : localize('Please enter only alphabetic characters')
        } else {
            return null
        }
    },
}

export default validation
