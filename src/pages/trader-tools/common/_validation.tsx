import React from 'react'
import { localize, Localize } from 'components/localization'

const validation_regex_number = (maxDigit) =>
    new RegExp(`^\\d{0,${maxDigit}}\\.?\\d{0,${maxDigit}}$`)

const validation_regex_number_with_negative = (maxDigit) =>
    new RegExp(`^-?\\d{0,${maxDigit}}\\.{0,1}\\d{0,${maxDigit}}$`)

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
        return localize(
            'Please enter a valid amount, including the decimal point (.), in this format: ####.#',
        )
    } else if (!validation_is_exceed_number(input, maxDigit)) {
        return localize('Reached maximum number of digits')
    } else if (!validation_is_not_zero(input)) {
        return localize('Input must be greater than 0')
    }

    return null
}

const numberWithNegativeValidation = (input, fieldName, maxDigit) => {
    if (!input) {
        return <Localize translate_text="{{fieldName}} is required" values={{ fieldName }} />
    } else if (!validation_regex_number_with_negative(maxDigit).test(input)) {
        return localize(
            'Please enter a valid amount, including the decimal point (.), in this format: ####.#',
        )
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
        if (!input || input.name === 'default') {
            return localize('Asset Price is required')
        }

        return null
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
}
export default validation
