import { localize } from 'components/localization'

const validation_regex = {
    number: /^-?[0-9]\d*(\.\d+)?$/,
}

const validation_digits = (input) => {
    const max_number = 9999999999999
    const min_number = -9999999999999

    if (input > max_number || input < min_number) {
        return false
    }

    return true
}

const validation = {
    symbol: (input) => {
        if (!input || input.display_name === '') {
            return localize('Symbol is required')
        } else {
            return null
        }
    },

    volume: (input) => {
        if (!input) {
            return localize('Volume is required')
        } else if (!validation_regex.number.test(input)) {
            return localize('Should be a valid number')
        } else {
            if (!validation_digits(input)) {
                return localize('Reached maximum number of digits')
            }
            return null
        }
    },

    assetPrice: (input) => {
        if (!input) {
            return localize('Asset price is required')
        } else if (!validation_regex.number.test(input)) {
            return localize('Should be a valid number')
        } else {
            if (!validation_digits(input)) {
                return localize('Reached maximum number of digits')
            }
            return null
        }
    },

    leverage: (input) => {
        if (!input || input.display_name === '') {
            return localize('Leverage is required')
        } else {
            return null
        }
    },
    swapRate: (input) => {
        if (!input) {
            return localize('Swap rate is required')
        } else if (!validation_regex.number.test(input)) {
            return localize('Should be a valid number')
        } else {
            if (!validation_digits(input)) {
                return localize('Reached maximum number of digits')
            }
            return null
        }
    },

    pointValue: (input) => {
        if (!input) {
            return localize('Point value is required')
        } else if (!validation_regex.number.test(input)) {
            return localize('Should be a valid number')
        } else {
            if (!validation_digits(input)) {
                return localize('Reached maximum number of digits')
            }
            return null
        }
    },
}

export default validation
