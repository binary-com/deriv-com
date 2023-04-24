import { localize } from 'components/localization'

const validation_regex = {
    email: /^[^@]+@[^@]+\.[^@.]{2,}$/,
    url: /^[\w|\-|.]+$/,
    alphabetic: /^[a-zA-Z]+$/,
    number: /^\d+$/,
}

type TValidationHandler = (input: string, message?: string) => string | null
type TValidationMethods = 'email' | 'name' | 'required' | 'url' | 'number' | 'alphabetic'
type TValidationType = {
    [key in TValidationMethods]: TValidationHandler
}

const validation: TValidationType = {
    // Validation will return a string for error message
    email: (input, message) => {
        if (!validation_regex.email.test(input)) {
            return message || localize('Email is required')
        }
        return null
    },
    name: (input, message) => {
        if (!input) {
            return message || localize('Name is required')
        }
        return null
    },
    required: (input, message) => {
        if (!input) {
            return message || localize('This field is required')
        }
        return null
    },
    url: (input, message) => {
        if (!validation_regex.url.test(input)) {
            return message || localize('Please enter a valid URL format')
        }
        return null
    },
    number: (input, message) => {
        if (!validation_regex.number.test(input)) {
            return message || localize('Please enter a valid number')
        }
        return null
    },
    alphabetic: (input, message) => {
        if (!validation_regex.alphabetic.test(input)) {
            return message || localize('Please enter only alphabetic characters')
        }
        return null
    },
}

export default validation
