import { localize } from 'components/localization'

const validation_regex = {
    number: /^[1-9]\d*$/,
    swapRate: /^-?[0-9]\d*(\.\d+)?$/,
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
            return localize('Invalid volume input [0 - 9]')
        } else {
            return null
        }
    },

    assetPrice: (input) => {
        if (!input) {
            return localize('Asset price is required')
        } else if (!validation_regex.number.test(input)) {
            return localize('Invalid asset price input [0 - 9]')
        } else {
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
        } else if (!validation_regex.swapRate.test(input)) {
            return localize('Invalid swap rate price input [0.00 - 100%]')
        } else {
            return null
        }
    },

    pointValue: (input) => {
        if (!input) {
            return localize('Point value is required')
        } else if (!validation_regex.number.test(input)) {
            return localize('Invalid point value input [0 - 9]')
        } else {
            return null
        }
    },
}

export default validation
