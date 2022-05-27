import React from 'react'
import { localize, Localize } from 'components/localization'

export const affiliate_validation_regex = {
    alphabet: /[`~!@#$%^&*)(_=+[}{\]\\/";:?><,|\d]+/,
    phone: /^\+?[^\D]((-|\s)*\d)*$/,
    password: /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])[ -~]*$/,
}

const validation_is_exceed_number = (input, max_digit) => {
    const max_digit_value = max_digit || 15
    return !(input.length > max_digit_value + 1)
}

const validation_is_lack_number = (input, min_digit) => input.length + 1 > min_digit

const nameValidation = (input, field_name, min_digit, max_digit) => {
    if (!input) {
        return <Localize translate_text="{{field_name}} is required" values={{ field_name }} />
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`You should enter ${min_digit}-${max_digit} characters.`)
    } else if (affiliate_validation_regex.alphabet.test(input)) {
        return localize('Only alphabet is allowed')
    }
    return null
}

const textValidation = (input, field_name, min_digit, max_digit) => {
    const length_error = localize(`You should enter ${min_digit}-${max_digit} characters.`)
    if (!input) {
        return <Localize translate_text="{{field_name}} is required" values={{ field_name }} />
    } else if (!validation_is_exceed_number(input, max_digit)) {
        return length_error
    } else if (!validation_is_lack_number(input, min_digit)) {
        return length_error
    }

    return null
}

const dateValidation = (input, field_name) => {
    if (!input) {
        return <Localize translate_text="{{field_name}} is required" values={{ field_name }} />
    }
    return null
}

const phoneValidation = (input, field_name, min_digit, max_digit) => {
    if (!input) {
        return <Localize translate_text="{{field_name}} is required" values={{ field_name }} />
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`You should enter ${min_digit}-${max_digit} numbers.`)
    } else if (!affiliate_validation_regex.phone.test(input)) {
        return localize(`Please enter a valid phone number (e.g. +15417541234)`)
    }
    return null
}

const passwordValidation = (input, field_name, min_digit, max_digit) => {
    if (!input) {
        return <Localize translate_text="{{field_name}} is required" values={{ field_name }} />
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`You should enter ${min_digit}-${max_digit} characters.`)
    } else if (!affiliate_validation_regex.password.test(input)) {
        return localize(`Password should have lower and uppercase English letters with numbers.`)
    }
    return null
}

const validation = {
    firstName: (input) => {
        return nameValidation(input, localize('First name'), 2, 50)
    },
    lastName: (input) => {
        return nameValidation(input, localize('Last name'), 2, 50)
    },
    date: (input) => {
        return dateValidation(input, localize('Date'))
    },
    country: (input) => {
        if (!input || input.display_name === '') {
            return localize('Country is required')
        }
        return null
    },
    address: (input) => {
        return textValidation(input, localize('Address'), 2, 70)
    },
    phone: (input) => {
        return phoneValidation(input, localize('Mobile number'), 9, 35)
    },
    password: (input) => {
        return passwordValidation(input, localize('Password'), 6, 50)
    },
    currency: (input) => (!input ? localize('Currency is required') : null),
}

export default validation
