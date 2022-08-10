import validation from './_validation'

type ErrorsType = {
    errors?: null
    symbol?: string
    volume?: string
    assetPrice?: string
    leverage?: string
    pointValue?: string
    takeProfitAmount?: string
    stopLossAmount?: string
    commission?: string
    stake?: string
    multiplier?: string
    takeProfitLevel?: string
    stopLossLevel?: string
    swapRate?: string
}

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

export const getMargin = (values) => {
    const { volume, assetPrice, leverage, contractSize } = values
    const specialFormula = (volume * contractSize * assetPrice) / leverage.name
    const margin_formula = rawCalculation(values, specialFormula)
    return toFixed(margin_formula)
}

export const getPipValue = (values) => {
    const { volume, pointValue, contractSize } = values
    const specialFormula = volume * contractSize * pointValue
    const pip_formula = rawCalculation(values, specialFormula)

    return toFixed(pip_formula)
}

export const getSwapChargeSynthetic = (values) => {
    const { volume, assetPrice, swapRate, contractSize } = values
    const specialFormula = (volume * contractSize * assetPrice * (swapRate / 100)) / 360
    const swap_formula_synthetic = rawCalculation(values, specialFormula)

    return toFixed(swap_formula_synthetic)
}

export const getSwapChargeForex = (values) => {
    const { volume, pointValue, swapRate, contractSize } = values
    const swap_formula_forex = volume * contractSize * pointValue * swapRate
    return toFixed(swap_formula_forex)
}

// PnL Margin Calculator
export const getPnlMarginCommon = (values, action) => {
    const { volume, contractSize, pointValue } = values
    let { assetPrice, stopLossAmount, takeProfitAmount, stopLossLevel } = values
    assetPrice = Number(assetPrice)
    stopLossAmount = Number(stopLossAmount)
    takeProfitAmount = Number(takeProfitAmount)
    stopLossLevel = Number(numberWithoutCommas(stopLossLevel))

    switch (action) {
        case 'getStopLossLevelSell': {
            const stop_loss_level_formula = assetPrice - -[stopLossAmount / (volume * contractSize)]
            return toFixed(stop_loss_level_formula)
        }
        case 'getTakeProfitLevelSell': {
            const take_profit_level_formula =
                assetPrice - takeProfitAmount / (volume * contractSize)
            return toFixed(take_profit_level_formula)
        }
        case 'getStopLossLevelBuy': {
            const stop_loss_level_formula = assetPrice + [-stopLossAmount / (volume * contractSize)]
            return toFixed(stop_loss_level_formula)
        }
        case 'getTakeProfitLevelBuy': {
            const take_profit_level_formula =
                assetPrice + takeProfitAmount / (volume * contractSize)
            return toFixed(take_profit_level_formula)
        }
        case 'getStopLossPip': {
            const stop_loss_pip_formula = Math.abs(stopLossLevel - assetPrice) / pointValue
            return toFixed(stop_loss_pip_formula)
        }
        case 'getTakeProfitPip': {
            const take_profit_pip_formula = Math.abs(stopLossLevel - assetPrice) / pointValue
            return toFixed(take_profit_pip_formula)
        }
    }
}

// PnL Multipliers Calculator
export const getPnlMultiplierCommon = (values, action) => {
    const { stake, multiplier } = values
    let {
        assetPrice,
        stopLossAmount,
        takeProfitAmount,
        takeProfitLevel,
        stopLossLevel,
        commission,
    } = values
    stopLossAmount = Number(stopLossAmount)
    takeProfitAmount = Number(takeProfitAmount)
    commission = Number(commission)
    takeProfitLevel = Number(takeProfitLevel)
    assetPrice = Number(assetPrice)
    stopLossLevel = Number(stopLossLevel)

    switch (action) {
        case 'getStopLossLevelUp': {
            const middle_portion_formula =
                (toNegative(stopLossAmount) + commission) / (stake * multiplier)
            const stop_loss_level_up_formula = assetPrice * (middle_portion_formula + 1)
            return toFixed(stop_loss_level_up_formula)
        }
        case 'getTakeProfitLevelUp': {
            const middle_portion_formula =
                (toNegative(takeProfitAmount) + commission) / (stake * multiplier)
            const take_profit_level_up_formula = assetPrice * (middle_portion_formula + 1)
            return toFixed(take_profit_level_up_formula)
        }
        case 'getStopLossLevelDown': {
            const middle_portion_formula =
                (toNegative(stopLossAmount) - commission) / (stake * multiplier)
            const stop_loss_level_down_formula = assetPrice * (middle_portion_formula + 1)
            return toFixed(stop_loss_level_down_formula)
        }
        case 'getTakeProfitLevelDown': {
            const middle_portion_formula =
                (toNegative(takeProfitAmount) - commission) / (stake * multiplier)
            const take_profit_level_down_formula = assetPrice * (middle_portion_formula + 1)
            return toFixed(take_profit_level_down_formula)
        }
        case 'getTakeProfitAmountUp': {
            const middle_portion_formula =
                ((takeProfitLevel - assetPrice) / assetPrice) * multiplier
            const calculation = stake * middle_portion_formula - commission
            const take_profit_amount_up_formula = Math.max(calculation, toNegative(stake))
            return toFixed(take_profit_amount_up_formula)
        }
        case 'getStopLossAmountUp': {
            const middle_portion_formula = ((stopLossLevel - assetPrice) / assetPrice) * multiplier
            const calculation = stake * middle_portion_formula - commission
            const stop_loss_amount_up_formula = Math.max(calculation, toNegative(stake))
            return toFixed(stop_loss_amount_up_formula)
        }
        case 'getStopLossAmountDown': {
            const middle_portion_formula =
                ((-1 * (stopLossLevel - assetPrice)) / assetPrice) * multiplier
            const calculation = stake * middle_portion_formula - commission
            const stop_loss_amount_down_formula = Math.max(calculation, toNegative(stake))
            return toFixed(stop_loss_amount_down_formula)
        }
        case 'getTakeProfitAmountDown': {
            const middle_portion_formula =
                ((-1 * (takeProfitLevel - assetPrice)) / assetPrice) * multiplier
            const calculation = stake * middle_portion_formula - commission
            const stop_loss_amount_down_formula = Math.max(calculation, toNegative(stake))
            return toFixed(stop_loss_amount_down_formula)
        }
    }
}

// Utilities
export const toFixed = (val) => {
    return parseFloat(val.toFixed(3)).toLocaleString()
}

const toNegative = (val) => {
    return Math.abs(val) * -1
}

export const getCurrency = (symbol) => {
    let currency = 'USD'

    if (symbol.name === 'DAX_30') {
        currency = 'EUR'
    }
    if (symbol.market === 'forex' && symbol.name !== 'default' && symbol.name !== 'CL_BRENT') {
        currency = symbol.display_name.slice(-3)
    }
    return currency
}

export const getContractSize = (symbol) => {
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
    if (symbol.market === 'basket_indices') {
        contractSize = 100
    }
    return contractSize
}

// Reset Validations
export const resetValidationMargin = (values) => {
    const errors: ErrorsType = {}
    const assetPrice_error = validation.assetPrice(values.assetPrice)
    const leverage_error = validation.leverage(values.leverage)
    const symbol_error = validation.symbol(values.symbol)
    const volume_error = validation.volume(values.volume)

    if (symbol_error) {
        errors.symbol = symbol_error
    }
    if (volume_error) {
        errors.volume = volume_error
    }
    if (assetPrice_error) {
        errors.assetPrice = assetPrice_error
    }
    if (leverage_error) {
        errors.leverage = leverage_error
    }
    return errors
}

export const resetValidationPip = (values) => {
    const errors: ErrorsType = {}
    const pointValue_error = validation.pointValue(values.pointValue)
    const symbol_error = validation.symbol(values.symbol)
    const volume_error = validation.volume(values.volume)

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

export const resetValidationPnlMargin = (values) => {
    const errors: ErrorsType = {}
    const pointValue_error = validation.pointValue(values.pointValue)
    const assetPrice_error = validation.assetPrice(values.assetPrice)
    const takeProfitAmount_error = validation.takeProfitAmount(values.takeProfitAmount)
    const stopLossAmount_error = validation.stopLossAmount(values.stopLossAmount)
    const symbol_error = validation.symbol(values.symbol)
    const volume_error = validation.volume(values.volume)

    if (symbol_error) {
        errors.symbol = symbol_error
    }
    if (volume_error) {
        errors.volume = volume_error
    }
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
    return errors
}

export const resetValidationPnlMultipliersLevel = (values) => {
    const errors: ErrorsType = {}
    const assetPrice_error = validation.assetPrice(values.assetPrice)
    const takeProfitAmount_error = validation.takeProfitAmount(values.takeProfitAmount)
    const stopLossAmount_error = validation.stopLossAmount(values.stopLossAmount)
    const commission_error = validation.commission(values.commission)
    const stake_error = validation.stake(values.stake)
    const multiplier_error = validation.multiplier(values.multiplier)

    if (commission_error) {
        errors.commission = commission_error
    }
    if (stake_error) {
        errors.stake = stake_error
    }
    if (multiplier_error) {
        errors.multiplier = multiplier_error
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
    return errors
}

export const resetValidationPnlMultipliersAmount = (values) => {
    const errors: ErrorsType = {}
    const assetPrice_error = validation.assetPrice(values.assetPrice)
    const takeProfitLevel_error = validation.takeProfitLevel(values.takeProfitLevel)
    const stopLossLevel_error = validation.stopLossLevel(values.stopLossLevel)
    const commission_error = validation.commission(values.commission)
    const stake_error = validation.stake(values.stake)
    const multiplier_error = validation.multiplier(values.multiplier)

    if (commission_error) {
        errors.commission = commission_error
    }
    if (stake_error) {
        errors.stake = stake_error
    }
    if (multiplier_error) {
        errors.multiplier = multiplier_error
    }
    if (assetPrice_error) {
        errors.assetPrice = assetPrice_error
    }
    if (takeProfitLevel_error) {
        errors.takeProfitLevel = takeProfitLevel_error
    }
    if (stopLossLevel_error) {
        errors.stopLossLevel = stopLossLevel_error
    }
    return errors
}

export const resetValidationSynthetic = (values) => {
    const errors: ErrorsType = {}
    const assetPrice_error = validation.assetPrice(values.assetPrice)
    const swapRate_error = validation.swapRate(values.swapRate)
    const symbol_error = validation.symbol(values.symbol)
    const volume_error = validation.volume(values.volume)

    if (symbol_error) {
        errors.symbol = symbol_error
    }
    if (volume_error) {
        errors.volume = volume_error
    }
    if (assetPrice_error) {
        errors.assetPrice = assetPrice_error
    }
    if (swapRate_error) {
        errors.swapRate = swapRate_error
    }
    return errors
}

export const resetValidationForex = (values) => {
    const errors: ErrorsType = {}
    const pointValue_error = validation.pointValue(values.pointValue)
    const swapRate_error = validation.swapRate(values.swapRate)
    const symbol_error = validation.symbol(values.symbol)
    const volume_error = validation.volume(values.volume)

    if (symbol_error) {
        errors.symbol = symbol_error
    }
    if (volume_error) {
        errors.volume = volume_error
    }
    if (pointValue_error) {
        errors.pointValue = pointValue_error
    }
    if (swapRate_error) {
        errors.swapRate = swapRate_error
    }
    return errors
}

export const numberWithoutCommas = (input) => {
    return input.toString().replace(/,/g, '')
}

export const numberSubmitFormat = (input) => {
    return input.replace(/^0+(?!\.|$)/, '')
}

export const numberSubmitFormatNegative = (input) => {
    let result = input.replace(/^(-?)0+/, '$1')

    if (result.charAt(0) == '-' && result.charAt(1) == '.') {
        result = result.slice(0, 1) + '0' + result.slice(1)
    } else if (result.charAt(0) == '.') {
        result = '0' + result
    }
    return result
}

export const getMaxLength = (input_field, input_length) =>
    input_field?.includes('.') ? (input_length + 1).toString() : input_length.toString()
