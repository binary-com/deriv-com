import validation from './_validation';

const getMargin = (values) => {
    const { symbol, volume, pointValue, contractSize } = values
    let margin_formula
    const STEPINDEX_VALUE = 100
    const RANGEBREAK100VALUE = 400
    const RANGEBREAK200VALUE = 800

    if (symbol.name === 'Step Index') {
        margin_formula = volume * STEPINDEX_VALUE
    } else if (symbol.name === 'Range Break 100 Index') {
        margin_formula = volume * RANGEBREAK100VALUE
    } else if (symbol.name === 'Range Break 200 Index') {
        margin_formula = volume * RANGEBREAK200VALUE
    } else {
        margin_formula = volume * contractSize * pointValue
    }

    return toFixed(margin_formula)
}

const toFixed = (val) => {
    return parseFloat(val.toFixed(3)).toLocaleString()
}

const resetValidation = (values) => {
    const errors = {}
    const symbol_error = validation.symbol(values.symbol)
    const volume_error = validation.volume(values.volume)
    const pointValue_error = validation.pointValue(values.pointValue)

    if (symbol_error) {
        errors.symbol = symbol_error
    }
    if (volume_error) {
        errors.volume = volume_error
    }
    if (pointValue_error) {
        errors.pointValue = pointValue_error
    }

    return errors
}

const getMarginCurrency = (symbol) => {
    let currency = 'USD'

    if (symbol.name === 'DAX_30') {
        currency = 'EUR'
    }

    if (symbol.market === 'forex' && symbol.name !== 'default' && symbol.name !== 'CL_BRENT') {
        currency = symbol.display_name.slice(-3)
    }

    return currency
}

const getContractSize = (symbol) => {
    let contractSize = 1 //crypto falls into this contract size

    if (symbol.market === 'forex') {
        contractSize = 100000
    }

    if (symbol.market === 'commodities') {
        switch (symbol.name) {
            case 'XAGUSD':
                contractSize = 5000
                break
            case 'XAUUSD':
            case 'XPDUSD':
            case 'XPTUSD':
                contractSize = 100
                break
        }
    }

    if (symbol.name === 'Step Index') {
        contractSize = 10
    }

    if (symbol.market === 'smartfx') {
        contractSize = 100
    }

    return contractSize
}

const numberWithCommas = (input) => {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const numberSubmitFormat = (input) => {
    return input.replace(/^0+(?!\.|$)/, '')
}

export {
    getMargin,
    resetValidation,
    getMarginCurrency,
    getContractSize,
    numberWithCommas,
    numberSubmitFormat,
    toFixed,
}
