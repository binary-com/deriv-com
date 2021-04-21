import validation from './_validation'

const STEPINDEX_VALUE = 100
const RANGEBREAK100VALUE = 400
const RANGEBREAK200VALUE = 800
const STEP_INDEX_TEXT = 'Step Index'
const RANGE_BREAK_100_TEXT = 'Range Break 100 Index'
const RANGE_BREAK_200_TEXT = 'Range Break 200 Index'

const rawCalculation = (values, specialFormula) => {
    const { symbol, volume } = values
    let formula

    if (symbol.name === STEP_INDEX_TEXT) {
        formula = volume * STEPINDEX_VALUE
    } else if (symbol.name === RANGE_BREAK_100_TEXT) {
        formula = volume * RANGEBREAK100VALUE
    } else if (symbol.name === RANGE_BREAK_200_TEXT) {
        formula = volume * RANGEBREAK200VALUE
    } else {
        formula = specialFormula
    }
    return formula
}

const getMargin = (values) => {
    const { volume, assetPrice, leverage, contractSize } = values
    const specialFormula = (volume * contractSize * assetPrice) / leverage.name
    let margin_formula = rawCalculation(values, specialFormula)
    return toFixed(margin_formula)
}

const getPipValue = (values) => {
    const { volume, pointValue, contractSize } = values
    const specialFormula = volume * contractSize * pointValue
    let pip_formula = rawCalculation(values, specialFormula)

    return toFixed(pip_formula)
}

const getSwapChargeSynthetic = (values) => {
    const { volume, assetPrice, swapRate, contractSize } = values
    const specialFormula = (swap_formula_synthetic =
        (volume * contractSize * assetPrice * (swapRate / 100)) / 360)
    let swap_formula_synthetic = rawCalculation(values, specialFormula)

    return toFixed(swap_formula_synthetic)
}

const getSwapChargeForex = (values) => {
    const { volume, pointValue, swapRate, contractSize } = values
    const swap_formula_forex = volume * contractSize * pointValue * swapRate
    return toFixed(swap_formula_forex)
}

const getStopLossLevel = (values) => {
    let { assetPrice, stopLossAmount, volume, contractSize } = values
    assetPrice = Number(assetPrice)
    stopLossAmount = Number(stopLossAmount)
    const stop_loss_level_formula = assetPrice + stopLossAmount / (volume * contractSize)
    return toFixed(stop_loss_level_formula)
}

const getTakeProfitLevel = (values) => {
    let { assetPrice, takeProfitAmount, volume, contractSize } = values
    assetPrice = Number(assetPrice)
    takeProfitAmount = Number(takeProfitAmount)
    const take_profit_level_formula = assetPrice + takeProfitAmount / (volume * contractSize)
    return toFixed(take_profit_level_formula)
}

const getStopLossPip = (values) => {
    let { assetPrice, stopLossLevel, pointValue } = values
    assetPrice = Number(assetPrice)
    stopLossLevel = Number(stopLossLevel)
    const stop_loss_pip_formula = (stopLossLevel - assetPrice) / pointValue
    return toFixed(stop_loss_pip_formula)
}

const getTakeProfitPip = (values) => {
    let { assetPrice, takeProfitLevel, pointValue } = values
    assetPrice = Number(assetPrice)
    takeProfitLevel = Number(takeProfitLevel)
    const take_profit_pip_formula = (takeProfitLevel - assetPrice) / pointValue
    return toFixed(take_profit_pip_formula)
}

const toFixed = (val) => {
    return parseFloat(val.toFixed(3)).toLocaleString()
}

const getCurrency = (symbol) => {
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

const resetValidationCommon = (values) => {
    const errors = {}

    const symbol_error = validation.symbol(values.symbol)
    const volume_error = validation.volume(values.volume)

    if (symbol_error) {
        errors.symbol = symbol_error
    }
    if (volume_error) {
        errors.volume = volume_error
    }
    return errors
}

const resetValidationMargin = (values) => {
    const errors = {}
    const assetPrice_error = validation.assetPrice(values.assetPrice)
    const leverage_error = validation.leverage(values.leverage)

    resetValidationCommon(values)

    if (assetPrice_error) {
        errors.assetPrice = assetPrice_error
    }
    if (leverage_error) {
        errors.leverage = leverage_error
    }
    return errors
}

const resetValidationPip = (values) => {
    const errors = {}
    const pointValue_error = validation.pointValue(values.pointValue)

    resetValidationCommon(values)

    if (pointValue_error) {
        errors.pointValue = pointValue_error
    }

    return errors
}

const resetValidationPnlMargin = (values) => {
    const errors = {}
    const pointValue_error = validation.pointValue(values.pointValue)
    const assetPrice_error = validation.assetPrice(values.assetPrices)
    const takeProfitAmount_error = validation.takeProfitAmount(values.takeProfitAmount)
    const stopLossAmount_error = validation.stopLossAmount(values.stopLossAmount)

    resetValidationCommon(values)

    if (pointValue_error) {
        errors.pointValue = pointValue_error
    }
    if (assetPrice_error) {
        errors.assetPrice = assetPrice_error
    }
    if (takeProfitAmount_error) {
        errors.takeProfitAmount = takeProfitAmount_error
    }
    if (stopLossAmount_error) {
        errors.stopLossAmount = stopLossAmount_error
    }
}

const resetValidationSynthetic = (values) => {
    const errors = {}
    const assetPrice_error = validation.assetPrice(values.assetPrice)
    const swapRate_error = validation.swapRate(values.swapRate)

    resetValidationCommon(values)
    if (assetPrice_error) {
        errors.assetPrice = assetPrice_error
    }
    if (swapRate_error) {
        errors.swapRate = swapRate_error
    }
    return errors
}

const resetValidationForex = (values) => {
    const errors = {}
    const pointValue_error = validation.pointValue(values.pointValue)
    const swapRate_error = validation.swapRate(values.swapRate)

    resetValidationCommon(values)
    if (pointValue_error) {
        errors.pointValue = pointValue_error
    }
    if (swapRate_error) {
        errors.swapRate = swapRate_error
    }
    return errors
}

const numberWithCommas = (input) => {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const numberSubmitFormat = (input) => {
    return input.replace(/^0+(?!\.|$)/, '')
}

const numberSubmitFormatNegative = (input) => {
    let result = input.replace(/^(-?)0+/, '$1')

    if (result.charAt(0) == '-' && result.charAt(1) == '.') {
        result = result.slice(0, 1) + '0' + result.slice(1)
    } else if (result.charAt(0) == '.') {
        result = '0' + result
    }
    return result
}

export {
    getMargin,
    getSwapChargeSynthetic,
    getPipValue,
    getStopLossLevel,
    getStopLossPip,
    getSwapChargeForex,
    getTakeProfitLevel,
    getTakeProfitPip,
    resetValidationPip,
    resetValidationSynthetic,
    resetValidationForex,
    resetValidationMargin,
    resetValidationPnlMargin,
    getCurrency,
    getContractSize,
    numberSubmitFormatNegative,
    numberWithCommas,
    numberSubmitFormat,
    toFixed,
}
