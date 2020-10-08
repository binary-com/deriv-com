import { localize } from 'components/localization'

const validation_regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
    volume: /^[1-9]\d*$/,
    assetPrice: /^[1-9]\d*$/,
    swapRate: /^-?[0-9]\d*(\.\d+)?$/,
    pointValue: /^[1-9]\d*$/,
}

const validation = {
    // Validation will return a string for error message
    email: (input) => {
        if (!input) {
            return localize('Email is required')
        } else if (!validation_regex.email.test(input)) {
            return localize('Invalid email address')
        } else {
            return null
        }
    },

    symbol: (input) => {
        if (!input || input.displayName === 'Please select a value') {
            return localize('Symbol is required')
        } else {
            return null
        }
    },

    volume: (input) => {
        if (!input) {
            return localize('Volume is required')
        } else if (!validation_regex.volume.test(input)) {
            return localize('Invalid volume input [0 - 9]')
        } else {
            return null
        }
    },

    assetPrice: (input) => {
        if (!input) {
            return localize('Asset price is required')
        } else if (!validation_regex.assetPrice.test(input)) {
            return localize('Invalid asset price input [0 - 9]')
        } else {
            return null
        }
    },

    leverage: (input) => {
        if (!input || input.displayName === 'Please select a value') {
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
        } else if (!validation_regex.pointValue.test(input)) {
            return localize('Invalid point value input [0 - 9]')
        } else {
            return null
        }
    },
}

export default validation
