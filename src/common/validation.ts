import { localize } from 'components/localization'
import { TString } from 'types/generics'

const validation_regex = {
    email: /^[^@]+@[^@]+\.[^@.]{2,}$/,
    url: /^[\w|\-|.]+$/,
    alphabetic: /^[a-zA-Z]+$/,
    number: /^\d+$/,
}

type TValidationHandler = (input: string, message?: TString) => string | null
type TValidationMethods = 'email' | 'name' | 'required' | 'url' | 'number' | 'alphabetic'
type TValidationType = {
    [key in TValidationMethods]: TValidationHandler
}

const validation: TValidationType = {
    // Validation will return a string for error message
    email: (input, message) => {
        if (!validation_regex.email.test(input)) {
            const error_msg = message ? message : '_t_Email is required_t_'
            return localize(error_msg)
        } else {
            return null
        }
    },
    name: (input, message) => {
        if (!input) {
            const error_msg = message ? message : '_t_Name is required_t_'
            return localize(error_msg)
        } else {
            return null
        }
    },
    required: (input, message) => {
        if (!input) {
            const error_msg = message ? message : '_t_This field is required_t_'
            return localize(error_msg)
        } else {
            return null
        }
    },
    url: (input, message) => {
        if (!validation_regex.url.test(input)) {
            const error_msg = message ? message : '_t_Please enter a valid URL format_t_'
            return localize(error_msg)
        } else {
            return null
        }
    },
    number: (input, message) => {
        if (!validation_regex.number.test(input)) {
            const error_msg = message ? message : '_t_Please enter a valid number_t_'
            return localize(error_msg)
        } else {
            return null
        }
    },
    alphabetic: (input, message) => {
        if (!validation_regex.alphabetic.test(input)) {
            const error_msg = message ? message : '_t_Please enter only alphabetic characters_t_'
            return localize(error_msg)
        } else {
            return null
        }
    },
}

export default validation
