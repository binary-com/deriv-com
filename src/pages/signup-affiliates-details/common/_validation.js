import React from 'react'
import { affiliate_validation_regex } from 'common/constants'
import { localize, Localize } from 'components/localization'

const validation_is_exceed_number = (input, maxDigit) => {
    const max_digit = maxDigit || 15
    if (input.includes('.') && input.length > max_digit + 1) {
        return false
    }
    if (!input.includes('.') && input.length > max_digit) {
        return false
    }
    return true
}

const validation_is_lack_number = (input, minDigit) => input.length + 1 > minDigit

const nameValidation = (input, fieldName, minDigit, maxDigit, isUserName) => {
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    } else if (
        !validation_is_exceed_number(input, maxDigit) ||
        !validation_is_lack_number(input, minDigit)
    ) {
        return localize(`You should enter ${minDigit}-${maxDigit} characters.`)
    } else if (isUserName && !affiliate_validation_regex.user_name.test(input)) {
        return localize('Only alphabet, numbers, and underscores are allowed')
    } else if (!isUserName && affiliate_validation_regex.alphabet.test(input)) {
        return localize('Only alphabet is allowed')
    }
    return null
}

const textValidation = (input, fieldName, minDigit, maxDigit) => {
    const length_error = localize(`You should enter ${minDigit}-${maxDigit} characters.`)
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    } else if (!validation_is_exceed_number(input, maxDigit)) {
        return length_error
    } else if (!validation_is_lack_number(input, minDigit)) {
        return length_error
    }

    return null
}

const dateValidation = (input, fieldName) => {
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    }
    return null
}

const phoneValidation = (input, fieldName, minDigit, maxDigit) => {
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    } else if (
        !validation_is_exceed_number(input, maxDigit) ||
        !validation_is_lack_number(input, minDigit)
    ) {
        return localize(`You should enter ${minDigit}-${maxDigit} numbers.`)
    } else if (!affiliate_validation_regex.phone.test(input)) {
        return localize(`Please enter a valid phone number (e.g. +15417541234)`)
    }
    return null
}

const passwordValidation = (input, fieldName, minDigit, maxDigit) => {
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    } else if (
        !validation_is_exceed_number(input, maxDigit) ||
        !validation_is_lack_number(input, minDigit)
    ) {
        return localize(`You should enter ${minDigit}-${maxDigit} characters.`)
    } else if (!affiliate_validation_regex.password.test(input)) {
        return localize(`Password should have lower and uppercase English letters with numbers.`)
    }
    return null
}

const validation = {
    userName: (input) => {
        return nameValidation(input, localize('First Name'), 6, 50, true)
    },
    firstName: (input) => {
        return nameValidation(input, localize('First Name'), 2, 50, false)
    },
    lastName: (input) => {
        return nameValidation(input, localize('Last Name'), 2, 50, false)
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
    mobileNumber: (input) => {
        return phoneValidation(input, localize('Mobile number'), 9, 35)
    },
    password: (input) => {
        return passwordValidation(input, localize('Password'), 2, 50)
    },
    currency: (input) => (!input ? localize('Currency is required') : null),
}

export default validation
