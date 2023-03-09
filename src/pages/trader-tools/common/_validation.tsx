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
        return <Localize translate_text="_t_{{fieldName}} is required_t_" values={{ fieldName }} />
    } else if (!validation_regex_number(maxDigit).test(input)) {
        return localize(
            '_t_Please enter a valid amount, including the decimal point (.), in this format: ####.#_t_',
        )
    } else if (!validation_is_exceed_number(input, maxDigit)) {
        return localize('_t_Reached maximum number of digits_t_')
    } else if (!validation_is_not_zero(input)) {
        return localize('_t_Input must be greater than 0_t_')
    }

    return null
}

const numberWithNegativeValidation = (input, fieldName, maxDigit) => {
    if (!input) {
        return <Localize translate_text="_t_{{fieldName}} is required_t_" values={{ fieldName }} />
    } else if (!validation_regex_number_with_negative(maxDigit).test(input)) {
        return localize(
            '_t_Please enter a valid amount, including the decimal point (.), in this format: ####.#_t_',
        )
    } else if (!validation_is_exceed_number(input, maxDigit)) {
        return localize('_t_Reached maximum number of digits_t_')
    } else if (!validation_is_not_zero(input)) {
        return localize('_t_Input must not be  0_t_')
    }

    return null
}
const validation = {
    symbol: (input) => {
        if (!input || input.name === 'default') {
            return localize('_t_Symbol is required_t_')
        }

        return null
    },
    volume: (input) => {
        return numberValidation(input, localize('_t_Volume_t_'), 8)
    },
    assetPrice: (input) => {
        if (!input || input.name === 'default') {
            return localize('_t_Asset Price is required_t_')
        }
        if (input) {
            return numberValidation(input.toString(), localize('_t_Asset Price is required_t_'), 15)
        }

        return null
    },
    leverage: (input) => {
        if (!input || input.display_name === '') {
            return localize('_t_Leverage is required_t_')
        }
        return null
    },
    swapRate: (input) => {
        return numberWithNegativeValidation(input, localize('_t_Swap rate_t_'), 15)
    },
    pointValue: (input) => {
        return numberValidation(input, localize('_t_Point value_t_'), 15)
    },
    takeProfitAmount: (input) => {
        return numberValidation(input, localize('_t_Take profit amount_t_'), 15)
    },
    stopLossAmount: (input) => {
        return numberValidation(input, localize('_t_Stop loss amount_t_'), 15)
    },
    takeProfitLevel: (input) => {
        return numberValidation(input, localize('_t_Take profit level_t_'), 15)
    },
    stopLossLevel: (input) => {
        return numberValidation(input, localize('_t_Stop loss level_t_'), 15)
    },
    commission: (input) => {
        return numberValidation(input, localize('_t_Commission_t_'), 15)
    },
    stake: (input) => {
        return numberValidation(input, localize('_t_Stake_t_'), 15)
    },
    multiplier: (input) => {
        return numberValidation(input, localize('_t_Multiplier_t_'), 4)
    },
}
export default validation
