import React from 'react'
import { localize, Localize } from 'components/localization'

const validation_regex_number = (maxDigit) =>
    new RegExp(`^\\d{0,${maxDigit}}\\.?\\d{0,${maxDigit}}$`)

const validation_regex_number_with_negative = (maxDigit) =>
    new RegExp(`^-?\\d{0,${maxDigit}}\\.{0,1}\\d{0,${maxDigit}}$`)
const validation_regex = {
    number: /^\d*\.?\d+$/,
    numberWithNegative: /^-?\d*\.{0,1}\d+$/,
    integer: /^\d+$/,
    alphabet: /[`~!@#$%^&*)(_=+[}{\]\\/";:?><,|\d]+/,
    phone: /^\+?((-|\s)*[0-9])*$/,
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+/,
}

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

const validation_is_lack_number = (input, minDigit) => input.length > minDigit

const validation_is_not_zero = (input) => {
    if (input == 0) {
        return false
    }
    return true
}

const numberValidation = (input, fieldName, maxDigit) => {
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    } else if (!validation_regex_number(maxDigit).test(input)) {
        return localize('Should be a valid number')
    } else if (!validation_is_exceed_number(input, maxDigit)) {
        return localize('Reached maximum number of digits')
    } else if (!validation_is_not_zero(input)) {
        return localize('Input must be greater than 0')
    }

    return null
}

const nameValition = (input, fieldName, minDigit, maxDigit) => {
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    } else if (
        !validation_is_exceed_number(input, maxDigit) ||
        !validation_is_lack_number(input, minDigit)
    ) {
        return localize(`You should enter ${minDigit}-${maxDigit} characters.`)
    } else if (validation_regex.alphabet.test(input)) {
        return localize('Only alphabet is allowed')
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
    } else if (!validation_regex.phone.test(input)) {
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
    } else if (!validation_regex.password.test(input)) {
        return localize(`Password should have lower and uppercase English letters with numbers.`)
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

const numberWithNegativeValidation = (input, fieldName, maxDigit) => {
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    } else if (!validation_regex_number_with_negative(maxDigit).test(input)) {
        return localize('Should be a valid number')
    } else if (!validation_is_exceed_number(input, maxDigit)) {
        return localize('Reached maximum number of digits')
    } else if (!validation_is_not_zero(input)) {
        return localize('Input must not be  0')
    }

    return null
}
const validation = {
    symbol: (input) => {
        if (!input || input.name === 'default') {
            return localize('Symbol is required')
        }

        return null
    },
    volume: (input) => {
        return numberValidation(input, localize('Volume'), 8)
    },
    assetPrice: (input) => {
        return numberValidation(input, localize('Asset price'), 15)
    },
    leverage: (input) => {
        if (!input || input.display_name === '') {
            return localize('Leverage is required')
        }
        return null
    },
    swapRate: (input) => {
        return numberWithNegativeValidation(input, localize('Swap rate'), 15)
    },
    pointValue: (input) => {
        return numberValidation(input, localize('Point value'), 15)
    },
    takeProfitAmount: (input) => {
        return numberValidation(input, localize('Take profit amount'), 15)
    },
    stopLossAmount: (input) => {
        return numberValidation(input, localize('Stop loss amount'), 15)
    },
    takeProfitLevel: (input) => {
        return numberValidation(input, localize('Take profit level'), 15)
    },
    stopLossLevel: (input) => {
        return numberValidation(input, localize('Stop loss level'), 15)
    },
    commission: (input) => {
        return numberValidation(input, localize('Commission'), 15)
    },
    stake: (input) => {
        return numberValidation(input, localize('Stake'), 15)
    },
    multiplier: (input) => {
        return numberValidation(input, localize('Multiplier'), 4)
    },
    firstName: (input) => {
        return nameValition(input, localize('First Name'), 2, 50)
    },
    lastName: (input) => {
        return nameValition(input, localize('Last Name'), 2, 50)
    },
    date: (input) => {
        return textValidation(input, localize('Date'), 2, 50)
    },
    country: (input, is_input_country) => {
        if (!input || input.display_name === '' || !is_input_country) {
            return localize('Country is required')
        }
        return null
    },
    address: (input) => {
        return textValidation(input, localize('Address'), 2, 50)
    },
    mobileNumber: (input) => {
        return phoneValidation(input, localize('Mobile number'), 9, 35)
    },
    password: (input) => {
        return passwordValidation(input, localize('Password'), 2, 50)
    },
}
export default validation
