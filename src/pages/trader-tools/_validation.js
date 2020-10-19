import { localize } from 'components/localization'

const validation_regex = {
    number: /^\d+(\.\d+)?$/,
    integer: /^\d+$/,
}

const validation_is_exceed_integer = (input) => {
    const max_digit = 8

    if (input.length > max_digit) {
        return false
    }

    return true
}

const validation_is_exceed_number = (input) => {
    const max_digit = 15

    if (input.length > max_digit) {
        return false
    }

    return true
}

const validation_is_not_zero = (input) => {
    if (input == 0) {
        return false
    }
    return true
}

const numberValidation = (input, fieldName) => {
    if (!input) {
        return localize(`${fieldName} is required`)
    } else if (!validation_regex.number.test(input)) {
        return localize('Should be a valid number')
    } else if (!validation_is_exceed_number(input)) {
        return localize('Reached maximum number(15) of digits')
    } else if (!validation_is_not_zero(input)) {
        return localize('Input must be greater than 0')
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
        if (!input) {
            return localize(`Volume is required`)
        } else if (!validation_regex.integer.test(input)) {
            return localize('Should be a valid integer')
        } else if (!validation_is_exceed_integer(input)) {
            return localize('Reached maximum number(8) of digits')
        } else if (!validation_is_not_zero(input)) {
            return localize('Input must be greater than 0')
        }

        return null
    },
    assetPrice: (input) => {
        return numberValidation(input, localize('Asset price'))
    },
    leverage: (input) => {
        if (!input || input.display_name === '') {
            return localize('Leverage is required')
        }
        return null
    },
    swapRate: (input) => {
        return numberValidation(input, localize('Swap rate'))
    },

    pointValue: (input) => {
        return numberValidation(input, localize('Point value'))
    },
}

export default validation
