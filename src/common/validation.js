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
            return message ? message : localize('_t_Email is required_t_')
        } else {
            return null
        }
    },
    name: (input, message) => {
        if (!input) {
            return message ? message : localize('_t_Name is required_t_')
        } else {
            return null
        }
    },
    required: (input, message) => {
        if (!input) {
            return message ? message : localize('_t_This field is required_t_')
        } else {
            return null
        }
    },
    url: (input, message) => {
        if (!validation_regex.url.test(input)) {
            return message ? message : localize('_t_Please enter a valid URL format_t_')
        } else {
            return null
        }
    },
    number: (input, message) => {
        if (!validation_regex.number.test(input)) {
            return message ? message : localize('_t_Please enter a valid number_t_')
        } else {
            return null
        }
    },
    alphabetic: (input, message) => {
        if (!validation_regex.alphabetic.test(input)) {
            return message ? message : localize('_t_Please enter only alphabetic characters_t_')
        } else {
            return null
        }
    },
}

export default validation
